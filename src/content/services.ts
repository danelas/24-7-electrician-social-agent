// The electrician service catalog. The agent rotates through this list (one
// per run, wrapping around forever) and builds a fresh ad flyer each day:
//   AI generates ONLY the photo background → flyer.ts composites the logo,
//   headline, bullets, CALL NOW bar, and service-area badge on top.
//
// CONTENT MIX: ~70% installation / upgrade / commercial work (panel upgrades,
// EV chargers, generators, lighting — the high-value jobs we want to attract)
// / ~30% emergency services (no power, sparking outlets, tripping breakers —
// keeps visibility for urgent searches). The list is interleaved so roughly
// every 4th post is an emergency topic. 11 installation + 4 emergency = 73/27.
//
// Captions are intentionally LONG and educational — they explain the service,
// teach the reader something, and work in natural SEO phrases. No short
// generic filler. Never put prices in captions.
//
// ⚠️ Background prompts must say NO text / words / logos / watermarks — all
// text is drawn by the flyer composer, not the AI. Keep the LEFT side of each
// scene darker/uncluttered so the overlaid headline stays readable.

import type { Service } from "../lib/types.ts";

export const BRAND = {
  phone: "954-602-0050",                 // shown on the flyer
  phoneTel: "+19546020050",
  phoneDisplay: "(954) 602-0050",        // shown in captions
  area: process.env.SERVICE_AREA?.trim() || "Fort Lauderdale & Surrounding Areas",
  tagline: "Residential · Commercial · 24/7 Emergency",
  promo: "VOLT25",
  site: "247electrician.us",
  // GBP-only for now. Add "instagram" / "facebook" here once those are
  // connected on the upload-post profile (and set FACEBOOK_PAGE_ID for FB).
  platforms: ["google_business"] as const,
};

const NO_TEXT =
  "Photorealistic, professional advertising photography. No text, no words, no letters, no numbers, no logos, no watermarks, no signage anywhere in the image. Keep the LEFT third of the frame darker and uncluttered (a shadowed wall or plain surface) so text can be overlaid. Clean, modern, high-end commercial look, soft natural lighting.";

