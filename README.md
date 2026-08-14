# Portfolio

A single-page portfolio site — vanilla HTML/CSS/JS, no build step, no dependencies.

## Files

- `index.html` — page structure and content
- `style.css` — all styling
- `script.js` — nav, scroll reveals, the hero waveform, the live timeline indicator, the skills panel, and the project case-study overlays

## Before you publish

Search each file for `[Add ...]` and `.ph` placeholder text (italic, dashed underline in the rendered page) and swap in your real details:

- Your IIT campus, branch, and years (About + Education sections)
- Real dates in the Experience timeline
- Email, GitHub, LinkedIn, X links (Contact section)
- Resume link (Resume section)
- Project GitHub/paper links, and any benchmark numbers once you have them (case-study overlays in `script.js`, inside the `projects` array)
- A real photo — replace the dashed placeholder box in the About section with an `<img>` tag

## Deploy with GitHub Pages

1. Create a new repository on GitHub (public, if you're on the free tier).
2. Upload `index.html`, `style.css`, and `script.js` to the **root** of the repo (drag-and-drop on the GitHub web UI works, or use git):
   ```bash
   git init
   git add index.html style.css script.js
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/ (root)`, then **Save**.
6. GitHub will publish it at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

If you want it at the bare `https://<your-username>.github.io/` (no repo name in the URL), name the repository exactly `<your-username>.github.io` and push the same three files to its root.

## Custom domain (optional)

Add a `CNAME` file to the repo root containing just your domain (e.g. `anil.dev`), then point your domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
