export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

// I am keeping this empty since my focus is on quantitative research and data analytics, not mobile apps!
export const mobileApps: MobileApp[] = []

export const webApps: AppProject[] = [
  {
    name: 'Predictive Behavioral & Risk Analytics',
    tagline: 'Isolating key performance drivers with machine learning.',
    description: 'Conducted end-to-end data analysis and engineered a binary classification model in R to isolate key performance drivers. I evaluated 27 demographic and behavioral variables, performed rigorous VIF and Shapiro-Wilk diagnostics, and validated the model on 380+ subject records.',
    accentColor: '#2563EB',
    stats: [
      { value: '380+', label: 'Subject Records' },
      { value: '27', label: 'Variables Tested' },
      { value: '0.85', label: 'AUC Score' },
    ],
    badge: 'R & SPSS',
  },
  {
    name: 'Compensation & Productivity Analytics',
    tagline: 'Optimizing predictive power through linear regression.',
    description: 'Developed and benchmarked multiple linear regression models in R to optimize predictive power. I used an 80/20 train-test cross-validation strategy and focused heavily on translating statistical outputs—like p-values and Odds Ratios—into plain-English, actionable recommendations for clients.',
    accentColor: '#7C3AED',
    stats: [
      { value: '80/20', label: 'Train/Test Split' },
      { value: '100%', label: 'Actionable Insights' },
      { value: 'Regression', label: 'Modeling' },
    ],
    badge: 'Predictive Analytics',
  },
  {
    name: 'Survey Analytics & Visual Reporting',
    tagline: 'Transforming raw survey responses into executive presentations.',
    description: 'Designed survey instruments and processed the raw responses in Excel using Pivot Tables and advanced formulas. I cleaned the datasets, built comparative charts, and formatted all technical reports to strict APA 7th Edition standards.',
    imageSrc: '/placeholders/project-3.jpg',
    accentColor: '#16A34A',
    stats: [
      { value: 'Excel', label: 'Pivot Tables' },
      { value: '100%', label: 'APA 7th Format' },
      { value: 'Custom', label: 'Data Viz' },
    ],
    badge: 'Data Visualization',
  },
  {
    name: 'Quasi-Experimental Chapter 4 Analysis',
    tagline: 'Running ANCOVA and assumption diagnostics in Jamovi.',
    description: 'I handled full data cleaning and percentage standardization across unequal test lengths before running the ANCOVA model in Jamovi[cite: 4]. I executed full diagnostic assumption checks—including Shapiro-Wilk for normality, Levene\'s test for homogeneity of variance, and interaction models for regression slopes—and translated the raw output into clean APA 7th Edition tables and Chapter 4 narratives[cite: 4].',
    imageSrc: '/placeholders/project-4.jpg',
    accentColor: '#0891B2',
    stats: [
      { value: 'Jamovi', label: 'ANCOVA' },
      { value: '100%', label: 'APA 7th Format' },
      { value: '4', label: 'Diagnostics Run' },
    ],
    badge: 'Quasi-Experimental',
  },
  {
    name: 'Quantitative Correlational Research',
    tagline: 'Translating Likert scales and correlational data into defense-ready chapters.',
    description: 'I designed hybrid Likert scales to combine survey options with literature-based interpretations[cite: 4]. I also analyzed correlational data and drafted defense-ready Chapter 4 narratives that professionally addressed statistical limitations, explaining exactly how a small sample size (N=30) impacts p-values and correlation coefficients (r = .007)[cite: 4].',
    accentColor: '#F59E0B',
    stats: [
      { value: 'N=30', label: 'Sample Size' },
      { value: 'Chapter 4', label: 'Full Narrative' },
      { value: 'r & p', label: 'Correlations' },
    ],
    badge: 'Quantitative Research',
  }
]
