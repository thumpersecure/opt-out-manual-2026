# Privacy Shield - Opt-Out Checklist and Web App

> An interactive web app to track your progress removing personal info from 442+ people-search and data broker sites.

🫆 https://thumpersecure.github.io/opt-out-manual-2026/



> Download PDF

📃 https://github.com/thumpersecure/opt-out-manual-2026/blob/main/2026_Opt-out_Guide_PDF.pdf

## Features

- **442+ sites** organized into three sections: 30 detailed main sites, 155 additional sites, 257 data brokers
- **Interactive checklist** with step-by-step instructions for each main site
- **Progress tracking** saved locally in your browser (no account needed)
- **Export / Import** your progress as a JSON file to back up or transfer between devices
- **Search and filter** by name, difficulty, category, or completion status
- **Mobile optimized** with touch-friendly design and iOS safe area support
- **Add to Home Screen** works as a standalone iOS/Android web app (PWA)
- **Daily reminder** setup guide for iOS Shortcuts automation at 12:00 PM
- **Offline support** via service worker caching
- **Dark theme** easy on the eyes during long opt-out sessions
- **Email template** ready-to-copy removal request for sites that need email

## Quick Start

1. Open the app in Safari (iOS) or Chrome (Android)
2. Add to Home Screen for the best experience
3. Start with **Priority Sites** on the Dashboard - these upstream brokers feed many smaller sites
4. Work through Main Sites first (they have detailed step-by-step guides)
5. Move on to Additional Sites and Data Brokers
6. Export your progress regularly from Settings

## How It Works

### Sections

| Section | Sites | Description |
|---------|------:|-------------|
| Main Sites | 30 | Detailed step-by-step opt-out instructions |
| Additional Sites | 155 | People search and data broker opt-outs |
| Data Brokers | 257 | B2B, ad-tech, marketing, finance, and more |

### Priority Sites

Start with these high-impact upstream data brokers first. Removing your info here can cause it to disappear from dozens of downstream sites:

- **Acxiom** - Major data broker feeding many smaller sites
- **Data Axle** - Major data aggregator (formerly InfoUSA/Infogroup)
- **Epsilon** - Major marketing data company with multiple divisions
- **Infotracer** - Major data aggregator
- **LexisNexis** - Massive data aggregator
- **Equifax** - Major credit bureau
- **TheWorkNumber** - Employment/income verification (670M+ records)

### Data Management

Your checklist progress is stored in your browser's localStorage. To protect your data:

- **Export** regularly from Settings > Export Progress
- **Import** on a new device from Settings > Import Progress
- **Reset** all progress from Settings > Reset All Progress

### iOS Home Screen App

1. Open in Safari
2. Tap Share > Add to Home Screen
3. The app runs in standalone mode with no browser chrome

### Daily Reminder

Set up a daily noon reminder via iOS Shortcuts:

1. Create a shortcut that opens this app's URL
2. Add a Time of Day automation at 12:00 PM
3. Link it to your shortcut

Full instructions are in Settings > Daily Reminder.

## Tech Stack

- Vanilla HTML/CSS/JavaScript (no frameworks, no build step)
- Progressive Web App with service worker
- localStorage for state persistence
- GitHub Pages for hosting

## Privacy

This app collects no data. Everything runs locally in your browser. There are no analytics, no tracking, no cookies, and no server calls. Your progress data never leaves your device unless you explicitly export it.

## License

[The Unlicense](LICENSE) - Public Domain


https://raw.githubusercontent.com/thumpersecure/opt-out-manual-2026/refs/heads/main/The.Manual.md


# 🛡️ Opt-Out Guide (People Search / Data Broker Sites)

> A visual, step-by-step guide to remove your info from common people-search sites.

## 🚀 Quick Start

1. Find your profile on the site (search your name + city/state).
1. Copy the exact profile URL.
1. Use the site’s opt-out page and submit removal.
1. Confirm via email/phone if required.
1. Re-check in 24–72 hours and repeat if multiple listings appear.

## ✅ Before You Begin (Checklist)

