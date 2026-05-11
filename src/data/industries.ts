export type Industry = {
  slug: string
  name: string
  hook: string
  pains: string[]
  outcome: string
  customerHint?: string
  href?: string
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    hook: 'Channel-heavy AR, complex billing, margin trapped in deductions.',
    pains: [
      'Trade-deduction backlog hiding 1–3% of net revenue',
      'EDI billing mismatches against distributor portals',
      'Cash posting bottlenecks during quarter-end',
    ],
    outcome: 'Recover 1.5% of net revenue from leaking deductions in 12 months',
    customerHint: 'Staples, Xylem, ConvaTec',
    href: '/industries/manufacturing',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    hook: 'Multi-payer remittance, denial follow-ups, regulated AR.',
    pains: [
      'Manual ERA/EOB matching across 12+ payer formats',
      'Denial follow-ups absorbing AR team capacity',
      'HIPAA-aware workflows with full audit chain',
    ],
    outcome: 'Cut days-to-cash post-encounter by 11 days',
    customerHint: 'CooperVision, ConvaTec',
    href: '/industries/healthcare',
  },
  { slug: 'cpg', name: 'CPG', hook: 'Retailer chargebacks and shopper-side deductions at scale.', pains: ['Co-op + advertising deductions', 'Retailer trade-promo mismatches', 'Direct-to-retail invoice disputes'], outcome: 'Reclaim 2–3% of trade spend' },
  { slug: 'logistics-transportation', name: 'Logistics & Transportation', hook: 'High-volume freight invoicing, fuel-surcharge reconciliation.', pains: ['Per-shipment invoicing complexity', 'Fuel-surcharge dispute volume', 'Customer-portal billing reconciliation'], outcome: 'Touchless billing on 90%+ of shipments', customerHint: 'Seko Logistics' },
  { slug: 'medical-device', name: 'Medical Device', hook: 'Complex GPO contracts, distributor pricing tiers.', pains: ['GPO contract-price compliance', 'Distributor chargeback recovery', 'Multi-tier rebate accounting'], outcome: 'Close GPO chargeback gap in 6 months' },
  { slug: 'insurance', name: 'Insurance', hook: 'Premium billing, agent commission AR.', pains: ['Premium-billing reconciliation', 'Agent commission AR aging', 'Regulator-grade audit trail'], outcome: 'Real-time premium-AR visibility' },
  { slug: 'telecom-it', name: 'Telecom & IT', hook: 'Subscription billing, usage-based invoicing.', pains: ['Recurring + usage-based revenue blending', 'Carrier-pair reconciliation', 'Customer self-service portal demand'], outcome: 'Cut billing-disputes ratio by 60%' },
  { slug: 'oil-gas', name: 'Oil & Gas', hook: 'Joint-interest billing, royalty AR, regulated payouts.', pains: ['Joint-interest partner reconciliation', 'Royalty AR transparency', 'Audit-grade cash posting'], outcome: 'Audit-ready close in days, not weeks' },
  { slug: 'staffing', name: 'Staffing', hook: 'Per-placement invoicing, multi-rate contracts.', pains: ['Per-placement timesheet billing', 'Rate-card invoice complexity', 'Client-portal AR transparency'], outcome: 'Bill more placements per AR FTE' },
  { slug: 'media-entertainment', name: 'Media & Entertainment', hook: 'Royalty AR, partner revenue share, syndication billing.', pains: ['Royalty reconciliation', 'Partner revenue-share splits', 'Long-cycle syndication AR'], outcome: 'Close revenue-share gap to under 1%' },
  { slug: 'staffing-2', name: 'Professional Services', hook: 'Project-based billing, milestone AR.', pains: ['Milestone billing accuracy', 'WIP-to-AR conversion speed', 'Client-portal invoice acceptance'], outcome: 'Faster milestone-to-cash conversion' },
  { slug: 'distribution', name: 'Distribution', hook: 'Multi-channel sell-through, retailer deductions.', pains: ['Multi-channel invoicing', 'Retailer trade-deduction backlog', 'Drop-ship reconciliation'], outcome: 'Touchless multi-channel AR' },
]
