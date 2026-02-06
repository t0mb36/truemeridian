# True Meridian

Marketing site for True Meridian, a technology consulting firm specializing in AI, Cybersecurity, Product Development, and Digital Transformation.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Video Setup

Place your hero background video at:

```
public/video/seavideo.mp4
```

The hero section will display the video as a full-screen background. If no video is present, it falls back to a dark background.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion 12](https://www.framer.com/motion/)
- TypeScript

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  layout.tsx        Root layout (fonts, metadata)
  page.tsx          Page composition
  globals.css       Theme variables and base styles
components/
  Nav.tsx           Fixed transparent navigation
  Hero.tsx          Full-screen video hero
  Philosophy.tsx    Values section (scroll-reveal)
  Services.tsx      Services carousel (scroll-locked)
  Contact.tsx       CTA and footer
public/
  video/            Hero video assets
```
