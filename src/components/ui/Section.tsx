import { ReactNode } from 'react'

export function Section({
  id,
  ariaLabelledBy,
  className = '',
  children,
}: {
  id?: string
  ariaLabelledBy?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`relative py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
      {children}
    </p>
  )
}

export function H2({
  id,
  children,
  serifAccent,
}: {
  id?: string
  children: ReactNode
  serifAccent?: ReactNode
}) {
  return (
    <h2
      id={id}
      className="mt-3 text-white text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.022em] font-semibold"
    >
      {children}
      {serifAccent && <span className="serif italic text-soft"> {serifAccent}</span>}
    </h2>
  )
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 text-[17px] text-soft leading-relaxed max-w-3xl">{children}</p>
  )
}
