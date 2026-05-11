export type BlogPost = {
  slug: string
  title: string
  dek: string
  category: 'AI for Finance' | 'AR Transformation' | 'Customer Story' | 'Product'
  author: string
  date: string
  readTime: string
}

export const BLOG: BlogPost[] = [
  {
    slug: 'dso-is-a-forecast-not-a-hope',
    title: 'DSO is a forecast, not a hope — and AI just changed who owns it',
    dek: 'Why the conversation between CFO and AR is shifting from explanation to commitment.',
    category: 'AI for Finance',
    author: 'Veena Gundavelli',
    date: 'April 2026',
    readTime: '7 min',
  },
  {
    slug: '98-percent-cash-application-is-not-magic',
    title: '98% touchless cash application is not magic — it’s an architecture choice',
    dek: 'The three remittance-parsing decisions that separate 70% systems from 98% systems.',
    category: 'Product',
    author: 'Raghav Reddy',
    date: 'April 2026',
    readTime: '9 min',
  },
  {
    slug: 'how-xylem-recovered-14m-in-deductions',
    title: 'How Xylem recovered $14M in trapped trade deductions in 9 months',
    dek: 'The root-cause classifier, the queue triage, and the working-capital ROI.',
    category: 'Customer Story',
    author: 'Editorial Team',
    date: 'March 2026',
    readTime: '6 min',
  },
  {
    slug: 'cfo-buying-logic-for-ar-ai',
    title: 'The CFO buying logic for AR AI: outcome, audit, time-to-value',
    dek: 'What enterprise finance leaders actually evaluate when AI vendors pitch them O2C.',
    category: 'AR Transformation',
    author: 'Veena Gundavelli',
    date: 'March 2026',
    readTime: '8 min',
  },
  {
    slug: 'gia-orchestration-studio-launch',
    title: 'Introducing the Gia Agent Orchestration Studio',
    dek: 'A no-code surface to design cross-agent workflows that span Order through Cash.',
    category: 'Product',
    author: 'Thea Marcus',
    date: 'February 2026',
    readTime: '5 min',
  },
  {
    slug: 'why-mid-market-loses-2-percent-revenue',
    title: 'Why mid-market AR teams quietly lose 2% of revenue every year',
    dek: 'The four invisible leak points and how AI surfaces them within 90 days.',
    category: 'AR Transformation',
    author: 'Editorial Team',
    date: 'February 2026',
    readTime: '10 min',
  },
  {
    slug: 'cooper-vision-eipp-rollout',
    title: 'CooperVision rolled out an EIPP portal to 60 countries — here’s what changed',
    dek: 'Dispute volume down 70%, AR team capacity reclaimed for strategic accounts.',
    category: 'Customer Story',
    author: 'Editorial Team',
    date: 'January 2026',
    readTime: '7 min',
  },
  {
    slug: 'enterprise-finance-ai-readiness',
    title: 'Enterprise finance AI readiness: the 12-question diagnostic',
    dek: 'A short framework for ops leaders evaluating where to deploy AI first.',
    category: 'AI for Finance',
    author: 'Raghav Reddy',
    date: 'January 2026',
    readTime: '11 min',
  },
  {
    slug: 'beyond-rpa-why-agents-are-different',
    title: 'Beyond RPA: why AI agents change the AR economics, not just the screen recording',
    dek: 'The architectural difference between scripted automation and decision-capable agents.',
    category: 'AI for Finance',
    author: 'Veena Gundavelli',
    date: 'December 2025',
    readTime: '9 min',
  },
]
