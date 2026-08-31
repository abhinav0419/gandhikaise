"use client";

import { motion } from "framer-motion";
import TimelineEntry, { containerVariants, itemUp } from "@/components/TimelineEntry";
import PersonAvatar from "@/components/PersonAvatar";
import RevealPanel from "@/components/RevealPanel";
import Stamp from "@/components/Stamp";
import MorphWord from "@/components/MorphWord";
import BackToTop from "@/components/BackToTop";
import { PEOPLE } from "@/data/people";

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Page() {
  return (
    <>
      <motion.div className="hero wrap" initial="hidden" animate="show" variants={heroContainer}>
        <motion.span className="eyebrow" variants={heroItem}>
          Case file — surname inquiry
        </motion.span>
        <motion.h1 variants={heroItem}>
          Gandhi, kahan se?
          <span className="hindi">(Gandhi — but from where?)</span>
        </motion.h1>
        <motion.p variants={heroItem}>
          Four generations. Three countries. One surname — inherited, adopted, and married into
          along the way. This is a documented family tree, not a claim that anyone&apos;s name is
          fake.
        </motion.p>
        <motion.div className="highlight hero-highlight" variants={heroItem} style={{ maxWidth: "38rem" }}>
          <span className="highlight-label">Critics say</span>
          <p>
            Critics, including PM Modi, have gone further and argued the spelling change was a
            deliberate political rebrand.
          </p>
        </motion.div>
        <motion.button
          type="button"
          className="cue"
          variants={heroItem}
          onClick={() =>
            document.getElementById("file")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Open the file
          <motion.span
            className="cue-arrow"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.button>
      </motion.div>

      <BackToTop />

      <main id="file">
        <TimelineEntry thread="parsi">
          <motion.div className="card" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>The starting point</motion.span>
            <motion.div className="name" variants={itemUp}>
              <PersonAvatar person={PEOPLE.rahulGandhi} />
            </motion.div>
            <motion.div className="dates" variants={itemUp}>b. 1970</motion.div>
            <motion.p className="role" variants={itemUp}>
              Member of Parliament. Son of{" "}
              <strong><PersonAvatar person={PEOPLE.rajivGandhi} /></strong> and{" "}
              <strong><PersonAvatar person={PEOPLE.soniaGandhi} /></strong>. His surname comes
              from his father&apos;s side — let&apos;s follow it back.
            </motion.p>
          </motion.div>
        </TimelineEntry>

        <TimelineEntry thread="parsi">
          <motion.div className="card" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>Father</motion.span>
            <motion.div className="name" variants={itemUp}>
              <PersonAvatar person={PEOPLE.rajivGandhi} />
            </motion.div>
            <motion.div className="dates" variants={itemUp}>1944 – 1991</motion.div>
            <motion.p className="role" variants={itemUp}>
              Prime Minister of India, 1984–89. Elder son of{" "}
              <strong><PersonAvatar person={PEOPLE.ferozeGandhi} /></strong> and{" "}
              <strong><PersonAvatar person={PEOPLE.indiraGandhi} /></strong>.
            </motion.p>
          </motion.div>
        </TimelineEntry>

        <TimelineEntry thread="parsi">
          <motion.div className="card" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>Paternal grandfather — the pivot</motion.span>
            <motion.div className="name" variants={itemUp}>
              <PersonAvatar person={PEOPLE.ferozeGandhi} />
            </motion.div>
            <motion.div className="dates" variants={itemUp}>1912 – 1960</motion.div>
            <motion.p className="role" variants={itemUp}>
              Journalist and Member of Parliament. Married{" "}
              <strong>
                <PersonAvatar person={PEOPLE.indiraGandhi}>Indira Nehru</PersonAvatar>
              </strong>{" "}
              in 1942.
            </motion.p>

            <motion.div variants={itemUp}>
              <RevealPanel label="See his birth record →">
                <div className="highlight">
                  <span className="highlight-label">Critics say</span>
                  <p>
                    Critics, including PM Modi, have gone further and argued the spelling
                    change was a deliberate political rebrand.
                  </p>
                </div>
                <MorphWord from="GHANDY" to="GANDHI" />
                <p className="fine">
                  Born <strong>Feroze Jehangir Ghandy</strong>, 12 September 1912, in Bombay.
                  Biographies generally use the <em>Ghandy</em> spelling for his birth and early
                  life, and the <em>Gandhi</em> spelling from his adult and political life
                  onward. Historians, on the other hand, are genuinely split on why the spelling
                  shifted — some agree it tracks his closeness with the freedom movement, others
                  describe it simply as a family variant already in use. No source claims the
                  two spellings refer to different people.
                </p>
              </RevealPanel>
            </motion.div>
          </motion.div>

          <motion.div className="card secondary" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>His parents</motion.span>
            <motion.div className="name" style={{ fontSize: "1.15rem" }} variants={itemUp}>
              <PersonAvatar person={PEOPLE.jehangirGhandy} /> &amp;{" "}
              <PersonAvatar person={PEOPLE.ratimaiCommissariat} />
            </motion.div>
            <motion.p className="role" variants={itemUp}>
              A <strong>Parsi (Zoroastrian)</strong> family from Bombay. Jehangir was a marine
              engineer. Feroze was the youngest of five children.
            </motion.p>
            <motion.div className="siblings" variants={itemUp}>
              <span>Dorab</span>
              <span>Faridun</span>
              <span>Tehmina</span>
              <span>Aloo</span>
              <span>Feroze (youngest)</span>
            </motion.div>
          </motion.div>

          <motion.div className="card secondary" variants={containerVariants}>
            <motion.div variants={itemUp}>
              <RevealPanel label="Wasn't Feroze secretly Muslim? →">
                <div className="verdict">
                  <Stamp tone="red">No evidence found</Stamp>
                  <div className="verdict-text">
                    <p className="claim">
                      The claim: a viral story — repeated by some politicians — holds that
                      Feroze&apos;s &quot;real&quot; surname was Khan, and that he was secretly
                      Muslim.
                    </p>
                    <ul className="plain">
                      <li>
                        His documented parents are Jehangir Faredoon Ghandy and Ratimai
                        Commissariat — both Parsi family names.
                      </li>
                      <li>He married Indira Nehru in 1942 in a Hindu ceremony.</li>
                      <li>
                        On his death in 1960 he was cremated, and his ashes interred at the
                        Parsi cemetery in Allahabad — a Zoroastrian practice, not an Islamic one.
                      </li>
                    </ul>
                    <p className="fine">
                      Multiple independent fact-checks have examined and rejected the
                      &quot;Khan&quot; claim. It appears to be a political rumor, not a
                      documented fact.
                    </p>
                  </div>
                </div>
              </RevealPanel>
            </motion.div>
          </motion.div>

          <motion.div className="card secondary" variants={containerVariants}>
            <motion.div variants={itemUp}>
              <RevealPanel label="So — related to Mahatma Gandhi? →">
                <div className="verdict">
                  <Stamp tone="neutral">No blood relation</Stamp>
                  <div className="verdict-text">
                    <p className="fine">
                      Gandhi is a common surname in Gujarat, and this family is not related to
                      Mohandas K. (<PersonAvatar person={PEOPLE.mahatmaGandhi} />) by blood.
                      Feroze is widely reported to have adopted the spelling in admiration of
                      him during the independence struggle, though accounts of the exact story
                      vary.
                    </p>
                  </div>
                </div>
              </RevealPanel>
            </motion.div>
          </motion.div>
        </TimelineEntry>

        <TimelineEntry thread="nehru">
          <motion.div className="card" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>Paternal grandmother</motion.span>
            <motion.div className="name" variants={itemUp}>
              <PersonAvatar person={PEOPLE.indiraGandhi} />{" "}
              <span style={{ fontWeight: 400, color: "var(--ink-soft)", fontSize: "0.7em" }}>
                (née Nehru)
              </span>
            </motion.div>
            <motion.div className="dates" variants={itemUp}>1917 – 1984</motion.div>
            <motion.p className="role" variants={itemUp}>
              Prime Minister of India. Daughter of{" "}
              <strong><PersonAvatar person={PEOPLE.jawaharlalNehru} /></strong> and{" "}
              <strong><PersonAvatar person={PEOPLE.kamalaNehru} /></strong>. Took the Gandhi
              surname on marrying Feroze in 1942, and kept it for the rest of her life and
              career.
            </motion.p>
          </motion.div>

          <motion.div className="card secondary" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>Her side, one generation further</motion.span>
            <motion.p className="role" variants={itemUp}>
              <strong><PersonAvatar person={PEOPLE.jawaharlalNehru} /></strong> (1889–1964),
              independent India&apos;s first Prime Minister, was the son of{" "}
              <strong><PersonAvatar person={PEOPLE.motilalNehru} /></strong> and{" "}
              <strong><PersonAvatar person={PEOPLE.swarupRaniNehru} /></strong> of Allahabad.
            </motion.p>
          </motion.div>
        </TimelineEntry>

        <TimelineEntry thread="italy">
          <motion.div className="card" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>🇮🇹 Meanwhile, in Italy</motion.span>
            <motion.div className="name" variants={itemUp}>
              <PersonAvatar person={PEOPLE.soniaGandhi} />
            </motion.div>
            <motion.div className="dates" variants={itemUp}>b. 1946</motion.div>
            <motion.p className="role" variants={itemUp}>
              Born <strong>Antonia Edvige Albina Maino</strong> in northern Italy (sources vary
              on the order of her given names). Known growing up as <strong>Sonia Maino</strong>.
            </motion.p>
            <motion.p className="fine" variants={itemUp}>
              She met <strong><PersonAvatar person={PEOPLE.rajivGandhi} /></strong> in the late
              1960s while he was a student in Cambridge, England. They married in New Delhi in
              1968, and she took the name Sonia Gandhi. Separately, a widely circulated claim
              about her working as a &quot;bar dancer&quot; before marriage has been debunked —
              she has said she worked as a waitress while studying.
            </motion.p>
          </motion.div>
        </TimelineEntry>

        <TimelineEntry thread="italy">
          <motion.div className="explainer" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>Why &quot;Gandhi&quot; and not &quot;Maino&quot;?</motion.span>
            <motion.h3 style={{ fontSize: "1.15rem" }} variants={itemUp}>
              A name is a convention, not a blood test
            </motion.h3>
            <motion.p className="fine" style={{ marginTop: "0.6rem" }} variants={itemUp}>
              Whose surname a child or spouse takes is a social and legal custom, not a
              biological rule. Rahul&apos;s father&apos;s family contributed the surname Gandhi;
              that convention doesn&apos;t erase his mother&apos;s own family name, Maino, or her
              identity — it&apos;s simply the more common pattern in most (not all) of the world.
            </motion.p>
            <motion.div className="contrast" variants={itemUp}>
              <div>
                <div className="who"><PersonAvatar person={PEOPLE.rahulGandhi} /></div>
                Took his father&apos;s surname: Gandhi.
              </div>
              <div>
                <div className="who"><PersonAvatar person={PEOPLE.priyankaGandhiVadra} /></div>
                Rahul&apos;s sister kept Gandhi and added her husband{" "}
                <PersonAvatar person={PEOPLE.robertVadra} />&apos;s surname when she married —
                same family, different convention.
              </div>
            </motion.div>
          </motion.div>
        </TimelineEntry>

        <TimelineEntry thread="parsi">
          <motion.div className="card secondary" variants={containerVariants}>
            <motion.span className="flag" variants={itemUp}>For completeness — the other branch</motion.span>
            <motion.p className="role" variants={itemUp}>
              Indira and Feroze&apos;s younger son,{" "}
              <strong><PersonAvatar person={PEOPLE.sanjayGandhi} /></strong> (1946–1980), married{" "}
              <strong><PersonAvatar person={PEOPLE.manekaGandhi} /></strong> (later Maneka
              Gandhi). Their son is <strong><PersonAvatar person={PEOPLE.varunGandhi} /></strong> —
              Rahul&apos;s first cousin.
            </motion.p>
          </motion.div>
        </TimelineEntry>
        <TimelineEntry thread="news">
          <motion.div className="clipping" variants={containerVariants}>
            <motion.span className="eyebrow" variants={itemUp}>In the news — February 2026</motion.span>
            <motion.p className="dig" variants={itemUp}>
              &ldquo;Gandhi naam ka chor — Rahul?&rdquo;
            </motion.p>
            <motion.p className="fine" variants={itemUp}>
              On 5 February 2026, replying in the Rajya Sabha, Prime Minister Narendra Modi
              accused the Congress party of being &ldquo;habitual thieves&rdquo; who
              &ldquo;stole&rdquo; Mahatma Gandhi&apos;s Gujarati surname — widely reported as his
              &quot;stolen surname&quot; dig at the Gandhi family.
            </motion.p>
            <motion.blockquote className="reaction" variants={itemUp}>
              <span className="hi">बस सवालों से इतनी घबराहट? मोदी जी सच्चाई से ऐसा डरे, झूठ की शरण ले ली।</span>
              &ldquo;This much panic over a few questions? Modi ji got so frightened of the
              truth that he took refuge in a lie.&rdquo; — Rahul Gandhi, responding on X the same day.
            </motion.blockquote>

            <motion.div variants={itemUp}>
              <RevealPanel label="So — was it actually stolen? →">
                <div className="verdict">
                  <Stamp tone="gold">Inherited, not stolen</Stamp>
                  <div className="verdict-text">
                    <p className="fine">
                      Rahul&apos;s surname reached him through an unbroken, entirely
                      ordinary chain: father → son, for four generations — Feroze (born
                      into the Parsi Ghandy family, above) → Rajiv → Rahul. Mahatma Gandhi
                      belonged to a completely separate, unrelated Gujarati Bania family
                      (see &ldquo;no blood relation,&rdquo; above), so there was never a
                      shared surname to take from him in the first place. Marriage and
                      parentage passing a name down isn&apos;t what &quot;theft&quot;
                      ordinarily means. What&apos;s genuinely still debated by historians —
                      and is the actual subject of this page — is why Feroze&apos;s family
                      spelling shifted from Ghandy to Gandhi in the first place.
                    </p>
                  </div>
                </div>
              </RevealPanel>
            </motion.div>
          </motion.div>
        </TimelineEntry>
      </main>

      <Finale />

      <footer className="wrap">
        <h3>Case file sources</h3>
        <ol>
          <li>
            <a href="https://en.wikipedia.org/wiki/Feroze_Gandhi" target="_blank" rel="noopener">
              Wikipedia — Feroze Gandhi
            </a>
            : birth name, parents, siblings, marriage, death and burial details.
          </li>
          <li>
            <a
              href="https://m.thewire.in/article/history/feroze-gandhi-the-crusader-who-blazed-a-trail-and-rose-above-a-family-name"
              target="_blank"
              rel="noopener"
            >
              The Wire — &quot;Feroze Gandhi, the Crusader Who Blazed a Trail and Rose Above a
              Family Name&quot;
            </a>
            : biographical background and the Ghandy–Gandhi spelling history.
          </li>
          <li>
            <a href="https://enewsinsight.com/fact-check-no-feroze-was-not-khan/" target="_blank" rel="noopener">
              The News Insight — &quot;Fact Check: No, Feroze was not Khan&quot;
            </a>
            : examination and rejection of the &quot;Feroze Khan&quot; / secretly-Muslim claim.
          </li>
          <li>
            <a
              href="https://www.freepressjournal.in/india/is-sonia-gandhis-real-name-antonia-maino-3-facts-and-2-fake-stories-about-interim-congress-president"
              target="_blank"
              rel="noopener"
            >
              Free Press Journal — &quot;Is Sonia Gandhi&apos;s real name Antonia Maino? 3 facts
              and 2 fake stories&quot;
            </a>
            : Sonia Gandhi&apos;s birth name and debunked rumors about her.
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Nehru%E2%80%93Gandhi_family" target="_blank" rel="noopener">
              Wikipedia — Nehru–Gandhi family
            </a>
            : the broader family tree, including the Nehru and Vadra branches.
          </li>
          <li>
            <a
              href="https://www.moneycontrol.com/news/india/when-parsis-became-gandhis-story-behind-rahul-gandhi-s-surname-amid-pm-modi-s-stolen-dig-13815295.html"
              target="_blank"
              rel="noopener"
            >
              Moneycontrol — &quot;When Parsis became Gandhis: story behind Rahul Gandhi&apos;s
              surname amid PM Modi&apos;s stolen dig&quot;
            </a>
            : the news hook for the &quot;In the news&quot; panel above. (Moneycontrol blocks
            our fetch tool, so the quote and date there are corroborated via the Deccan Herald
            report below rather than this article&apos;s text directly — worth reading in full
            yourself.)
          </li>
          <li>
            <a
              href="https://www.deccanherald.com/india/those-habitual-thieves-stole-gujarati-surname-of-mahatma-gandhi-pm-modis-jibe-at-congress-rahul-reacts-3887857"
              target="_blank"
              rel="noopener"
            >
              Deccan Herald — &quot;&apos;Those habitual thieves stole Gujarati surname of
              Mahatma Gandhi&apos;: PM Modi&apos;s jibe at Congress; Rahul reacts&quot;
            </a>
            : source for the 5 February 2026 Rajya Sabha remark and Rahul Gandhi&apos;s reply.
          </li>
        </ol>
        <p className="note">
          This page compiles public biographical record for the purpose of surname etymology. It
          is not intended to question anyone&apos;s identity, religion, or legitimacy — surnames
          change through marriage, migration, and personal choice all the time, and this family
          is no exception.
        </p>
      </footer>
    </>
  );
}

function Finale() {
  const items = [
    { tone: "neutral", label: "Mahatma", caption: "Not this family — no blood relation." },
    { tone: "neutral", label: "Nehru", caption: "Indira's birth family, from Allahabad." },
    { tone: "green", label: "Maino", caption: "Sonia's birth family, from Italy." },
    { tone: "green", label: "Ghandy", caption: "Feroze's documented birth-era spelling, Parsi Bombay." },
    { tone: "gold", label: "Gandhi", caption: "Rahul's inherited surname, through his father Rajiv." },
  ];

  return (
    <motion.section
      className="finale wrap"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.span className="eyebrow" variants={itemUp}>Zoom out</motion.span>
      <motion.h2 variants={itemUp}>One word. Five different families.</motion.h2>
      <div className="stamp-row">
        {items.map((item) => (
          <motion.div className="stamp-item" key={item.label} variants={itemUp}>
            <Stamp tone={item.tone}>{item.label}</Stamp>
            <p>{item.caption}</p>
          </motion.div>
        ))}
      </div>
      <motion.p className="tagline" variants={itemUp}>
        One surname. A much longer story.
      </motion.p>
      <motion.p className="tagline-sub" variants={itemUp}>
        None of this makes anyone&apos;s name less real — it&apos;s just where it came from.
      </motion.p>
    </motion.section>
  );
}
