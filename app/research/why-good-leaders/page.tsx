import type { Metadata } from "next"
import { CheckCircle2, TrendingUp, Users, Shield, Heart, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: "Why Good Leaders Matter | Political BuZZ Research",
  description: "Understanding the critical importance of good political leadership for society, governance, and development. Research-backed insights on leadership impact.",
}

export default function WhyGoodLeadersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Why Good Leaders Matter
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#E1F2FE] max-w-3xl mx-auto px-4">
              The quality of leadership directly impacts every aspect of society—from economic growth to social harmony
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Economic Development",
                description:
                  "Good leaders create policies that foster business growth, attract investment, and generate employment opportunities for all citizens.",
                impact: "GDP growth, job creation, infrastructure development",
              },
              {
                icon: Users,
                title: "Social Harmony",
                description:
                  "Inclusive leaders bridge divides, promote unity, and ensure that all communities feel represented and valued in governance.",
                impact: "Reduced conflict, community cohesion, equal opportunities",
              },
              {
                icon: Shield,
                title: "Transparent Governance",
                description:
                  "Accountable leaders establish systems that prevent corruption, ensure transparency, and build public trust in institutions.",
                impact: "Reduced corruption, efficient services, citizen confidence",
              },
              {
                icon: Heart,
                title: "Public Welfare",
                description:
                  "Compassionate leaders prioritize healthcare, education, and social security, ensuring no citizen is left behind.",
                impact: "Better healthcare, quality education, social safety nets",
              },
              {
                icon: Target,
                title: "Long-term Vision",
                description:
                  "Visionary leaders plan for the future, investing in sustainable development and preparing for upcoming challenges.",
                impact: "Sustainable growth, climate action, future readiness",
              },
              {
                icon: CheckCircle2,
                title: "Effective Implementation",
                description:
                  "Results-oriented leaders don't just make promises—they deliver tangible outcomes that improve citizens' daily lives.",
                impact: "Completed projects, measurable results, citizen satisfaction",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/20 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <area.icon className="w-10 h-10 md:w-12 md:h-12 text-[#FFCF45] mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-sm md:text-base text-[#E1F2FE] mb-4 leading-relaxed">{area.description}</p>
                <div className="pt-4 border-t border-[#3377FF]/20">
                  <p className="text-xs md:text-sm text-[#72E9CD] font-medium">Key Impact:</p>
                  <p className="text-xs md:text-sm text-white/80 mt-1">{area.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cost of Poor Leadership */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#3377FF]/10 to-[#000629]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            The Cost of Poor Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                problem: "Corruption & Mismanagement",
                consequence: "Public funds wasted, projects delayed, services deteriorate, citizen trust erodes",
              },
              {
                problem: "Short-term Thinking",
                consequence: "Unsustainable policies, environmental damage, future generations burdened",
              },
              {
                problem: "Divisive Politics",
                consequence: "Social tensions rise, communities polarized, development stalled by conflict",
              },
              {
                problem: "Lack of Accountability",
                consequence: "Promises broken, no consequences for failure, citizens feel powerless",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-lg md:text-xl font-bold text-red-400 mb-3">{item.problem}</h3>
                <p className="text-sm md:text-base text-[#E1F2FE] leading-relaxed">{item.consequence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Your Vote Shapes the Future
          </h2>
          <p className="text-base md:text-lg text-[#E1F2FE] mb-8 md:mb-10 px-4">
            Good leaders don't happen by accident. They emerge when informed citizens make conscious choices based on
            character, competence, and commitment to public service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/research"
              className="inline-block bg-[#FFCF45] text-[#000629] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors text-sm md:text-base"
            >
              Explore More Research
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-[#72E9CD] text-[#72E9CD] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#72E9CD] hover:text-[#000629] transition-colors text-sm md:text-base"
            >
              Get Campaign Support
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
