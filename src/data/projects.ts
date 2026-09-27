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

// Kept empty since the focus is on quantitative research and data analytics
export const mobileApps: MobileApp[] = []

export const webApps: AppProject[] = [
  {
    name: 'Predictive Behavioral & Risk Analytics',
    tagline: 'Isolating key performance drivers with machine learning.',
    description:
      'Conducted end-to-end data analysis and engineered a binary classification model in R to isolate key performance drivers. Evaluated 27 demographic and behavioral variables, performed rigorous VIF and Shapiro-Wilk diagnostics, and validated the model on 380+ subject records.',
    accentColor: '#2563EB',
    stats: [
      { value: '380+', label: 'Subject Records' },
      { value: '27', label: 'Variables Tested' },
      { value: '0.85', label: 'AUC Score' },
    ],
    badge: 'R & ML',
  },
  {
    name: 'Compensation & Productivity Analytics',
    tagline: 'Optimizing predictive power through linear regression.',
    description:
      'Developed and benchmarked multiple linear regression models in R to optimize predictive power. Applied an 80/20 train-test cross-validation strategy and focused on translating statistical outputs—such as p-values and Odds Ratios—into plain-English, actionable executive recommendations.',
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
    description:
      'Designed survey instruments and processed raw responses in Excel using Pivot Tables and advanced formulas. Cleaned datasets, generated comparative data visualizations, and formatted all technical reports to strict APA 7th Edition standards.',
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
    tagline: 'Running ANCOVA and assumption diagnostics in R and Jamovi.',
    description:
      'Handled unequal test item counts across groups by standardizing raw student scores to percentages prior to ANCOVA modeling. Cross-validated R calculations with Jamovi using Type III Sum of Squares and verified all model assumptions, including Shapiro-Wilk for normality, Levene’s test for homogeneity of variance, and homogeneity of regression slopes.',
    imageSrc: '/placeholders/project-4.jpg',
    accentColor: '#0891B2',
    stats: [
      { value: 'R & Jamovi', label: 'ANCOVA' },
      { value: 'Type III', label: 'Sum of Squares' },
      { value: '100%', label: 'Assumptions Met' },
    ],
    badge: 'Quasi-Experimental',
  },
  {
    name: 'Quantitative Correlational Research',
    tagline: 'Evaluating program impact through descriptive and correlational analysis.',
    description:
      'Analyzed program impact on learner attendance using descriptive statistics and Pearson’s r correlation. Authored a defense-ready Chapter 4 narrative with APA-formatted tables, contextualizing statistical realities such as an attendance ceiling effect (94.81%) and small sample size (N=30) on correlation outcomes (r = .007, p = .970).',
    accentColor: '#F59E0B',
    stats: [
      { value: 'N=30', label: 'Sample Size' },
      { value: "Pearson's r", label: 'Correlation' },
      { value: 'Chapter 4', label: 'Full Narrative' },
    ],
    badge: 'Quantitative Research',
  },
]
