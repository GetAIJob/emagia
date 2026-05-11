import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.08 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative isolate pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="grid-pattern absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 211, 238, 0.20) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[12.5px] font-medium text-soft tracking-wide"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: '#22d3ee', boxShadow: '0 0 12px #22d3ee' }}
            aria-hidden="true"
          />
          Enterprise Autonomous Finance · Order-to-Cash
        </motion.div>

        <div className="mt-7 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-white text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.025em] font-semibold"
            >
              Cut <span className="text-cyan">DSO by 14 days</span>.{' '}
              <br className="hidden sm:block" />
              Automate <span className="text-cyan">98% of cash application</span>.
            </motion.h1>

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 max-w-2xl text-[17px] sm:text-[19px] leading-[1.55] text-soft"
            >
              AI agents for Enterprise Order-to-Cash — touchless from invoice
              to posted cash. Built for Fortune-500 finance teams who refuse to
              wait quarters for working capital.
            </motion.p>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Link
                to="/contact"
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
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/[0.08] transition-colors"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(34, 211, 238, 0.30) 0%, rgba(6, 182, 212, 0.20) 100%)',
                    border: '1px solid rgba(34,211,238,0.45)',
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1 0 L1 9 L9 4.5 Z" fill="#22d3ee" />
                  </svg>
                </span>
                Watch 90-Second Tour
              </a>
            </motion.div>

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-6 text-[13.5px] text-muted"
            >
              No commitment. Live demo on your own AR data on request.
            </motion.p>
          </div>

          <motion.aside
            variants={reveal}
            initial="hidden"
            animate="visible"
            custom={3}
            aria-label="Working capital snapshot"
            className="lg:col-span-5 lg:mt-3"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between text-[12.5px] text-muted">
                <span className="font-medium tracking-wide uppercase">
                  Working Capital · Live View
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-cyan font-medium"
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: '#22d3ee', boxShadow: '0 0 8px #22d3ee' }}
                  />
                  Live
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-3">
                <div>
                  <p className="text-[12px] text-muted uppercase tracking-wider">DSO</p>
                  <p className="kpi-num text-white text-[44px] font-semibold leading-none mt-1">
                    37<span className="text-[20px] text-muted ml-1">days</span>
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-[12px] text-muted uppercase tracking-wider">vs Q4</p>
                  <p className="kpi-num text-cyan text-[20px] font-semibold mt-1">
                    −14d
                  </p>
                </div>
              </div>

              <div className="mt-5 h-2 rounded-full overflow-hidden bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '72%' }}
                  transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, #22d3ee 0%, #06b6d4 100%)',
                  }}
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="kpi-num text-white text-[22px] font-semibold">98%</p>
                  <p className="text-[11px] text-muted mt-1">Cash-App auto</p>
                </div>
                <div>
                  <p className="kpi-num text-white text-[22px] font-semibold">$42M</p>
                  <p className="text-[11px] text-muted mt-1">Working capital freed</p>
                </div>
                <div>
                  <p className="kpi-num text-white text-[22px] font-semibold">7×</p>
                  <p className="text-[11px] text-muted mt-1">AR team leverage</p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-line text-[12.5px] text-muted leading-relaxed">
                Modeled on the average outcome reported by Fortune-500 Emagia
                customers in their first four quarters.
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
