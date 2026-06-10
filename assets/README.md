# assets/

Drop brand files here.

- **`logo.jpg`** — the 24/7 Electrician logo. It gets composited onto a white
  card in the top-left of every flyer. The committed file is a code-recreated
  SVG copy (regenerate with `node scripts/gen-logo.mjs`); if you have the real
  logo file, just overwrite `logo.jpg` with it. A square or wide logo on a
  transparent/white background works best. **Until this file exists, posts
  ship unbranded** (the agent logs a warning and continues — it won't crash).

The brand-frame color is set in [`src/lib/logo.ts`](../src/lib/logo.ts)
(`FRAME_COLOR`) — change it to match your brand.
