import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { KpiStrip } from '@/components/ui/KpiStrip'
import { CtaCard } from '@/components/ui/CtaCard'
import { useSeo } from '@/lib/useSeo'

const VALUES = [
  { t: 'Outcomes over features', d: 'Every Gia agent is measured on the P&L number it moves — DSO, freed working capital, recovered deductions. Not on screens automated.' },
  { t: 'Audit-grade by default', d: 'Every decision agent makes is logged with reasoning, source, and confidence. CFO, audit committee, and regulator-ready from day one.' },
  { t: 'Customer-master discipline', d: 'One customer master across the agent network. No reconciliation tickets between Order, Credit, Billing, and AR.' },
  { t: 'Enterprise security as a baseline', d: 'SOC 2 Type II, ISO 27001, GDPR-aligned, SAML SSO — deployable inside a regulated environment, not after a renegotiation.' },
]

const LEADERS = [
  { name: 'Veena Gundavelli', role: 'Founder & CEO', bio: 'Founded Emagia to make autonomous finance an enterprise category. Two decades leading AR transformation at Fortune-500 scale.' },
  { name: 'Raghav Reddy', role: 'CTO', bio: 'Architected the Gia decision graph and the agent orchestration studio. Background in distributed financial systems.' },
  { name: 'Thea Marcus', role: 'VP Product', bio: 'Leads product across the Gia agent network. Former enterprise AR transformation lead inside two Fortune-100 finance functions.' },
]

export default function Company() {
  useSeo({
    title: 'Company — Building the Autonomous Finance Category | Emagia',
    description:
      'Emagia, Inc. — founded to make enterprise AR autonomous. Headquartered in Santa Clara, California. Recognized by Gartner, IDC, Aberdeen, Forrester, Everest. AI-native, audit-grade, ERP-native.',
  })

  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Building the "
        titleAccent="autonomous-finance category."
        lede="Emagia was founded to translate AI from a category buzzword into a measurable P&L outcome for enterprise finance teams. The product line you see today — the Gia agent network — is the result of a decade of building, deploying, and learning inside Fortune-500 AR organizations."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See customer outcomes', to: '/customers' }}
      />

      <Section>
        <KpiStrip
          items={[
            { value: '$8B+', label: 'AR processed annually on Gia' },
            { value: '100+', label: 'Enterprise deployments' },
            { value: '6', label: 'Industry analyst recognitions' },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <Eyebrow>What we believe</Eyebrow>
        <H2>Four operating principles, written down once.</H2>
        <Lede>
          They show up in the product (every agent has an outcome metric), in the architecture (one customer master), and in how customers experience us.
        </Lede>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {VALUES.map((v, i) => (
            <li key={v.t} className="relative pl-8">
              <span aria-hidden="true" className="absolute left-0 top-1 text-cyan kpi-num text-[14px] font-semibold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-white text-[20px] sm:text-[22px] font-semibold tracking-tight">{v.t}</h3>
              <p className="mt-3 text-[15.5px] text-soft leading-[1.62]">{v.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow>Leadership</Eyebrow>
        <H2>The team behind Gia.</H2>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {LEADERS.map((l) => (
            <li key={l.name} className="glass rounded-2xl p-7">
              <div
                className="h-14 w-14 rounded-full mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.45) 0%, rgba(6,182,212,0.20) 100%)' }}
                aria-hidden="true"
              />
              <h3 className="text-white text-[18px] font-semibold">{l.name}</h3>
              <p className="text-cyan text-[13px] mt-1">{l.role}</p>
              <p className="mt-4 text-[14px] text-soft leading-relaxed">{l.bio}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow>Recognition</Eyebrow>
        <H2>Independent analyst validation.</H2>
        <Lede>
          Named in Gartner, IDC, Aberdeen, Forrester, and Everest Group research — including Leader in the Everest Group Order-to-Cash Peak Matrix Assessment 2025.
        </Lede>
        <p className="mt-8 text-[14px] text-muted">
          Gartner · IDC · Aberdeen Group · Forrester · Everest Group · The Silicon Review (Top Innovative Companies to Watch · 2025)
        </p>
      </Section>

      <Section>
        <CtaCard
          title="Want to talk to the team building Gia?"
          body="The fastest path is a 30-minute strategy call — we map your O2C, name the highest-leverage agent to deploy first, and quote a working pilot in days, not weeks."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'Browse resources', to: '/resources' }}
        />
      </Section>
    </>
  )
}
