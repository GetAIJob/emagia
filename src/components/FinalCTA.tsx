import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16"
        >
          <div
            className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, transparent 65%)',
            }}
            aria-hidden="true"
          />

          <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium relative z-10">
            Next step
          </p>
          <h2
            id="cta-heading"
            className="mt-3 text-white text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.04] tracking-[-0.022em] font-semibold relative z-10 max-w-3xl"
          >
            Ready to see your Order-to-Cash impact?
          </h2>
          <p className="mt-5 text-[17px] text-soft leading-relaxed relative z-10 max-w-2xl">
            In one 30-minute strategy call, we model your DSO trajectory,
            cash-application gap, and freed working capital — using your real
            AR profile, not a generic benchmark.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 relative z-10">
            <a
              href="mailto:hello@emagia.com?subject=Strategy%20Call%20—%20DSO%20Impact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-ink"
              style={{
                background:
                  'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                boxShadow:
                  '0 14px 38px -10px rgba(34, 211, 238, 0.60), inset 0 1px 0 rgba(255,255,255,0.35)',
              }}
            >
              Book Strategy Call
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#agents"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/[0.08] transition-colors"
            >
              Watch Product Tour
            </a>
          </div>

          <ul className="mt-10 pt-8 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 text-[13.5px] text-soft">
            <li className="flex items-start gap-2.5">
              <Check />
              <span>Live AR data demo, not a slide deck</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check />
              <span>NDA-ready · enterprise security review</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check />
              <span>References from Fortune-500 finance teams</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function Check() {
  return (
    <span
      className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full flex-none"
      style={{
        background:
          'linear-gradient(135deg, rgba(34, 211, 238, 0.30) 0%, rgba(6, 182, 212, 0.20) 100%)',
        border: '1px solid rgba(34,211,238,0.55)',
      }}
      aria-hidden="true"
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M1 5 L3.5 7 L8 2" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
