# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing/lead-gen website for **Apex EduAbroad**, an overseas education consultancy. Next.js App Router site (Next 16.2.10, React 19, Tailwind v4) with static content pages plus one API route (contact form) that emails leads via Resend.

## Before writing code

This project pins a very recent Next.js version whose App Router APIs, conventions, and docs may differ from what's in your training data. **Read `node_modules/next/dist/docs/` before implementing anything that touches routing, data fetching, metadata, or server/client boundaries** — do not assume older Next.js patterns apply. Heed any deprecation notices found there.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

## Architecture

**Routing**: App Router under `src/app/`. Static pages: `/`, `/about`, `/services`, `/destinations`, `/test-preparation`, `/success-stories`, `/contact`. Dynamic route `destinations/[slug]` uses `generateStaticParams`/`generateMetadata` and is statically rendered per country from the `countries` data (async `params` — must be awaited, per the App Router version in use).

**Content is data-driven, not hardcoded per page.** `src/lib/data.ts` is the single source of truth for site copy: `site` (contact/brand info), `countries`, `services`, `exams`, `processSteps`, `testimonials`, `navLinks`, `stats`. Pages and components map over these arrays rather than embedding content inline. When asked to add/edit a country, service, testimonial, etc., edit this file first, then check whether a page/component needs a new field consumed.

Several values in `data.ts` are explicitly marked as placeholders pending the client (`TODO` comments on phone/email/address, and a note that `stats` and `testimonials` are illustrative placeholders to replace before launch) — don't treat these as verified facts, and flag it if asked to use them for anything real.

**Design system via Tailwind v4 `@theme inline`**: brand tokens (not Tailwind defaults) are defined in `src/app/globals.css` — `navy-{950..600}`, `gold-{300..600}`, `cream-{50,100,200}`, `ink-{900,700,500}`, plus `font-display` (Fraunces, serif headings) and `font-sans`/default (Inter, body). Use these token classes (e.g. `bg-navy-950`, `text-gold-500`, `font-display`) instead of generic Tailwind palette colors to stay consistent with the "modern luxury" visual style already established.

**Shared building blocks** in `src/components/` are composed on every page rather than each page implementing its own layout:
- `Container` — max-width/padding wrapper
- `Reveal` — framer-motion scroll-reveal wrapper (`"use client"`), used to animate nearly every section on scroll-into-view
- `Button` — variant-based (`primary`/`secondary`/`ghost`) link-or-button, styled from the brand tokens
- `SectionHeading`, `CTASection`, `PageHero`, `ProcessTimeline`, `StatsBar`, `CountryCard`, `ServiceCard`, `TestimonialCard`, `Icon` — presentational sections/cards driven by `lib/data.ts` types
- `Navbar`, `Footer`, `WhatsAppButton` — rendered once in `src/app/layout.tsx`, present on every page

New pages/sections should be built by composing these rather than writing bespoke markup, unless the design genuinely doesn't fit the existing components.

**Contact form flow**: `ContactForm` component posts to `src/app/api/contact/route.ts`. That route validates `name`/`email`/`phone` are present, logs the submission, and — only if `RESEND_API_KEY` is set in the environment — sends a notification email via Resend to `CONTACT_TO_EMAIL` (falls back to `site.email`) from `CONTACT_FROM_EMAIL` (falls back to a `resend.dev` sandbox address). Without `RESEND_API_KEY` configured it still returns `{ ok: true, emailSent: false }` rather than failing, so local dev works without Resend credentials. User-supplied fields are HTML-escaped before being interpolated into the email body — preserve that when touching this route.

Relevant env vars (see `.env.local`, not committed): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.

**Path alias**: `@/*` → `src/*` (see `tsconfig.json`).