- [ ] Use a fresh browser tab (incognito/private helps).
- [ ] Have your email ready (some sites require confirmation).
- [ ] Keep a notes file with: site + profile URL + date submitted.
- [ ] If you’re listed multiple times, you usually must remove each listing separately.

## 🧰 Pro Tips

- 🧠 Search smarter: try `"First Last" + city` and also just phone number.
- 🧹 Clear cookies or use private mode if the site loops or blocks.
- 🔁 Set a reminder to re-check in 7–14 days (some sites republish).
- 📸 Screenshot confirmations for your records.

## 🧾 Email Template (when a site needs contact-form/email)

Subject: Request for Removal of Personal Information

Hello,

Please remove my personal information from your site.

Record/Profile URL: <PASTE URL>
Name: <YOUR NAME>
Location: <CITY, STATE>

Thank you,
<YOUR NAME>

## 🗂️ Master Index (31 sites)

|Site                                        |Difficulty|Time           |Needs Email?|Needs ID?|Opt-Out Link                                   |
|--------------------------------------------|---------:|--------------:|-----------:|--------:|-----------------------------------------------|
|**Addresses.com** (addresses.com)           |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://www.addresses.com/optout               |
|**BeenVerified** (beenverified.com)         |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://www.beenverified.com/app/optout/search |
|**CheckPeople** (checkpeople.com)           |🟢 Easy    |⏱️ 5-10 minutes |📧           |—        |https://www.checkpeople.com/opt-out            |
|**CocoFinder** (cocofinder.com)             |🟢 Easy    |⏱️ 5-10 minutes |📧           |—        |https://cocofinder.com/optOut                  |
|**FastPeopleSearch** (fastpeoplesearch.com) |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://www.fastpeoplesearch.com/removal       |
|**FamilyTreeNow** (familytreenow.com)       |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://www.familytreenow.com/optout           |
|**GoLookup** (golookup.com)                 |🟢 Easy    |⏱️ 5-10 minutes |📧           |—        |https://golookup.com/remove-my-info            |
|**ID Crawl** (idcrawl.com)                  |🟢 Easy    |⏱️ 5-10 minutes |📧           |—        |https://www.idcrawl.com/optout                 |
|**Instant Checkmate** (instantcheckmate.com)|🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://www.instantcheckmate.com/opt-out/      |
|**Intelius** (intelius.com)                 |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://www.intelius.com/opt-out/              |
|**MyLife** (mylife.com)                     |🟡 Medium  |⏱️ 10-20 minutes|📧           |—        |https://www.mylife.com/opt-out                 |
|**Nuwber** (nuwber.com)                     |🟢 Easy    |⏱️ 5-10 minutes |📧           |—        |https://nuwber.com/removal/link                |
|**OfficialUSA** (officialusa.com)           |🟡 Medium  |⏱️ 10-20 minutes|📧           |—        |https://www.officialusa.com/remove             |
|**PeekYou** (peekyou.com)                   |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://www.peekyou.com/about/contact/optout   |
|**PeopleLooker** (peoplelooker.com)         |🟡 Medium  |⏱️ 10 minutes   |📧           |—        |https://www.peoplelooker.com/opt-out           |
|**PeopleSearchNow** (peoplesearchnow.com)   |🟢 Easy    |⏱️ 5-10 minutes |📧           |—        |https://peoplesearchnow.com/opt-out            |
|**PublicRecordsNow** (publicrecordsnow.com) |🟡 Medium  |⏱️ 10-20 minutes|📧           |—        |https://www.publicrecordsnow.com/optout        |
|**Radaris** (radaris.com)                   |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://radaris.com/page/how-to-remove         |
|**SearchPeopleFree** (searchpeoplefree.com) |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://www.searchpeoplefree.com/opt-out       |
|**Social Catfish** (socialcatfish.com)      |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://socialcatfish.com/opt-out/             |
|**Spokeo** (spokeo.com)                     |🟢 Easy    |⏱️ 5-10 minutes |📧           |—        |https://www.spokeo.com/optout                  |
|**SpyFly** (spyfly.com)                     |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://www.spyfly.com/optout                  |
|**That’s Them** (thatsthem.com)             |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://thatsthem.com/opt-out                  |
|**TruePeopleSearch** (truepeoplesearch.com) |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://www.truepeoplesearch.com/removal       |
|**TruthFinder** (truthfinder.com)           |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://www.truthfinder.com/opt-out/           |
|**US Identify** (usidentify.com)            |🟡 Medium  |⏱️ 10-20 minutes|📧           |—        |https://www.usidentify.com/optout              |
|**US Phonebook** (usphonebook.com)          |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://www.usphonebook.com/opt-out            |
|**US Search** (ussearch.com)                |🟡 Medium  |⏱️ 10-15 minutes|📧           |—        |https://www.ussearch.com/consumer/optout       |
|**VoterRecords** (voterrecords.com)         |🟡 Medium  |⏱️ 10-20 minutes|📧           |—        |https://voterrecords.com/contact               |
|**Whitepages** (whitepages.com)             |🟢 Easy    |⏱️ 5-10 minutes |—           |—        |https://www.whitepages.com/suppression_requests|


