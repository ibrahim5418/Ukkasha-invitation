# Engagement Invitation (React + Vite)

A mobile-first scrolling engagement invitation. Guests tap to open a curtain film that glides into
a gilded arch with the couple's names. Below that: a blessing, a scratch-to-reveal date with a
rose-petal shower, a live countdown, the venue with a Google Maps link, a "presence" note and a
closing arch. Rose garlands sit across every section boundary.

```bash
npm install
npm run dev      # http://localhost:5173 (also on your LAN, so you can open it on a phone)
npm run build    # static site in dist/ — upload that folder to any static host
npm run preview  # serve the built dist/ locally
```

## Personalise

Everything you'd change is in **`src/data/invitation.js`**:

| What | Key |
|---|---|
| Names and fathers' names (shown as "S/o …" / "D/o …") | `groom`, `bride` |
| ﷽ at the top of the hero | `bismillah: true / false` |
| Countdown target (ISO, with timezone) | `eventDate` |
| Date and time shown on the scratch card | `date.long`, `date.dayTime` |
| Venue, address and map link | `venue` |
| Closing footer line | `closing.footer` |
| Optional sections (schedule, dress code, other events) | `timeline`, `dressCode`, `festivities` (set to `null` to hide them) |
| All other copy | `hero`, `blessing`, `countdown`, `presence`, `closing` |

Also update the `<title>` in `index.html`.

**Music:** drop an mp3 at `public/music.mp3`. It starts when the guest taps to open, loops, and
pauses when the phone is locked or the tab is hidden. If the file is missing, the music button
hides itself.

**Intro speed:** `PLAYBACK_RATE` at the top of `src/components/Intro.jsx`.

## Media

| File | What it is |
|---|---|
| `public/video/intro.mp4` | Curtain opening + stage-to-hero glide, joined and trimmed at the seam, sped up 1.5×, silent (10.2 s, 4.4 MB) |
| `public/images/intro-poster.jpg` | First frame of the film (the "tap to open" screen) |
| `public/images/hero-bg.jpg` | Last frame of the film with the watermark patched out; the hero background |
| `public/images/scratch-frame.webp` | Gold frame with a transparent outside and window, around the scratch card |
| `public/images/garland.webp` | Rose garland with a transparent background, used between sections |
| `public/music.mp3` | Optional background music (not included) |

The original Google Flow downloads are kept untouched in `assets-source/` and aren't served.
Prompts and processing notes are in [ASSETS.md](ASSETS.md).

### How the film → hero hand-off stays seamless
The intro `<video>` and the hero `<img>` share the `.stage-media` class: `object-fit: cover`,
anchored to the top and zoomed 13% (`scale(1.13)`), which also keeps the generator's corner mark
off-screen. `hero-bg.jpg` is the film's last frame, so when the overlay fades out the two line up
pixel for pixel. The hero then slowly pulls back to `scale(1)`.

### If you replace the images
The CSS has measurements that depend on these images. Re-measure them if you swap an image:

- `.hero-content` in `src/styles.css`: the empty arch area in `hero-bg.jpg`, as % of the image
- `.scratch-frame` `aspect-ratio` and `.sf-window` %: the transparent window in `scratch-frame.webp`

## Structure

```
src/
  data/invitation.js        all copy, dates, venue, media paths
  App.jsx                   page order and garland dividers
  styles.css                the whole design system
  components/               Intro, Hero, ScratchReveal, Countdown, Sections, Petals, MusicToggle, …
  components/art/           SVG defs and a procedural fallback garland
  hooks/useReveal.js        IntersectionObserver for scroll reveals
```
