import { motion } from 'framer-motion'

type Agent = {
  name: string
  outcome: string
  features: string[]
  icon: (props: { className?: string }) => JSX.Element
}

const Icon = {
  order: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M4 6 H20 V20 H4 Z" />
      <path d="M4 10 H20" />
      <path d="M9 14 H15" />
    </svg>
  ),
  credit: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10 H21" />
      <path d="M7 15 H11" />
    </svg>
  ),
  billing: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M6 3 H18 L18 21 L15 19 L12 21 L9 19 L6 21 Z" />
      <path d="M9 9 H15" />
      <path d="M9 13 H15" />
    </svg>
  ),
  collections: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M4 17 L9 12 L13 16 L20 8" />
      <path d="M15 8 H20 V13" />
    </svg>
  ),
  deductions: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12 H16" />
    </svg>
  ),
  cashapp: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 V17" />
      <path d="M9.5 9.5 C9.5 8 11 7.5 12 7.5 C13 7.5 14.5 8 14.5 9.5 C14.5 11 13 11 12 11.5 C11 12 9.5 12.5 9.5 14 C9.5 15.5 11 16.5 12 16.5 C13 16.5 14.5 16 14.5 14.5" />
    </svg>
  ),
  payments: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="M3 7 H21 V17 H3 Z" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 10 L6 14 M18 10 L18 14" />
    </svg>
  ),
}

const agents: Agent[] = [
  {
    name: 'Order',
    outcome: 'Faster customer onboarding without manual data entry',
    features: ['Customer master sync', 'Tax & compliance checks', 'Touchless order capture'],
    icon: Icon.order,
  },
  {
    name: 'Credit',
    outcome: 'Real-time credit decisions that protect cash and revenue',
    features: ['AI risk scoring', 'Automated reviews', 'Dynamic exposure limits'],
    icon: Icon.credit,
  },
  {
    name: 'Billing',
    outcome: 'Accurate, dispute-free invoices delivered in any channel',
    features: ['Multi-entity billing', 'EIPP portal', 'Auto-reconciled adjustments'],
    icon: Icon.billing,
  },
  {
    name: 'Collections',
    outcome: 'AR teams collecting 3× more, without hiring',
    features: ['Predictive worklists', 'Auto-personalized dunning', 'Promise-to-pay tracking'],
    icon: Icon.collections,
  },
  {
    name: 'Deductions',
    outcome: 'Recover leaking margin trapped in unresolved short-pays',
    features: ['Root-cause classifier', 'Trade-deduction matching', 'Workflow recovery'],
    icon: Icon.deductions,
  },
  {
    name: 'Cash Application',
    outcome: '98% of cash auto-posted within hours, not days',
    features: ['Multi-format remittance parsing', 'AI invoice matching', 'Straight-through to ERP'],
    icon: Icon.cashapp,
  },
  {
    name: 'Payments',
    outcome: 'A single global rail for receiving and reconciling',
    features: ['Multi-method acceptance', 'Treasury-grade fraud controls', 'Real-time posting'],
    icon: Icon.payments,
  },
]

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function GiaAgents() {
  return (
    <section
      id="agents"
      aria-labelledby="agents-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
            The Gia Agent Network
          </p>
          <h2
            id="agents-heading"
            className="mt-3 text-white text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.06] tracking-[-0.022em] font-semibold"
          >
            How Gia agents work across Order-to-Cash
          </h2>
          <p className="mt-5 text-[17px] text-soft leading-relaxed">
            Seven specialized AI agents own each step of the cash cycle —
            measured on the business outcome, not the keystrokes saved.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((a, i) => (
            <motion.li
              key={a.name}
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <article className="group h-full glass rounded-2xl p-7 transition-all hover:bg-white/[0.06] hover:-translate-y-0.5 hover:border-cyan/30">
                <div className="flex items-center gap-4">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-cyan"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(34, 211, 238, 0.16) 0%, rgba(6, 182, 212, 0.06) 100%)',
                      border: '1px solid rgba(34,211,238,0.30)',
                    }}
                    aria-hidden="true"
                  >
                    <a.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-white text-[20px] font-semibold tracking-tight">
                    {a.name}
                  </h3>
                </div>

                <p className="mt-5 text-[15.5px] text-soft leading-[1.55]">
                  {a.outcome}
                </p>

                <ul className="mt-5 pt-5 border-t border-line space-y-2.5">
                  {a.features.map((f) => (
                    <li
                      key={f}
                      className="text-[13.5px] text-muted flex items-start gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1 w-1 rounded-full bg-cyan flex-none"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
