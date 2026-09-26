import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * Define tool icons pointing to images in public/icons/
 */
const R_LANG = { src: '/icons/r.svg', name: 'R' }
const SPSS = { src: '/icons/spss.svg', name: 'SPSS' }
const JAMOVI = { src: '/icons/jamovi.svg', name: 'Jamovi' }
const EXCEL = { src: '/icons/excel.svg', name: 'Excel' }
const PYTHON = { src: '/icons/python.svg', name: 'Python' }
const TABLEAU = { src: '/icons/tableau.svg', name: 'Tableau' }
const SQL = { src: '/icons/sql.svg', name: 'SQL' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Quantitative Research & Chapter 4 Writing',
    marks: [R_LANG, SPSS, JAMOVI],
  },
  {
    index: '02',
    title: 'Statistical Data Cleaning & Model Diagnostics',
    marks: [R_LANG, EXCEL, PYTHON, SQL],
  },
  {
    index: '03',
    title: 'Survey Analytics & Visual Dashboards',
    marks: [EXCEL, TABLEAU, GWS],
  },
  {
    index: '04',
    title: 'Predictive & Behavioral Data Modeling',
    marks: [R_LANG, SPSS, JAMOVI, GITHUB],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            Translating complex raw data into actionable statistical insights.
            <span> Specializing in predictive modeling, survey analytics, and defense-ready thesis reporting.</span>
          </p>

          <p className="agrid__note">
            <strong>BS Statistics Student at MSU-IIT</strong> and{' '}
            <span className="agrid__link">freelance quantitative analyst</span>{' '}
            offering end-to-end research consulting, data cleaning, model diagnostics, and APA 7th reporting.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={`${m.name}-${i}`}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} title={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* Bottom Bar: Credentials, Location & Affiliation */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img 
                  src="/icons/cisco-badge.png" 
                  alt="Cisco Certification" 
                  loading="lazy" 
                  decoding="async" 
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none' }} 
                />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Cisco Data Analytics</span>
                <span className="agrid__cell-meta">Verified Completion</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">PST (GMT+8) · Freelance</span>
              </span>
            </span>

            <div className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">MSU-IIT</span>
                <span className="agrid__cell-meta">Rizal Lister (1.13 CGPA) · Sun Life Scholar</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Main Portrait Column */}
        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt={profile.name}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
