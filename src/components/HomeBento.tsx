import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Medal,
  Stack,
  Quotes,
} from '@/components/slab'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { profile } from '@/data/profile'

const CLIENTS = [
  { name: 'Undergraduate Researchers', role: 'Thesis Statistical Consultant', work: 'ANCOVA · R & Jamovi · APA 7th' },
  { name: 'Academic Collaborators', role: 'Quantitative Analyst', work: 'Data Cleaning · Pearson r · Chapter 4' },
  { name: 'Freelance Research Clients', role: 'Data Analyst & Technical Writer', work: 'Logistic Regression · Excel · Reporting' },
]

const PHOTOS = [profile.avatarSrc, '/avatar.svg?2', '/avatar.svg?3']

/** The AI systems as a flat list: every leaf of the Projects tree, in order. */
const leaves = (n: StackNode): StackNode[] =>
  n.children?.length ? n.children.flatMap(leaves) : [n]
const AI_BUILDS = leaves(aiStack)

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(AI_BUILDS.length / 2)
  const toolRows = [AI_BUILDS.slice(0, half), AI_BUILDS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Explore predictive behavioral models, ANCOVA diagnostics, and APA 7th Chapter 4 quantitative studies." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            <span className="bento__shot">
              <img src="/placeholders/project-3.jpg" alt="" loading="lazy" decoding="async" />
            </span>
            <span className="bento__shot">
              <img src="/placeholders/project-4.jpg" alt="" loading="lazy" decoding="async" />
            </span>
          </div>
        </div>
      </Link>

      {/* About */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="3rd-year BS Statistics student & freelance quantitative analyst specializing in end-to-end data workflows." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* Systems & Tools */}
      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={Robot} title="Systems & Tools" desc="Interactive tree of my core statistical tech stack across R, SPSS, Jamovi, and Excel." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Consistent Dean's Lister & Sun Life Foundation Scholar with hands-on research expertise." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/placeholders/badge.svg" alt="" width={72} height={72} />
          </span>
        </div>
      </Link>

      {/* Services */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Statistical data cleaning, Chapter 4 narrative writing, and model diagnostics." />
      </Link>

      {/* Testimonials */}
      <Link to="/testimonials" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Testimonials" desc="Real feedback from quantitative research clients and academic collaborators." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Quotes size={14} weight="fill" />
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
