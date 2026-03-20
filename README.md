# Brain Library

A premium, emotionally intelligent website — built with Next.js + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Stack
- **Next.js 14** (Pages Router)
- **Tailwind CSS** (utility styling + custom CSS variables)
- **Google Fonts** — Playfair Display + Jost

## Project Structure

```
brain-library/
├── components/
│   ├── Cursor.jsx        # Custom cursor with hover states
│   ├── Nav.jsx           # Sticky nav with scroll behavior
│   ├── Hero.jsx          # Full-viewport hero + stats
│   ├── WhatIs.jsx        # About / pillars section
│   ├── Experience.jsx    # 4-card experience grid
│   ├── HowItWorks.jsx    # Steps + quote visual
│   ├── Community.jsx     # Values cards on dark bg
│   ├── Testimonials.jsx  # 3-card testimonial grid
│   ├── FinalCTA.jsx      # Closing CTA section
│   └── Footer.jsx        # Minimal footer
├── pages/
│   ├── _app.jsx          # App wrapper
│   ├── _document.jsx     # Head, fonts, meta
│   └── index.jsx         # Main page (assembles all sections)
├── styles/
│   └── globals.css       # CSS variables, animations, base styles
├── public/               # Static assets (add your favicon here)
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## Customisation

- **Colors** → Edit CSS variables in `styles/globals.css` (`:root` block)
- **Content** → All copy lives inside each component file
- **Fonts** → Swap Google Fonts URL in `pages/_document.jsx` + update `tailwind.config.js`
- **Sections** → Add/remove sections in `pages/index.jsx`

## Deploy to Vercel

```bash
npx vercel
```
