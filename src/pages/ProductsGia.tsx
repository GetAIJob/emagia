import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2 } from '@/components/ui/Section'
import { KpiStrip } from '@/components/ui/KpiStrip'
import { CtaCard } from '@/components/ui/CtaCard'
import { useSeo } from '@/lib/useSeo'

const capabilities = [
  {
    title: 'One decision graph',
    body: 'Every Gia agent reads from and writes to a shared customer master and AR ledger. No more reconciling across 6 point-tools.',
  },
  {
    title: 'Agent Orchestration Studio',
    body: 'Compose cross-agent workflows in a no-code surface — credit check → invoice → collections → cash-app — that span the full O2C lifecycle.',
  },
  {
    title: 'ERP-native connectors',
    body: 'Pre-built integrations for SAP, Oracle, NetSuite, Microsoft Dynamics, JD Edwards, PeopleSoft. Go-live in weeks, not quarters.',
  },
  {
    title: 'Audit-grade decision trail',
    body: 'Every agent action is logged with reasoning, source data, and confidence — ready for SOX, GDPR, and internal audit review.',
  },
  {
    title: 'AI that explains itself',
    body: 'Each agent surfaces the why behind every credit decision, dispute classification, and remittance match. No black-box approvals.',
  },
  {
    title: 'Enterprise security by default',
    body: 'SOC 2 Type II, ISO 27001, GDPR-aligned, SAML SSO. Deployable in a dedicated VPC for regulated industries.',
  },
]

export default function ProductsGia() {
  useSeo({
    title: 'Gia Agent Network — The Autonomous Order-to-Cash Platform | Emagia',
    description:
      'Gia is the AI agent network orchestrating Order, Credit, Billing, Collections, Deductions, Cash Application, and Payments. One brain. One decision graph. Enterprise-scale.',
  })

  return (
    <>
      <PageHero
        eyebrow="Gia Agent Network · The platform"
        title="One AI brain. "
        titleAccent="Every Order-to-Cash step."
        lede="Gia is the orchestration layer behind the agent network. It maintains a shared decision graph, exposes a no-code orchestration studio, and turns the seven specialized agents into a single autonomous-finance system."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See customer outcomes', to: '/customers' }}
      />

      <Section ariaLabelledBy="kpi-h2">
        <p className="sr-only" id="kpi-h2">Gia platform KPIs</p>
        <KpiStrip
          items={[
            { value: '7×', label: 'AR team leverage gain' },
            { value: '< 12 wks', label: 'Median time-to-live on ERP' },
            { value: '100%', label: 'Decisions audit-trailed' },
          ]}
        />
      </Section>

      <Section ariaLabelledBy="cap-h2" className="!pt-0">
        <Eyebrow>What Gia does that point-tools cannot</Eyebrow>
        <H2 id="cap-h2">Six capabilities the agent network depends on.</H2>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {capabilities.map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8"
            >
              <span aria-hidden="true" className="absolute left-0 top-1 text-cyan kpi-num text-[14px] font-semibold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-white text-[20px] sm:text-[22px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-[15.5px] text-soft leading-[1.62]">{c.body}</p>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section ariaLabelledBy="how-h2">
        <Eyebrow>How a Gia decision flows</Eyebrow>
        <H2 id="how-h2">The decision graph in 4 stages.</H2>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { n: '01', t: 'Ingest', d: 'Bank file, EDI feed, payer remittance, customer email — Gia parses all of them at intake.' },
            { n: '02', t: 'Decide', d: 'Agent network classifies, scores, and routes — each decision logged with the underlying signals.' },
            { n: '03', t: 'Act', d: 'Cash is posted, invoice is corrected, dunning is sent, deduction is recovered — straight through to ERP.' },
            { n: '04', t: 'Learn', d: 'Outcome feeds back into the decision graph. Next quarter Gia decides more confidently with less human review.' },
          ].map((s) => (
            <li key={s.n} className="glass rounded-2xl p-6">
              <p className="kpi-num text-cyan text-[20px] font-semibold">{s.n}</p>
              <h3 className="mt-3 text-white text-[18px] font-semibold">{s.t}</h3>
              <p className="mt-2 text-[14px] text-soft leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <CtaCard
          title="See how Gia would orchestrate your O2C."
          body="A 30-minute call walks the agent network against your real ERP, customer master, and AR profile."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'Browse all products', to: '/products' }}
        />
      </Section>
    </>
  )
}
