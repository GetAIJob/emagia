import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section, Eyebrow } from '@/components/ui/Section'
import { CtaCard } from '@/components/ui/CtaCard'
import { BLOG } from '@/data/blog'
import { useSeo } from '@/lib/useSeo'

const CATS = ['All', 'AI for Finance', 'AR Transformation', 'Customer Story', 'Product'] as const

export default function Resources() {
  useSeo({
    title: 'Resources — AI for Finance Insights | Emagia',
    description:
      'Editorial perspectives on enterprise AR transformation, the CFO buying logic for AI, and how Gia agents are deployed inside Fortune-500 finance teams.',
  })

  const [cat, setCat] = useState<(typeof CATS)[number]>('All')

  const filtered = useMemo(
    () => (cat === 'All' ? BLOG : BLOG.filter((b) => b.category === cat)),
    [cat]
  )

  return (
    <>
      <PageHero
        eyebrow="Resources · The AI-for-Finance journal"
        title="Editorial on "
        titleAccent="enterprise AR transformation."
        lede="Long-form analysis from the people building and deploying Gia — the architecture decisions, the CFO buying logic, the customer outcomes. Written for finance leaders and AR transformation owners."
        primaryCta={{ label: 'Subscribe via email', to: '/contact' }}
        secondaryCta={{ label: 'Listen to the podcast', to: '/contact' }}
      />

      <Section>
        <Eyebrow>Filter</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`text-[13px] rounded-full px-3.5 py-1.5 border transition-colors ${
                cat === c
                  ? 'bg-cyan text-ink border-cyan font-medium'
                  : 'border-line text-soft hover:text-white hover:border-cyan/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="h-full glass rounded-2xl p-7 flex flex-col">
                <p className="text-[11px] uppercase tracking-[0.18em] text-cyan font-medium">
                  {post.category}
                </p>
                <h3 className="mt-3 text-white text-[19px] font-semibold leading-tight tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-4 text-[14px] text-soft leading-relaxed flex-1">{post.dek}</p>
                <div className="mt-6 pt-5 border-t border-line flex items-center justify-between text-[12.5px] text-muted">
                  <span>{post.author}</span>
                  <span>{post.date} · {post.readTime}</span>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaCard
          title="Get the AI-for-Finance digest in your inbox."
          body="One concise email a month with the architecture decisions, P&L benchmarks, and customer outcomes worth your time. Curated, not generated."
          primary={{ label: 'Subscribe', to: '/contact' }}
          secondary={{ label: 'Book Strategy Call', to: '/contact' }}
        />
      </Section>
    </>
  )
}
