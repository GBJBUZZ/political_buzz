import type { Metadata } from "next"
import { Brain, Heart, Shield, Users, Target, Lightbulb, MessageSquare, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Essential Leadership Qualities | Political BuZZ Research",
  description:
    "Comprehensive analysis of the key qualities that define effective political leadership in modern democracy.",
}

export default function LeadershipQualitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Essential Leadership Qualities
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#E1F2FE] max-w-3xl mx-auto px-4">
              The characteristics that distinguish exceptional leaders from ordinary politicians
            </p>
          </div>
        </div>
      </section>

      {/* Core Qualities Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Brain,
                quality: "Strategic Vision",
                description:
                  "Ability to see beyond immediate challenges and plan for long-term prosperity and sustainable development.",
                examples: [
                  "5-10 year development plans",
                  "Infrastructure roadmaps",
                  "Economic transformation strategies",
                ],
              },
              {
                icon: Heart,
                quality: "Empathy & Compassion",
                description:
                  "Genuine concern for citizens' welfare, especially the marginalized and vulnerable sections of society.",
                examples: ["Listening to citizen concerns", "Inclusive policy-making", "Social welfare programs"],
              },
              {
                icon: Shield,
                quality: "Integrity & Ethics",
                description:
                  "Unwavering commitment to honesty, transparency, and ethical conduct in all aspects of governance.",
                examples: ["Financial transparency", "Conflict of interest disclosure", "Anti-corruption measures"],
              },
              {
                icon: Users,
                quality: "Inclusive Leadership",
                description:
                  "Representing and serving all communities regardless of caste, religion, gender, or economic status.",
                examples: ["Diverse team building", "Community engagement", "Equal opportunity policies"],
              },
              {
                icon: Target,
                quality: "Results Orientation",
                description:
                  "Focus on delivering tangible outcomes and measurable improvements in citizens' quality of life.",
                examples: ["Project completion tracking", "Performance metrics", "Accountability systems"],
              },
              {
                icon: Lightbulb,
                quality: "Innovation & Adaptability",
                description:
                  "Willingness to embrace new ideas, technologies, and approaches to solve complex problems.",
                examples: ["Digital governance", "Smart city initiatives", "Policy experimentation"],
              },
              {
                icon: MessageSquare,
                quality: "Communication Skills",
                description:
                  "Ability to articulate vision clearly, listen actively, and engage in meaningful dialogue with citizens.",
                examples: ["Public addresses", "Town halls", "Social media engagement"],
              },
              {
                icon: TrendingUp,
                quality: "Continuous Learning",
                description:
                  "Commitment to personal growth, staying informed about best practices, and learning from successes and failures.",
                examples: ["Policy research", "International best practices", "Stakeholder feedback"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/20 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#FFCF45] mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.quality}</h3>
                <p className="text-sm md:text-base text-[#E1F2FE] mb-4 leading-relaxed">{item.description}</p>
                <div className="pt-4 border-t border-[#3377FF]/20">
                  <p className="text-xs md:text-sm text-[#72E9CD] font-medium mb-2">Examples in Practice:</p>
                  <ul className="space-y-1">
                    {item.examples.map((example, i) => (
                      <li key={i} className="text-xs md:text-sm text-white/80 flex items-start gap-2">
                        <span className="text-[#FFCF45] mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Framework */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#3377FF]/10 to-[#000629]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            How to Assess Leadership Qualities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "1. Track Record",
                description: "Review past performance, completed projects, and fulfilled promises",
              },
              {
                step: "2. Public Engagement",
                description: "Observe how they interact with citizens, handle criticism, and respond to feedback",
              },
              {
                step: "3. Policy Positions",
                description: "Analyze their stance on key issues and the feasibility of their proposed solutions",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-[#72E9CD]/30 rounded-xl p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-bold text-[#FFCF45] mb-3">{item.step}</div>
                <p className="text-sm md:text-base text-[#E1F2FE] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Build Your Leadership Campaign</h2>
          <p className="text-base md:text-lg text-[#E1F2FE] mb-8 md:mb-10 px-4">
            Political BuZZ helps leaders showcase these essential qualities through data-driven campaigns
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FFCF45] text-[#000629] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors text-sm md:text-base"
          >
            Start Your Campaign
          </a>
        </div>
      </section>
    </main>
  )
}
