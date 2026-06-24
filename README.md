# 242 45th St — Due Diligence

Interactive due-diligence report for **242 45th St, Brooklyn** (inspection checklist, BIS records, renovation brief, phased budget).

**Printable brief:** open [`public/renovation-brief.html`](public/renovation-brief.html) in the browser → Print → Save as PDF (for architect / contractor).

Built from a [Cursor Canvas](https://cursor.com/docs/agent/tools/canvas) and deployed as a static site.

## Local preview

```bash
npm install
npm run dev
something2
```

Open http://localhost:5173

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `242-45th-due-diligence`).
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial deploy: due diligence canvas"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/242-45th-due-diligence.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions** (the deploy script sets this; do not use “Deploy from a branch” on `main`, or builds will break).
4. After the workflow finishes, the site is at:

   https://jgcollinson.github.io/242-45th-due-diligence-site/

## Update content

Edit `src/DueDiligence.tsx` (synced from the Cursor canvas), then push to `main` to redeploy.
