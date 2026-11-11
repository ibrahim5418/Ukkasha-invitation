# Google Flow guide: images first, then videos

Everything visual was made in Google Flow (labs.google/flow): images first, videos last.
The raw downloads live in `assets-source/` (kept untouched, not served). The processed files the
site uses are in `public/`. See "Processing" at the end.

> Steps 1–3 were already generated when this project was set up and their exact prompts weren't
> recorded. The prompts below for those steps were **reconstructed from the finished images**, so
> use them as a starting point if you need to regenerate. Steps 4–7 are the prompts from the
> invitation template.

| Step | Type | Aspect | Flow mode | Source file |
|---|---|---|---|---|
| 1 | Image | 9:16 | Create image | `assets-source/images/stage.jpg` |
| 2 | Image | 9:16 | Create image + reference (stage) | `assets-source/images/intro-closed.jpg` |
| 3 | Image | 9:16 | Create image + reference (stage) | `assets-source/images/hero-bg.jpg` |
| 4 | Image | 16:9 | Create image + reference (stage) | `assets-source/images/garland.jpg` |
| 5 | Image | 16:9 | Create image + reference (stage) | `assets-source/images/scratch-frame.jpg` |
| 6 | Video | 9:16 | Frames to Video | `assets-source/video/intro-open.mp4` |
| 7 | Video | 9:16 | Frames to Video | `assets-source/video/stage-to-hero.mp4` |

---

## Step 1: `stage.jpg` (reconstructed)
**Image · 9:16 · Create image**

```
Photorealistic luxury wedding stage, front view, perfectly symmetrical. A huge sparkling crystal chandelier with lit candles hangs at the top centre in front of an ornate carved gold baroque wall panel. Below it, a gathered crimson velvet valance with gold fringe, and behind the stage a backdrop of draped burnt-orange velvet lit warmly from below. Crimson velvet theatre curtains are pulled open and tied back at both sides. Tall gold candelabras with lit candles stand at the left and right, and a lush bank of red and white roses with white gladioli and gold leaves runs along the front of a polished wooden stage floor. A band of red roses and gold foliage runs across the very top. Warm, rich, cinematic lighting. No people, no text.
```

## Step 2: `intro-closed.jpg` (reconstructed)
**Image · 9:16 · Create image · Reference: `stage.jpg`**

```
The exact same stage as the reference image, same camera position and framing, but the heavy crimson velvet theatre curtains are fully closed, meeting in a single seam at the exact centre and completely hiding the chandelier and the stage behind them. Keep the band of red roses and gold foliage across the top, the gold candelabras at the sides and the roses along the bottom. Dim, moody, warm light on the velvet folds. Photorealistic. No people, no text.
```

## Step 3: `hero-bg.jpg` (reconstructed)
**Image · 9:16 · Create image · Reference: `stage.jpg`**

```
Use the reference image for its colours, gold style and roses. Photorealistic red velvet wedding backdrop, front view, perfectly symmetrical. A tall gilded arch frame with slim gold columns and ornate carved gold scrollwork in the upper corners; the inside of the arch is a completely EMPTY plain deep-red velvet panel with a soft warm glow in the middle, leaving lots of clear space for text. A small crystal chandelier with lit candles hangs at the top of the arch. Crimson velvet swags with gold fringe across the top under a band of red roses and gold leaves. Gold wall sconces with lit candles on both sides. At the bottom, two lush sprays of red and white roses with white gladioli and gold leaves on the left and right, and a small gold scroll crest at the bottom centre. No text, no letters.
```

---

## Step 4: `garland.jpg`
**Image · 16:9 · Create image · Reference: `stage.jpg`**

```
Use the reference image only for the colours of the roses and gold leaves. Photorealistic horizontal floral garland swag for a luxury wedding invitation, isolated on a plain pure white background, laid out straight across the middle of the image from the left edge to the right edge, drooping slightly in the centre. Lush deep red roses, small white blossoms, dark green leaves and gold-painted fern leaves. The roses are fullest and largest in the centre, tapering to thin trailing leaves at both ends. A few strands of red hanging amaranthus dangle from the centre. Soft natural shadows, front view, ultra detailed. Nothing else in the image, no text.
```

