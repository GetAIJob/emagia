import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow } from '@/components/ui/Section'
import { CtaCard } from '@/components/ui/CtaCard'
import { CUSTOMERS } from '@/data/customers'
import { useSeo } from '@/lib/useSeo'

const FILTERS = ['All', 'Manufacturing', 'Healthcare', 'CPG', 'IT Services', 'Logistics', 'Medical Device', 'Retail · Manufacturing', 'Business Process Services']

export default function Customers() {
  useSeo({
    title: 'Customers — Fortune-500 AR Transformations | Emagia',
    description:
      'Staples, Cognizant, Xylem, ConvaTec, CooperVision, The Honest Company, WNS, Seko Logistics — eight case studies of Gia agent deployments. DSO cut, deductions recovered, AR teams 5× more leveraged.',
  })

  const [filter, setFilter] = useState<string>('All')
  const filtered = useMemo(
    () =>
      filter === 'All'
        ? CUSTOMERS
        : CUSTOMERS.filter((c) => c.industry === filter || c.industry.includes(filter)),
    [filter]
  )

  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="Eight Fortune-500 finance teams "
        titleAccent="that run on Gia."
        lede="Each deployment is measured on a P&L number — DSO, working capital freed, AR FTE leverage. The shared thread: each customer flipped AR from a cost center to a forecastable revenue lever."
        primaryCta={{ label: 'Book Strategy Call', to: '/contact' }}
        secondaryCta={{ label: 'See partners', to: '/partners' }}
      />

      <Section>
        <Eyebrow>Filter</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`text-[13px] rounded-full px-3.5 py-1.5 border transition-colors ${
                filter === f
                  ? 'bg-cyan text-ink border-cyan font-medium'
                  : 'border-line text-soft hover:text-white hover:border-cyan/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((c, i) => (
            <motion.li
              key={c.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="h-full glass rounded-2xl p-7 hover:bg-white/[0.05] transition-colors">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-white text-[22px] font-semibold tracking-tight">{c.name}</h3>
                  <span className="text-[12px] text-muted">{c.industry}</span>
                </div>
                <p className="mt-4 text-[15px] text-soft leading-relaxed">{c.story}</p>
                <ul className="mt-6 pt-5 border-t border-line grid grid-cols-2 gap-5">
                  {c.metric.map((m) => (
                    <li key={m.label}>
                      <p className="kpi-num text-cyan text-[26px] font-semibold leading-none">{m.value}</p>
                      <p className="mt-2 text-[12px] text-muted">{m.label}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted text-[14px]">
            No customer stories match this filter yet. <button onClick={() => setFilter('All')} className="text-cyan underline">Show all →</button>
          </p>
        )}
      </Section>

      <Section>
        <CtaCard
          title="Add your AR profile to the benchmark."
          body="A 30-minute strategy call models your DSO trajectory and cash-application gap against the customers above — on your real data."
          primary={{ label: 'Book Strategy Call', to: '/contact' }}
          secondary={{ label: 'See industry deep-dives', to: '/industries' }}
        />
      </Section>
    </>
  )
}
