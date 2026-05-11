import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan focus:text-ink focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