-----

## 🧭 Step-by-Step by Site

<details>
<summary>🔎 <strong>Addresses.com</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `addresses.com`  
**Opt-Out:** https://www.addresses.com/optout  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit addresses.com/optout
- [ ] Search for your record using your name and location
- [ ] Select your record from the search results
- [ ] Follow the prompts to request removal
- [ ] Enter your email address if requested
- [ ] Confirm the request via email if required
- [ ] Check back in a few days to ensure it’s removed

</details>

<details>
<summary>🔎 <strong>BeenVerified</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `beenverified.com`  
**Opt-Out:** https://www.beenverified.com/app/optout/search  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit the BeenVerified opt-out page
- [ ] Search for your record by name and location
- [ ] Select the matching listing
- [ ] Submit the opt-out request
- [ ] Check your email for confirmation
- [ ] Confirm the request if prompted
- [ ] Removal can take several days

</details>

<details>
<summary>🔎 <strong>CheckPeople</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `checkpeople.com`  
**Opt-Out:** https://www.checkpeople.com/opt-out  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit checkpeople.com/opt-out
- [ ] Search for your record using your name
- [ ] Select your record from the results
- [ ] Click the opt-out/remove link
- [ ] Enter your email address
- [ ] Confirm the request via email if required
- [ ] Wait for removal confirmation

</details>

<details>
<summary>🔎 <strong>CocoFinder</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `cocofinder.com`  
**Opt-Out:** https://cocofinder.com/optOut  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit cocofinder.com/optOut
- [ ] Search for your listing
- [ ] Select your record
- [ ] Submit the opt-out request
- [ ] Confirm via email if prompted
- [ ] Check back later to verify removal

</details>

<details>
<summary>🔎 <strong>FastPeopleSearch</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `fastpeoplesearch.com`  
**Opt-Out:** https://www.fastpeoplesearch.com/removal  
**Requirements:** No email required • No ID required

### ✅ Steps

- [ ] Find your record on fastpeoplesearch.com
- [ ] Copy the URL of your record
- [ ] Go to fastpeoplesearch.com/removal
- [ ] Paste the record URL into the removal form
- [ ] Complete any verification steps
- [ ] Submit the removal request
- [ ] Check back in 24–72 hours to confirm removal

</details>

<details>
<summary>🔎 <strong>FamilyTreeNow</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `familytreenow.com`  
**Opt-Out:** https://www.familytreenow.com/optout  
**Requirements:** No email required • No ID required

### ✅ Steps

- [ ] Find your listing on familytreenow.com
- [ ] Copy the URL of your listing
- [ ] Visit familytreenow.com/optout
- [ ] Paste the URL into the opt-out form
- [ ] Complete the CAPTCHA
- [ ] Submit the opt-out request
- [ ] Check back in 24–48 hours

</details>

