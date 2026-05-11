import { motion } from 'framer-motion'
import LogoMarquee from './LogoMarquee'

const kpis = [
  { value: '$8B+', label: 'AR processed annually' },
  { value: '14 days', label: 'Average DSO reduction' },
  { value: '98%', label: 'Cash application automated' },
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
          <figcaption className="text-center">
            <span className="block text-[12.5px] uppercase tracking-[0.18em] text-muted font-medium">
              Trusted by global businesses
            </span>
            <span className="mt-2 block serif text-white text-[22px] sm:text-[26px] leading-tight">
              The world’s leading companies choose Emagia
            </span>
          </figcaption>
          <div className="mt-9">
            <LogoMarquee />
          </div>
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
