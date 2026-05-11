import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { CtaCard } from '@/components/ui/CtaCard'
import { INDUSTRIES } from '@/data/industries'
import { useSeo } from '@/lib/useSeo'

export default function Industries() {
  useSeo({
    title: 'Industries — AI Order-to-Cash for 12 Enterprise Verticals | Emagia',
    description:
      'Emagia’s Gia agents are deployed in Manufacturing, Healthcare, CPG, Logistics, Insurance, Telecom, Medical Device, Oil & Gas, Staffing, Media, Professional Services, and Distribution.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the AR realities of "
        titleAccent="12 enterprise verticals."
        lede="Gia’s decision graph adapts to the AR shape of each industry — trade-deduction recovery in manufacturing, multi-payer remittance in healthcare, fuel-surcharge billing in logistics. Same platform, vertical-shaped intelligence."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See customer outcomes', to: '/customers' }}
      />

      <Section>
        <Eyebrow>Where Gia is deployed today</Eyebrow>
        <H2>12 industries · same platform · industry-shaped intelligence.</H2>
        <Lede>
          Two of the twelve have dedicated deep-dives below. The rest run on the same Gia agent network, configured to the AR realities and ERP stack of the vertical.
        </Lede>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind, i) => {
            const Card = (
              <article className="group h-full glass rounded-2xl p-7 transition-all hover:bg-white/[0.06] hover:-translate-y-0.5 hover:border-cyan/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-[19px] font-semibold tracking-tight">{ind.name}</h3>
                  {ind.href && (
                    <span className="text-cyan text-[13px] font-medium" aria-hidden="true">
                      Explore →
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[15px] text-soft leading-[1.55]">{ind.hook}</p>
                <p className="mt-5 pt-5 border-t border-line text-[13px] text-cyan font-medium">
                  {ind.outcome}
                </p>
                {ind.customerHint && (
                  <p className="mt-2 text-[12.5px] text-muted">Deployed at: {ind.customerHint}</p>
                )}
              </article>
            )
            return (
              <motion.li
                key={ind.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                {ind.href ? <Link to={ind.href}>{Card}</Link> : Card}
              </motion.li>
            )
          })}
        </ul>
      </Section>

      <Section>
        <CtaCard
          title="Your industry isn’t listed?"
          body="Gia is ERP-native and AR-shape-agnostic. If you have an open AR ledger, we can model the deployment in a 30-minute strategy call."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'See all products', to: '/products' }}
        />
      </Section>
    </>
  )
}
