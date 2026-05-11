import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PRIMARY_NAV } from '@/data/nav'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

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
      onMouseLeave={() => setOpenMenu(null)}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between"
      >
        <Link
          to="/"
          className="flex items-center gap-3 text-white font-semibold tracking-tight"
          aria-label="Emagia — home"
        >
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink font-bold text-[18px]"
            style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
              boxShadow: '0 8px 24px -10px rgba(34, 211, 238, 0.55)',
            }}
            aria-hidden="true"
          >
            ε
          </span>
          <span className="text-[21px] tracking-[-0.01em]">Emagia</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-[14px] text-soft">
          {PRIMARY_NAV.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1 py-2 transition-colors ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`
                }
                end={item.href === '/'}
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="opacity-60">
                    <path d="M2 4 L5 7 L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </NavLink>

              {item.children && (
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 pt-3 w-72"
                    >
                      <ul className="glass-strong rounded-xl p-2.5 space-y-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              to={c.href}
                              className="block rounded-lg p-3 hover:bg-white/[0.05] transition-colors"
                            >
                              <p className="text-white text-[14px] font-medium">{c.label}</p>
                              {c.desc && (
                                <p className="text-muted text-[12.5px] mt-0.5">{c.desc}</p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="text-[14px] text-soft hover:text-white transition-colors">
            Contact
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium text-ink"
            style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
              boxShadow: '0 8px 24px -8px rgba(34, 211, 238, 0.55)',
            }}
          >
            Book Strategy Call
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white p-2 -mr-2"
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-line bg-ink/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="px-6 py-5 space-y-1 text-soft max-h-[80vh] overflow-y-auto">
              {PRIMARY_NAV.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      `block py-2.5 text-[15px] ${isActive ? 'text-white font-medium' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <ul className="pl-4 pb-2 space-y-1.5 border-l border-line ml-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link to={c.href} className="block py-1.5 text-[13.5px] text-muted">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium text-ink"
                  style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)' }}
                >
                  Book Strategy Call →
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
