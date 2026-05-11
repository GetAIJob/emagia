export type Product = {
  slug: string
  name: string
  outcome: string
  features: string[]
  href?: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'order',
    name: 'Order',
    outcome: 'Faster customer onboarding without manual data entry',
    features: ['Customer master sync', 'Tax & compliance checks', 'Touchless order capture'],
  },
  {
    slug: 'credit',
    name: 'Credit',
    outcome: 'Real-time credit decisions that protect cash and revenue',
    features: ['AI risk scoring', 'Automated reviews', 'Dynamic exposure limits'],
  },
  {
    slug: 'billing',
    name: 'Billing',
    outcome: 'Accurate, dispute-free invoices delivered in any channel',
    features: ['Multi-entity billing', 'EIPP portal', 'Auto-reconciled adjustments'],
  },
  {
    slug: 'collections',
    name: 'Collections',
    outcome: 'AR teams collecting 3× more, without hiring',
    features: ['Predictive worklists', 'Auto-personalized dunning', 'Promise-to-pay tracking'],
    href: '/products/collections',
  },
  {
    slug: 'deductions',
    name: 'Deductions',
    outcome: 'Recover leaking margin trapped in unresolved short-pays',
    features: ['Root-cause classifier', 'Trade-deduction matching', 'Workflow recovery'],
  },
  {
    slug: 'cash-application',
    name: 'Cash Application',
    outcome: '98% of cash auto-posted within hours, not days',
    features: ['Multi-format remittance parsing', 'AI invoice matching', 'Straight-through to ERP'],
    href: '/products/cash-application',
  },
  {
    slug: 'payments',
    name: 'Payments',
    outcome: 'A single global rail for receiving and reconciling',
    features: ['Multi-method acceptance', 'Treasury-grade fraud controls', 'Real-time posting'],
  },
  {
    slug: 'gia',
    name: 'Gia Agent Network',
    outcome: 'One AI brain orchestrating every Order-to-Cash step',
    features: ['Cross-agent workflows', 'Agent orchestration studio', 'Out-of-the-box ERP connectors'],
    href: '/products/gia',
  },
]
