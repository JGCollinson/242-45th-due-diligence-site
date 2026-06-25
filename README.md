# 242 45th St — Due Diligence

Interactive due-diligence report for **242 45th St, Brooklyn** (inspection checklist, BIS records, renovation brief, phased budget).

**Printable brief:** open [`public/renovation-brief.html`](public/renovation-brief.html) in the browser → Print → Save as PDF (for architect / contractor).

Built from a [Cursor Canvas](https://cursor.com/docs/agent/tools/canvas) and deployed as a static site.

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:5173

If you see **`main.tsx` 404** locally, you skipped `npm install` or opened `index.html` directly. This app must run through Vite (`npm run dev`) — the browser cannot load `.tsx` files on its own.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `242-45th-due-diligence-site`).
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial deploy: due diligence canvas"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/242-45th-due-diligence-site.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** (required — do **not** use “Deploy from a branch” on `main`, or the site serves raw `index.html` and the browser 404s on `/src/main.tsx`).
4. After the **Deploy to GitHub Pages** workflow finishes, the site is at:

   https://jgcollinson.github.io/242-45th-due-diligence-site/

### Troubleshooting `main.tsx` 404 on the live site

| Symptom | Cause | Fix |
|--------|--------|-----|
| Network tab shows request to `/src/main.tsx` | Pages is serving the **source** branch, not the Vite **build** | Settings → Pages → Source → **GitHub Actions** |
| `npm run dev` says `vite: command not found` | Dependencies not installed | Run `npm install` first |
| Blank page, script path `/assets/...` 404 | Old deploy or wrong base path | Re-run workflow; build uses `VITE_BASE_PATH=/242-45th-due-diligence-site/` |

Preview the production build locally:

```bash
npm run preview:pages
```

## Update content

Edit `src/DueDiligence.tsx` (synced from the Cursor canvas), then push to `main` to redeploy.
