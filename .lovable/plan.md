
# Sterling Finance & Investment — Redesign

A modern institutional redesign in the spirit of Goldman Sachs / Lazard: deep navy, gold accents, refined serif headlines paired with crisp sans-serif body. Existing copy and logo concept retained.

## Design system
- **Palette**: deep navy `#0B1F3A`, ink black, ivory `#F7F4EC`, gold `#C9A96A`, muted slate for secondary text.
- **Type**: serif display (e.g. Playfair Display / Cormorant) for headlines, Inter for body and UI.
- **Feel**: generous whitespace, fine gold dividers, subtle fade/slide-in motion, large editorial imagery (cityscapes, architecture), thin uppercase eyebrows.

## Pages
1. **Home (`/`)**
   - Slim top bar (contact + location), navy main nav with gold underline hover, gold logo lockup.
   - Hero: full-bleed cityscape with dark gradient, eyebrow "The Sterling Capital Advantage", rotating serif headline (4 existing slides), gold CTA.
   - Trust strip: "Cape Town · South Africa · Global Markets" with stat counters (AUM, transactions, sectors, years).
   - **What We Do**: 3-card grid — Asset Management, Brokerage, Investment Banking — gold icon, short blurb, "Learn more" link.
   - **The Sterling Advantage**: 4-pillar editorial section (Market Insight, Decision-maker Access, Execution Track Record, Full-Service).
   - **Sectors covered** marquee/grid.
   - About snippet with portrait imagery + "Read more" → About.
   - Insights/News teaser (3 placeholder cards).
   - CTA band ("Speak with our team") + rich footer (offices, services, legal, social).

2. **About (`/about`)** — firm overview, philosophy, leadership grid, values, timeline.
3. **Asset Management (`/asset-management`)** — service detail, approach, strategies list, CTA.
4. **Brokerage (`/brokerage`)** — service detail, capabilities, markets, CTA.
5. **Investment Banking (`/investment-banking`)** — advisory, M&A, capital markets, sector experience.
6. **Careers (`/careers`)** — culture, open roles list, application CTA.
7. **Contact (`/contact`)** — Cape Town office details, map placeholder, contact form (front-end only).

## Components
- `SiteHeader` (sticky, transparent over hero → solid on scroll), `SiteFooter`, `SectionEyebrow`, `StatCounter`, `ServiceCard`, `PillarCard`, `HeroCarousel`, `CTASection`, `PageHero` (reusable inner-page hero).

## Technical notes
- Add routes in `App.tsx`.
- All colors as HSL tokens in `index.css`; extend Tailwind theme (navy, gold, ivory, ink).
- Import Google Fonts via `index.html`.
- Fix the existing `tsconfig.json` `baseUrl` build error as part of setup.
- Fully responsive, mobile nav via Sheet, smooth scroll, accessible focus states.

No backend needed — contact form will show a toast on submit (can wire to Lovable Cloud later if desired).
