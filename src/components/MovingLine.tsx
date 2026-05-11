import './MovingLine.css'

type Variant = 'navy' | 'cyan'

type Props = {
  count?: number
  height?: number
  variant?: Variant
  label?: string
}

export default function MovingLine({
  count = 5,
  height = 56,
  variant = 'navy',
  label,
}: Props) {
  return (
    <aside
      aria-label={label || 'Live data stream'}
      className="moving-line-band relative w-full overflow-hidden border-y border-line"
      style={{
        height,
        background:
          'linear-gradient(180deg, rgba(15, 31, 58, 0.55) 0%, rgba(10, 22, 40, 0.55) 100%)',
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`line line--${variant}`}
          style={{
            top: `${(i + 0.5) * (100 / count)}%`,
            animationDuration: `${4 + i * 1.1}s`,
            animationDelay: `${i * 0.7}s`,
            opacity: variant === 'cyan' && i % 2 === 0 ? 0.65 : 0.45,
          }}
          aria-hidden="true"
        />
      ))}
    </aside>
  )
}
