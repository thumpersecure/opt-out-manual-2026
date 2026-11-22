#!/usr/bin/env node
// Validates docs/data.js. Run locally with `node tools/validate-data.mjs`;
// CI runs it on every pull request.
//
// The app treats this file as untrusted (it accepts outside contributions), and
// this check is the second layer: it rejects entries that could carry script,
// odd link schemes, duplicate ids, or unknown fields before they are merged.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const file = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs', 'data.js');
const source = fs.readFileSync(file, 'utf8');

const ID_RE = /^[a-z0-9-]{1,64}$/;
const DOMAIN_RE = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[a-z0-9._~\/-]*)?$/i;
const SCHEME_RE = /^[a-z][a-z0-9+.-]*:/i;
const DANGEROUS_RE = /<\s*\/?\s*(script|iframe|img|svg|object|embed|link|style)\b|javascript:|data:text|vbscript:|\son\w+\s*=/i;
const CATEGORIES = ['B2B', 'AD', 'MKT', 'FIN', 'GOV', 'LOC', 'HR', 'ID', 'PROP', 'PUB', 'OTHER'];

const SHAPES = {
  mainSites: {
    id: 'id', name: 'text', domain: 'domain', difficulty: ['easy', 'medium', 'hard'], time: 'text',
    needsEmail: 'bool', needsId: 'bool', optOutUrl: 'https', note: 'text?', steps: 'steps'
  },
  additionalSites: {
    id: 'id', name: 'text', domain: 'domain', optOutUrl: 'https-or-text', method: 'text', notes: 'text?', priority: 'bool'
  },
  dataBrokerSites: {
    id: 'id', name: 'text', website: 'domain', category: CATEGORIES, optOutMethod: 'text', processingTime: 'text?', notes: 'text?', priority: 'bool'
  }
};

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);

let data;
try {
  const sandbox = {};
  vm.runInNewContext(source + '\n;this.__data = SITE_DATA;', sandbox, { timeout: 2000 });
  data = JSON.parse(JSON.stringify(sandbox.__data));
} catch (e) {
  console.error('data.js could not be loaded: ' + e.message);
  process.exit(1);
}

function isHttps(value) {
  try { return new URL(value).protocol === 'https:'; } catch { return false; }
}

function checkText(where, value, optional) {
  if (typeof value !== 'string') return fail(where, 'must be a string');
  if (!optional && !value.trim()) return fail(where, 'must not be empty');
  if (value.length > 1500) fail(where, 'is longer than 1500 characters');
  if (DANGEROUS_RE.test(value)) fail(where, 'contains markup or a script-like pattern');
}

const seen = new Map();

for (const [section, shape] of Object.entries(SHAPES)) {
  const list = data[section];
  if (!Array.isArray(list)) { fail(section, 'must be an array'); continue; }
  list.forEach((site, index) => {
    const where = `${section}[${index}]${site && site.id ? ' (' + site.id + ')' : ''}`;
    if (!site || typeof site !== 'object' || Array.isArray(site)) return fail(where, 'must be an object');
    for (const key of Object.keys(site)) if (!(key in shape)) fail(where, `unknown field "${key}"`);
    for (const [key, rule] of Object.entries(shape)) {
      const value = site[key];
      const at = `${where}.${key}`;
      if (value === undefined) { fail(at, 'is missing'); continue; }
      if (Array.isArray(rule)) { if (!rule.includes(value)) fail(at, `must be one of ${rule.join(', ')}`); }
      else if (rule === 'id') {
        if (typeof value !== 'string' || !ID_RE.test(value)) fail(at, 'must match [a-z0-9-]{1,64}');
        else if (seen.has(value)) fail(at, `duplicates the id used in ${seen.get(value)}`);
        else seen.set(value, section);
      }
      else if (rule === 'bool') { if (typeof value !== 'boolean') fail(at, 'must be true or false'); }
      else if (rule === 'domain') { if (typeof value !== 'string' || !DOMAIN_RE.test(value)) fail(at, 'must be a domain such as example.com (no https://)'); }
      else if (rule === 'https') { if (!isHttps(value)) fail(at, 'must be an https:// URL'); }
      else if (rule === 'https-or-text') {
        if (typeof value !== 'string') fail(at, 'must be a string');
        else if (SCHEME_RE.test(value)) { if (!isHttps(value)) fail(at, 'links must be https:// URLs'); }
        else checkText(at, value, false);
      }
      else if (rule === 'steps') {
        if (!Array.isArray(value) || !value.length) fail(at, 'must be a non-empty list of steps');
        else value.forEach((step, i) => checkText(`${at}[${i}]`, step, false));
      }
      else checkText(at, value, rule === 'text?');
    }
  });
}

for (const key of ['quickStart', 'beforeYouBegin', 'proTips']) {
  if (!Array.isArray(data[key])) fail(key, 'must be an array');
  else data[key].forEach((t, i) => { if (typeof t !== 'string' || /<\s*\/?\s*(script|iframe|img|svg)\b|javascript:/i.test(t)) fail(`${key}[${i}]`, 'must be plain text'); });
}

if (errors.length) {
  console.error(`data.js has ${errors.length} problem(s):\n` + errors.map(e => '  - ' + e).join('\n'));
  process.exit(1);
}

const counts = Object.keys(SHAPES).map(k => data[k].length);
console.log(`data.js OK: ${counts.join(' + ')} = ${counts.reduce((a, b) => a + b, 0)} sites, ${seen.size} unique ids`);
