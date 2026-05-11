import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { KpiStrip } from '@/components/ui/KpiStrip'
import { CtaCard } from '@/components/ui/CtaCard'
import { useSeo } from '@/lib/useSeo'

const pains = [
  { t: 'Multi-payer remittance parsing', d: 'ERA/EOB across 12+ payer formats — denial codes, adjustment reasons, secondary-claim splits — manual reconciliation absorbs the AR team.' },
  { t: 'Denial follow-up backlog', d: 'Up to 18% of charges initially denied. Follow-up workload grows linearly with claim volume; AR team cannot keep pace.' },
  { t: 'Regulated audit trail', d: 'HIPAA-aware logging, role-based access, full auditability of every adjustment — typically bolted on after the fact.' },
]

const fixes = [
  { t: 'ERA/EOB parser at intake', d: 'Gia parses every payer’s remittance format at intake — line-item adjustments, denial codes, secondary-claim splits, all structured automatically.' },
  { t: 'AI denial-recovery worklist', d: 'Predictive scoring of every denial by recovery probability; high-yield denials routed to the right specialist with the right evidence pre-attached.' },
  { t: 'Compliance-grade audit trail', d: 'HIPAA-aware logging, SOC 2 Type II, role-based access, full decision-confidence trail — built in, not bolted on.' },
]

export default function IndustryHealthcare() {
  useSeo({
    title: 'Healthcare — Cut Days-to-Cash by 11 Days with AI | Emagia',
    description:
      'Multi-payer remittance, denial follow-ups, HIPAA-aware audit. Gia cuts days-to-cash post-encounter by 11 days and processes 92% of ERA touchless. Deployed at CooperVision, ConvaTec.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries · Healthcare"
        title="Cut days-to-cash "
        titleAccent="by 11 days post-encounter."
        lede="Healthcare AR is multi-payer, denial-heavy, and regulated. Gia parses every payer’s remittance format at intake, scores denials by recovery probability, and logs every adjustment with HIPAA-aware audit context."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See healthcare customer stories', to: '/customers' }}
      />

      <Section>
        <KpiStrip
          items={[
            { value: '−11 days', label: 'Days-to-cash post-encounter' },
            { value: '92%', label: 'ERA processed touchless' },
            { value: '60', label: 'Country billing entities supported' },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <Eyebrow>The three AR realities of healthcare</Eyebrow>
        <H2>Where the days-to-cash gap actually opens.</H2>
        <Lede>Each pain has a specific agent inside the Gia network — sharing the decision graph and the audit chain.</Lede>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <div>
            <p className="text-[12.5px] uppercase tracking-[0.18em] text-muted font-medium">Pain point</p>
            <ul className="mt-4 space-y-7">
              {pains.map((p, i) => (
                <motion.li
                  key={p.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-white text-[17px] font-semibold">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] text-muted leading-relaxed">{p.d}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">What Gia does</p>
            <ul className="mt-4 space-y-7">
              {fixes.map((p, i) => (
                <motion.li
                  key={p.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-white text-[17px] font-semibold">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] text-soft leading-relaxed">{p.d}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <figure className="glass rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto text-center">
          <blockquote className="serif text-white text-[22px] sm:text-[26px] leading-[1.35]">
            “We rolled out the EIPP portal to 60 countries. Routine invoice inquiries dropped 70% — the AR team now spends its day on the accounts that actually matter.”
          </blockquote>
          <figcaption className="mt-5 text-[13.5px] text-muted">AR Transformation Lead · CooperVision (paraphrased outcome)</figcaption>
        </figure>
      </Section>

      <Section>
        <CtaCard
          title="See your days-to-cash trajectory."
          body="Send us a representative week of payer remittance traffic. We model the parsing accuracy, the denial-recovery yield, and the days-to-cash compression Gia would deliver."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'Explore Manufacturing', to: '/industries/manufacturing' }}
        />
      </Section>
    </>
  )
}
