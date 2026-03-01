# FixKaro — Local Home Services Marketplace

A static landing site for **FixKaro**, a home services platform connecting customers with verified professionals (plumbers, electricians, carpenters, painters, AC repair, pujaris) in **Bahadurgarh, Haryana**.

---

## Live Site

Hosted on Netlify — auto-deploys on every push to `main`.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — service search, booking modal, how it works |
| `plumber.html` | Plumber service page |
| `electrician.html` | Electrician service page |
| `carpenter.html` | Carpenter service page |
| `painter.html` | Painter service page |
| `pujari.html` | Pujari / Pandit service page |
| `ac-repair.html` | AC Repair service page |
| `join.html` | Partner registration form for technicians |
| `about.html` | About FixKaro |
| `contact.html` | Contact information and business hours |
| `terms.html` | Terms of Service |
| `privacy.html` | Privacy Policy |
| `cancellation.html` | Cancellation & Refund Policy |

---

## Tech Stack

- **Pure static site** — HTML, CSS, vanilla JavaScript (ES6+)
- **No build tools**, no framework, no package manager
- **Google Fonts** — Sora (headings) + DM Sans (body)
- **Lead capture** — Google Apps Script web apps → Google Sheets
- **Hosting** — Netlify (auto-deploy from GitHub)

---

## Project Structure

```
landling-page/
├── index.html          # Homepage
├── join.html           # Technician registration
├── about.html
├── contact.html
├── plumber.html
├── electrician.html
├── carpenter.html
├── painter.html
├── pujari.html
├── ac-repair.html
├── terms.html
├── privacy.html
├── cancellation.html
├── styles.css          # Shared design system
├── script.js           # Shared JS (mobile menu)
└── netlify.toml        # Netlify deploy config
```

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0F172A` | Page background |
| Surface | `#1E293B` | Cards, modals |
| Primary | `#F59E0B` | Buttons, highlights, hover glows |
| Text primary | `#F1F5F9` | Headings, body text |
| Text secondary | `#94A3B8` | Subtitles, labels |
| Radius | `14px` | Cards, modals |
| Heading font | Sora | All h1–h6 |
| Body font | DM Sans | All body text |

---

## Lead Capture (Google Sheets)

Two independent Google Apps Script endpoints collect form submissions:

**Customer Bookings** — configured in `index.html` (`BOOKING_SCRIPT_URL`)
- Columns: `Timestamp | Name | Phone | Service | Area | Description`

**Technician Registrations** — configured in `join.html` (`GOOGLE_SCRIPT_URL`)
- Columns: `Timestamp | Name | Phone | WhatsApp | Service | Area | Experience | Aadhaar | Notes`

Both use `fetch()` with `mode: 'no-cors'` to POST JSON to the Apps Script endpoints. Setup instructions are in the `<script>` section of each respective file.

---

## Running Locally

No install needed. Serve the files with any static HTTP server:

```bash
# Option 1 — npx serve
npx serve .

# Option 2 — Python
python -m http.server 8000

# Option 3 — VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

---

## Deployment

Connected to **Netlify** via GitHub. Every push to `main` auto-deploys.

To deploy manually:
1. Make changes locally
2. `git add . && git commit -m "your message"`
3. `git push` — Netlify picks it up automatically

---

## Service Deep Links

Service pages link their CTA buttons back to the homepage with a pre-selected service:

```
index.html?service=plumber
index.html?service=electrician
index.html?service=carpenter
index.html?service=painter
index.html?service=pujari
index.html?service=ac
index.html?service=cleaner
index.html?service=pest
```

---

## Pending / Next Steps

- [ ] Configure custom domain in Netlify → Site Settings → Domain Management
- [ ] Add WhatsApp floating button using `wa.me` deep links (no API needed)
- [ ] Replace placeholder phone number (`+91 9999-XXXXXX`) with real number across all pages
- [ ] Replace placeholder email (`support@fixkaro.in`) once active
