import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { KpiStrip } from '@/components/ui/KpiStrip'
import { CtaCard } from '@/components/ui/CtaCard'
import { useSeo } from '@/lib/useSeo'

const features = [
  { t: 'Multi-format remittance parsing', d: 'PDF, EDI 820, Lockbox, ACH addenda, ERA/EOB — extracted with 99%+ field accuracy.' },
  { t: 'AI invoice matching', d: 'Matches across short-pays, deductions, on-account credits, FX deltas, and customer-PO variances.' },
  { t: 'Auto-posted to ERP', d: 'Straight-through cash posting into SAP, Oracle, NetSuite, MS Dynamics — no clerk in the middle.' },
  { t: 'Exception triage worklists', d: 'The 2% Gia can’t auto-post arrives in your analyst queue with reasoning attached.' },
  { t: 'Live reconciliation dashboard', d: 'Bank-to-ERP reconciliation visible to AR, Treasury, and FP&A in real time.' },
  { t: 'Audit-grade trail', d: 'Every match logged with source files, decision confidence, and timestamp.' },
]

export default function ProductsCashApplication() {
  useSeo({
    title: 'Gia Cash Application — 98% Touchless Cash Posting | Emagia',
    description:
      'AI cash application that auto-posts 98% of incoming payments to ERP. Multi-format remittance parsing, AI invoice matching, audit-grade trail. Deployed at Staples, ConvaTec, CooperVision.',
  })

  return (
    <>
      <PageHero
        eyebrow="Gia Cash Application"
        title="98% of cash posted "
        titleAccent="without an analyst touching it."
        lede="Gia Cash Application parses every remittance format your customers send, matches it against open invoices with AI, and posts straight through to ERP. The 2% it can’t auto-decide arrives in your worklist with reasoning attached."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See Cash-App customer story', to: '/customers' }}
      />

      <Section>
        <KpiStrip
          items={[
            { value: '98%', label: 'Cash auto-posted to ERP' },
            { value: '< 4 hrs', label: 'Time from receipt to posted' },
            { value: '99%+', label: 'Remittance-field accuracy' },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <Eyebrow>Why 98% is the right bar</Eyebrow>
        <H2 serifAccent="not a feature add.">
          Touchless cash application is an architecture decision —
        </H2>
        <Lede>
          The difference between 70% systems and 98% systems is not OCR quality. It’s how the platform handles short-pays, deductions, FX, on-account credits, and customer-PO variances inside the same match engine. Gia’s architecture treats every variance as a first-class match candidate, not an exception.
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
            “We replaced manual cash app with Gia in one quarter. Posting accuracy went from 78% to 97%, and the AR team stopped working weekends at month-end.”
          </blockquote>
          <figcaption className="mt-5 text-[13.5px] text-muted">
            Director of AR Operations · Fortune-500 BPO customer
          </figcaption>
        </figure>
      </Section>

      <Section>
        <CtaCard
          title="See your remittance mix against the 98% bar."
          body="Send us a representative week of remittance traffic. We model the match rate Gia would deliver — typically within 2 business days."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'Explore Collections', to: '/products/collections' }}
        />
      </Section>
    </>
  )
}
