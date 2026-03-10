# FixKaro — Local Home Services Marketplace

A static landing site for **FixKaro**, a home services platform connecting customers with verified professionals (plumbers, electricians, carpenters, painters, AC repair, pujaris) in **Bahadurgarh, Haryana**.

---

## Live Site

Hosted on Netlify — auto-deploys on every push to `main`.
**Netlify project**: `hilarious-panda-382274`

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
- **Analytics** — Google Analytics 4 (`G-228N3XZ30Y`)
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
├── styles.css          # Shared design system + theming
├── script.js           # Shared JS (theme toggle, mobile menu, suggestions modal, floating CTA)
└── netlify.toml        # Netlify deploy config
```

---

## Design System

Dual-theme (dark default with light mode toggle). All tokens defined in `styles.css` `:root` and overridden in `[data-theme="light"]`.

| Token | Dark value | Light value | Usage |
|-------|-----------|------------|-------|
| `--bg` | `#0F172A` | `#F8FAFC` | Page background |
| `--bg-surface` | `#1E293B` | `#FFFFFF` | Cards, modals |
| `--bg-raised` | `#2D3D52` | `#F1F5F9` | Hover states |
| `--primary` | `#818CF8` | `#818CF8` | Indigo — buttons, highlights |
| `--primary-dark` | `#6366F1` | `#6366F1` | Hover state |
| `--text-primary` | `#F1F5F9` | `#0F172A` | Headings, body |
| `--text-secondary` | `#94A3B8` | `#475569` | Subtitles, labels |
| `--success` | `#10B981` | `#10B981` | Success states |
| `--radius` | `14px` | `14px` | Cards, modals |
| Heading font | Sora | — | h1–h6, buttons, logo |
| Body font | DM Sans | — | All body text |

---

## Features

### Theme Toggle
- Persists via `localStorage('fk-theme')`
- Default for new visitors: **light**
- Anti-FOUC inline script in every `<head>` applies theme before CSS loads
- Toggle button (☀/☾) in header on all 13 pages

### Floating CTA Bar
- Fixed bottom-center on all 13 pages
- "📅 Book Now" + "🔧 Join as Pro" pill buttons
- Slides up after 350px scroll via `fk-visible` class
- On `index.html`: "Book Now" opens booking modal directly
- On other pages: links to `index.html` / `join.html`

### Suggestions / Feedback Modal
- "💡 Suggest" tab fixed to right edge on all pages
- Collects: Name, Phone/Email (optional), Category, Message
- Saves to Google Sheets via `SUGGESTIONS_SCRIPT_URL` in `script.js`
- Success screen shown on submit

### Google Analytics 4
- Measurement ID: `G-228N3XZ30Y`
- Tracks: pageviews, session duration, events, user behaviour
- Injected before `</head>` on all 13 pages

---

## Lead Capture (Google Sheets)

Three independent Google Apps Script endpoints:

**Customer Bookings** — `BOOKING_SCRIPT_URL` in `index.html`
- Columns: `Timestamp | Name | Phone | Service | Area | Description`

**Technician Registrations** — `GOOGLE_SCRIPT_URL` in `join.html`
- Columns: `Timestamp | Name | Phone | WhatsApp | Service | Area | Experience | Aadhaar | Notes`

**Suggestions / Feedback** — `SUGGESTIONS_SCRIPT_URL` in `script.js`
- Columns: `Timestamp | Name | Contact | Category | Message | Page`

All use `fetch()` with `mode: 'no-cors'` to POST JSON. Setup instructions are in the `<script>` block of each file.

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

```bash
git add <files>
git commit -m "your message"
git push   # Netlify picks it up automatically
```

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
- [ ] Add WhatsApp floating button using `wa.me` deep links (WhatsApp number TBD)
- [ ] Replace placeholder phone `+91 9999-XXXXXX` with real number across all pages
- [ ] Replace placeholder email `support@fixkaro.in` with active email across all pages
- [ ] Update JSON-LD schema in `contact.html` with real contact details
