import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { useSeo } from '@/lib/useSeo'

const SECTIONS = [
  { h: 'Acceptance of terms', p: 'By accessing or using Emagia’s websites, the Gia agent platform, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Services.' },
  { h: 'Eligibility', p: 'The Services are intended for use by enterprise customers and their authorized personnel. By using the Services, you represent that you have the legal authority to enter into these Terms on behalf of your organization.' },
  { h: 'Service description', p: 'Emagia provides an enterprise AI platform for Order-to-Cash automation ("Gia"). The specific Services delivered to a customer are governed by the executed Master Services Agreement or Order Form between Emagia and that customer.' },
  { h: 'Acceptable use', p: 'You agree not to: (a) reverse-engineer, decompile, or attempt to derive source code of the Services; (b) interfere with the security or performance of the Services; (c) use the Services to violate any law or third-party right; (d) attempt to access another customer’s data.' },
  { h: 'Intellectual property', p: 'Emagia and its licensors retain all rights, title, and interest in and to the Services, including all underlying software, models, data structures, and documentation. Customer data submitted to the Services remains the property of the submitting customer.' },
  { h: 'Customer data', p: 'Customer data is processed in accordance with the executed Master Services Agreement and the Emagia Data Processing Addendum. Emagia acts as a data processor for customer-submitted personal data and as a controller only for marketing and support communications you initiate with us.' },
  { h: 'Confidentiality', p: 'Each party will protect the other’s Confidential Information with at least the same degree of care it uses for its own confidential information, and in no event less than reasonable care. Confidential Information may be disclosed only on a need-to-know basis.' },
  { h: 'Warranties & disclaimers', p: 'Except as expressly set forth in an executed Master Services Agreement, the Services are provided “as is.” Emagia disclaims all implied warranties to the maximum extent permitted by law.' },
  { h: 'Limitation of liability', p: 'To the maximum extent permitted by law, Emagia’s aggregate liability arising out of or relating to these Terms or the Services will not exceed the fees paid or payable by the customer to Emagia in the 12 months preceding the event giving rise to the claim.' },
  { h: 'Indemnification', p: 'Each party will defend, indemnify, and hold harmless the other against third-party claims arising from its breach of these Terms, subject to the terms of the executed Master Services Agreement.' },
  { h: 'Term & termination', p: 'These Terms remain in effect for as long as you use the Services. Emagia may suspend or terminate access for material breach with notice and a reasonable opportunity to cure, except in cases of security or legal emergency.' },
  { h: 'Governing law', p: 'These Terms are governed by the laws of the State of California, United States, without regard to its conflict-of-laws provisions. Exclusive jurisdiction lies in the state and federal courts located in Santa Clara County, California.' },
  { h: 'Changes', p: 'Emagia may update these Terms from time to time. Material changes are announced via email to customers and via this page. The “Last updated” date below reflects the current version.' },
  { h: 'Contact', p: 'Legal questions: legal@emagia.com. Postal mail: Emagia, Inc., Santa Clara, California, United States.' },
]

export default function LegalTerms() {
  useSeo({
    title: 'Terms of Service | Emagia',
    description:
      'Terms of Service governing access to and use of the Emagia websites, the Gia agent platform, and related enterprise services.',
  })
  return (
    <>
      <PageHero
        eyebrow="Legal · Terms of Service"
        title="The terms that govern "
        titleAccent="use of the Services."
        lede="A clean read of what we promise, what we expect, and how the customer relationship works. The Master Services Agreement signed with each enterprise customer takes precedence over these site-level Terms."
      />
      <Section className="!pt-0">
        <p className="text-[13px] text-muted mb-10">Last updated: April 2026</p>
        <div className="grid lg:grid-cols-12 gap-10">
          <nav aria-label="Sections" className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <p className="text-[12px] uppercase tracking-[0.18em] text-soft font-medium mb-3">On this page</p>
            <ul className="space-y-2 text-[13px]">
              {SECTIONS.map((s) => (
                <li key={s.h}>
                  <a href={`#${slug(s.h)}`} className="text-muted hover:text-cyan transition-colors">
                    {s.h}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <article className="lg:col-span-9 space-y-12">
            {SECTIONS.map((s) => (
              <section key={s.h} id={slug(s.h)} className="scroll-mt-24">
                <h2 className="text-white text-[22px] font-semibold tracking-tight">{s.h}</h2>
                <p className="mt-4 text-[15.5px] text-soft leading-[1.7]">{s.p}</p>
              </section>
            ))}
          </article>
        </div>
      </Section>
    </>
  )
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}
