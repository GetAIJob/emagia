import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { KpiStrip } from '@/components/ui/KpiStrip'
import { CtaCard } from '@/components/ui/CtaCard'
import { useSeo } from '@/lib/useSeo'

const pains = [
  { t: 'Trade-deduction backlog', d: 'Co-op, advertising, freight, MCB, RA — 1–3% of net revenue silently trapped in unresolved short-pays.' },
  { t: 'EDI billing mismatches', d: 'Distributor portals reject 4–8% of invoices for line-item, PO, or tax-code mismatches. Each reject costs days of cash.' },
  { t: 'Quarter-end cash bottleneck', d: 'Manual cash-application cannot keep pace with month-end remittance volume. Cash posts a week after it arrives.' },
]

const fixes = [
  { t: 'Root-cause deduction classifier', d: 'Gia auto-classifies every short-pay by root cause and routes the recoverable ones into a workflow that closes them.' },
  { t: 'EDI-aware invoice generation', d: 'Pre-submit validation against each distributor’s portal rules eliminates the rejection round-trips.' },
  { t: 'Touchless cash-application', d: '98% of bank-file remittances post straight through to SAP/Oracle. Quarter-end becomes a single-day event.' },
]

export default function IndustryManufacturing() {
  useSeo({
    title: 'Manufacturing — Recover Trapped Trade Deductions with AI | Emagia',
    description:
      'Channel-heavy AR, EDI billing complexity, quarter-end cash bottlenecks. Gia recovers 1.5% of net revenue from trade deductions and posts 98% of cash touchless. Deployed at Staples, Xylem, ConvaTec.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries · Manufacturing"
        title="Recover 1.5% of net revenue "
        titleAccent="from trapped trade deductions."
        lede="Manufacturing AR teams lose 1–3% of net revenue every year to deductions that go unworked — and another 3–5 days of DSO to EDI billing rejection round-trips. Gia closes both gaps inside the same agent network."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See manufacturing customer stories', to: '/customers' }}
      />

      <Section>
        <KpiStrip
          items={[
            { value: '1.5%', label: 'Net revenue recovered (12 mo)' },
            { value: '−5 days', label: 'EDI dispute round-trip' },
            { value: '98%', label: 'Cash-app touchless' },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <Eyebrow>The three AR realities of manufacturing</Eyebrow>
        <H2>Where margin and cash actually leak.</H2>
        <Lede>Each is a different agent inside the Gia network — but they share one customer master, one decision graph, and one audit trail.</Lede>

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
            “The deduction backlog had been ‘the way it is’ for fifteen years. Gia closed 94% of it in nine months and recovered $14M back to the P&L.”
          </blockquote>
          <figcaption className="mt-5 text-[13.5px] text-muted">VP Finance · Xylem (paraphrased outcome)</figcaption>
        </figure>
      </Section>

      <Section>
        <CtaCard
          title="See your manufacturing AR profile against the Gia benchmark."
          body="Send us a representative slice of your trade-deductions, EDI mismatches, and remittance flow. We model your recovery and DSO trajectory inside one strategy call."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'Explore Healthcare', to: '/industries/healthcare' }}
        />
      </Section>
    </>
  )
}
