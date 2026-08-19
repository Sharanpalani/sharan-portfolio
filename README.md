# Sharan P — Cybersecurity Portfolio

A personal portfolio website for **Sharan P**, a Cybersecurity student and aspiring
SOC Analyst / Cybersecurity Analyst, built with plain **HTML5, CSS3, and vanilla
JavaScript** (no frameworks, no build tools).

## About the Portfolio

The site presents Sharan's education, technical skills, internship experience,
projects, certifications, and achievements in a single-page layout designed
around a clean "SOC console" visual theme — suited for cybersecurity recruiters,
internship applications, and college placements.

## Features

- Sticky, responsive navigation bar with smooth scrolling and a mobile hamburger menu
- Light and dark theme toggle
- Hero section with social links and an animated status line
- About section with an education summary card
- Categorized skills section (Programming, Cybersecurity, Security Tools, Web, Database, Other)
- "What I'm Interested In" focus-area cards
- Internship experience timeline
- Project showcase cards with tech stacks and GitHub links
- Certifications grid
- Achievements & activities list
- Resume placeholder section (ready for a real PDF)
- Contact section with a `mailto:`-based contact form (no backend required)
- Scroll-triggered fade-in animations and hover micro-interactions
- Semantic HTML, keyboard-friendly navigation, and SEO/Open Graph metadata

## Technologies Used

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (no libraries/frameworks)
- [Font Awesome](https://fontawesome.com/) for icons (via CDN)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Folder Structure

```text
sharan-portfolio/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── profile.jpg              (add your own photo here)
│   └── README-assets.txt
│
└── README.md
```

## How to Run Locally (Windows)

1. Download or clone this project folder onto your computer.
2. Open the `sharan-portfolio` folder in File Explorer.
3. Double-click `index.html` — it will open in your default web browser.
   - Alternatively, right-click `index.html` → **Open with** → choose your browser.
4. That's it — no installation, server, or build step is required.

**Optional (recommended for development):** if you use
[VS Code](https://code.visualstudio.com/), install the **Live Server**
extension, right-click `index.html`, and choose **Open with Live Server**
for automatic browser refresh while editing.

## How to Add Your Profile Photo

1. Rename your photo to `profile.jpg`.
2. Copy it into the `assets/` folder, replacing the placeholder, so the path is:

   ```text
   assets/profile.jpg
   ```

3. Refresh `index.html` in your browser — your photo will appear in the hero
   section automatically (it's already wired up in `index.html`).

## How to Update Your Information

All content lives in plain HTML/CSS/JS, so it's safe to edit directly:

| What you want to change            | File               | Where to look                                  |
|-------------------------------------|--------------------|-------------------------------------------------|
| Email, phone, location              | `index.html`        | Hero section and `#contact` section             |
| GitHub / LinkedIn links             | `index.html`        | Hero socials, `#contact`, and footer            |
| Projects (title, description, links)| `index.html`        | `#projects` section — each `.project-card`      |
| Certifications                      | `index.html`        | `#certifications` section — each `.cert-card`   |
| Internship / experience details     | `index.html`        | `#experience` section — each `.timeline-item`   |
| Skills                               | `index.html`        | `#skills` section — each `.skill-card`          |
| Colors, fonts, spacing              | `css/style.css`      | `:root` and `[data-theme="dark"]` token blocks  |
| Theme toggle / animations / form    | `js/script.js`       | Commented function blocks                        |

Search for your name, email, or a section heading directly in `index.html`
using your editor's Find (Ctrl+F) to jump straight to the right spot.

### Adding Your Resume Later

When you have a resume PDF ready:

1. Place it at `assets/Sharan_P_Resume.pdf`.
2. In `index.html`, find the `#resume` section and replace the disabled
   **Resume Coming Soon** button with a normal link, e.g.:

   ```html
   <a href="assets/Sharan_P_Resume.pdf" class="btn btn-primary" download>
     <i class="fa-solid fa-file-arrow-down"></i> Download Resume
   </a>
   ```

### Connecting the Contact Form to a Backend

The contact form currently opens the visitor's email client via a `mailto:`
link — no server is involved. To send messages through a real backend later
(for example, a PHP script), update the submit handler in `js/script.js`
(see the comments above the `contactForm` submit listener) to send a
`fetch()` POST request to your endpoint instead.

## How to Deploy with GitHub Pages

1. Create a new repository on GitHub (e.g. `sharan-portfolio`).
2. Open a terminal (Command Prompt, PowerShell, or Git Bash) inside the
   `sharan-portfolio` project folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: cybersecurity portfolio"
   git branch -M main
   git remote add origin https://github.com/Sharanpalani/sharan-portfolio.git
   git push -u origin main
   ```

3. On GitHub, go to your repository → **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose the **main** branch and the **/ (root)** folder, then click **Save**.
6. After a minute, GitHub will give you a live URL, typically:

   ```text
   https://sharanpalani.github.io/sharan-portfolio/
   ```

7. Share that link on your resume, LinkedIn, and internship applications.

**Note:** This project contains no passwords, API keys, or private data —
it is safe to make the repository public.

---

© 2026 Sharan P. All Rights Reserved.
