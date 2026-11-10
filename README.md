# Avery Foote Portfolio

A responsive React/Vite/Tailwind CSS portfolio adapted from the provided portfolio template for **Avery Foote**, Senior Full-Stack & AI Software Engineer.

## Included

- Resume-based biography, employment history, skills, education, and contact details.
- Seven selected live projects: CareDevi, Empass Healthcare, Fay Nutrition, Flyhomes, iCollege, AlphaLaw, and SEAtS ONE.
- A downloadable copy of Avery's PDF resume at `/assets/Avery-Foote-Resume.pdf`.
- Responsive light/dark design, animated background, project category filters, project detail dialogs, and quick navigation.

Project descriptions are based on public product information and user-supplied links. Individual project tech stacks, metrics, and development contributions were **not** invented.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static web host (Vercel, Netlify, Cloudflare Pages, etc.).

## Editing

- **Profile, bio, projects, experience, skills:** `src/main.jsx` (top-level data arrays and React components)
- **Styling and interactions:** `src/style.css` and `src/main.jsx`
- **Metadata:** `index.html`
- **Resume:** `public/assets/Avery-Foote-Resume.pdf`
- **Brand images:** `public/assets/favicon.svg`, `apple-touch-icon.png`, `og-preview.png`

Before publishing, set your final production domain in Open Graph/SEO metadata as desired and add specific project contributions or technical stacks only where verified.

## Project thumbnails

The project cards use locally stored illustrative images in `public/assets/projects/`. These are conceptual thumbnails of each platform, not screenshots of the live websites. The images load offline and are also shown in the project detail panels.


## Media Refresh v2 (November 2026)

This package has the supplied beach photo and four **local JPEG project thumbnails**, which load without internet access.

- `public/assets/avatar-beach-v2.jpg`: profile avatar
- `public/assets/projects/caredevi-preview-v2.jpg`
- `public/assets/projects/empass-preview-v2.jpg`
- `public/assets/projects/fay-preview-v2.jpg`
- `public/assets/projects/flyhomes-preview-v2.jpg`

**If you still see old images:** Use this newly named folder (not an existing `Avery-Foote-Portfolio` folder). Open a terminal in THIS folder, then run:

```powershell
npm.cmd install
npm.cmd run dev -- --host 127.0.0.1 --port 5174 --strictPort
```

Open http://127.0.0.1:5174/ and press Ctrl+Shift+R to hard-refresh.

You can also open `MEDIA-PREVIEW.html` directly to check the avatar and all seven project images without npm/Vite.

The thumbnails are custom illustrative artwork, not captures of the live websites.


## Added projects (November 2026)

Three additional projects are included in the same `projects` array in `src/main.jsx` and use the existing project cards, filters, and modals without changing component styling or dependencies:

- iCollege — `https://www.icollege.pro/` (`public/assets/projects/icollege-preview-v4.jpg`)
- AlphaLaw — `https://www.alphalaw.io/` (`public/assets/projects/alphalaw-preview-v4.jpg`)
- SEAtS ONE — `https://seatsone.com/` (`public/assets/projects/seatsone-preview-v4.jpg`)

These three preview images are conceptual illustrations, not site screenshots. UI metrics shown in the illustrations are decorative and not verified real product data. The original four projects and beach avatar were preserved.

### Updating GitHub / Vercel

Copy the changed `src/main.jsx`, `README.md`, `MEDIA-PREVIEW.html`, and the three new JPGs in `public/assets/projects/` into your existing repository. Commit and push to `main`; Vercel will redeploy the connected repository. Alternatively, use this complete ZIP as the project source.


## Professional thumbnail refresh

The three added project previews have been replaced with refreshed, clean visual mockups using cache-busting `-v4.jpg` filenames: `icollege-preview-v4.jpg`, `alphalaw-preview-v4.jpg`, and `seatsone-preview-v4.jpg`. The project-card component, popup display, existing four project images, styling, and dependencies are unchanged. These images are illustrative concepts rather than screenshots or verified product metrics.
