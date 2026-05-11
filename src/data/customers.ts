export type Customer = {
  slug: string
  name: string
  industry: string
  story: string
  metric: { label: string; value: string }[]
  logo?: string
}

export const CUSTOMERS: Customer[] = [
  {
    slug: 'staples',
    name: 'Staples',
    industry: 'Retail · Manufacturing',
    story: 'Replaced manual cash application with Gia AlphaCash, posting 98% of incoming payments straight through to ERP without analyst review.',
    metric: [
      { label: 'Cash-app automation', value: '98%' },
      { label: 'DSO reduction', value: '−12d' },
    ],
  },
  {
    slug: 'cognizant',
    name: 'Cognizant',
    industry: 'IT Services',
    story: 'Standardized AR operations across 24 global entities using the Gia Orchestration Studio — closing the month in 3 days instead of 11.',
    metric: [
      { label: 'Month-end close', value: '3d' },
      { label: 'AR FTE leverage', value: '5×' },
    ],
  },
  {
    slug: 'xylem',
    name: 'Xylem',
    industry: 'Manufacturing',
    story: 'Recovered $14M of trapped trade deductions in the first 9 months by deploying Gia’s root-cause classifier on the deduction queue.',
    metric: [
      { label: 'Deductions recovered', value: '$14M' },
      { label: 'Backlog cleared', value: '94%' },
    ],
  },
  {
    slug: 'convatec',
    name: 'ConvaTec',
    industry: 'Medical Device',
    story: 'Cut days-to-cash post-encounter by 11 days through automated payer remittance parsing and AI-driven invoice matching.',
    metric: [
      { label: 'Days-to-cash', value: '−11d' },
      { label: 'ERA touchless', value: '92%' },
    ],
  },
  {
    slug: 'coopervision',
    name: 'CooperVision',
    industry: 'Healthcare',
    story: 'Deployed Gia across 60 country billing entities. Customer EIPP portal moved 70% of routine invoice disputes off the AR team’s desk.',
    metric: [
      { label: 'Dispute volume', value: '−70%' },
      { label: 'Countries live', value: '60' },
    ],
  },
  {
    slug: 'honest-company',
    name: 'The Honest Company',
    industry: 'CPG',
    story: 'Automated retailer chargeback intake and matching. AR team now spends 80% of capacity on strategic accounts instead of clerical follow-up.',
    metric: [
      { label: 'Strategic capacity', value: '80%' },
      { label: 'Chargeback SLA', value: '−6 days' },
    ],
  },
  {
    slug: 'wns',
    name: 'WNS',
    industry: 'Business Process Services',
    story: 'Embedded Gia inside the AR-BPO delivery stack. Customer cash-application accuracy moved from 78% to 97% in two quarters.',
    metric: [
      { label: 'Cash-app accuracy', value: '97%' },
      { label: 'Customer onboarding', value: '−45%' },
    ],
  },
  {
    slug: 'seko',
    name: 'Seko Logistics',
    industry: 'Logistics',
    story: 'Per-shipment touchless billing on 92% of freight invoices. Fuel-surcharge disputes resolved at intake, not at month-end.',
    metric: [
      { label: 'Touchless billing', value: '92%' },
      { label: 'Dispute aging', value: '−63%' },
    ],
  },
]
