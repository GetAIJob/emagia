import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { useSeo } from '@/lib/useSeo'
import { FOOTER_SOCIAL } from '@/data/nav'

const ACCESS_KEY = '1685ea7f-e2ed-4a2b-9c44-45e287e1017a'

type Status = 'idle' | 'sending' | 'success' | 'error'

const AR_BANDS = [
  '< $50M',
  '$50M – $250M',
  '$250M – $1B',
  '$1B – $5B',
  '$5B+',
]

const ROLES = [
  'CFO / VP Finance',
  'AR / O2C Leader',
  'Controller',
  'IT / Finance Systems',
  'Other',
]

export default function Contact() {
  useSeo({
    title: 'Contact Emagia — Book a Strategy Call',
    description:
      'Book a 30-minute strategy call with the Emagia team. We model your DSO trajectory, cash-application gap, and freed working capital using your real AR profile.',
  })

  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', ACCESS_KEY)
    formData.append('subject', `[Emagia demo] New strategy-call request from ${formData.get('name') || 'visitor'}`)
    formData.append('from_name', 'Emagia demo · emagia.risesitelab.com')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
        setErrorMsg(json.message || 'Something went wrong. Please try again or email hello@emagia.com.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please retry, or email hello@emagia.com directly.')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s model your "
        titleAccent="Order-to-Cash impact."
        lede="In one 30-minute strategy call, we walk Gia against your real AR profile — DSO, cash-application gap, freed working capital. No slides. No deck. A working model you can share inside your finance team."
      />

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
            aria-label="Direct contact information"
          >
            <div className="glass rounded-2xl p-7">
              <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
                Talk directly
              </p>
              <ul className="mt-5 space-y-4 text-[14px] text-soft">
                <li>
                  <p className="text-muted text-[12px]">Email</p>
                  <a href="mailto:hello@emagia.com" className="hover:text-cyan transition-colors">
                    hello@emagia.com
                  </a>
                </li>
                <li>
                  <p className="text-muted text-[12px]">Headquarters</p>
                  <p>Santa Clara, California — Pacific Time</p>
                </li>
                <li>
                  <p className="text-muted text-[12px]">Regional offices</p>
                  <p>London · Singapore · Bengaluru · Sydney</p>
                </li>
                <li>
                  <p className="text-muted text-[12px]">Press inquiries</p>
                  <a href="mailto:press@emagia.com" className="hover:text-cyan transition-colors">
                    press@emagia.com
                  </a>
                </li>
                <li>
                  <p className="text-muted text-[12px]">Partner inquiries</p>
                  <a href="mailto:alliances@emagia.com" className="hover:text-cyan transition-colors">
                    alliances@emagia.com
                  </a>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-line">
                <p className="text-muted text-[12px] mb-3">Connect</p>
                <ul className="flex items-center gap-3">
                  {FOOTER_SOCIAL.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Emagia on ${s.label}`}
                        className="text-[13px] text-soft hover:text-cyan transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 glass rounded-2xl p-7">
              <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
                What happens after you submit
              </p>
              <ol className="mt-4 space-y-3 text-[14px] text-soft">
                <li className="flex gap-3">
                  <span className="kpi-num text-cyan flex-none">01</span>
                  <span>A finance-side AE reaches out within one business day to confirm a time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="kpi-num text-cyan flex-none">02</span>
                  <span>We send a short pre-call AR-profile form (volume, ERP, current DSO).</span>
                </li>
                <li className="flex gap-3">
                  <span className="kpi-num text-cyan flex-none">03</span>
                  <span>On the 30-minute call, we walk a Gia model on your real numbers — no slides.</span>
                </li>
              </ol>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-strong rounded-3xl p-7 sm:p-9">
              {status === 'success' ? (
                <div role="status" aria-live="polite" className="py-6 text-center">
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34,211,238,0.30), rgba(6,182,212,0.20))',
                      border: '1px solid rgba(34,211,238,0.55)',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 L10 17 L19 7" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h2 className="mt-5 text-white text-[24px] font-semibold">Got it — talk soon.</h2>
                  <p className="mt-3 text-soft text-[15px]">
                    A finance-side AE will reach out within one business day to confirm a time. Watch for an email from the Emagia team.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-7 text-[13px] text-cyan underline underline-offset-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <p className="text-[12.5px] uppercase tracking-[0.18em] text-cyan font-medium">
                    Book a strategy call
                  </p>
                  <h2 className="mt-3 text-white text-[24px] sm:text-[28px] font-semibold tracking-tight">
                    Tell us about your AR profile.
                  </h2>

                  <div className="mt-7 grid sm:grid-cols-2 gap-4">
                    <Field label="Full name" name="name" required autoComplete="name" />
                    <Field label="Work email" name="email" type="email" required autoComplete="email" />
                    <Field label="Company" name="company" required autoComplete="organization" />
                    <Select label="Role" name="role" options={ROLES} required />
                    <Select label="Annual AR volume" name="ar_band" options={AR_BANDS} required />
                    <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
                  </div>

                  <div className="mt-5">
                    <label className="block">
                      <span className="block text-[12px] uppercase tracking-[0.14em] text-muted font-medium">
                        What outcome are you trying to move?
                      </span>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="mt-2 w-full rounded-lg bg-white/[0.04] border border-line focus:border-cyan/60 focus:outline-none text-white text-[15px] p-3 transition-colors"
                        placeholder="DSO reduction · cash-app automation · deduction recovery · AR team leverage…"
                      />
                    </label>
                  </div>

                  <input type="hidden" name="redirect" value="false" />
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {status === 'error' && (
                    <p role="alert" className="mt-5 text-[14px] text-red-400">
                      {errorMsg}
                    </p>
                  )}

                  <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-ink disabled:opacity-60"
                      style={{
                        background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                        boxShadow: '0 14px 38px -10px rgba(34, 211, 238, 0.55), inset 0 1px 0 rgba(255,255,255,0.35)',
                      }}
                    >
                      {status === 'sending' ? 'Sending…' : 'Book Strategy Call'}
                      {status !== 'sending' && <span aria-hidden="true">→</span>}
                    </button>
                    <p className="text-[12.5px] text-muted">
                      By submitting, you agree to be contacted by the Emagia team. We never share your details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <label className="block">
      <span className="block text-[12px] uppercase tracking-[0.14em] text-muted font-medium">
        {label}
        {required && <span className="text-cyan ml-1" aria-hidden="true">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg bg-white/[0.04] border border-line focus:border-cyan/60 focus:outline-none text-white text-[15px] px-3 py-3 transition-colors"
      />
    </label>
  )
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="block text-[12px] uppercase tracking-[0.14em] text-muted font-medium">
        {label}
        {required && <span className="text-cyan ml-1" aria-hidden="true">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-lg bg-white/[0.04] border border-line focus:border-cyan/60 focus:outline-none text-white text-[15px] px-3 py-3 transition-colors appearance-none"
      >
        <option value="" disabled className="bg-navy">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-navy text-white">
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
