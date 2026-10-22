# Refinement verification — 22 October 2026

## Implementation

- Preserved the static HTML/CSS/JavaScript architecture, section IDs, pricing, contact links, four languages, and local-only Excel demo.
- Replaced the generic hero illustration with manual previews of the actual Casa Moderna and Al Nasr projects. Captured their live homepages and optimized the assets as WebP.
- Consolidated palette and responsive styles. Refined Arabic typography independently, added a Latin serif accent, and introduced alternating portfolio layouts.
- Kept every navigation item in document order. Mobile navigation no longer pushes the document; section navigation also places keyboard focus at the destination.
- Replaced opacity-hidden entrances and looping motion with short, optional movement. Added a persistent reduce-motion control; the system preference always takes priority.
- Added a table caption, required input, persistent input help, canonical metadata, and smaller logo asset.

## Verified

- JavaScript syntax and static checks: 168 visible translation keys, 204 English keys covered in Turkish/German, valid local assets, unique IDs, valid section targets, and matching desktop/mobile section order.
- Actual browser review of Arabic and English desktop, Arabic tablet/mobile, and German mobile. Inspected hero, story, languages, projects, pricing, Excel, systems, process, FAQ, and contact/footer.
- DOM layout checks in Arabic, English, Turkish, and German at 320, 390, 768, 1024, 1440, and 1920 CSS viewport pixels: no document horizontal overflow.
- Project preview switch, keyboard language selection, menu Escape and focus return, menu closure and destination focus after anchor navigation.
- Excel demo rejects zero and empty input; valid updates change the displayed price and announce success.
- Native FAQ opens with the keyboard. Catalog package selection updates the inquiry text and WhatsApp URL without sending a message.
- Reduce-motion control updates its accessible state and the motion override class. CSS also disables animation under the OS preference.
- Browser console: no captured errors or warnings during the checks.

## Limits

This is a marketing website, not a working customer upload/publishing backend. Live payment availability remains provider-dependent. Checks used the app's Chromium browser; separate Safari/Firefox and physical-device testing, field Core Web Vitals, and a full assistive-technology audit were not performed. Private hosted QA was used because the local browser preview was unreachable.
