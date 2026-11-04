// Ancestry data for the two family trees.
//
// Each person lists their known `parents` (father first, then mother).
// A branch simply stops where the public record stops — no names are
// guessed or filled in. `undocumentedAbove: true` draws a dashed line up to
// a "not publicly documented" marker so the gap is visible, not hidden.
//
// `line` sets the colour of a family line; parents inherit it unless they
// set their own.

export const MAX_GEN = 3;

export const GENERATION_LABELS = [
  "Self",
  "Parents",
  "Grandparents",
  "Great-grandparents",
  "2× great-grandparents",
  "3× great-grandparents",
  "4× great-grandparents",
  "5× great-grandparents",
];

export const LINES = {
  self: { label: "Self", color: "var(--gold-strong)" },
  ghandy: { label: "Ghandy (Parsi, Bombay)", color: "var(--thread-parsi)" },
  nehru: { label: "Nehru (Kashmiri Pandit)", color: "var(--thread-nehru)" },
  kaul: { label: "Kaul", color: "var(--stamp-red)" },
  maino: { label: "Maino (Italy)", color: "var(--thread-italy)" },
  modi: { label: "Modi (Vadnagar, Gujarat)", color: "var(--thread-parsi)" },
  hiraben: { label: "Hiraben's family", color: "var(--thread-italy)" },
};

export const RAHUL_TREE = {
  name: "Rahul Gandhi or Gandhy? You Decide",
  years: "b. 1970",
  line: "self",
  parents: [
    {
      name: "Rajiv Gandhi ( Gandhi kaise?) ",
      years: "1944 – 1991",
      line: "ghandy",
      parents: [
        {
          name: "Feroze Gandhy",
          sub: "born Ghandy",
          years: "1912 – 1960",
          claim: {
            text: "Gandhi name \u201cstolen\u201d for political gain \u2014 PM Modi",
            title: "PM Modi, Rajya Sabha speech, 5 Feb 2026 — Deccan Herald report",
            href: "https://www.deccanherald.com/india/those-habitual-thieves-stole-gujarati-surname-of-mahatma-gandhi-pm-modis-jibe-at-congress-rahul-reacts-3887857",
          },
          parents: [
            { name: "Jehangir Faredoon Ghandy" },
            { name: "Ratimai Commissariat" },
          ],
        },
        {
          name: "Indira Gandhi( Or Nehru?) Gandhi name stolen?",
          sub: "née Nehru",
          years: "1917 – 1984",
          line: "nehru",
          parents: [
            {
              name: "Jawaharlal Nehru",
              years: "1889 – 1964",
              parents: [
                {
                  name: "Motilal Nehru",
                  years: "1861 – 1931",
                  parents: [
                    {
                      name: "Gangadhar Nehru",
                      years: "1827 – 1861",
                      parents: [
                        {
                          name: "Lakshmi Narayan Nehru",
                          years: "early 1800s",
                          parents: [{ name: "Mansa Ram Nehru", years: "1700s" }],
                        },
                      ],
                    },
                    { name: "Jiorani Devi" },
                  ],
                },
                { name: "Swarup Rani Nehru", years: "1868 – 1938" },
              ],
            },
            {
              name: "Kamala Nehru",
              sub: "née Kaul",
              years: "1899 – 1936",
              line: "kaul",
              parents: [{ name: "Jawaharmal Kaul" }, { name: "Rajpati Kaul" }],
            },
          ],
        },
      ],
    },
    {
      name: "Antonia Maino",
      sub: "known as Sonia Gandhi",
      italian: true,
      years: "b. 1946",
      line: "maino",
      parents: [
        { name: "Stefano Maino", italian: true },
        { name: "Paola Maino", italian: true },
      ],
    },
  ],
};

// Only ancestors named in published sources are shown.
export const MODI_TREE = {
  name: "Narendra Modi",
  years: "b. 1950",
  line: "self",
  parents: [
    {
      name: "Damodardas Mulchand Modi",
      years: "c. 1915 – 1989",
      line: "modi",
      parents: [{ name: "Mulchand Modi", sub: "from his son's patronymic" }],
    },
    { name: "Hiraben Modi", years: "1923 – 2022", line: "hiraben" },
  ],
};

export const SOURCES = [
  { label: "Nehru–Gandhi family", href: "https://en.wikipedia.org/wiki/Nehru%E2%80%93Gandhi_family" },
  { label: "Feroze Gandhi", href: "https://en.wikipedia.org/wiki/Feroze_Gandhi" },
  { label: "Kamala Nehru", href: "https://en.wikipedia.org/wiki/Kamala_Nehru" },
  { label: "Sonia Gandhi", href: "https://en.wikipedia.org/wiki/Sonia_Gandhi" },
  { label: "Narendra Modi", href: "https://en.wikipedia.org/wiki/Narendra_Modi" },
  {
    label: "Deccan Herald: Modi's Rajya Sabha surname remark, 5 Feb 2026",
    href: "https://www.deccanherald.com/india/those-habitual-thieves-stole-gujarati-surname-of-mahatma-gandhi-pm-modis-jibe-at-congress-rahul-reacts-3887857",
  },
  {
    label: "Zee News: Rahul Gandhi's response",
    href: "https://zeenews.india.com/india/sawaalon-se-itni-ghabraahat-rahul-gandhi-counters-pm-modi-after-rajya-sabha-speech-3014122.html",
  },
];
