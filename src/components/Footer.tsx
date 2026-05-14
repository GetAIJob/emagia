import { Link } from 'react-router-dom'
import { FOOTER_COLUMNS, FOOTER_SOCIAL } from '@/data/nav'

const SocialIcon = ({ icon }: { icon: string }) => {
  const common = { width: 18, height: 18, fill: 'currentColor', viewBox: '0 0 24 24' as const, 'aria-hidden': true }
  switch (icon) {
    case 'linkedin':
      return (
        <svg {...common}><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/></svg>
      )
    case 'x':
      return (
        <svg {...common}><path d="M18.244 2H21.5l-7.49 8.56L23 22h-6.91l-5.41-7.07L4.5 22H1.24l8-9.16L1 2h7.04l4.89 6.46L18.24 2zm-1.21 18h1.83L6.97 4H5.04L17.03 20z"/></svg>
      )
    case 'youtube':
      return (
        <svg {...common}><path d="M10 15L15.19 12L10 9V15M21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"/></svg>
      )
    case 'instagram':
      return (
        <svg {...common}><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2M7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z"/></svg>
      )
    case 'facebook':
      return (
        <svg {...common}><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-14 md:py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="flex items-center gap-3.5 text-white font-semibold tracking-tight text-[24px]"
              aria-label="Emagia — home"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-ink font-bold text-[22px]"
                style={{
                  background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                  boxShadow: '0 10px 30px -10px rgba(34, 211, 238, 0.55)',
                }}
                aria-hidden="true"
              >
                ε
              </span>
              Emagia
            </Link>
            <p className="mt-5 max-w-md text-[14px] text-muted leading-relaxed">
              Emagia is the enterprise autonomous-finance platform behind Fortune-500 Order-to-Cash transformations. AI agents that measurably move DSO, free working capital, and let finance teams scale without hiring.
            </p>

            <address className="mt-6 not-italic text-[13px] text-muted leading-[1.7]">
              <p className="text-soft text-[12px] uppercase tracking-[0.18em] font-medium mb-2">
                Global Headquarters
              </p>
              <p className="text-white text-[14px] font-medium">Emagia Corporation</p>
              <p>
                4701 Patrick Henry Dr.<br />
                Building 20, Santa Clara, CA 95054<br />
                United States
              </p>
              <p className="mt-3">
                <a href="mailto:info@risesitelab.com" className="hover:text-white transition-colors">
                  info@risesitelab.com
                </a>
              </p>
            </address>

            <ul className="mt-6 flex items-center gap-3" aria-label="Social media">
              {FOOTER_SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Emagia on ${s.label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-soft glass hover:text-cyan hover:border-cyan/40 transition-colors"
                  >
                    <SocialIcon icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_COLUMNS.map((c) => (
            <nav key={c.title} aria-label={c.title} className="lg:col-span-2">
              <p className="text-[12px] uppercase tracking-[0.18em] text-soft font-medium">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.href}
                      className="text-[14px] text-muted hover:text-white transition-colors"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12.5px] text-muted">
          <p>© {new Date().getFullYear()} Emagia, Inc. All rights reserved.</p>
          <p className="opacity-75">
            Concept redesign · prepared by{' '}
            <a
              href="https://risesitelab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft hover:text-cyan transition-colors underline underline-offset-4"
            >
              GrowthSite Lab
            </a>
          </p>
        </div>
        <p style={{textAlign:'center',marginTop:'1rem',fontSize:'0.78rem',opacity:0.5,color:'inherit'}}>
          Built by{' '}
          <a href="https://risesitelab.com/" target="_blank" rel="noopener noreferrer" style={{color:'inherit',textDecoration:'underline'}}>
            GrowthSite Lab
          </a>
        </p>
      </div>
    </footer>
  )
}
