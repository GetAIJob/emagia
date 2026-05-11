const cols = [
  {
    title: 'Platform',
    items: [
      { label: 'Gia Agents', href: '#agents' },
      { label: 'DSO Impact Model', href: '#calculator' },
      { label: 'Enterprise Narrative', href: '#narrative' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Customer Stories', href: '#proof' },
      { label: 'Industry Reports', href: '#proof' },
      { label: 'AI for Finance Newsletter', href: '#contact' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'Contact Sales', href: '#contact' },
      { label: 'Strategy Call', href: '#contact' },
      { label: 'Press', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="flex items-center gap-2.5 text-white font-semibold tracking-tight text-[18px]"
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-ink font-bold text-sm"
                style={{
                  background:
                    'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                }}
                aria-hidden="true"
              >
                ε
              </span>
              Emagia
            </a>
            <p className="mt-5 max-w-md text-[14px] text-muted leading-relaxed">
              Emagia is the enterprise autonomous-finance platform behind
              Fortune-500 Order-to-Cash transformations. AI agents that
              measurably move DSO, free working capital, and let finance teams
              scale without hiring.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
              <span>HQ — Santa Clara, California</span>
              <span aria-hidden="true">·</span>
              <a href="mailto:hello@emagia.com" className="hover:text-white transition-colors">
                hello@emagia.com
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title} className="lg:col-span-2">
              <p className="text-[12px] uppercase tracking-[0.18em] text-soft font-medium">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      className="text-[14px] text-muted hover:text-white transition-colors"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px] text-muted">
          <p>© {new Date().getFullYear()} Emagia, Inc. All rights reserved.</p>
          <p className="opacity-75">
            Concept redesign · prepared by{' '}
            <a
              href="https://risesitelab.com"
              target="_blank"
              rel="noopener"
              className="text-soft hover:text-cyan transition-colors underline underline-offset-4"
            >
              GrowthSite Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
