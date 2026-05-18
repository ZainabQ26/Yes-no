# Yes/No Project

A small repo containing a minimal React demo and earlier Yes/No prototypes. The active demo lives in the `clippy-trap` folder and demonstrates a simple two-screen UI and position-based animation.

## Technologies

- **Language:** JavaScript (ESNext)
- **Framework:** React (Create React App)
- **Package manager:** npm

## Running the Application

### Prerequisites

- Node.js (v14 or later)
- npm

### Run in development

```bash
cd clippy-trap
npm install
npm start
```

Open http://localhost:3000 to view the app. The page reloads on edits.

## Building from the command line

```bash
cd clippy-trap
npm run build
```

This will produce an optimized production build under `clippy-trap/build/`.

## Project Structure (important files)

- `clippy-trap/` — React demo. See its README for details.
- `clippy-trap/src/App.js` — main app component and inline styles.

## Features

- Two-screen flow: `prompt` and `game` modes
- Position-based animation driven by `useEffect` and inline styles

## Notes & Recommendations

- The red color for the NO slot is controlled by `styles.noSlot.background` in `clippy-trap/src/App.js`.
- Avoid `alert()` for in-app feedback (it blocks rendering/animations); use a toast or modal instead.
- Use strict equality (`===`) when comparing `screen` in `useEffect`.
- Remove any invisible non-breaking spaces or stray whitespace characters near conditional checks to avoid linter/editor confusion.

## Features (short)

- Minimal demo UI
- Lightweight, single-file component for quick iteration

## Contact

Zainab Qazi — GitHub: https://github.com/ZainabQ26

---

If you'd like, I can commit and push this README for you. I can also apply the small code cleanups suggested above.
