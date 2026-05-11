import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'DSO becomes a forecast, not a hope',
    body: 'Gia models every open invoice against historical pay behavior. AR no longer reports DSO — it commits to it.',
  },
  {
    title: 'AR teams stop chasing, start steering',
    body: 'Predictive worklists, auto-personalized outreach, and AI deduction triage turn the team from headcount-bound to leverage-bound.',
  },
  {
    title: 'Cash posts in hours, not days',
    body: '98% straight-through cash application closes the loop between bank, ERP, and customer master with no human in the middle.',
  },
  {
    title: 'Manual work falls away',
    body: 'Lockbox keying, remittance hunting, deduction sorting — automated end-to-end. The week-long month-end close becomes a one-day event.',
  },
  {
    title: 'Enterprise-scale trust',
    body: 'Deployed in finance functions inside Staples, Cognizant, Xylem, ConvaTec, The Honest Company, CooperVision and other Fortune-500 environments.',
  },
]

export default function EnterpriseNarrative() {
  return (
    <section
      id="narrative"
      aria-labelledby="narrative-heading"
      className="relative py-24 md:py-32 border-y border-line"
    >
      <div className="grid-pattern absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
            For CFOs and AR transformation leads
          </p>
          <h2
            id="narrative-heading"
            className="mt-3 text-white text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.06] tracking-[-0.022em] font-semibold"
          >
            Gia is a quantified working-capital lever —{' '}
            <span className="serif italic text-soft">not just a category</span>.
          </h2>
          <p className="mt-5 text-[17px] text-soft leading-relaxed">
            The CFO buying-logic is simple: turn manual AR cost into freed
            cash, predictable forecasts, and a team that scales without
            hiring. Every Gia agent is measured against that translation.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {pillars.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 text-cyan kpi-num text-[14px] font-semibold"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-white text-[20px] sm:text-[22px] font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-[15.5px] text-soft leading-[1.62]">
                {p.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
