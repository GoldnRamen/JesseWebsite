# JND — 3D Artist / Motion Designer Portfolio

A cinematic Next.js + Tailwind + Framer Motion portfolio starter based on the supplied JND interaction specification.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Replace the demo artwork

The starter uses remote Unsplash images so the interface is immediately visible. Replace the `image` URLs in `app/page.tsx` and `app/work/[id]/page.tsx` with your own optimized WebP/AVIF renders. For production, move assets into `public/images` and use `next/image` for your project media.

## Main motion systems

- First-session cinematic intro
- Staggered hero reveal
- Custom desktop cursor
- Magnetic buttons
- Scroll reveal / masked text
- Portfolio hover states
- Project detail transition
- Responsive mobile menu
- Reduced-motion support
- Lazy-loading for project images

## Next upgrades

1. Add real JND renders and project metadata.
2. Add MP4/WebM motion-project previews with poster images.
3. Add a real fullscreen gallery with keyboard navigation.
4. Add a scroll-linked horizontal experiment section using Framer Motion's `useScroll`.
5. Add your actual CV/social links.
6. Deploy to Vercel or another Next.js host.
