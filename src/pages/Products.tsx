import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { KpiStrip } from '@/components/ui/KpiStrip'
import { CtaCard } from '@/components/ui/CtaCard'
import { PRODUCTS } from '@/data/products'
import { useSeo } from '@/lib/useSeo'

export default function Products() {
  useSeo({
    title: 'Products — Emagia Gia Agent Network for Order-to-Cash',
    description:
      'Seven specialized AI agents — Order, Credit, Billing, Collections, Deductions, Cash Application, Payments — orchestrated by Gia. Each measured on the business outcome, not the keystrokes saved.',
  })

  return (
    <>
      <PageHero
        eyebrow="Products · Gia Agent Network"
        title="One AI brain for every step of "
        titleAccent="Order-to-Cash"
        lede={
          <>
            Seven specialized agents own each step of the cash cycle. They share one decision graph, one customer master, one audit trail — and they’re measured on DSO, cash-application rate, and freed working capital, not screens automated.
          </>
        }
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See the Gia platform', to: '/products/gia' }}
      />

      <Section ariaLabelledBy="proof-h2">
        <p className="sr-only" id="proof-h2">Platform proof points</p>
        <KpiStrip
          items={[
            { value: '$8B+', label: 'AR processed annually' },
            { value: '14 days', label: 'Average DSO reduction' },
            { value: '98%', label: 'Cash application automated' },
          ]}
        />
      </Section>

      <Section ariaLabelledBy="agents-h2" className="!pt-0">
        <Eyebrow>The seven agents</Eyebrow>
        <H2 id="agents-h2">Each agent owns an outcome, not a feature.</H2>
        <Lede>
          Click into Gia or any agent to see how the outcome is delivered — the orchestration, the customer-master sync, and the audit chain stay shared across every agent.
        </Lede>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => {
            const Card = (
              <article className="group h-full glass rounded-2xl p-7 transition-all hover:bg-white/[0.06] hover:-translate-y-0.5 hover:border-cyan/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-[20px] font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  {p.href && (
                    <span className="text-cyan text-[13px] font-medium" aria-hidden="true">
                      Explore →
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[15.5px] text-soft leading-[1.55]">{p.outcome}</p>
                <ul className="mt-5 pt-5 border-t border-line space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-[13.5px] text-muted flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1 w-1 rounded-full bg-cyan flex-none"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
            return (
              <motion.li
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {p.href ? <Link to={p.href}>{Card}</Link> : Card}
              </motion.li>
            )
          })}
        </ul>
      </Section>

      <Section>
        <CtaCard
          title="Ready to see your Order-to-Cash impact?"
          body="A 30-minute strategy call models your DSO trajectory, cash-application gap, and freed working capital — on your real AR data."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'See customer outcomes', to: '/customers' }}
        />
      </Section>
    </>
  )
}
