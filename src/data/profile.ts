/**
 * YOUR IDENTITY - start here. 
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */ 

export type SocialLink = {
  label?: string
  name?: string
  href?: string
  url?: string
  icon?: string
  iconPath?: string
}

export type Stat = { value: string; label: string }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Mary Fiona Villoria',
  firstName: 'Mary Fiona',
  handle: '@maryvilloria',
  role: 'Junior Analyst & Freelance Quantitative Researcher',
  avatarSrc: '/profile.jpg',
  verifiedLabel: 'BS Statistics Student & Freelance Analyst',
  email: 'villoria.maryfiona@gmail.com',
  location: 'Iligan, Province Of Lanao Del Norte, PH 7204',
  stats: [
    { value: '3', label: 'Core Projects' },
    { value: '0.85', label: 'AUC Score' },
    { value: '100%', label: 'APA 7th Format' },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Data Analyst.', line2: 'Quantitative Researcher.' },
  hero: {
    body: 'Detail-oriented Statistics student and freelance quantitative analyst with hands-on experience in predictive modeling, survey analytics, and statistical data cleaning.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Mary Fiona Villoria Portrait',
  },
  socials: [
    {
      label: 'LinkedIn',
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/your-linkedin-handle',
      icon: '/icons/linkedin.svg',
      iconPath: '/icons/linkedin.svg',
    },
    {
      label: 'GitHub',
      name: 'GitHub',
      href: 'https://github.com/MaryFionaV',
      icon: '/icons/github.svg',
      iconPath: '/icons/github.svg',
    },
  ],
}
