import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import GiaAgents from '@/components/GiaAgents'
import ROICalculator from '@/components/ROICalculator'
import EnterpriseNarrative from '@/components/EnterpriseNarrative'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan focus:text-ink focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <ProofBar />
        <GiaAgents />
        <ROICalculator />
        <EnterpriseNarrative />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
