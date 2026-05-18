# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

## App notes (clippy-trap/src/App.js)

- Purpose: A minimal single-file UI demonstrating a two-screen flow and a simple animated "ball" moving into two slots (YES / NO).
- Key state:
	- `screen` — controls which screen renders (`'prompt'` or `'game'`).
	- `ballPos` — `{ top, left }` in percent used to position the moving element.
- Animation: `useEffect` watches `screen`; when it becomes `"game"` it schedules three `setTimeout` calls to update `ballPos` and finally shows an `alert`.
- Styling: CSS-in-JS `styles` object in the same file. The `noSlot` uses `background: '#ff3366'` (the red color you observed).

Recommended fixes / improvements
- Use strict equality: replace `if (screen == "game")` with `if (screen === "game")`.
- Avoid `alert()` for in-app feedback (blocks rendering/animations). Use a modal, toast, or on-screen message instead.
- There is an invisible non-breaking space character near the `if (screen == "game")` which can confuse linters/editors — remove stray whitespace.
- Consider extracting animation timings/positions into constants or using CSS transitions / an animation library for smoother control.

Run the app locally:

```bash
cd clippy-trap
npm install
npm start
```

File: [clippy-trap/src/App.js](clippy-trap/src/App.js)

---

# clippy-trap

A tiny React demo showing a two-screen flow and a simple animated ball moving into YES/NO slots. This repository contains a minimal single-component app created with Create React App.

## Technologies

- **Language:** JavaScript (ESNext)
- **Framework:** React
- **Bootstrapped with:** Create React App

## Running the Application

### Prerequisites

- Node.js (v14 or later) and npm

### Run in development

```bash
cd clippy-trap
npm install
npm start
```

Open http://localhost:3000 to view the app. The page reloads on edits.

### Build for production

```bash
cd clippy-trap
npm run build
```

The production build will be written to the `build/` folder.

## Project Structure (important files)

- `clippy-trap/src/App.js` — main app component and inline styles
- `clippy-trap/public/index.html` — HTML entry

## Features

- Two-screen UI: `prompt` and `game` modes
- Simple position-based animation via `useEffect` + inline styles
- CSS-in-JS `styles` object for quick theming

## Notes & Recommendations

- The red color under the `NO` slot comes from `styles.noSlot.background = '#ff3366'` in `App.js`.
- Replace `alert()` with a non-blocking UI (toast/modal) to avoid freezing animations.
- Use strict equality (`===`) when comparing `screen` in `useEffect`.
- Remove any invisible non-breaking space characters around `if (screen === "game")` — these can confuse linters.

## Contact

Zainab Qazi — GitHub: https://github.com/ZainabQ26

If you'd like, I can apply the recommended code cleanups (use `===`, remove invisible whitespace, replace `alert`) and commit them.
