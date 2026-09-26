/**
 * The systems tree shown in the Projects "systems" pop-up (and as chips on
 * Home and in the Projects bento card).
 *
 * This file is the ONLY place node copy lives. AIStack.tsx and AIStackGrid.tsx
 * render whatever shape they find here, so swapping in content is a data edit
 * and never a JSX edit. Keep the exported names and types stable.
 */

import {
  Sparkle,
  Robot,
  Article,
  Database,
  MagnifyingGlass,
  Timer,
  FlowArrow,
  ChatCircleDots
} from '@/components/slab'
import type { Icon } from '@/components/slab'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  what: string
  stack?: string
  status?: StackStatus
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

// Your actual Data Analytics tools
const R_LANG: StackLogo = { src: '/icons/r.svg', name: 'R' }
const SPSS: StackLogo = { src: '/icons/spss.svg', name: 'SPSS' }
const JAMOVI: StackLogo = { src: '/icons/jamovi.svg', name: 'Jamovi' }
const EXCEL: StackLogo = { src: '/icons/excel.svg', name: 'Excel' }

/** Single root: you. Branches are the categories. */
export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: 'Mary Fiona Villoria',
  what: 'Freelance Quantitative Analyst & 3rd-Year Statistics Student.',
  stack: 'Data Analysis & Research',
  children: [
    {
      id: 'cat-predictive',
      Icon: Robot,
      name: 'Predictive & Statistical Modeling',
      what: 'Advanced regression models and classification pipelines to isolate performance drivers.',
      children: [
        {
          id: 'proj-behavioral',
          Icon: MagnifyingGlass,
          logos: [R_LANG, SPSS],
          name: 'Predictive Behavioral Analytics',
          what: 'Evaluated 27 variables and validated binary classification models on 380+ subject records to achieve 0.85 AUC.',
          stack: 'Logistic Regression, VIF, Shapiro-Wilk',
          status: 'Live',
        },
        {
          id: 'proj-compensation',
          Icon: Timer,
          logos: [R_LANG],
          name: 'Compensation Analytics',
          what: 'Evaluated multiple linear regression models using an 80/20 train-test cross-validation strategy.',
          stack: 'Multiple Linear Regression, Train/Test Split',
          status: 'Live',
        },
      ],
    },
    {
      id: 'cat-research',
      Icon: Article,
      name: 'Quantitative & Experimental Research',
      what: 'Defense-ready Chapter 4 methodologies, formatting, and rigorous assumption testing.',
      children: [
        {
          id: 'proj-ancova',
          Icon: Database,
          logos: [R_LANG, JAMOVI],
          name: 'Quasi-Experimental ANCOVA',
          what: 'Standardized raw scores and ran ANCOVA models alongside comprehensive assumption diagnostics in R and Jamovi.',
          stack: 'ANCOVA, Levene\'s Test, Type III Sum of Squares',
          status: 'Live',
        },
        {
          id: 'proj-correlation',
          Icon: FlowArrow,
          logos: [SPSS, EXCEL],
          name: 'Quantitative Correlational Research',
          what: 'Evaluated program impact on learner attendance using descriptive statistics and Pearson\'s r correlation.',
          stack: 'Pearson r, APA 7th Edition Narrative',
          status: 'Live',
        },
      ],
    },
    {
      id: 'cat-visualization',
      Icon: ChatCircleDots,
      name: 'Data Visualization & Reporting',
      what: 'Transforming raw datasets into executive presentations and clear comparative charts.',
      children: [
        {
          id: 'proj-survey',
          Icon: Sparkle,
          logos: [EXCEL],
          name: 'Survey Analytics & Reporting',
          what: 'Processed raw survey datasets in Excel using Pivot Tables and formulas, formatting technical reports to strict APA standards.',
          stack: 'Excel, Pivot Tables, Custom Data Viz',
          status: 'Live',
        },
      ],
    },
  ],
}