<details>
<summary>🔎 <strong>GoLookup</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `golookup.com`  
**Opt-Out:** https://golookup.com/remove-my-info  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Search for your record on golookup.com
- [ ] Copy the URL of your listing
- [ ] Visit golookup.com/remove-my-info
- [ ] Paste the URL and fill in the form
- [ ] Enter your email address if required
- [ ] Submit the request
- [ ] Confirm via email if prompted
- [ ] Check back later to confirm removal

</details>

<details>
<summary>🔎 <strong>ID Crawl</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `idcrawl.com`  
**Opt-Out:** https://www.idcrawl.com/optout  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Find your record on idcrawl.com
- [ ] Copy the URL of your listing
- [ ] Visit idcrawl.com/optout
- [ ] Fill out the opt-out form with your details and the listing URL
- [ ] Submit the opt-out request
- [ ] Confirm via email if prompted
- [ ] Check back to ensure removal

</details>

<details>
<summary>🔎 <strong>Instant Checkmate</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `instantcheckmate.com`  
**Opt-Out:** https://www.instantcheckmate.com/opt-out/  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit the Instant Checkmate opt-out page
- [ ] Search for your record
- [ ] Select your listing
- [ ] Submit the opt-out request
- [ ] Confirm via email if required
- [ ] Wait for removal to process

</details>

<details>
<summary>🔎 <strong>Intelius</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `intelius.com`  
**Opt-Out:** https://www.intelius.com/opt-out/  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit intelius.com/opt-out
- [ ] Search for your listing
- [ ] Select your record
- [ ] Provide the required information
- [ ] Submit the opt-out request
- [ ] Confirm via email if prompted
- [ ] Check back later to ensure removal

</details>

<details>
<summary>🔎 <strong>MyLife</strong> — 🟡 Medium • ⏱️ 10-20 minutes</summary>

**Domain:** `mylife.com`  
**Opt-Out:** https://www.mylife.com/opt-out  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Find your profile on mylife.com
- [ ] Copy the URL of your profile
- [ ] Go to mylife.com/opt-out
- [ ] Submit the opt-out request with your details
- [ ] Confirm via email if required
- [ ] Check back later to verify removal

</details>

<details>
<summary>🔎 <strong>Nuwber</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `nuwber.com`  
**Opt-Out:** https://nuwber.com/removal/link  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Find your record on nuwber.com
- [ ] Copy the URL of your record
- [ ] Visit nuwber.com/removal/link
- [ ] Paste your record link into the form
- [ ] Enter your email if required
- [ ] Submit the request
- [ ] Confirm via email if prompted
- [ ] Re-check later to confirm removal

</details>

<details>
<summary>🔎 <strong>OfficialUSA</strong> — 🟡 Medium • ⏱️ 10-20 minutes</summary>

**Domain:** `officialusa.com`  
**Opt-Out:** https://www.officialusa.com/remove  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Locate your listing on officialusa.com
- [ ] Copy the URL of your listing
- [ ] Visit officialusa.com/remove
- [ ] Follow the instructions to submit a removal request
- [ ] You may need to email them directly
- [ ] Include your name, address, and the listing URL
- [ ] Request removal of your information
- [ ] Check back to verify removal

</details>

<details>
<summary>🔎 <strong>PeekYou</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `peekyou.com`  
**Opt-Out:** https://www.peekyou.com/about/contact/optout  
**Requirements:** No email required • No ID required

### ✅ Steps

- [ ] Visit peekyou.com/about/contact/optout
- [ ] Search for your profile on PeekYou
- [ ] Copy your profile URL
- [ ] Paste the URL into the opt-out form
- [ ] Submit the request
- [ ] Check back later to confirm removal

</details>

<details>
<summary>🔎 <strong>PeopleLooker</strong> — 🟡 Medium • ⏱️ 10 minutes</summary>

**Domain:** `peoplelooker.com`  
**Opt-Out:** https://www.peoplelooker.com/opt-out  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit peoplelooker.com/opt-out
- [ ] Search for your record
- [ ] Select your listing
- [ ] Submit the opt-out request
- [ ] Confirm via email if required
- [ ] Verify removal later

</details>

