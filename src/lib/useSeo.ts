import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoInput = {
  title: string
  description: string
  ogImage?: string
  jsonLd?: Record<string, unknown>
}

const SITE = 'https://emagia.risesitelab.com'
const DEFAULT_OG = `${SITE}/og-default.png`

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(data: Record<string, unknown> | undefined) {
  const existing = document.head.querySelector('script[data-managed-jsonld="true"]')
  if (existing) existing.remove()
  if (!data) return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-managed-jsonld', 'true')
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export function useSeo({ title, description, ogImage, jsonLd }: SeoInput) {
  const { pathname } = useLocation()
  useEffect(() => {
    const canonical = `${SITE}${pathname === '/' ? '/' : pathname}`
    document.title = title
    setMeta('description', description)
    setLink('canonical', canonical)

    setMeta('og:type', 'website', 'property')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:image', ogImage || DEFAULT_OG, 'property')
    setMeta('og:site_name', 'Emagia', 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', ogImage || DEFAULT_OG)

    setJsonLd(jsonLd)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, title, description, ogImage, jsonLd])
}
