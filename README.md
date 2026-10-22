# Technova Studio

Arabic-first marketing website for Technova Studio, a service line of Technova Solutions. Complete Arabic, English, Turkish, and German versions are included.

## Files

The current palette uses champagne gold for primary actions and the catalog package, warm ivory surfaces, bronze text accents, and deep forest green for the story and contact sections. The consolidated `dist/styles.css` defines the responsive design system.

The header has a complete section bar in the exact page order: Home, Why a website, Languages, Work, Packages, Excel updates, Other services, Process, FAQs, Contact. Mobile uses the same order in a numbered single-column menu. All labels are translated.

- `dist/`: deployable static website, no build or dependencies required.
- `.openai/hosting.json`: private Sites identity and static deployment configuration.
- `serve.mjs`: local preview server, bound to loopback only.

Run `node serve.mjs`, then open the printed URL. Deploy the contents of `dist/` on Netlify or another static host for the eventual company domain.

Run `node check.mjs` to check translation coverage, local asset references, and duplicate HTML IDs. No installation or build step is required.

GitHub source repository: https://github.com/parot-99/technova-studio (private).

## Agreed content

- Company Website: USD 700–900, one-time build.
- Website + Self-Update Catalog: USD 1,000–1,200, one-time build.
- Both include first-year standard domain registration and connection; premium domains quoted separately.
- Annual subscription: hosting, domain renewal, and light maintenance. Amount to be agreed; no amount is advertised.
- Catalog allowances: publication limits will be agreed after infrastructure measurements. Public copy leaves the allowance for the individual quote.
- Product assets: planned to be packaged with customer sites on Netlify; temporary uploads removed only after confirmed successful publication. Separate object storage, if needed, would be priced separately. No infrastructure promises appear in marketing copy.
- This project implements the marketing website only. The Excel interaction is explicitly a local demo; no client upload, server processing, or automatic publishing service is implemented here.
- Customer portal should eventually validate data, preserve the last successful website on failure, isolate customer access, and clean temporary files after successful publishing. Hosting costs and allowances still need measurement.

## Contact and portfolio

- Email: hello@technovasolutions.com (supersedes earlier email).
- WhatsApp: +90 531 887 6651.
- Syrian phone: +963 992 603 120.
- Casa Moderna: https://casamoderna-sy.com/
- Al Nasr: https://alnasrsy.netlify.app/
- Parent: https://technova-solutions.com/

Logo supplied by the owner. Rights reserved to Technova Solutions. No customer testimonials or sales results are invented.

## Motion and messaging update

- Added native-scroll progress, an active section indicator, a floating section menu, return-to-top control, one-time entrance reveals, and project preview controls in the hero.
- Motion respects `prefers-reduced-motion`; no wheel interception, scroll snapping, or forced scroll pacing is used.
- Added a Syria-focused narrative and a respectful response to the “we have done this for 50 years” objection: experience built the business; the website helps new customers discover it.
- Any customer-requested language can be provided. Language selection, content, translation responsibilities, and cost are agreed in the quote. This marketing site itself offers Arabic, English, Turkish, and German, including interface labels and WhatsApp inquiry messages.
- Online-shop expansion is an additional future phase, dependent on suitable payment-provider availability for the specific merchant and separately agreed scope.
- Payment background source: Mastercard / QNB, 19 May 2026, https://www.mastercard.com/news/eemea/en/newsroom/press-releases/en/2026/may/qnb-group-and-mastercard-in-strategic-collaboration-to-expand-cards-and-digital-payments-across-syria/. This confirms infrastructure progress including e-commerce, not universal merchant eligibility or a guaranteed launch date.

## Language selection and related services

- A keyboard-accessible language selector uses bundled flag SVGs plus written language names; flags are decorative and never the only language identifier. The chosen language is remembered locally. On small phones the selected language uses its two-letter code to preserve space.
- Added a separately scoped ERP and management-systems section under Technova Solutions, focused on dyeing and fabric finishing, garment factories, and other manufacturers, warehouses, and distributors. Its call to action links to https://technova-solutions.com/.
- ERP systems are not included in the fixed website package prices.

## Design refinement — October 2026

The hero presents actual Casa Moderna and Al Nasr screenshots, with manual, keyboard-accessible preview buttons. The portfolio shows complete previews in alternating layouts. Arabic typography has its own spacing and line-height; Latin headings use a restrained serif accent. Navigation covers all ten sections in order and uses direct anchor navigation. The mobile menu overlays rather than pushing page content. Section links move keyboard focus to their destination.

Motion is lightweight, never hides content, and respects both the operating-system preference and the footer control. Project previews use WebP; the header and footer use a small logo derivative. Existing logo PNG remains available for social metadata. Pricing, the four supported languages, package-specific WhatsApp links, and the explicitly local Excel demonstration are preserved.