<details>
<summary>🔎 <strong>PeopleSearchNow</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `peoplesearchnow.com`  
**Opt-Out:** https://peoplesearchnow.com/opt-out  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Search for your record on peoplesearchnow.com
- [ ] Copy the URL of your listing
- [ ] Go to peoplesearchnow.com/opt-out
- [ ] Paste the URL and submit the request
- [ ] Confirm via email if prompted
- [ ] Check back to confirm removal

</details>

<details>
<summary>🔎 <strong>PublicRecordsNow</strong> — 🟡 Medium • ⏱️ 10-20 minutes</summary>

**Domain:** `publicrecordsnow.com`  
**Opt-Out:** https://www.publicrecordsnow.com/optout  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Find your record on publicrecordsnow.com
- [ ] Copy the URL of the listing
- [ ] Visit publicrecordsnow.com/optout
- [ ] Submit the opt-out request with your listing URL
- [ ] Confirm via email if required
- [ ] Wait for removal to process

</details>

<details>
<summary>🔎 <strong>Radaris</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `radaris.com`  
**Opt-Out:** https://radaris.com/page/how-to-remove  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Go to radaris.com and find your record
- [ ] Copy the URL of your record
- [ ] Visit the Radaris removal instructions page
- [ ] Follow the opt-out instructions provided
- [ ] You may need to submit a form and confirm via email
- [ ] Check back later to ensure the record is removed

</details>

<details>
<summary>🔎 <strong>SearchPeopleFree</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `searchpeoplefree.com`  
**Opt-Out:** https://www.searchpeoplefree.com/opt-out  
**Requirements:** No email required • No ID required

### ✅ Steps

- [ ] Find your listing on searchpeoplefree.com
- [ ] Copy the URL of your listing
- [ ] Go to searchpeoplefree.com/opt-out
- [ ] Paste your listing URL into the opt-out form
- [ ] Complete any CAPTCHA
- [ ] Submit the request
- [ ] Check back later to confirm removal

</details>

<details>
<summary>🔎 <strong>Social Catfish</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `socialcatfish.com`  
**Opt-Out:** https://socialcatfish.com/opt-out/  
**Requirements:** 📧 Email confirmation • No ID required

> 📝 Note: Social Catfish is primarily used for romance scam detection but also hosts profiles. You can request removal via their opt-out form.

### ✅ Steps

- [ ] Find your listing on Social Catfish (if applicable)
- [ ] Go to socialcatfish.com/opt-out
- [ ] Fill out the opt-out form
- [ ] Submit the opt-out request
- [ ] Check your email for confirmation
- [ ] Complete any verification steps

</details>

<details>
<summary>🔎 <strong>Spokeo</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `spokeo.com`  
**Opt-Out:** https://www.spokeo.com/optout  
**Requirements:** 📧 Email confirmation • No ID required

> 📝 Note: Spokeo may have multiple listings for you. You need to opt out of each one separately.

### ✅ Steps

- [ ] Go to Spokeo.com and search for your name to find your listing
- [ ] Copy the URL of your profile page
- [ ] Visit the opt-out page at spokeo.com/optout
- [ ] Paste your profile URL into the form
- [ ] Enter your email address
- [ ] Complete the CAPTCHA verification
- [ ] Click “Remove This Listing”
- [ ] Check your email for a confirmation link
- [ ] Click the confirmation link to complete the removal
- [ ] Your listing should be removed within 24-48 hours

</details>

<details>
<summary>🔎 <strong>SpyFly</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `spyfly.com`  
**Opt-Out:** https://www.spyfly.com/optout  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit spyfly.com and find your listing
- [ ] Copy the URL of the profile/report page
- [ ] Go to spyfly.com/optout
- [ ] Fill in the form with your details and listing URL
- [ ] Submit the opt-out request
- [ ] Confirm via email if prompted
- [ ] Check back later to verify removal

</details>

<details>
<summary>🔎 <strong>That's Them</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `thatsthem.com`  
**Opt-Out:** https://thatsthem.com/opt-out  
**Requirements:** No email required • No ID required

### ✅ Steps

