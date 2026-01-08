import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Globe, Users, TrendingUp, Shield, Megaphone, BarChart3 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Lok Sabha Election Campaigns | Political BuZZ - Parliamentary Election Experts",
  description:
    "Elite Lok Sabha (Parliamentary) election campaign services. National-level strategy, multi-constituency coordination, and comprehensive campaign management for winning MP elections.",
  keywords:
    "lok sabha election, parliamentary election, MP campaign, national election strategy, parliamentary constituency campaign",
}

export default function LokSabhaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E1F2FE] to-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#000629] to-[#3377FF]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-block bg-[#FFCF45] text-[#000629] px-6 py-2 rounded-full font-semibold text-sm mb-4">
              Parliamentary Elections | National Level
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Lok Sabha Elections
            </h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] max-w-3xl mx-auto leading-relaxed">
              Elite campaign management for Parliamentary constituencies with national-level strategy and execution
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#000629] mb-6">
                National-Level Campaign Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Lok Sabha elections demand sophisticated multi-layered campaigns spanning entire parliamentary
                constituencies. Our elite services combine national messaging with hyper-local execution across hundreds
                of villages and urban wards.
              </p>
              <div className="space-y-4">
                {[
                  "Multi-constituency coordination (5-7 assembly segments)",
                  "2000+ volunteer network with hierarchical structure",
                  "National + regional + local messaging framework",
                  "Elite PR with national media coverage",
                  "12-month comprehensive campaign timeline",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#3377FF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#3377FF]/20">
              <img
                src="/indian-parliament-lok-sabha-election-campaign-rall.jpg"
                alt="Lok Sabha Campaign"
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#E1F2FE] rounded-lg">
                  <div className="text-3xl font-bold text-[#3377FF]">2000+</div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
                <div className="text-center p-4 bg-[#E1F2FE] rounded-lg">
                  <div className="text-3xl font-bold text-[#3377FF]">12 Mo</div>
                  <div className="text-sm text-gray-600">Campaign</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#3377FF] to-[#000629] rounded-2xl p-8 md:p-12 text-white mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
              Elite Lok Sabha Campaign Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Multi-Tier Strategy",
                  description: "Coordinated campaign across 5-7 assembly segments with unified messaging",
                },
                {
                  icon: Users,
                  title: "Massive Ground Network",
                  description: "2000+ trained volunteers with booth-level presence across constituency",
                },
                {
                  icon: Megaphone,
                  title: "National Media Coverage",
                  description: "Elite PR with coverage in national newspapers, TV channels, and digital media",
                },
                {
                  icon: TrendingUp,
                  title: "Advanced Analytics",
                  description: "AI-powered voter sentiment tracking and real-time campaign optimization",
                },
                {
                  icon: Shield,
                  title: "Crisis Management",
                  description: "24/7 war room with rapid response team for reputation management",
                },
                {
                  icon: BarChart3,
                  title: "Data-Driven Targeting",
                  description: "Constituency-wide voter database with micro-targeting capabilities",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <service.icon className="h-12 w-12 text-[#FFCF45] mb-4" />
                  <h4 className="text-xl font-heading font-semibold mb-3">{service.title}</h4>
                  <p className="text-[#E1F2FE] leading-relaxed text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#FFCF45]/30">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#000629] mb-8 text-center">
              12-Month Campaign Timeline
            </h3>
            <div className="space-y-8">
              {[
                {
                  phase: "Months 1-3: Foundation & Research",
                  activities: [
                    "Comprehensive constituency mapping and voter database creation",
                    "Opposition research and SWOT analysis",
                    "Volunteer recruitment and training program launch",
                    "Brand positioning and messaging framework development",
                  ],
                },
                {
                  phase: "Months 4-6: Ground Building",
                  activities: [
                    "Assembly segment-wise booth committee formation",
                    "Door-to-door outreach program across all villages and wards",
                    "Local issue identification and resolution planning",
                    "Social media presence establishment and content creation",
                  ],
                },
                {
                  phase: "Months 7-9: Intensive Campaign",
                  activities: [
                    "Large-scale rallies and public meetings (50+ events)",
                    "National media PR campaign and interview coordination",
                    "Digital advertising blitz across Meta, Google, and OTT platforms",
                    "Influencer partnerships and celebrity endorsements",
                  ],
                },
                {
                  phase: "Months 10-12: Final Push",
                  activities: [
                    "Hyper-local micro-targeting with personalized messaging",
                    "Polling day preparation with 2000+ polling agents",
                    "GOTV operations with booth-level monitoring",
                    "Real-time war room operations and rapid response",
                  ],
                },
              ].map((phase, index) => (
                <div key={index} className="border-l-4 border-[#3377FF] pl-6">
                  <h4 className="text-xl font-heading font-semibold text-[#3377FF] mb-4">{phase.phase}</h4>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E1F2FE]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#000629] mb-6">
            Ready for Parliamentary Victory?
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Let's build a winning campaign for your Lok Sabha constituency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-12 h-14"
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-[#3377FF] text-[#3377FF] hover:bg-[#3377FF] hover:text-white font-heading font-semibold text-base px-12 h-14 bg-transparent"
            >
              <Link href="/packages/mp">View MP Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
