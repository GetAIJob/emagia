import './LogoMarquee.css'

import staples from '@/assets/logos/staples.svg'
import cognizant from '@/assets/logos/cognizant.svg'
import convatec from '@/assets/logos/convatec.svg'
import coopervision from '@/assets/logos/coopervision.svg'
import honestCo from '@/assets/logos/honest-company.svg'
import xylem from '@/assets/logos/xylem.svg'
import wns from '@/assets/logos/wns.svg'
import seko from '@/assets/logos/seko.svg'
import unisys from '@/assets/logos/unisys.svg'
import aha from '@/assets/logos/aha.svg'
import dresseranad from '@/assets/logos/dresseranad.svg'
import brother from '@/assets/logos/brother.svg'

const logos = [
  { src: staples, alt: 'Staples — Emagia customer' },
  { src: honestCo, alt: 'The Honest Company — Emagia customer' },
  { src: xylem, alt: 'Xylem — Emagia customer' },
  { src: coopervision, alt: 'CooperVision — Emagia customer' },
  { src: cognizant, alt: 'Cognizant — Emagia customer' },
  { src: wns, alt: 'WNS — Emagia customer' },
  { src: seko, alt: 'Seko Logistics — Emagia customer' },
  { src: convatec, alt: 'ConvaTec — Emagia customer' },
  { src: unisys, alt: 'Unisys — Emagia customer' },
  { src: aha, alt: 'American Hospital Association — Emagia customer' },
  { src: dresseranad, alt: 'Dresser-Rand — Emagia customer' },
  { src: brother, alt: 'Brother International — Emagia customer' },
]

export default function LogoMarquee() {
  return (
    <div
      className="logo-marquee group"
      role="region"
      aria-label="Selected Emagia customers — continuously scrolling marquee"
    >
      <div className="logo-marquee__edge logo-marquee__edge--left" aria-hidden="true" />
      <div className="logo-marquee__edge logo-marquee__edge--right" aria-hidden="true" />

      <ul className="logo-marquee__track" aria-hidden="false">
        {logos.map((l) => (
          <li key={`a-${l.alt}`} className="logo-marquee__item">
            <img
              src={l.src}
              alt={l.alt}
              loading="lazy"
              width="120"
              height="32"
              className="logo-marquee__img"
            />
          </li>
        ))}
        {logos.map((l) => (
          <li key={`b-${l.alt}`} className="logo-marquee__item" aria-hidden="true">
            <img
              src={l.src}
              alt=""
              loading="lazy"
              width="120"
              height="32"
              className="logo-marquee__img"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
