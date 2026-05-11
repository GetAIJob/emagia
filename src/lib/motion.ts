export const easeOutQuint = [0.22, 1, 0.36, 1] as const

export const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: easeOutQuint },
  }),
}

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutQuint } },
}
