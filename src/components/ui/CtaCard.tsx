import { Link } from 'react-router-dom'

export function CtaCard({
  title,
  body,
  primary,
  secondary,
}: {
  title: string
  body?: string
  primary: { label: string; to: string }
  secondary?: { label: string; to: string }
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-12">
      <div
        className="absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <h2 className="text-white text-[28px] sm:text-[34px] leading-[1.1] tracking-[-0.02em] font-semibold relative z-10 max-w-2xl">
        {title}
      </h2>
      {body && <p className="mt-4 text-[16px] text-soft leading-relaxed relative z-10 max-w-2xl">{body}</p>}
      <div className="mt-7 flex flex-col sm:flex-row gap-3 relative z-10">
        <Link
          to={primary.to}
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14.5px] font-semibold text-ink"
          style={{
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            boxShadow: '0 12px 30px -10px rgba(34, 211, 238, 0.55)',
          }}
        >
          {primary.label}
          <span aria-hidden="true">→</span>
        </Link>
        {secondary && (
          <Link
            to={secondary.to}
            className="inline-flex items-center justify-center gap-2 rounded-full glass px-5 py-3 text-[14.5px] font-medium text-white hover:bg-white/[0.08] transition-colors"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  )
}
