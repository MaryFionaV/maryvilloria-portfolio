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
  label: string
  href: string
  iconPath: string
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
  name: 'Mary Fiona Villoria', //[cite: 4]
  firstName: 'Mary Fiona', //[cite: 4]
  handle: '@maryvilloria',
  role: 'Junior Analyst & Freelance Quantitative Researcher', //[cite: 4]
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'BS Statistics Student & Freelance Analyst', //[cite: 4]
  email: 'villoria.maryfiona@gmail.com', //[cite: 4]
  location: 'Iligan, Province Of Lanao Del Norte, PH 7204', //[cite: 4]
  stats: [
    { value: '3', label: 'Core Projects' }, //[cite: 4]
    { value: '0.85', label: 'AUC Score' }, //[cite: 4]
    { value: '100%', label: 'APA 7th Format' }, //[cite: 4]
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Data Analyst.', line2: 'Quantitative Researcher.' },
  hero: {
    body: 'Detail-oriented Statistics student and freelance quantitative analyst with hands-on experience in predictive modeling, survey analytics, and statistical data cleaning.', //[cite: 4]
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Mary Fiona Villoria Portrait',
  },
  socials: [
  {
    url: 'https://linkedin.com/in/your-linkedin-handle',
    iconPath: '/icons/linkedin.svg',
  },
  {
    url: 'https://github.com/MaryFionaV',
    iconPath: '/icons/github.svg',
  },
 ],
}
