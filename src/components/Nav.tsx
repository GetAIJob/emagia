import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#agents', label: 'Gia Agents' },
  { href: '#calculator', label: 'DSO Impact' },
  { href: '#narrative', label: 'Why CFOs Choose Gia' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/72 backdrop-blur-xl border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-white font-semibold tracking-tight"
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
          <span className="text-[17px]">Emagia</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[14px] text-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#calculator"
            className="text-[14px] text-soft hover:text-white transition-colors"
          >
            See DSO impact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium text-ink"
            style={{
              background:
                'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
              boxShadow: '0 8px 24px -8px rgba(34, 211, 238, 0.55)',
            }}
          >
            Book Strategy Call
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white p-2 -mr-2"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <>
                <path d="M4 7 H20" />
                <path d="M4 12 H20" />
                <path d="M4 17 H20" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur-xl">
          <ul className="px-6 py-4 space-y-3 text-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium text-ink"
                style={{
                  background:
                    'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                }}
              >
                Book Strategy Call →
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  )
}
