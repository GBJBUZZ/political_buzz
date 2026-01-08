import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Heart, Brain, Shield, Target, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Who Should Lead? - Qualities of an Ideal Political Leader | Political BuZZ",
  description:
    "Discover the essential characteristics, qualifications, and values that define an ideal political leader. Learn what makes a great representative of the people.",
  keywords:
    "political leader qualities, ideal leader, leadership characteristics, political qualifications, good governance, representative democracy",
}

export default function WhoShouldLeadPage() {
  const leaderQualities = [
    {
      icon: Heart,
      title: "Empathy & Compassion",
      description:
        "A true leader understands the struggles of common people and works tirelessly to improve their lives with genuine care and concern.",
    },
    {
      icon: Brain,
      title: "Vision & Strategic Thinking",
      description:
        "Leaders must have a clear vision for the future and the strategic ability to plan and execute policies that benefit society.",
    },
    {
      icon: Shield,
      title: "Integrity & Honesty",
      description:
        "Unwavering commitment to ethical conduct, transparency, and honesty in all dealings is the foundation of trustworthy leadership.",
    },
    {
      icon: Users,
      title: "Inclusive Representation",
      description:
        "Great leaders represent all sections of society, ensuring that every voice is heard and every community is served equally.",
    },
    {
      icon: Target,
      title: "Results-Oriented Approach",
      description:
        "Focus on delivering tangible results and measurable outcomes that improve the quality of life for constituents.",
    },
    {
      icon: CheckCircle,
      title: "Accountability & Transparency",
      description:
        "Leaders must be accountable for their actions and decisions, maintaining transparency in governance and communication.",
    },
  ]

  const idealLeaderProfile = [
    {
      category: "Educational Background",
      points: [
        "Strong educational foundation with understanding of governance",
        "Continuous learning and adaptation to changing times",
        "Knowledge of economics, social issues, and public policy",
      ],
    },
    {
      category: "Professional Experience",
      points: [
        "Track record of service to community or society",
        "Experience in problem-solving and decision-making",
        "Understanding of ground realities and people's needs",
      ],
    },
    {
      category: "Personal Values",
      points: [
        "Commitment to public service over personal gain",
        "Respect for democratic institutions and processes",
        "Dedication to constitutional values and social justice",
      ],
    },
    {
      category: "Communication Skills",
      points: [
        "Ability to connect with people from all backgrounds",
        "Clear articulation of vision and policies",
        "Active listening and responsiveness to feedback",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-4 pt-24">
        <Link
          href="/research"
          className="inline-flex items-center text-[#72E9CD] hover:text-[#FFCF45] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Research
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Who Should{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCF45] to-[#72E9CD]">
                Lead Us?
              </span>
            </h1>
            <p className="font-ui text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Understanding the qualities, characteristics, and values that define an ideal political leader who truly
              serves the people and builds a better future for all.
            </p>
          </div>

          {/* Core Leadership Qualities */}
          <div className="mb-20">
            <h2 className="font-heading font-bold text-3xl text-white text-center mb-12">
              Essential Leadership Qualities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaderQualities.map((quality, index) => (
                <div
                  key={index}
                  className="bg-[#001845]/50 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-8 hover:border-[#FFCF45] transition-all duration-300"
                >
                  <quality.icon className="h-12 w-12 text-[#72E9CD] mb-4" />
                  <h3 className="font-heading font-bold text-xl text-white mb-3">{quality.title}</h3>
                  <p className="font-ui text-white/70 text-sm leading-relaxed">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Leader Profile */}
          <div className="mb-20">
            <h2 className="font-heading font-bold text-3xl text-white text-center mb-12">Profile of an Ideal Leader</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {idealLeaderProfile.map((section, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#3377FF]/20 to-[#000629]/50 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-8"
                >
                  <h3 className="font-heading font-bold text-xl text-[#FFCF45] mb-6">{section.category}</h3>
                  <ul className="space-y-4">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="font-ui text-white/80 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* What Citizens Should Look For */}
          <div className="bg-gradient-to-r from-[#3377FF]/20 to-[#72E9CD]/20 backdrop-blur-sm border border-[#3377FF]/30 rounded-2xl p-12">
            <h2 className="font-heading font-bold text-3xl text-white text-center mb-8">
              What Citizens Should Look For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-[#FFCF45] mb-4">Before Elections</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">
                      Research candidate's background and track record
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">Evaluate their vision and proposed policies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">Assess their connection with local community</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">Check for any criminal or corruption records</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-[#FFCF45] mb-4">After Elections</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">Monitor fulfillment of election promises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">Track development work and initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">Evaluate accessibility and responsiveness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#72E9CD] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="font-ui text-white/80 text-sm">Engage in constructive dialogue and feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#001845]/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Learn More About Political Leadership
          </h2>
          <p className="font-ui text-lg text-white/70 mb-8">
            Explore more research topics to become an informed and engaged citizen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold text-base h-12 px-8 rounded-lg"
            >
              <Link href="/research/why-good-leaders">Why Good Leaders Matter</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-[#72E9CD] text-[#72E9CD] hover:bg-[#72E9CD] hover:text-[#000629] font-ui font-semibold text-base h-12 px-8 rounded-lg"
            >
              <Link href="/research/leadership-qualities">Leadership Qualities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