export const SERVICES: Service[] = [
  // ── INSTALLATION / UPGRADE / COMMERCIAL ──────────────────────────────────
  {
    id: "panel-upgrade",
    headline: ["Electrical Panel", "Upgrades"],
    subhead: "Your panel is the heart of your home's electrical system.",
    bullets: ["100A → 200A upgrades", "Fuse box replacement", "Code-compliant & permitted"],
    bgPrompt:
      "A clean, modern residential electrical panel with the door open showing neatly organized breakers and tidy wiring, installed on a bright garage wall, professional electrical work. " + NO_TEXT,
    caption:
      "If your home still runs on a 100-amp panel — or worse, an old fuse box — it was wired for a different era. Today's homes pull far more power: central AC, induction ranges, tankless water heaters, EV chargers, and a dozen always-on devices. An overloaded panel doesn't just trip breakers; aging panels (especially certain recalled brands) are a documented fire risk, and insurance companies increasingly flag them at renewal. A 200-amp panel upgrade gives you the capacity for modern living, clean room for future circuits, and a panel that passes inspection when you sell. 24/7 Electrician handles the whole job — load calculation, utility coordination, permits, and a tidy, labeled finished panel. Learn more at 247electrician.us.",
    hashtags: ["panelupgrade", "electricalpanel", "200ampservice", "electriciannearme", "homeelectrical", "fortlauderdale", "licensedelectrician"],
  },
  {
    id: "ev-charger",
    headline: ["EV Charger", "Installation"],
    subhead: "Charge overnight at home — faster, safer, cheaper.",
    bullets: ["Level 2 home charging", "All brands: Tesla & J1772", "Permits & load checks included"],
    bgPrompt:
      "A sleek electric vehicle parked in a modern home garage plugged into a wall-mounted home EV charging station, soft evening light, upscale residential setting. " + NO_TEXT,
    caption:
      "Bought an EV and still charging off a regular outlet? A standard 120V plug adds roughly 3–5 miles of range per hour — fine for a plug-in hybrid, painful for a full EV. A professionally installed Level 2 charger on a dedicated 240V circuit charges 6–10x faster, so you start every morning full. But it's not just mounting a box: your electrician needs to verify panel capacity, run properly sized wire, install the right breaker, and pull the permit — undersized DIY installs are a leading cause of EV charging failures and melted receptacles. 24/7 Electrician installs and services all major chargers — Tesla Wall Connector, ChargePoint, Emporia, and any J1772 unit — for homes and businesses alike. Visit 247electrician.us.",
    hashtags: ["evcharger", "evcharging", "teslacharger", "level2charger", "electricvehicle", "electriciannearme", "fortlauderdale"],
  },
  {
    id: "generator-install",
    headline: ["Generator", "Installation"],
    subhead: "When the grid goes down, your house doesn't have to.",
    bullets: ["Whole-home standby units", "Transfer switch wiring", "Portable hookup inlets"],
    bgPrompt:
      "A whole-home standby generator unit installed on a concrete pad beside a beautiful Florida house, palm trees in the background, clear sky after a storm, professional installation. " + NO_TEXT,
    caption:
      "In South Florida, it's not if the power goes out — it's when, and for how long. A standby generator with an automatic transfer switch detects the outage and restores power in seconds: AC, refrigerator, medical equipment, internet, all of it. Even a portable generator becomes dramatically safer and more useful with a professionally installed inlet and manual transfer switch — no extension cords through windows, no dangerous back-feeding that can injure utility workers. 24/7 Electrician sizes the generator to your actual load, handles the transfer switch wiring and permits, and tests the full failover so you know it works before hurricane season does. Get ahead of the next storm — 247electrician.us.",
    hashtags: ["generatorinstallation", "standbygenerator", "hurricaneseason", "homegenerator", "transferswitch", "floridaelectrician", "poweroutage"],
  },

  // ── EMERGENCY ────────────────────────────────────────────────────────────
  {
    id: "no-power",
    headline: ["Lost Power?", "We're On Call 24/7"],
    subhead: "Half the house dark? Outlets dead? We find the fault fast.",
    bullets: ["24/7 emergency response", "Expert troubleshooting", "Repairs done on the spot"],
    bgPrompt:
      "A dark home interior at night lit only by a flashlight beam pointed at an electrical panel, dramatic but calm mood, a professional assessing the breakers. " + NO_TEXT,
    caption:
      "Power out in part of your home while the neighbors' lights are on? That's not the utility — that's your electrical system telling you something failed. It might be a tripped breaker, but when a breaker won't reset, when half the house is dead, or when lights dim and surge on their own, the cause can be a failing main breaker, a lost neutral, or a damaged service connection — problems that can destroy appliances and start fires if ignored. Don't keep flipping the breaker and hoping. 24/7 Electrician answers around the clock, traces the fault with proper diagnostic equipment, and makes the repair safely — day, night, weekend, or holiday. Save (954) 602-0050 before you need it.",
    hashtags: ["emergencyelectrician", "powerout", "24hourelectrician", "electriciannearme", "electricalrepair", "fortlauderdale", "247electrician"],
  },

  // ── INSTALLATION / UPGRADE / COMMERCIAL ──────────────────────────────────
  {
    id: "recessed-lighting",
    headline: ["Recessed &", "LED Lighting"],
    subhead: "Transform a room without buying a single piece of furniture.",
    bullets: ["Recessed & accent lighting", "Dimmer & layout design", "Energy-saving LED retrofits"],
    bgPrompt:
      "A beautifully lit modern living room at dusk with warm recessed ceiling lights evenly spaced, contemporary furniture, inviting high-end interior design photography. " + NO_TEXT,
    caption:
      "Nothing changes how a room feels faster than getting the lighting right. Recessed LED lighting adds clean, even illumination without eating ceiling space; dimmers turn one room into three moods; and under-cabinet and accent lighting put light exactly where you work. Done professionally, the layout is planned — fixture spacing matched to ceiling height, color temperature matched to the room's purpose, switching zoned so you control areas independently. And LED retrofits pay for themselves: replacing old can lights and halogens typically cuts that portion of your lighting energy use by 75% or more while eliminating bulb changes for a decade. 24/7 Electrician designs and installs lighting for kitchens, living areas, offices, and outdoor spaces. See more at 247electrician.us.",
    hashtags: ["recessedlighting", "ledlighting", "lightingdesign", "homeimprovement", "kitchenlighting", "electriciannearme", "interiorlighting"],
  },
  {
    id: "rewiring",
    headline: ["Whole-Home", "Rewiring"],
    subhead: "Old wiring doesn't get better with age — it gets dangerous.",
    bullets: ["Aluminum & cloth wiring fixes", "Grounded, code-current circuits", "Minimal-disruption methods"],
    bgPrompt:
      "An electrician's gloved hands pulling fresh new electrical cable through a wall opening in a home under renovation, organized professional jobsite, clean and bright. " + NO_TEXT,
    caption:
      "If your home was built before the mid-1970s and never rewired, there's a real chance it has aluminum branch wiring, cloth-insulated conductors, or ungrounded two-prong circuits — all of which insurers and inspectors flag for good reason. Aluminum connections loosen and overheat over time; old insulation gets brittle and cracks; ungrounded outlets leave electronics and people unprotected. Warning signs: warm switch plates, flickering when appliances start, outlets that don't grip plugs, breakers that trip with no obvious cause. Rewiring doesn't have to mean tearing your house apart — we use fishing techniques and targeted openings to minimize drywall work. 24/7 Electrician evaluates honestly: sometimes you need full rewiring, sometimes targeted repairs and AlumiConn connectors solve it. Start with an inspection — 247electrician.us.",
    hashtags: ["rewiring", "homerewiring", "aluminumwiring", "oldhouse", "electricalsafety", "licensedelectrician", "homeinspection"],
  },
  {
    id: "surge-protection",
    headline: ["Whole-Home", "Surge Protection"],
    subhead: "One lightning strike can take out everything that plugs in.",
    bullets: ["Panel-mounted protection", "Protects AC, appliances & TVs", "Florida lightning-rated"],
    bgPrompt:
      "Dramatic lightning storm over a Florida residential neighborhood at night, a safe well-lit home in the foreground, powerful weather photography. " + NO_TEXT,
    caption:
      "South Florida is the lightning capital of the United States, and those power strips under your desk are not surge protection — most are sacrificial, already degraded, and useless against a serious surge. A whole-home surge protective device installs at your electrical panel and clamps voltage spikes before they reach anything: the AC condenser, refrigerator, washer, TVs, computers, and all the hardwired electronics modern appliances hide inside. With variable-speed AC compressors and smart appliances costing thousands, a panel SPD is some of the cheapest insurance you can buy — and many insurance carriers agree. 24/7 Electrician installs Type 2 surge protection rated for Florida storm season, usually in under two hours. Protect everything at once — 247electrician.us.",
    hashtags: ["surgeprotection", "wholehomesurge", "lightningprotection", "floridastorms", "protectyourhome", "electriciannearme", "hurricaneseason"],
  },

  // ── EMERGENCY ────────────────────────────────────────────────────────────
  {
    id: "sparking-outlet",
    headline: ["Burning Smell or", "Sparking Outlet?"],
    subhead: "That's not a 'keep an eye on it' problem. Call now.",
    bullets: ["Immediate 24/7 response", "Fire-risk diagnosis", "Same-visit repairs"],
    bgPrompt:
      "A close-up of a white electrical wall outlet with subtle scorch discoloration around one socket, dim room lighting creating a serious cautionary mood, sharp detail. " + NO_TEXT,
    caption:
      "A faint fish-like or burning-plastic smell near an outlet. A switch plate that's warm to the touch. A crackle or visible spark when you plug something in. These are the early symptoms of arcing — electricity jumping across a loose or corroded connection — and arcing is how a huge share of residential electrical fires start, often inside the wall where you can't see it. Here's what to do: stop using the outlet, flip its breaker off if you can identify it, and call a licensed electrician — not next week, today. 24/7 Electrician responds around the clock, locates the failing connection or device, and repairs it on the spot. We'd rather check a false alarm than meet you after the fire department does. (954) 602-0050, any hour.",
    hashtags: ["electricalfire", "sparkingoutlet", "burningsmell", "emergencyelectrician", "electricalsafety", "24hourelectrician", "fortlauderdale"],
  },

  // ── INSTALLATION / UPGRADE / COMMERCIAL ──────────────────────────────────
  {
    id: "ceiling-fans",
    headline: ["Ceiling Fan", "Installation"],
    subhead: "Cooler rooms, lower AC bills — installed right the first time.",
    bullets: ["Fan-rated box installation", "Remote & smart controls", "Indoor & outdoor fans"],
    bgPrompt:
      "A stylish modern ceiling fan with wooden blades spinning gently in a bright airy Florida living room with high ceilings, coastal interior design. " + NO_TEXT,
    caption:
      "A ceiling fan lets you raise the thermostat 3–4 degrees without feeling it — in a Florida summer, that's real money off the electric bill every month. But here's what most people don't know: a fan cannot hang from a standard light fixture box. It needs a fan-rated box anchored to the structure, because a wobbling 40-pound spinning object overhead is exactly as bad as it sounds. We install the proper support, balance the fan, and wire the controls the way you want them — separate light and fan switches, remotes, or smart controls that work with your phone. Damp-rated models for patios and lanais too. 24/7 Electrician installs and replaces ceiling fans across the area — 247electrician.us.",
    hashtags: ["ceilingfan", "ceilingfaninstallation", "energysavings", "homeimprovement", "floridaliving", "electriciannearme", "smarthome"],
  },
  {
    id: "commercial-electrical",
    headline: ["Commercial", "Electrical Services"],
    subhead: "Offices, retail & restaurants — minimal downtime, code-right work.",
    bullets: ["Build-outs & added circuits", "Lighting & sign wiring", "Panel & service upgrades"],
    bgPrompt:
      "A modern commercial office space under construction with exposed ceiling conduit and new LED light fixtures being installed, clean professional jobsite, bright and organized. " + NO_TEXT,
    caption:
      "Commercial electrical work is a different discipline: three-phase service, demand load calculations, dedicated equipment circuits, emergency lighting, and inspectors who check all of it. Whether you're building out a new suite, adding circuits for kitchen equipment, upgrading a panel that's out of capacity, or retrofitting the whole space to LED, the job has to be done to code and around your business hours — downtime is money. 24/7 Electrician works with business owners, property managers, and general contractors on build-outs, tenant improvements, lighting retrofits, sign circuits, EV charging for customer parking, and ongoing service work. Licensed, insured, and used to working nights and weekends so your doors open on time. Commercial quotes at 247electrician.us.",
    hashtags: ["commercialelectrician", "commercialelectrical", "tenantbuildout", "ledretrofit", "businessowner", "propertymanagement", "fortlauderdalebusiness"],
  },
  {
    id: "smart-home",
    headline: ["Smart Switches", "& Home Automation"],
    subhead: "Lights, fans & schedules from your phone — wired properly.",
    bullets: ["Smart switches & dimmers", "Video doorbells & cameras", "Works with Alexa & Google"],
    bgPrompt:
      "A hand adjusting a sleek modern smart light switch panel on a wall in a contemporary home, warm ambient lighting in the background, high-end technology aesthetic. " + NO_TEXT,
    caption:
      "Smart bulbs are a toy; smart switches are an upgrade. When the intelligence lives in the switch, the wall control always works, anyone can use it, and every bulb on the circuit becomes schedulable — lights that come on at sunset, fans on timers, a whole-house 'off' when you leave. The catch: many smart switches require a neutral wire that older switch boxes don't have, and stacking dimmers in multi-gang boxes has derating rules most DIYers have never heard of. We sort all of that, install switches that match your platform — Alexa, Google Home, Apple Home, Lutron — and wire video doorbells and cameras with proper power instead of batteries that die monthly. 24/7 Electrician makes smart homes that actually work — 247electrician.us.",
    hashtags: ["smarthome", "smartswitch", "homeautomation", "smartlighting", "videodoorbell", "electriciannearme", "modernhome"],
  },

  // ── EMERGENCY ────────────────────────────────────────────────────────────
  {
    id: "breaker-tripping",
    headline: ["Breaker Keeps", "Tripping?"],
    subhead: "It's not the breaker being annoying. It's doing its job.",
    bullets: ["Root-cause diagnosis", "Overload & short repairs", "24/7 emergency service"],
    bgPrompt:
      "A close-up of a hand resetting a circuit breaker in a residential electrical panel, focused dramatic lighting on the breaker switches, serious professional tone. " + NO_TEXT,
    caption:
      "A breaker that trips once in a while when you run the microwave and toaster together is overloaded. A breaker that trips repeatedly — or instantly snaps back off when you reset it — is protecting you from something: a short circuit, a ground fault, a failing appliance, or an overheating connection. The most dangerous response is the most common one: swapping in a bigger breaker, which removes the protection without fixing the problem and lets the wire itself overheat inside your walls. The right response is diagnosis — measuring the load, isolating the circuit, and finding the actual fault. 24/7 Electrician troubleshoots tripping breakers around the clock and fixes the cause, not the symptom. If your panel has a 'problem breaker' everyone in the house knows about, call (954) 602-0050.",
    hashtags: ["breakertripping", "circuitbreaker", "electricalproblems", "emergencyelectrician", "electricaltroubleshooting", "electriciannearme", "homesafety"],
  },

  // ── INSTALLATION / UPGRADE / COMMERCIAL ──────────────────────────────────
  {
    id: "outdoor-lighting",
    headline: ["Outdoor &", "Landscape Lighting"],
    subhead: "Security, safety & curb appeal — all from the same fixtures.",
    bullets: ["Landscape & path lighting", "Motion & dusk-to-dawn security", "Pool & patio wiring"],
    bgPrompt:
      "A beautiful Florida home exterior at twilight with warm landscape lighting illuminating palm trees, pathway lights along a walkway, and accent uplighting on the facade, magazine-quality real estate photography. " + NO_TEXT,
    caption:
      "Outdoor lighting does three jobs at once. It's security — burglars consistently rank lighting among the top deterrents, and motion-activated floods remove the dark corners they rely on. It's safety — lit paths, steps, and driveways prevent the falls that happen in the dark. And it's the single best curb-appeal upgrade per dollar: uplighting on palms and architecture makes a home look stunning every night. Outdoor work has its own code rules — GFCI protection, in-use covers, wet-rated fixtures, proper burial depth for wiring — and that's where professional installation earns its keep, especially around pools and patios where water and electricity share space. 24/7 Electrician designs and installs landscape, security, and pool-area lighting built for Florida weather. See 247electrician.us.",
    hashtags: ["outdoorlighting", "landscapelighting", "securitylighting", "curbappeal", "floridahomes", "electriciannearme", "patiolighting"],
  },
  {
    id: "electrical-inspection",
    headline: ["Electrical Safety", "Inspections"],
    subhead: "Buying, selling, or insuring? Know what's in your walls.",
    bullets: ["4-point & insurance inspections", "Buyer & seller evaluations", "Written reports & fixes"],
    bgPrompt:
      "A professional electrician with a clipboard inspecting an open residential electrical panel with a flashlight, methodical and trustworthy mood, bright clean garage interior. " + NO_TEXT,
    caption:
      "In Florida, electrical inspections aren't optional paperwork — insurance carriers routinely require a 4-point inspection on older homes, and panels from certain manufacturers (Federal Pacific, Zinsco, some Challenger models) can make a home hard to insure at all. A proper electrical inspection checks the panel and breakers, wiring type and condition, grounding and bonding, GFCI/AFCI protection, and the outlets and connections that age quietly until they fail loudly. For buyers, it's negotiating power and peace of mind; for sellers, fixing issues before listing beats discovering them under contract; for homeowners, it's how electrical fires get prevented instead of investigated. 24/7 Electrician performs thorough inspections with written findings and can make the repairs on the same visit. Schedule at 247electrician.us.",
    hashtags: ["electricalinspection", "4pointinspection", "homeinspection", "homebuyer", "homeinsurance", "electricalsafety", "licensedelectrician"],
  },

  // ── EMERGENCY ────────────────────────────────────────────────────────────
  {
    id: "storm-damage",
    headline: ["Storm Damage &", "Power Restoration"],
    subhead: "After the storm passes, we get your power back safely.",
    bullets: ["Weatherhead & mast repairs", "Post-flood safety checks", "Fast insurance documentation"],
    bgPrompt:
      "A Florida home after a storm with palm fronds scattered on the lawn and an electrician's service van parked in the driveway at golden hour, hopeful recovery mood, no visible people. " + NO_TEXT,
    caption:
      "Here's what most homeowners learn at the worst time: if a storm tears the weatherhead, mast, or meter can off your house, the utility company won't reconnect you until a licensed electrician repairs it — that part of the service is yours, not theirs. And after flooding, energizing soaked outlets, panels, or appliances without an inspection risks shock and fire just when you're trying to recover. 24/7 Electrician handles post-storm work fast: weatherhead and riser repairs, panel replacement after water intrusion, safety inspections before re-energizing, generator hookups while you wait for the grid, and written documentation your insurance adjuster will ask for. After the storm, call (954) 602-0050 — we'll get you back on safely.",
    hashtags: ["stormdamage", "hurricanerecovery", "weatherhead", "powerrestoration", "emergencyelectrician", "floridastorms", "247electrician"],
  },
];
