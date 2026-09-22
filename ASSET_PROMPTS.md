# Optional raster assets — generation prompts

Nothing here is required. The site is finished and correct without these files:
every slot has a hand-built CSS fallback. These are upgrades only.

Run the prompts in Astra / Gemini / your image tool of choice, export, drop the
file at the stated path, then uncomment the one CSS line noted under each.

---

## 1. iPhone home-screen wallpaper — `site/wallpaper.jpg`

**Target:** 1170 × 2532 px, JPEG q80, under ~180 KB.

**Prompt**

> A vertical iPhone wallpaper. Looking straight down into deep competition-pool
> water at night. Near-black navy in the lower third, rising to deep teal and a
> single soft cyan light bloom in the upper right, as if one overhead lamp is on.
> Faint caustic light ripples, very low contrast, nothing sharp or busy. No
> swimmers, no lane ropes, no text, no logo, no watermark, no people. Abstract,
> cinematic, quiet, premium — the kind of wallpaper Apple would ship. Fine film
> grain. Colour palette: #04121C, #07354C, #0A5573, #5CD3FF highlights only.

**Wire it up:** in `site/style.css`, in the `.wallpaper` rule, add
`background-image:url('/site/wallpaper.jpg');background-size:cover;` as the first
declaration. The existing gradient stays underneath as the fallback.

---

## 2. Social / OG preview image — `site/social.png` (replaces the current one)

**Target:** 1200 × 630 px, PNG.

**Prompt**

> A 1200×630 social preview card for a game studio. Near-black background
> (#050B10) with a single soft cyan glow in the upper right. Centre-right: one
> photorealistic modern iPhone, brushed-titanium rail, screen showing a dark blue
> home screen with a single glowing app icon. Left third intentionally empty for
> typography. Cinematic studio lighting, believable soft contact shadow,
> fine grain. No text, no logo, no watermark. Restrained, premium, editorial —
> Playdead or Annapurna press-kit energy.

Type is added afterwards in any editor: `THERISKR` small, uppercase, letterspaced
top-left, and `Hit the rhythm. Hit the wall first.` large in Barlow Condensed 800
beneath it. Do **not** let the generator render the text.

---

## Rules

- Do not generate app icons, UI, screenshots or logos — those are real assets and
  live in `Rhythm Swimmin'/work/brand/`.
- No generated humans, faces or swimmers anywhere on the site.
- Every generated file must stay decorative: if it fails to load, the page must
  still look finished.
