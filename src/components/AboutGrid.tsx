import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 */

const N8N = { src: '/icons/ai/n8n.svg', name: 'R' }
const ZAPIER = { src: '/icons/ai/zapier.svg', name: 'Jamovi' }
const DOCKER = { src: '/icons/ai/docker.svg', name: 'SPSS' }
const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Excel' }
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
    marks: [N8N, ZAPIER, DOCKER],
  },
  {
    index: '02',
    title: 'Statistical Data Cleaning & Model Diagnostics',
    marks: [CLAUDE, GITHUB],
  },
  {
    index: '03',
    title: 'Survey Analytics & Visual Dashboards',
    marks: [CLAUDE, GWS],
  },
  {
    index: '04',
    title: 'Predictive & Behavioral Data Modeling',
    marks: [N8N, ZAPIER, CLAUDE],
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
        <p className="pgrid__lede">
          Junior Quantitative Analyst & BS Statistics Student at Mindanao State University.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            Translating complex raw data into actionable statistical insights.
            <span> Specializing in predictive modeling, survey analytics, and defense-ready thesis reporting.</span>
          </p>

          <p className="agrid__note">
            <strong>Mindanao State University</strong> student and{' '}
            <span className="agrid__link">
              freelance analyst
            </span>{' '}
            offering end-to-end quantitative research consulting, statistical data cleaning, and APA 7th Chapter 4 reporting for academic and research clients.
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
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
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
                <img src="/icons/cisco-badge.png" alt="Cisco Certification" loading="lazy" decoding="async" onError={(e) => { (e.target as HTMLElement).style.display = 'none' }} />
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
                <span className="agrid__cell-title">Mindanao State University</span>
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
