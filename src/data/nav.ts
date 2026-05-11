export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; desc?: string }[]
}

export const PRIMARY_NAV: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Gia Agent Network', href: '/products/gia', desc: 'The autonomous-AR platform' },
      { label: 'Cash Application', href: '/products/cash-application', desc: '98% touchless cash posting' },
      { label: 'Collections', href: '/products/collections', desc: 'Predictive AR collections at scale' },
      { label: 'All products', href: '/products', desc: 'Order, Credit, Billing, Deductions, Payments' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Manufacturing', href: '/industries/manufacturing', desc: 'Complex billing, channel deductions' },
      { label: 'Healthcare', href: '/industries/healthcare', desc: 'Multi-payer reconciliation' },
      { label: 'All industries', href: '/industries', desc: '12 verticals served' },
    ],
  },
  { label: 'Customers', href: '/customers' },
  { label: 'Partners', href: '/partners' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' },
]

export const FOOTER_SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/emagia', icon: 'linkedin' },
  { label: 'X (Twitter)', href: 'https://twitter.com/emagiacorp', icon: 'x' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/EmagiaCorporation', icon: 'youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/emagia.official/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/EmagiaCorporation', icon: 'facebook' },
] as const

export const FOOTER_COLUMNS = [
  {
    title: 'Products',
    items: [
      { label: 'Gia Agent Network', href: '/products/gia' },
      { label: 'Cash Application', href: '/products/cash-application' },
      { label: 'Collections', href: '/products/collections' },
      { label: 'All products', href: '/products' },
    ],
  },
  {
    title: 'Industries',
    items: [
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'All industries', href: '/industries' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Blog', href: '/resources' },
      { label: 'Customers', href: '/customers' },
      { label: 'Partners', href: '/partners' },
      { label: 'Awards', href: '/resources' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Emagia', href: '/company' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
    ],
  },
]
