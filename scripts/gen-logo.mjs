// ⚠️ assets/logo.jpg is now Dan's REAL logo — running this script would
// overwrite it with the SVG recreation. Kept for reference only.
//
// One-off: renders the 24/7 Electrician logo (recreated as SVG) to
// assets/logo.jpg — black "24⚡7 ELECTRICIAN" wordmark with a yellow
// lightning bolt standing in for the slash.
// Run with: node scripts/gen-logo.mjs
// If Dan supplies the real logo file, just overwrite assets/logo.jpg instead.
import sharp from "sharp";

const W = 3060;
const H = 560;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#ffffff"/>

  <!-- 24 -->
  <text x="60" y="370" font-family="Arial, 'Helvetica Neue', sans-serif" font-size="270" font-weight="500" letter-spacing="14" fill="#111111">24</text>

  <!-- lightning bolt (the "/" in 24/7) -->
  <path d="M 560 30 L 425 315 L 515 315 L 445 540 L 665 245 L 568 245 L 672 30 Z" fill="#ffc400"/>

  <!-- 7 ELECTRICIAN -->
  <text x="690" y="370" font-family="Arial, 'Helvetica Neue', sans-serif" font-size="270" font-weight="500" letter-spacing="14" fill="#111111">7 ELECTRICIAN</text>
</svg>`;

await sharp(Buffer.from(svg))
  .flatten({ background: "#ffffff" })
  .jpeg({ quality: 95, mozjpeg: true })
  .toFile("assets/logo.jpg");

console.log("wrote assets/logo.jpg");
