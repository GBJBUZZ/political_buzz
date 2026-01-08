import { Hero } from "@/components/home/hero"
import { TrustBar } from "@/components/home/trust-bar"
import { ThreeLayerModel } from "@/components/home/three-layer-model"
import { ServicesGrid } from "@/components/home/services-grid"
import { CaseStudyBhandara } from "@/components/home/case-study-bhandara"
import { PackagesPreview } from "@/components/home/packages-preview"
import { ElectionTypes } from "@/components/home/election-types"
import { CandidateShowcase } from "@/components/home/candidate-showcase"
import { Testimonials } from "@/components/home/testimonials"
import { TechnologyPlatform } from "@/components/home/technology-platform"
import { InsightsFeed } from "@/components/home/insights-feed"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <ThreeLayerModel />
      <ServicesGrid />
      <CaseStudyBhandara />
      <PackagesPreview />
      <ElectionTypes />
      <CandidateShowcase />
      <Testimonials />
      <TechnologyPlatform />
      <InsightsFeed />
      <CTASection />
    </main>
  )
}
