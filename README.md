# Agrivaluechain Client

This project is now a frontend-only React application. The backend has been removed, and the site runs entirely from the client folder.

## Overview

This is a Vite + React app built to recreate and modernize the original Agrivaluechain marketing site.

The app includes:
- a multi-page React experience using React Router
- reusable components for the header, footer, project carousel, and scope sections
- animated reveals and motion effects
- static content organized in a central data file
- styling based on the original site’s design

## Folder structure

```bash
pern-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── README.md
├── .gitignore
└── .git/
```

## Prerequisites

Make sure you have Node.js installed:

```bash
node -v
```

If Node.js is not installed, download the LTS version from https://nodejs.org.

## Run the app locally

From the project root:

```bash
cd client
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Production build

To create a production build:

```bash
cd client
npm run build
```

This generates the production files in the `client/dist` folder.

## Notes

- This version is intentionally frontend-only.
- There is no Express or database backend in the current project.
- Any future backend integration would need to be added separately if required.
