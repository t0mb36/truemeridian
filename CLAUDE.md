# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

True Meridian - a technology consulting firm's marketing site. Editorial, minimalist single-page design with scroll-driven animations.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- Framer Motion 12
- Fonts: Inter (body/sans) + Playfair Display (headings/display)

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Architecture

Single-page site composed of sections in `app/page.tsx`:

- `components/Nav.tsx` - Fixed transparent nav overlay
- `components/Hero.tsx` - Full-screen video background hero, text bottom-left
- `components/Philosophy.tsx` - "Values" section with sticky heading and scroll-reveal body text (200vh scroll container)
- `components/Services.tsx` - Scroll-locked service carousel with crossfade between 4 services (400vh scroll container)
- `components/Contact.tsx` - CTA section with footer

Section order: Hero > Philosophy (Values) > Services > Contact

## Color Palette

Defined in `app/globals.css` via `@theme inline`:

- `dark` (#111111) - Primary background
- `dark-alt` (#1a1a1a) - Alternating section background
- `light` (#e5e3df) - Off-white, headings and primary text
- `muted` (#9a9890) - Warm gray, body text
- `amber` (#c8a455) - Accent/pop color, used sparingly for emphasis

## Design Principles

- Left-aligned, oversized typography (responsive vw units on hero, text-9xl on section headings)
- Minimal ornamentation, generous whitespace
- Scroll-driven animations via Framer Motion useScroll/useTransform
- Amber color used sparingly for emphasis only
- No decorative elements, no emdashes in copy
- Video hero with dark overlay for text legibility

## Video

Place hero video at `public/video/seavideo.mp4`. Falls back to dark background if absent.

## Framer Motion Notes

- Cubic-bezier easing arrays must be typed as tuples: `[0.22, 1, 0.36, 1] as [number, number, number, number]`
- Use `whileInView` with `viewport={{ once: true }}` for entrance animations
- Use `useScroll`/`useTransform` for scroll-linked effects
