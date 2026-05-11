import { motion } from 'framer-motion'

import staples from '@/assets/logos/staples.svg'
import cognizant from '@/assets/logos/cognizant.svg'
import convatec from '@/assets/logos/convatec.svg'
import coopervision from '@/assets/logos/coopervision.svg'
import honestCo from '@/assets/logos/honest-company.svg'
import xylem from '@/assets/logos/xylem.svg'
import wns from '@/assets/logos/wns.svg'
import seko from '@/assets/logos/seko.svg'

const kpis = [
  { value: '$8B+', label: 'AR processed annually' },
  { value: '14 days', label: 'Average DSO reduction' },
  { value: '98%', label: 'Cash application automated' },
]

const logos = [
  { src: staples, alt: 'Staples — Emagia customer' },
  { src: cognizant, alt: 'Cognizant — Emagia customer' },
  { src: convatec, alt: 'ConvaTec — Emagia customer' },
  { src: honestCo, alt: 'The Honest Company — Emagia customer' },
  { src: xylem, alt: 'Xylem — Emagia customer' },
  { src: coopervision, alt: 'CooperVision — Emagia customer' },
  { src: wns, alt: 'WNS — Emagia customer' },
  { src: seko, alt: 'Seko Logistics — Emagia customer' },
]

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function ProofBar() {
  return (
    <section
      id="proof"
      aria-label="Enterprise proof and KPIs"
      className="relative py-16 md:py-20 border-y border-line"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {kpis.map((k, i) => (
            <motion.li
              key={k.label}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              className="relative glass rounded-2xl p-7"
            >
              <div className="cyan-rule absolute top-0 left-6 right-6" aria-hidden="true" />
              <p className="kpi-num text-white text-[40px] sm:text-[44px] font-semibold leading-none">
                {k.value}
              </p>
              <p className="mt-3 text-soft text-[14.5px]">{k.label}</p>
            </motion.li>
          ))}
        </ul>

        <figure className="mt-14">
          <figcaption className="text-[12.5px] uppercase tracking-[0.18em] text-muted text-center">
            Trusted by global finance teams
          </figcaption>
          <ul
            aria-label="Selected Emagia customers"
            className="mt-7 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-7 items-center"
          >
            {logos.map((l) => (
              <li key={l.alt} className="flex items-center justify-center">
                <img
                  src={l.src}
                  alt={l.alt}
                  loading="lazy"
                  width="120"
                  height="32"
                  className="max-h-7 w-auto opacity-65 hover:opacity-100 transition-opacity"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </li>
            ))}
          </ul>
        </figure>

        <motion.figure
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={3}
          className="mt-14 max-w-3xl mx-auto glass rounded-2xl p-7 sm:p-8 text-center"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            className="mx-auto text-cyan opacity-80"
            aria-hidden="true"
          >
            <path
              d="M3 9C3 5 6 3 9 3V6.5C7.5 6.5 6.5 7.5 6.5 9H9V14H3V9ZM13 9C13 5 16 3 19 3V6.5C17.5 6.5 16.5 7.5 16.5 9H19V14H13V9Z"
              fill="currentColor"
            />
          </svg>
          <blockquote className="mt-4 serif text-white text-[22px] sm:text-[26px] leading-[1.35]">
            “Gia cut our DSO by 11 days in the first quarter. The board asks
            for the dashboard now, not the AR report.”
          </blockquote>
          <figcaption className="mt-5 text-[13.5px] text-muted">
            VP Finance · Fortune-500 manufacturing customer
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