## Step 5: `scratch-frame.jpg`
**Image · 16:9 · Create image · Reference: `stage.jpg`**

```
Use the reference image only for its colours and gold style. Photorealistic landscape ornate wedding frame on a plain pure white background, front view, perfectly symmetrical. A rectangular antique gold baroque frame whose inside is a completely EMPTY plain white rectangle covering about 75% of the width and 60% of the height. Along the top edge, a lush band of red roses and gold foliage with a small crystal chandelier with lit candles at the top centre. Crimson velvet curtain swags drape from both upper corners partway down the sides. Small gold candelabras with lit candles in both lower corners, clusters of red roses at the bottom corners, and a gold scroll crest at the bottom centre. Ultra detailed. No text, no letters.
```

---

## Step 6: `intro-open.mp4`
**Video · 9:16 · Frames to Video · Quality model**
First frame: `intro-closed.jpg` · Last frame: `stage.jpg`

```
Static, locked-off front camera. The closed crimson velvet theatre curtains begin to part from the centre seam, sliding apart horizontally to the left and right, then gathering and tying back at the sides with gold tassels, revealing the brightly lit stage and the sparkling crystal chandelier behind them. The curtains are fully open by about 3 seconds. For the remaining time the camera very slowly pulls back while the chandelier crystals glitter and the candle flames flicker gently. Smooth, graceful, elegant, cinematic, photorealistic. No people, no text.
```

## Step 7: `stage-to-hero.mp4`
**Video · 9:16 · Frames to Video**
First frame: `stage.jpg` · Last frame: `hero-bg.jpg`

```
The camera glides slowly forward and slightly upward toward the crystal chandelier. The gold panel, valance and stage curtains softly dissolve and transform into the framed red velvet panel with the gold arch, while the large chandelier gently rises and shrinks into the smaller chandelier at the top centre. Seamless, dreamy, smooth and cinematic. Photorealistic. No people, no text.
```

---

## Processing (done with ffmpeg + Python/Pillow)

| Output | How it was made |
|---|---|
| `public/video/intro.mp4` | `intro-open.mp4` frames 0–184 (frame 184 matches the stage clip's opening; the rest overshoots) + `stage-to-hero.mp4` from frame 9 (frames 0–4 are frozen, 5–8 near-still). Joined, sped up 1.5× (output 36 fps, so no frames are dropped), audio removed, H.264 High, yuv420p, `+faststart`, 1080×1920, two-pass 3.5 Mb/s. Result is 10.2 s and 4.4 MB. |
| `public/images/intro-poster.jpg` | Exact first frame of `intro.mp4`, JPEG q85 |
| `public/images/hero-bg.jpg` | Exact last frame of `intro.mp4`. The "Veo" mark in the bottom-right corner was patched by cloning the flowers just above it. JPEG q84, 1080×1920, 369 KB |
| `public/images/scratch-frame.webp` | White removed outside the frame and inside the window (flood fill from the edges and from the centre, with soft shadows kept as partial alpha), trimmed, 1100×745, 173 KB. **Transparent window: left 12.2%, right 13.5%, top 23.2%, bottom 19.6%**. The chandelier hangs down to 31.8%. |
| `public/images/garland.webp` | White removed, trimmed so it touches both side edges, 1200×309, 146 KB |

**Arch measured in `hero-bg.jpg`** (1080×1920): the inner gold columns sit at x 18.5% and 81.5%,
the chandelier ends at y 26.6%, and the flower sprays rise to about y 74%. The hero text box uses
`left 21.5% · right 21.5% · top 27.5% · bottom 25%`.

## Not from Flow
- `music.mp3` (optional): put it at `public/music.mp3`, for example a track from Pixabay Music or the YouTube Audio Library.
