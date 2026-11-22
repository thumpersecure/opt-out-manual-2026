# Security

Privacy Shield is a static page: no server, no accounts, no analytics. People use it while handling their own personal data, so mistakes here matter.

## Reporting a problem

Please report security issues privately through **[Report a vulnerability](https://github.com/thumpersecure/opt-out-manual-2026/security/advisories/new)** (Security tab → Advisories) rather than a public issue.

Worth reporting:

- A listed opt-out link that now points somewhere it shouldn't (expired or re-registered domain, phishing page, wrong company).
- Any way to get the app to run script, load a third-party resource, or send data off the device.
- A way for an imported backup file to do anything other than restore checklist progress.

A dead or outdated link that is merely broken can go in a normal issue or pull request.

## How the app is protected

- **Strict Content-Security-Policy**: only this site's own scripts and styles load; no inline script, no third-party requests.
- **Nothing leaves your device**: progress lives in your browser's localStorage. Export is a file you save yourself.
- **No referrer**: links to data brokers open without telling them which page you came from.
- **Site data is treated as untrusted**: every value from `docs/data.js` is escaped, ids are allow-listed and only `http(s)` links are rendered. `tools/validate-data.mjs` runs on every pull request.
- **Backups are validated on import**: only recognised checklist keys are kept.
- **Framing is refused**, so the page can't be embedded in another site to trick clicks.

## For contributors

Run `node tools/validate-data.mjs` before opening a pull request that touches `docs/data.js`. Opt-out links must be `https://`.
