# Gandhi, Kahan Se?

A Next.js + Framer Motion rebuild of the animated surname family-tree page.

## Run it

```
npm install
npm run dev
```

Then open http://localhost:3000.

For a real deployment build:

```
npm run build
npm start
```

## Adding real photos

Every person's colour-coded initials badge is a placeholder for a real
photo. Drop an image into `public/photos/` named after the person (see
`public/photos/README.txt` for the exact list of filenames, e.g.
`rahul-gandhi.jpg`, `sonia-gandhi.jpg`). `.jpg`, `.jpeg`, `.png` and `.webp`
all work. No code changes needed — `components/PersonAvatar.js` tries all
four extensions and falls back to the initials badge automatically if a
file isn't found.

## Where things live

- `app/page.js` — the whole page's content and layout
- `data/people.js` — every person's name, initials, badge colour, and photo
  slug in one place
- `components/PersonAvatar.js` — the name + photo-badge component
- `components/TimelineEntry.js` — the scroll-triggered spine/section wrapper
- `components/RevealPanel.js` — the click-to-expand dossier panels
- `components/Stamp.js` — the ink-stamp verdict badges
- `components/MorphWord.js` — the Ghandy → Gandhi flip animation
- `app/globals.css` — the whole design system (colors, type, layout)
