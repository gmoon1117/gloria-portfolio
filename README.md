# Gloria — Product Design Portfolio

A static site built with [Astro](https://astro.build). One template is reused for all
three case studies; all text content lives in [`src/data/content.ts`](src/data/content.ts).

## Editing content

Open `src/data/content.ts`. Everything on the site — the homepage intro line, the three
case studies, the "Other work" cards, the About bio, and the "For Fun" grid — is plain
text/objects in that one file. You don't need to touch anything in `src/layouts`,
`src/components`, or `src/pages` to change words on the site.

Anything written as `PLACEHOLDER —` or `[LIKE THIS]` is draft/placeholder copy — replace it
with your real content. Images are rendered as dashed placeholder boxes (`<PlaceholderImage>`)
until you swap them for real `<img>` tags — see "Adding real images" below.

## Adding real images

1. Drop your image files into `public/images/` (create the folder if it doesn't exist).
2. In the relevant `.astro` file (e.g. `src/pages/work/[slug].astro`), replace the
   `<PlaceholderImage label="..." />` you want to swap with a normal image tag, e.g.:
   ```astro
   <img src="/images/banking-hero.jpg" alt="Banking app home screen" />
   ```
3. For best quality/performance, export screenshots around 1600px wide, as JPG or PNG.

## Adding your resume

Replace `public/resume.pdf` with your real resume PDF (same filename, `resume.pdf`), or
update `about.resumeFileName` in `content.ts` if you rename the file. The "Resume" link in
the nav and the "Download my resume" button on the About page both point at `/resume.pdf`.

## Running locally

This project needs [Node.js](https://nodejs.org) (version 18 or newer).

**You already have one installed** — while building this, a Node runtime was downloaded
to `~/.local/node-v24.22.0` (no admin password needed). To use it, add it to your PATH for
the current terminal session:

```bash
export PATH="$HOME/.local/node-v24.22.0/bin:$PATH"
```

Add that line to your `~/.zshrc` if you want it available in every new terminal.
Alternatively, install Node the standard way — `brew install node` (if you use Homebrew)
or the installer from [nodejs.org](https://nodejs.org) — either works fine.

Then, from this project folder:

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:4321`) that live-reloads as
you edit `content.ts` or any `.astro` file.

To check the production build locally:

```bash
npm run build
npm run preview
```

## Deploying to Vercel (free)

1. Push this folder to a new GitHub repository (see below if you haven't already).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Import the repository. Vercel auto-detects Astro — leave the default build settings
   (`npm run build`, output directory `dist`) and click **Deploy**.
4. Every future push to your main branch auto-deploys. You can add a custom domain later
   under the project's **Settings → Domains**.

### First time pushing to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

(Create the empty repository on GitHub first, then run the commands above with your repo's URL.)

## Project structure

```
src/
  data/content.ts        ← all site copy (edit this)
  layouts/BaseLayout.astro
  components/             ← Nav, Footer, ProjectCard, PlaceholderImage, BeforeAfter
  pages/
    index.astro           ← Home
    about.astro           ← About
    fun.astro             ← For Fun
    work/[slug].astro     ← case study template (used for all 3 case studies)
public/
  resume.pdf              ← replace with your real resume
  favicon.svg
```
