import { motion } from 'framer-motion'

export function KpiStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {items.map((k, i) => (
        <motion.li
          key={k.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass rounded-2xl p-7"
        >
          <div className="cyan-rule absolute top-0 left-6 right-6" aria-hidden="true" />
          <p className="kpi-num text-white text-[38px] sm:text-[42px] font-semibold leading-none">
            {k.value}
          </p>
          <p className="mt-3 text-soft text-[14.5px]">{k.label}</p>
        </motion.li>
      ))}
    </ul>
  )
}
