import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import GiaAgents from '@/components/GiaAgents'
import ROICalculator from '@/components/ROICalculator'
import EnterpriseNarrative from '@/components/EnterpriseNarrative'
import FinalCTA from '@/components/FinalCTA'
import VisitUs from '@/components/VisitUs'
import { useSeo } from '@/lib/useSeo'

export default function Home() {
  useSeo({
    title: 'Emagia — Cut DSO by 14 Days. Automate 98% of Cash Application.',
    description:
      'Enterprise AI agents for Order-to-Cash. Touchless from invoice to posted cash. $8B+ AR processed annually for Staples, Cognizant, ConvaTec, Xylem and other Fortune-500 finance teams.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Emagia Gia Agents',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description:
        'Enterprise AI agents for Order-to-Cash automation. Cuts DSO by an average of 14 days and automates 98% of cash application.',
      url: 'https://emagia.risesitelab.com/',
      publisher: {
        '@type': 'Organization',
        name: 'Emagia, Inc.',
        url: 'https://www.emagia.com',
      },
    },
  })
  return (
    <>
      <Hero />
      <ProofBar />
      <GiaAgents />
      <ROICalculator />
      <EnterpriseNarrative />
      <VisitUs />
      <FinalCTA />
    </>
  )
}
