import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  lede,
  primaryCta,
  secondaryCta,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  titleAccent?: ReactNode
  lede: ReactNode
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  aside?: ReactNode
}) {
  return (
    <section
      aria-label="Page hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
    >
      <div className="grid-pattern absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 211, 238, 0.18) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...reveal(0)} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[12.5px] font-medium text-soft tracking-wide">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: '#22d3ee', boxShadow: '0 0 12px #22d3ee' }}
            aria-hidden="true"
          />
          {eyebrow}
        </motion.div>

        <div className="mt-7 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className={aside ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <motion.h1
              {...reveal(0.08)}
              className="text-white text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] tracking-[-0.022em] font-semibold"
            >
              {title}
              {titleAccent && <span className="text-cyan">{titleAccent}</span>}
            </motion.h1>

            <motion.div {...reveal(0.16)} className="mt-6 max-w-2xl text-[17px] sm:text-[19px] leading-[1.55] text-soft">
              {lede}
            </motion.div>

            {(primaryCta || secondaryCta) && (
              <motion.div {...reveal(0.24)} className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {primaryCta && (
                  <Link
                    to={primaryCta.to}
                    className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-ink"
                    style={{
                      background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                      boxShadow:
                        '0 14px 38px -10px rgba(34, 211, 238, 0.60), inset 0 1px 0 rgba(255,255,255,0.35)',
                    }}
                  >
                    {primaryCta.label}
                    <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    to={secondaryCta.to}
                    className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/[0.08] transition-colors"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          {aside && (
            <motion.aside {...reveal(0.2)} className="lg:col-span-5 lg:mt-3">
              {aside}
            </motion.aside>
          )}
        </div>
      </div>
    </section>
  )
}
