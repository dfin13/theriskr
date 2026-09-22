# Rhythm Swimmin’ website

Official public site: https://theriskr.com
Deployment: GitHub Pages, `main` branch, repository root. No build step.

## Edit and preview

- `index.html`: copy, real platform destinations, semantic page structure.
- `site/style.css`: responsive layout and original CSS device frames.
- `site/motion.js`: optional one-time device entrance, respects reduced motion.
- `site/`: optimized real gameplay, approved icon, social image and local fonts.
- `CNAME`, `robots.txt`, `sitemap.xml`: production domain and discovery.

Run `python3 -m http.server 5391` in the repository and open localhost:5391.
No framework, external scripts, analytics, cookies, form backend or Shopify dependencies.
Historical Shopify files remain in the repository for preservation; this page does not load them.

## Availability and launch destinations

Browser beta is live: https://theriskr.itch.io/rhythm-swimmin
Follow development: https://theriskr.itch.io
Steam and iPhone are planned; Android is under consideration. No release date is promised.
Device illustrations contain browser beta screenshots, not a claim of a native iOS release.

When available, replace the Steam status with a genuine Steam wishlist link, and the iPhone status with a public TestFlight invitation. TestFlight external invitations require an approved beta build: https://developer.apple.com/help/app-store-connect/test-a-beta-version/invite-external-testers
App Store pre-order is a later release step, not a substitute for TestFlight.

The owned launch list is not connected. Do not add a pretend email form. Connect a mailing-list provider with confirmed opt-in and a privacy notice first; then use ON THE BLOCKS / GET THE START SIGNAL and collect Steam/iPhone/both preference after successful subscription.

## Asset provenance

Copied from the existing Rhythm Swimmin’ project without changing its files:
- Approved icon: public/icon-512.png, icon-32.png, apple-touch-icon.png.
- Desktop gameplay: work/arms2/shots/new-race.png (real engine screenshot).
- River mobile: work/callouts/shots/after-flow-667x375.png.
- Ocean mobile: work/maps/ocean-50-932x430-race-m.png.
Screenshots are compressed/resized only; no generated gameplay or composited HUD.
- Barlow fonts: public/fonts, licence in site/fonts/OFL.txt.
- Social share card: original typesetting using approved icon and Barlow.
- Phones: original CSS illustrations, no third-party device asset or Apple badge.

## DNS / TLS

The September 22, 2026 outage was domain expiry, not incorrect saved A records. Owner renewed the domain; public DNS then returned to Namecheap BasicDNS and GitHub Pages.
Apex A: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
www CNAME: dfin13.github.io. CNAME file: theriskr.com.
Enable Enforce HTTPS after GitHub issues its certificate; verify apex and www redirects.

## Validation

Responsive browser review at desktop, 768px tablet, 390px phone and 320px narrow phone. Verify loaded images, no horizontal overflow, keyboard focus, anchor navigation, console errors, real outbound links and reduced-motion styles before shipping. Repeat after copy changes.
