# Privacy Shield - Opt-Out Checklist and Web App

> An interactive web app to track your progress removing personal info from 442+ people-search and data broker sites.


🫆 https://thumpersecure.github.io/opt-out-manual-2026/


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
