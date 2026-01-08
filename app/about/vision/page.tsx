import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Vision & Philosophy | Political BuZZ - Data-Driven Campaign Strategy",
  description:
    "Political BuZZ's vision: Transform traditional politics into modern communication-led governance through data, discipline, and design. Learn about our 3M Approach.",
  keywords: "political vision, campaign philosophy, data-driven politics, 3M approach, micro planning",
}

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-[#000629]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/blue-gradient-background.jpg')",
            backgroundSize: "cover",
          }}
        />
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Our Vision & <span className="text-[#FFCF45]">Philosophy</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed">
              Transforming traditional politics into modern communication-led governance through evidence-driven
              strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-5xl text-[#000629] mb-8">
              Victory is not luck —<br />
              <span className="text-[#3377FF]">IT'S DATA, DISCIPLINE, AND DESIGN.</span>
            </h2>
            <p className="text-xl text-gray-600 font-sans max-w-3xl mx-auto leading-relaxed">
              Our vision is to transform traditional politics into modern communication-led governance. We believe every
              campaign should be built on evidence, executed with precision, and communicated with creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Target,
                title: "DATA",
                description:
                  "Evidence-driven insights from voter research, sentiment analysis, and booth-level targeting to inform every decision.",
                color: "#3377FF",
              },
              {
                icon: Lightbulb,
                title: "DISCIPLINE",
                description:
                  "Structured execution with micro-management, daily monitoring, and systematic coordination across all campaign layers.",
                color: "#FFCF45",
              },
              {
                icon: TrendingUp,
                title: "DESIGN",
                description:
                  "Creative storytelling through compelling content, strategic messaging, and visually engaging communication.",
                color: "#72E9CD",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-[#E1F2FE] rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <pillar.icon className="h-16 w-16 mb-6" style={{ color: pillar.color }} />
                <h3 className="font-heading font-bold text-2xl text-[#000629] mb-4">{pillar.title}</h3>
                <p className="text-gray-700 font-sans leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3M Approach */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">The 3M Approach</h2>
            <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
              Our campaign model focuses on localization and analytics through three core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Micro Planning",
                description:
                  "Every ward and booth receives a tailored plan based on local demographics, issues, and voter behavior patterns.",
                features: [
                  "Ward-wise strategy development",
                  "Booth-level targeting",
                  "Issue-based messaging",
                  "Localized content creation",
                ],
              },
              {
                title: "Mass Communication",
                description:
                  "Reaching voters through multiple channels with consistent, compelling messaging that resonates with local concerns.",
                features: [
                  "Multi-platform digital presence",
                  "IVR, SMS, WhatsApp campaigns",
                  "Door-to-door outreach",
                  "Community engagement events",
                ],
              },
              {
                title: "Measurable Results",
                description:
                  "Real-time tracking and analytics to measure campaign effectiveness and optimize strategies continuously.",
                features: [
                  "Daily performance dashboards",
                  "Voter sentiment tracking",
                  "Engagement metrics analysis",
                  "ROI measurement",
                ],
              },
            ].map((approach, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="font-heading font-bold text-2xl text-[#3377FF] mb-4">{approach.title}</h3>
                <p className="text-gray-700 font-sans leading-relaxed mb-6">{approach.description}</p>
                <ul className="space-y-2">
                  {approach.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#FFCF45] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Components */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Campaign Components</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Every Political BuZZ campaign includes these strategic elements for comprehensive coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Micro-Management Strategy",
                description: "Detailed planning and execution at ward and booth levels with continuous monitoring.",
              },
              {
                title: "AI-Based Opponent Analysis",
                description: "Real-time digital insights on opposition movements and messaging strategies.",
              },
              {
                title: "Influencer Collaboration",
                description: "2-5 local influencers per region for authentic youth engagement and reach.",
              },
              {
                title: "Periodic Mood Tracking",
                description: "Survey integration within social media to gauge voter sentiment continuously.",
              },
              {
                title: "Automated Reporting",
                description: "Daily performance analytics dashboard with actionable insights and recommendations.",
              },
              {
                title: "Crisis Communication",
                description: "Rapid response protocols for managing negative publicity and reputation threats.",
              },
            ].map((component, index) => (
              <div
                key={index}
                className="bg-[#E1F2FE] rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-heading font-bold text-lg text-[#000629] mb-2">{component.title}</h3>
                <p className="text-gray-700 font-sans text-sm leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Ready to Build a Winning Campaign?</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Let's apply our proven philosophy to your campaign. Contact us for a strategic consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
          >
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
