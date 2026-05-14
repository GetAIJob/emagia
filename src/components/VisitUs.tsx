import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FOOTER_SOCIAL } from '@/data/nav'

export default function VisitUs() {
  return (
    <section
      id="visit-us"
      aria-labelledby="visit-us-heading"
      className="relative py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
              Visit us · Global Headquarters
            </p>
            <h2
              id="visit-us-heading"
              className="mt-3 text-white text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.022em] font-semibold"
            >
              The team behind Gia is{' '}
              <span className="serif italic text-soft">a short drive from you</span>.
            </h2>
            <p className="mt-5 text-[17px] text-soft leading-relaxed">
              Stop by in person, or reach the right team from your desk. Either way, the same Emagia people who deploy Gia at Fortune-500 finance teams handle every inbound thread.
            </p>
          </div>

          <motion.address
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 not-italic"
            aria-label="Emagia global headquarters address"
          >
            <div className="glass-strong rounded-3xl p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-muted font-medium">
                    Global Headquarters
                  </p>
                  <p className="mt-4 text-white text-[20px] font-semibold leading-tight">
                    Emagia Corporation
                  </p>
                  <p className="mt-4 text-[15.5px] text-soft leading-[1.7]">
                    4701 Patrick Henry Dr.<br />
                    Building 20<br />
                    Santa Clara, CA 95054<br />
                    United States
                  </p>
                  <a
                    href="https://maps.google.com/?q=4701+Patrick+Henry+Dr+Building+20+Santa+Clara+CA+95054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-cyan text-[13.5px] font-medium hover:underline underline-offset-4"
                  >
                    Open in Google Maps
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-muted font-medium">
                    Direct contact
                  </p>
                  <ul className="mt-4 space-y-4 text-[14.5px] text-soft">
                    <li>
                      <p className="text-muted text-[12px]">General</p>
                      <a href="mailto:info@risesitelab.com" className="hover:text-cyan transition-colors">
                        info@risesitelab.com
                      </a>
                    </li>
                    <li>
                      <p className="text-muted text-[12px]">Press</p>
                      <a href="mailto:info@risesitelab.com" className="hover:text-cyan transition-colors">
                        info@risesitelab.com
                      </a>
                    </li>
                    <li>
                      <p className="text-muted text-[12px]">Alliances</p>
                      <a href="mailto:info@risesitelab.com" className="hover:text-cyan transition-colors">
                        info@risesitelab.com
                      </a>
                    </li>
                    <li>
                      <p className="text-muted text-[12px]">Time zone</p>
                      <span>Pacific Time · open Mon–Fri</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-7 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-muted font-medium mb-3">
                    Connect online
                  </p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[13.5px]">
                    {FOOTER_SOCIAL.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-soft hover:text-cyan transition-colors"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14.5px] font-semibold text-ink whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                    boxShadow: '0 12px 30px -10px rgba(34, 211, 238, 0.55)',
                  }}
                >
                  Book Strategy Call
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.address>
        </div>
      </div>
    </section>
  )
}
