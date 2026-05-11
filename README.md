# Emagia — Homepage Redesign Concept

Concept redesign demo for **Emagia, Inc.** (Order-to-Cash enterprise AI), prepared by [GrowthSite Lab](https://risesitelab.com).

**Live demo:** https://emagia.risesitelab.com

## What this is

A redesign of `emagia.com` that re-anchors the homepage on the **business outcome** (DSO reduction, cash-application automation, working capital freed) before introducing the Gia agent architecture. Built per the audit prescription:

1. **Outcome-first hero** — quantified impact as H1, not platform category
2. **Proof bar above the fold** — KPIs + Fortune-500 customer logos + executive quote
3. **Multi-intent conversion** — primary "Book Strategy Call" CTA + low-friction "Watch Product Tour" + interactive DSO impact calculator

## Stack

- Vite 5 + React 18 + TypeScript (strict)
- Tailwind v4 (`@tailwindcss/vite`)
- Framer Motion 11
- Deployed on Cloudflare Pages
- Semantic HTML + JSON-LD + canonical + OG/Twitter meta

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve built dist/
```

## Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=emagia --branch=main
```
