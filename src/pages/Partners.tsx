import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow, H2, Lede } from '@/components/ui/Section'
import { CtaCard } from '@/components/ui/CtaCard'
import { useSeo } from '@/lib/useSeo'

const ERP_PARTNERS = [
  { name: 'SAP', desc: 'Certified S/4HANA + ECC connectors. Co-engineered AR posting templates for finance + treasury.' },
  { name: 'Oracle', desc: 'Native Oracle Fusion Cloud ERP + EBS integration. Joint customer roadmap on Autonomous Finance.' },
  { name: 'NetSuite', desc: 'SuiteCloud-ready Gia agent embeddings. Optimised for fast-scaling mid-market AR teams.' },
  { name: 'Microsoft Dynamics', desc: 'Dynamics 365 Finance certified app. Power Platform-friendly orchestration handoffs.' },
  { name: 'JD Edwards', desc: 'EnterpriseOne-aware connectors. Co-developed cash-app workflows for legacy AR.' },
  { name: 'PeopleSoft', desc: 'Out-of-the-box PeopleSoft Receivables integration. Coexistence-ready for hybrid stacks.' },
]

const ALLIANCE_PARTNERS = [
  { name: 'Cognizant', desc: 'Global delivery partner for large-scale AR transformations.' },
  { name: 'WNS', desc: 'AR-BPO operations embedded in the Gia agent stack at 100+ enterprise customers.' },
  { name: 'Unisys', desc: 'Co-engineered cloud + agentic-AR managed-services offering.' },
  { name: 'Brother International', desc: 'Embedded Gia inside the global Brother O2C transformation programme.' },
  { name: 'Dresser-Rand', desc: 'Joint manufacturing-AR deployment with full SAP integration.' },
  { name: 'Unisys', desc: 'Cloud + agentic-AR co-developed offering.' },
]

export default function Partners() {
  useSeo({
    title: 'Partners — ERP & Global Delivery Partners | Emagia',
    description:
      'Gia is ERP-native by design — certified for SAP, Oracle, NetSuite, Microsoft Dynamics, JD Edwards, PeopleSoft. Global delivery via Cognizant, WNS, Unisys and more.',
  })

  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Native to the ERP stack. "
        titleAccent="Delivered at global scale."
        lede="Gia is certified or pre-integrated for every major enterprise ERP. Global delivery partners like Cognizant, WNS and Unisys carry deployments at Fortune-500 scale — so Gia is live in 8–12 weeks, not quarters."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'Become a partner', to: '/contact' }}
      />

      <Section>
        <Eyebrow>ERP integrations</Eyebrow>
        <H2>Certified for six enterprise ERPs.</H2>
        <Lede>
          Each ERP partnership is two layers deep — a certified connector and co-engineered AR posting templates. Coexistence with whatever you have today is the default deployment.
        </Lede>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ERP_PARTNERS.map((p) => (
            <li key={p.name} className="glass rounded-2xl p-7">
              <h3 className="text-white text-[18px] font-semibold">{p.name}</h3>
              <p className="mt-3 text-[14px] text-soft leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="!pt-0">
        <Eyebrow>Global delivery alliances</Eyebrow>
        <H2>Enterprise-grade deployment partners.</H2>
        <Lede>
          When the rollout spans 20+ countries or 50+ AR FTEs, Gia is co-delivered with one of these enterprise alliances.
        </Lede>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALLIANCE_PARTNERS.map((p, i) => (
            <li key={p.name + i} className="glass rounded-2xl p-7">
              <h3 className="text-white text-[18px] font-semibold">{p.name}</h3>
              <p className="mt-3 text-[14px] text-soft leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaCard
          title="Bring Gia to your customers."
          body="Whether you’re an SI, a BPO, or a fellow finance-platform vendor, we partner deeply — joint roadmap, joint references, joint go-to-market."
          primary={{ label: 'Talk to Alliances', to: '/contact' }}
          secondary={{ label: 'See customer outcomes', to: '/customers' }}
        />
      </Section>
    </>
  )
}
