import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { KpiStrip } from '@/components/ui/KpiStrip'
import { CtaCard } from '@/components/ui/CtaCard'
import { useSeo } from '@/lib/useSeo'

const features = [
  { t: 'Predictive collector worklists', d: 'Gia scores every open invoice by pay-probability and routes the right accounts to the right collector at the right hour.' },
  { t: 'Auto-personalized dunning', d: 'Cadence, tone, and channel adapt to customer pay-behavior. No more identical reminder templates blasted to 12,000 accounts.' },
  { t: 'Promise-to-pay tracking', d: 'Every promise is logged with date, amount, and channel; broken promises auto-escalate without manual follow-up.' },
  { t: 'Disputes inline', d: 'Collectors create, route, and resolve disputes from the same worklist — no separate dispute system to context-switch into.' },
  { t: 'Customer EIPP portal', d: 'Customers pay, dispute, and self-serve invoice copies from a branded portal — taking 60–70% of routine inquiries off the AR desk.' },
  { t: 'Collector performance analytics', d: 'Cohort-level effectiveness, recovery-rate, and DSO contribution — visible to AR leadership in real time.' },
]

export default function ProductsCollections() {
  useSeo({
    title: 'Gia Collections — AR Teams Collecting 3× More Without Hiring | Emagia',
    description:
      'AI-driven collections: predictive worklists, auto-personalized dunning, promise-to-pay tracking, EIPP customer portal. Cut DSO 14 days while reclaiming 80% of AR capacity for strategic accounts.',
  })

  return (
    <>
      <PageHero
        eyebrow="Gia Collections"
        title="Collectors stop chasing. "
        titleAccent="They start steering."
        lede="Gia Collections turns the AR team from headcount-bound to leverage-bound — predictive worklists, AI-personalized outreach, and a customer EIPP portal that absorbs the routine inquiries the team used to spend its day on."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See AR-transformation customers', to: '/customers' }}
      />

      <Section>
        <KpiStrip
          items={[
            { value: '3×', label: 'AR team collection leverage' },
            { value: '−70%', label: 'Routine inquiries (EIPP)' },
            { value: '14 days', label: 'Average DSO reduction' },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <Eyebrow>What Gia Collections does</Eyebrow>
        <H2>Six capabilities working as one system.</H2>
        <Lede>
          Most collections tools optimize the inside view — dunning templates, work queues, reminder cadences. Gia optimizes the customer view: it learns how each customer actually pays, then organizes everything around that.
        </Lede>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {features.map((f, i) => (
            <motion.li
              key={f.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-7"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 inline-block h-2 w-2 rounded-full bg-cyan"
                style={{ boxShadow: '0 0 12px rgba(34, 211, 238, 0.75)' }}
              />
              <h3 className="text-white text-[18px] font-semibold">{f.t}</h3>
              <p className="mt-2 text-[15px] text-soft leading-relaxed">{f.d}</p>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section>
        <figure className="glass rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto text-center">
          <blockquote className="serif text-white text-[22px] sm:text-[26px] leading-[1.35]">
            “Our AR team used to spend 80% of its day on follow-up. With Gia, that flipped — 80% of the day is now strategic-account work. The collectors who used to ask for headcount are asking for accounts.”
          </blockquote>
          <figcaption className="mt-5 text-[13.5px] text-muted">VP Finance · CPG Fortune-500 customer</figcaption>
        </figure>
      </Section>

      <Section>
        <CtaCard
          title="See your DSO trajectory under Gia Collections."
          body="A 30-minute call models DSO movement, collector leverage gain, and EIPP self-service deflection — on your real customer profile."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'Explore Cash Application', to: '/products/cash-application' }}
        />
      </Section>
    </>
  )
}
