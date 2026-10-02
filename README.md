# Optics NK – Visión Plus

Angular 21 promotional website for the Bogotá optical business. Black and warm gold editorial design, Spanish copy, responsive navigation, collection filters, WhatsApp and map links, structured business metadata, and a future film slot.

## Run locally

Use Node 22, then `npm ci` and `npm start`. Production: `npm run build`.

## Deployment

Netlify builds `main` with `npm run build`, serving `dist/optics-nk/browser`. Settings and SPA redirects are in `netlify.toml`.

## Add the final video

Place the final film at `public/videos/brand-film.mp4`. In `src/app/app.ts`, set `videoUrl = '/videos/brand-film.mp4'`. The film section automatically switches from the designed coming-soon panel to a native accessible player. Add a subtitle track when available. Commit and push to main to publish.

## Content and assets

Business logo and eyewear image sourced from https://www.instagram.com/opticsnk/ with the business owner's project authorization. Address and current contact number came from that profile: Calle 18 # 8–62, Tower Visión, Local 232, Bogotá; +57 312 418 8114. Historical promotional prices and unverified opening hours are intentionally excluded.

Hero, lens, and contact imagery are AI-generated illustrative campaign assets, not actual inventory, employees, or customer testimonials. Assets and business branding are reserved to their respective owners; public source availability does not grant redistribution rights to third-party brand media.

Images generated with the built-in imagegen tool. Hero prompt: editorial close-up of a Latina adult woman in black optical glasses with gold temples, warm directional light, olive-black studio background, natural skin texture, no logos or text. Product prompt: two-panel studio photography of clear gold-temple optical glasses on travertine and a contact lens on a fingertip, warm gold palette, no brands or text.

## Design rationale

Editorial typography, warm neutrals, generous spacing, restrained motion, visible contact actions, honest content, touch-friendly controls, semantic landmarks, keyboard focus, reduced-motion support. Fashion campaign images are balanced with actual store product imagery.
