import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Data Preparation',
    body: 'I organize, encode, and clean your raw survey data to ensure it is perfectly formatted for accurate statistical testing.',
    Icon: MagnetStraight,
    chips: ['Data Cleaning', 'Encoding', 'Excel', 'Structuring'],
  },
  {
    index: '02',
    label: 'Statistical Analysis',
    body: 'I run rigorous descriptive and inferential tests, alongside full assumption and diagnostic checks for experimental designs.',
    Icon: Timer,
    chips: ['R', 'SPSS', 'Jamovi', 'Diagnostics'],
  },
  {
    index: '03',
    label: 'Chapter 4 Writing',
    body: 'I translate the raw mathematical outputs into strict APA 7th Edition tables and defense-ready narrative interpretations.',
    Icon: Trophy,
    chips: ['APA 7th', 'Narrative', 'Word', 'Defense-Ready'],
  },
]

/* ---------- The services ---------- */

// Tool marks from /public/icons. Swap the actual image files in your public folder to match these paths!
const R_LANG = '/icons/ai/react.svg' // Placeholder - swap with R logo
const SPSS = '/icons/ai/tailwindcss.svg' // Placeholder - swap with SPSS logo
const JAMOVI = '/icons/ai/vite.svg' // Placeholder - swap with Jamovi logo
const EXCEL = '/icons/googleworkspace.svg' // Placeholder - swap with Excel logo
const WORD = '/icons/slack.svg' // Placeholder - swap with Word logo

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Descriptive Statistics Only',
    description: 'Strictly for Descriptive Statistics (Frequency, Percentage, Mean, Standard Deviation).',
    chip: '₱300 – ₱500',
    logos: [EXCEL, SPSS, WORD],
    bullets: [
      'Option 1 (₱500): Computations, complete APA format tables, plus short descriptive conclusions under each table[cite: 3].',
      'Option 2 (₱400): Computations and APA tables only (kayo na mag-write sa conclusions)[cite: 3].',
      'Option 3 (₱300): Raw data computation/list of means only (kayo na mag-format sa tables and conclusions)[cite: 3].',
    ],
  },
  {
    index: '02',
    title: 'Inferential Statistics (Add-On / Combined)',
    description: 'For research requiring tests for significant relationships or differences.',
    chip: '+₱500 / ₱1,000',
    logos: [R_LANG, JAMOVI, SPSS],
    bullets: [
      'Inferential Add-on (+₱500): Separate computations and set of APA tables for tests like Pearson r or T-test[cite: 3].',
      'Overall Descriptive and Inferential Package (₱1,000): Full computations and complete APA format tables[cite: 3].',
      'Combined package includes short descriptive conclusions specifically under each descriptive statistics table[cite: 3].',
    ],
  },
  {
    index: '03',
    title: 'Quantitative Chapter 4 Package',
    description: 'The complete Results & Discussion section for your quantitative research paper.',
    chip: '₱1,500 – ₱1,800',
    logos: [R_LANG, SPSS, WORD],
    bullets: [
      'I will personally build the entire Chapter 4 from scratch[cite: 3].',
      'Includes all computations and publication-ready APA tables[cite: 3].',
      'Features the full discussion and paragraphs. Price varies depending on how many categories are involved (₱1,500 - ₱1,800)[cite: 3].',
    ],
  },
  {
    index: '04',
    title: 'Quasi-Experimental Chapter 4 Package',
    description: 'A comprehensive Chapter 4 package tailored for the rigor of quasi-experimental research.',
    chip: '₱1,800',
    logos: [R_LANG, JAMOVI, WORD],
    bullets: [
      'Whole Chapter 4 package dedicated to experimental methodology[cite: 3].',
      'Includes both descriptive and inferential statistics[cite: 3].',
      'Features comprehensive diagnostic and assumption checks (e.g., Normality, Homogeneity)[cite: 3].',
    ],
  },
  {
    index: '05',
    title: 'Data Encoding & Rush Services',
    description: 'Flexible add-ons to meet urgent deadlines and handle raw data entry.',
    chip: 'Variable Rate',
    logos: [EXCEL],
    bullets: [
      'Encoding Fee (₱3 - ₱5.00 per observation/per row): Pricing scales depending on the complexity of the data[cite: 3].',
      'Rush Fee (₱300 - ₱500): Fast-tracked turnaround within a 3 - 4 day window[cite: 3].',
      'Rush availability and final fees depend on negotiation and current schedule bandwidth[cite: 3].',
    ],
  },
]

/** The tool marks, stacked horizontally on white tiles. */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services & Rates</span>
        <h1 className="pgrid__title" id="services-title">
          Statistical Analysis & Chapter 4 Writing.
        </h1>
        <p className="pgrid__lede">
          Friendly, reliable, and standard APA-formatted statistical services tailored to your research needs and student budget.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">My Workflow</span>
            <h2 className="sgrid__method-title" id="method-title">
              Clean. Compute. Write.
              <br />
              <span>A defense-ready process.</span>
            </h2>
            <p className="sgrid__method-sub">
              Every dataset is unique, but a rigorous, step-by-step approach ensures accurate p-values and panel-proof methodology.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Freelance Rate Card.</h2>
            <p className="sgrid__offers-sub">Select the package that fits your thesis requirements.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Data Pipeline</span>
              <h2 className="sgrid__flow-title">Rigorous Assumption Testing.</h2>
              <p className="sgrid__flow-sub">
                Ensuring statistical validity through automated diagnostic checks before interpreting the final model.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
