# Agrivaluechain — PERN rebuild

The original static site (HTML/CSS/vanilla JS) rebuilt as a PERN-style app:

- **P**ostgres — not wired up yet (you chose to skip it for now). The contact
  form route (`server/routes/contact.js`) is written so a Postgres `INSERT`
  can replace the in-memory array later with almost no other changes.
- **E**xpress — `server/` — a small API (`/api/health`, `/api/contact`)
- **R**eact — `client/` — the site rebuilt as React components with
  React Router instead of the old hash-based `navigate()` function
- **N**ode — runs both of the above

## Folder structure

```
pern-app/
├── client/                 → React app (Vite)
│   ├── src/
│   │   ├── components/     → Header.jsx, Footer.jsx
│   │   ├── pages/          → Home.jsx, ServicePage.jsx
│   │   ├── data/           → content.js (all page copy — swap for API calls later)
│   │   ├── hooks/          → useReveal.js (scroll-reveal animation)
│   │   ├── styles/         → style.css (from the original site)
│   │   └── assets/         → hero-bg.png (extracted from the old inline base64)
│   └── index.html
└── server/                 → Express API
    ├── index.js
    └── routes/contact.js
```

## Prerequisites

- **Node.js 18+** installed. Check with:
  ```bash
  node -v
  ```
  If you don't have it, install from https://nodejs.org (LTS version).

## How to run in the VS Code terminal

1. Open this `pern-app` folder in VS Code: **File → Open Folder…**

2. Open a terminal: **Terminal → New Terminal** (or `` Ctrl+` ``).

3. **Install and start the server** (Terminal 1):
   ```bash
   cd server
   npm install
   npm run dev
   ```
   You should see: `Express API listening on http://localhost:5000`

4. **Open a second terminal** (`` Ctrl+Shift+` `` or the `+` icon in the
   terminal panel) and **install and start the client** (Terminal 2):
   ```bash
   cd client
   npm install
   npm run dev
   ```
   You should see a `Local: http://localhost:5173/` link — open that in
   your browser.

5. The React app on port 5173 proxies any request to `/api/*` to the
   Express server on port 5000 (configured in `client/vite.config.js`),
   so both need to be running for the contact form to work.

Both `npm run dev` commands auto-reload on save — the client via Vite HMR,
the server via `node --watch`.

## Building for production

```bash
cd client
npm run build
```
This outputs static files to `client/dist/`, which Express (or any static
host) can serve. To have Express serve the built React app directly,
add to `server/index.js`:
```js
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "../client/dist")));
```

## Adding Postgres later

When you're ready:
1. `npm install pg` in `server/`
2. Create a `contact_messages` table (and, if you want, `options` /
   `projects` tables mirroring the shape in `client/src/data/content.js`)
3. Replace the in-memory `messages` array in `server/routes/contact.js`
   with `pg` queries
4. Optionally add `GET /api/options` and `GET /api/options/:id` routes
   and fetch from those in `Home.jsx` / `ServicePage.jsx` instead of
   importing `content.js` directly