- [ ] Search for your listing on thatsthem.com
- [ ] Copy the URL of your listing
- [ ] Visit thatsthem.com/opt-out
- [ ] Paste the URL and submit the request
- [ ] Complete any CAPTCHA verification
- [ ] Verify removal later

</details>

<details>
<summary>🔎 <strong>TruePeopleSearch</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `truepeoplesearch.com`  
**Opt-Out:** https://www.truepeoplesearch.com/removal  
**Requirements:** No email required • No ID required

### ✅ Steps

- [ ] Find your record on truepeoplesearch.com
- [ ] Copy the URL of your record
- [ ] Go to truepeoplesearch.com/removal
- [ ] Paste the record URL into the removal form
- [ ] Complete the CAPTCHA
- [ ] Submit the removal request
- [ ] Check back later to confirm removal

</details>

<details>
<summary>🔎 <strong>TruthFinder</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `truthfinder.com`  
**Opt-Out:** https://www.truthfinder.com/opt-out/  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit truthfinder.com/opt-out
- [ ] Search for your record
- [ ] Select your listing
- [ ] Submit the opt-out request
- [ ] Confirm via email if required
- [ ] Verify removal later

</details>

<details>
<summary>🔎 <strong>US Identify</strong> — 🟡 Medium • ⏱️ 10-20 minutes</summary>

**Domain:** `usidentify.com`  
**Opt-Out:** https://www.usidentify.com/optout  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Find your listing on usidentify.com
- [ ] Copy the URL of your listing
- [ ] Visit usidentify.com/optout
- [ ] Fill out the opt-out form
- [ ] Submit the request
- [ ] Confirm via email if prompted
- [ ] Check back to verify removal

</details>

<details>
<summary>🔎 <strong>US Phonebook</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `usphonebook.com`  
**Opt-Out:** https://www.usphonebook.com/opt-out  
**Requirements:** No email required • No ID required

### ✅ Steps

- [ ] Find your listing on usphonebook.com
- [ ] Copy the URL of your listing
- [ ] Go to usphonebook.com/opt-out
- [ ] Paste the URL into the opt-out form
- [ ] Complete CAPTCHA if required
- [ ] Submit the request
- [ ] Check back later to confirm removal

</details>

<details>
<summary>🔎 <strong>US Search</strong> — 🟡 Medium • ⏱️ 10-15 minutes</summary>

**Domain:** `ussearch.com`  
**Opt-Out:** https://www.ussearch.com/consumer/optout  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Visit ussearch.com/consumer/optout
- [ ] Search for your listing
- [ ] Select your record
- [ ] Submit the opt-out request
- [ ] Confirm via email if required
- [ ] Verify removal later

</details>

<details>
<summary>🔎 <strong>VoterRecords</strong> — 🟡 Medium • ⏱️ 10-20 minutes</summary>

**Domain:** `voterrecords.com`  
**Opt-Out:** https://voterrecords.com/contact  
**Requirements:** 📧 Email confirmation • No ID required

### ✅ Steps

- [ ] Find your record on voterrecords.com
- [ ] Copy the URL of your record
- [ ] Go to voterrecords.com/contact
- [ ] Fill out the contact form requesting removal
- [ ] Include the URL of your record and your name
- [ ] Submit the request
- [ ] Wait for a response or confirmation
- [ ] Check back later to see if it’s removed

</details>

<details>
<summary>🔎 <strong>Whitepages</strong> — 🟢 Easy • ⏱️ 5-10 minutes</summary>

**Domain:** `whitepages.com`  
**Opt-Out:** https://www.whitepages.com/suppression_requests  
**Requirements:** No email required • No ID required

> 📝 Note: Whitepages requires phone verification. Make sure you have access to the phone number listed.

### ✅ Steps

- [ ] Find your listing on Whitepages.com
- [ ] Copy the URL of your profile page
- [ ] Go to whitepages.com/suppression_requests
- [ ] Paste your profile URL
- [ ] Enter your phone number for verification
- [ ] You will receive an automated call with a verification code
- [ ] Enter the verification code on the website
- [ ] Confirm the removal request
- [ ] Removal typically takes 24 hours

</details>

-----
