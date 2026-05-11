import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const fmt0 = (n: number) =>
  Number.isFinite(n) ? Math.round(n).toLocaleString('en-US') : '—'

const fmtMoney = (n: number) => {
  if (!Number.isFinite(n) || n <= 0) return '$0'
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${Math.round(n)}`
}

const clampNum = (raw: string, min: number, max: number) => {
  const n = Number(raw.replace(/[^0-9.]/g, ''))
  if (!Number.isFinite(n)) return min
  return Math.min(max, Math.max(min, n))
}

export default function ROICalculator() {
  const [dso, setDso] = useState(48)
  const [arBalance, setArBalance] = useState(120_000_000)
  const [monthlyInvoices, setMonthlyInvoices] = useState(8_500)

  const projected = useMemo(() => {
    const dsoReduction = Math.min(18, Math.max(8, dso * 0.28))
    const newDso = Math.max(20, dso - dsoReduction)
    const dailyAR = arBalance / Math.max(dso, 1)
    const freed = dailyAR * dsoReduction
    const autoRate = 0.98
    const touchlessInvoices = Math.round(monthlyInvoices * autoRate)
    return {
      newDso: Math.round(newDso),
      dsoReduction: Math.round(dsoReduction),
      freed,
      touchlessInvoices,
    }
  }, [dso, arBalance, monthlyInvoices])

  return (
    <section
      id="calculator"
      aria-labelledby="calc-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
              DSO Impact Model
            </p>
            <h2
              id="calc-heading"
              className="mt-3 text-white text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.06] tracking-[-0.022em] font-semibold"
            >
              See your DSO impact in 90 seconds.
            </h2>
            <p className="mt-5 text-[17px] text-soft leading-relaxed">
              Enter three numbers from your AR ledger. The model projects
              post-Gia DSO and the working capital it returns to the balance
              sheet — using the same conversion rates Emagia customers report
              in their first four quarters.
            </p>
            <p className="mt-6 text-[13px] text-muted">
              Illustrative model. A demo against your live AR data is included
              in a strategy call.
            </p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 glass-strong rounded-3xl p-7 sm:p-9"
            aria-label="Interactive DSO impact calculator"
          >
            <form className="grid sm:grid-cols-3 gap-5" onSubmit={(e) => e.preventDefault()}>
              <CalcInput
                label="Current DSO"
                suffix="days"
                value={dso}
                onChange={(v) => setDso(clampNum(v, 20, 120))}
              />
              <CalcInput
                label="AR balance"
                prefix="$"
                value={arBalance}
                onChange={(v) => setArBalance(clampNum(v, 1_000_000, 5_000_000_000))}
                formatter={(n) => n.toLocaleString('en-US')}
              />
              <CalcInput
                label="Monthly invoice volume"
                value={monthlyInvoices}
                onChange={(v) => setMonthlyInvoices(clampNum(v, 100, 1_000_000))}
                formatter={(n) => n.toLocaleString('en-US')}
              />
            </form>

            <div className="mt-7 pt-7 border-t border-line grid sm:grid-cols-3 gap-5">
              <ResultStat
                label="Projected post-Gia DSO"
                value={`${projected.newDso}d`}
                delta={`−${projected.dsoReduction} days`}
                primary
              />
              <ResultStat
                label="Working capital freed"
                value={fmtMoney(projected.freed)}
                delta="back to balance sheet"
              />
              <ResultStat
                label="Touchless invoices / mo"
                value={fmt0(projected.touchlessInvoices)}
                delta="98% auto-applied"
              />
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14.5px] font-semibold text-ink"
                style={{
                  background:
                    'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                  boxShadow:
                    '0 12px 30px -10px rgba(34, 211, 238, 0.55)',
                }}
              >
                Get this benchmark against your real data
                <span aria-hidden="true">→</span>
              </a>
              <p className="text-[12.5px] text-muted">
                Numbers are directional. Bookings produce a tailored proof in
                under a week.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

function CalcInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  formatter,
}: {
  label: string
  value: number
  onChange: (v: string) => void
  prefix?: string
  suffix?: string
  formatter?: (n: number) => string
}) {
  const display = formatter ? formatter(value) : String(value)
  return (
    <label className="block">
      <span className="block text-[12px] uppercase tracking-[0.14em] text-muted font-medium">
        {label}
      </span>
      <span className="mt-2 flex items-center rounded-lg bg-white/[0.04] border border-line focus-within:border-cyan/60 transition-colors">
        {prefix && (
          <span className="pl-3 text-soft text-[15px]" aria-hidden="true">
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="numeric"
          value={display}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-3 text-white text-[16px] kpi-num focus:outline-none"
        />
        {suffix && (
          <span className="pr-3 text-muted text-[13px]" aria-hidden="true">
            {suffix}
          </span>
        )}
      </span>
    </label>
  )
}

function ResultStat({
  label,
  value,
  delta,
  primary,
}: {
  label: string
  value: string
  delta: string
  primary?: boolean
}) {
  return (
    <div>
      <p className="text-[12px] uppercase tracking-[0.14em] text-muted font-medium">
        {label}
      </p>
      <p
        className={`kpi-num mt-2 text-[34px] sm:text-[38px] font-semibold leading-none ${
          primary ? 'text-cyan' : 'text-white'
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-[13px] text-muted">{delta}</p>
    </div>
  )
}
