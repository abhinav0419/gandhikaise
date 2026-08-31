// Central registry of everyone named on the page.
//
// `slug` is the filename (without extension) this person's photo should use
// under /public/photos/. Drop in a .jpg, .jpeg, .png or .webp file with that
// exact name and <PersonAvatar> will pick it up automatically — no code
// changes needed. If no file is found, it falls back to the colour-coded
// initials badge.
//
// `color` references a CSS custom property defined in app/globals.css so
// every badge stays on the same palette as the rest of the page.

export const PEOPLE = {
  rahulGandhi: {
    slug: "rahul-gandhi",
    name: "Rahul Gandhi",
    initials: "RaG",
    color: "var(--gold-strong)",
  },
  rajivGandhi: {
    slug: "rajiv-gandhi",
    name: "Rajiv Gandhi",
    initials: "RjG",
    color: "var(--thread-parsi)",
  },
  ferozeGandhi: {
    slug: "feroze-gandhi",
    // Per request: led with his documented birth-era spelling everywhere,
    // with the name he held from his adult/political life in brackets —
    // same pattern used for Sonia Gandhi below.
    name: "Feroze Jehangir Ghandy (Feroze Gandhi)",
    initials: "FeG",
    color: "var(--thread-parsi)",
  },
  jehangirGhandy: {
    slug: "jehangir-faredoon-ghandy",
    name: "Jehangir Faredoon Ghandy",
    initials: "JFG",
    color: "var(--ink-soft)",
  },
  ratimaiCommissariat: {
    slug: "ratimai-commissariat",
    name: "Ratimai Commissariat",
    initials: "RaC",
    color: "var(--ink-soft)",
  },
  indiraGandhi: {
    slug: "indira-gandhi",
    name: "Indira Gandhi",
    initials: "InG",
    color: "var(--thread-nehru)",
  },
  jawaharlalNehru: {
    slug: "jawaharlal-nehru",
    name: "Jawaharlal Nehru",
    initials: "JwN",
    color: "var(--thread-nehru)",
  },
  kamalaNehru: {
    slug: "kamala-nehru",
    name: "Kamala Nehru",
    initials: "KaN",
    color: "var(--ink-soft)",
  },
  motilalNehru: {
    slug: "motilal-nehru",
    name: "Motilal Nehru",
    initials: "MoN",
    color: "var(--ink-soft)",
  },
  swarupRaniNehru: {
    slug: "swarup-rani-nehru",
    name: "Swarup Rani Nehru",
    initials: "SwN",
    color: "var(--ink-soft)",
  },
  // Per request: shown everywhere as her birth name, with "Sonia Gandhi" in
  // brackets rather than as the primary label.
  soniaGandhi: {
    slug: "sonia-gandhi",
    name: "Antonia Edvige Albina Maino (Sonia Gandhi)",
    shortName: "Sonia Gandhi",
    initials: "AEM",
    color: "var(--thread-italy)",
  },
  sanjayGandhi: {
    slug: "sanjay-gandhi",
    name: "Sanjay Gandhi",
    initials: "SjG",
    color: "var(--ink-soft)",
  },
  manekaGandhi: {
    slug: "maneka-gandhi",
    name: "Maneka Anand",
    initials: "MnG",
    color: "var(--ink-soft)",
  },
  varunGandhi: {
    slug: "varun-gandhi",
    name: "Varun Gandhi",
    initials: "VaG",
    color: "var(--ink-soft)",
  },
  priyankaGandhiVadra: {
    slug: "priyanka-gandhi-vadra",
    name: "Priyanka Gandhi Vadra",
    initials: "PGV",
    color: "var(--ink-soft)",
  },
  robertVadra: {
    slug: "robert-vadra",
    name: "Robert Vadra",
    initials: "RoV",
    color: "var(--ink-soft)",
  },
  mahatmaGandhi: {
    slug: "mahatma-gandhi",
    name: "Mahatma Gandhi",
    initials: "MKG",
    color: "var(--stamp-neutral)",
  },
};
