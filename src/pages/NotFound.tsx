import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { useSeo } from '@/lib/useSeo'

export default function NotFound() {
  useSeo({
    title: 'Page not found · Emagia',
    description: 'The page you’re looking for does not exist on emagia.risesitelab.com.',
  })
  return (
    <Section className="!pt-40">
      <div className="max-w-2xl">
        <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">404</p>
        <h1 className="mt-3 text-white text-[42px] sm:text-[56px] leading-[1.05] tracking-[-0.022em] font-semibold">
          That page isn’t here.
        </h1>
        <p className="mt-5 text-[17px] text-soft leading-relaxed">
          The URL may have moved, or you may have followed an outdated link. Try the homepage or jump straight to a section below.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3 text-[14px]">
          <li>
            <Link
              to="/"
              className="rounded-full px-5 py-2.5 text-ink font-medium"
              style={{ background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="rounded-full glass px-5 py-2.5 text-soft hover:text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/industries" className="rounded-full glass px-5 py-2.5 text-soft hover:text-white">
              Industries
            </Link>
          </li>
          <li>
            <Link to="/customers" className="rounded-full glass px-5 py-2.5 text-soft hover:text-white">
              Customers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="rounded-full glass px-5 py-2.5 text-soft hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  )
}
