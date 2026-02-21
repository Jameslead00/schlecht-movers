# Schlecht & Co GmbH – Website

Modern, bilingual (DE/EN) website for **Schlecht & Co GmbH** – professional moving, clearance, and USM-Haller services in Reinach, Basel-Landschaft, Switzerland.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**.

---

## Quick Start

```bash
npm install
npm run dev     # → http://localhost:3000
npm run build   # production build
npm run lint    # ESLint check
```

---

## Content Extraction

All site content lives in a single typed source: `src/content/site.ts`.

To re-extract content from the live site:

```bash
node scripts/extract-content.mjs
```

This fetches all pages from `https://schlecht-movers.ch/` and saves raw data to `src/content/extracted.json`. The typed `site.ts` file then maps this into structured content used by every page.

---

## Routes

### German (DE)

| Route                         | Page                  |
| ----------------------------- | --------------------- |
| `/`                           | Home (German default) |
| `/de/umzug`                   | Private relocation    |
| `/de/umzug/transport`         | Transport services    |
| `/de/firmenumzug`             | Corporate relocation  |
| `/de/raeumung-und-entsorgung` | Clearance & disposal  |
| `/de/usm-haller`              | USM-Haller services   |
| `/de/ueber-uns`               | About us              |
| `/de/ueber-uns/unser-team`    | Our team              |
| `/de/ueber-uns/kontakt`       | Contact               |
| `/de/ueber-uns/referenzen`    | References            |

### English (EN)

| Route                             | Page                 |
| --------------------------------- | -------------------- |
| `/en/home`                        | Home                 |
| `/en/privat-relocation`           | Private relocation   |
| `/en/privat-relocation/transport` | Transport services   |
| `/en/corporate-relocation`        | Corporate relocation |
| `/en/disposal-and-clearance`      | Clearance & disposal |
| `/en/usm-haller`                  | USM-Haller services  |
| `/en/about-us`                    | About us             |
| `/en/about-us/our-team`           | Our team             |
| `/en/about-us/contact`            | Contact              |
| `/en/about-us/references`         | References           |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # DE home (/)
│   ├── layout.tsx          # Root layout
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── actions/
│   │   └── contact.ts      # Server action for form submissions
│   ├── de/                 # German pages
│   └── en/                 # English pages
├── components/             # Reusable UI components
│   ├── Header.tsx          # Desktop/mobile nav with dropdowns
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero & page hero variants
│   ├── Section.tsx         # Section wrapper with reveal animations
│   ├── ServiceCard.tsx     # Service card grid
│   ├── Accordion.tsx       # Expandable content blocks
│   ├── Timeline.tsx        # About page timeline
│   ├── GalleryGrid.tsx     # References gallery
│   ├── ContactForm.tsx     # Form with Zod validation
│   ├── ContactInfo.tsx     # Contact details + opening hours
│   ├── CTASection.tsx      # Call-to-action banner
│   ├── LanguageSwitcher.tsx# DE/EN toggle
│   ├── PageLayout.tsx      # Layout wrapper
│   └── ServicePage.tsx     # Reusable service page template
├── content/
│   ├── site.ts             # Typed content source (single source of truth)
│   └── extracted.json      # Raw extracted data from live site
scripts/
└── extract-content.mjs     # Content extraction script
public/
├── brand/logo.svg          # Logo file
├── docs/AGB-25.11.2025.pdf # Terms & conditions (placeholder)
└── images/references/      # Reference gallery images (placeholders)
```

---

## Updating Content

1. Edit `src/content/site.ts` – all page text, navigation labels, opening hours, and references are defined here.
2. No database or CMS required – content is statically embedded at build time.

## Replacing the Logo

1. Replace `public/brand/logo.svg` with the actual logo file.
2. Update the Header and Footer components if the logo format changes.
3. Adjust the brand color values in `src/app/globals.css` under `@theme inline` if the accent color changes.

## Wiring Form Submission

The contact form uses a Next.js Server Action (`src/app/actions/contact.ts`) that currently logs submissions to the console. To connect to a real backend:

1. Open `src/app/actions/contact.ts`
2. Replace the `console.log` block with your email service (e.g., Resend, SendGrid, Nodemailer) or CRM API call
3. The form includes honeypot spam protection and in-memory rate limiting

---

## Design System

Colors are defined as CSS custom properties in `src/app/globals.css` and exposed via Tailwind:

- `brand` / `brand-light` / `brand-muted` / `brand-subtle` – accent colors
- `background` / `bg-alt` – page backgrounds
- `foreground` / `text-secondary` / `text-muted` – text colors
- `border` / `border-strong` – borders
- `ring` – focus rings
- `success` / `danger` – feedback colors

---

## TODOs

- [ ] Replace `public/brand/logo.svg` with actual company logo
- [ ] Replace `public/docs/AGB-25.11.2025.pdf` with actual AGB PDF
- [ ] Add actual reference images to `public/images/references/`
- [ ] Add team member content to `src/content/site.ts` (team page returned 404)
- [ ] Wire contact form to real email service
- [ ] Add actual favicon
