import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Users, Home, Sprout, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gram Panchayat Election Campaigns | Political BuZZ - Rural Election Experts",
  description:
    "Specialized Gram Panchayat election campaign services. Grassroots mobilization, door-to-door outreach, and community engagement for winning rural elections.",
  keywords:
    "gram panchayat election, rural election campaign, village election, sarpanch campaign, panchayat election strategy",
}

export default function GramPanchayatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E1F2FE] to-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#000629] to-[#3377FF]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-block bg-[#FFCF45] text-[#000629] px-6 py-2 rounded-full font-semibold text-sm mb-4">
              Rural Elections | Panchayati Raj
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Gram Panchayat Elections
            </h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] max-w-3xl mx-auto leading-relaxed">
              Winning rural elections through authentic grassroots connection and community trust
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#000629] mb-6">
                Rural-First Campaign Strategy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Gram Panchayat elections require deep community roots and personal connections. Our campaigns focus on
                door-to-door outreach, local issue resolution, and building trust through consistent presence.
              </p>
              <div className="space-y-4">
                {[
                  "Door-to-door family visits and personal meetings",
                  "Local issue identification and resolution planning",
                  "Community gathering and gram sabha engagement",
                  "Traditional + digital hybrid approach",
                  "Volunteer network from within the village",
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
                src="/indian-village-gram-panchayat-rural-community-meet.jpg"
                alt="Gram Panchayat Campaign"
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#E1F2FE] rounded-lg">
                  <div className="text-3xl font-bold text-[#3377FF]">100%</div>
                  <div className="text-sm text-gray-600">Door Coverage</div>
                </div>
                <div className="text-center p-4 bg-[#E1F2FE] rounded-lg">
                  <div className="text-3xl font-bold text-[#3377FF]">50+</div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#3377FF] to-[#000629] rounded-2xl p-8 md:p-12 text-white mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
              Our Gram Panchayat Campaign Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Home,
                  title: "Door-to-Door Outreach",
                  description: "Personal visits to every household with family-level engagement",
                },
                {
                  icon: Users,
                  title: "Community Mobilization",
                  description: "Organizing gram sabhas, community meetings, and local gatherings",
                },
                {
                  icon: Sprout,
                  title: "Local Issue Focus",
                  description: "Identifying and addressing village-specific development needs",
                },
                {
                  icon: Heart,
                  title: "Trust Building",
                  description: "Long-term relationship building with community leaders and families",
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
              Campaign Approach
            </h3>
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1: Community Assessment (Week 1-2)",
                  activities: [
                    "Village mapping and household survey",
                    "Local issue identification through community meetings",
                    "Key influencer and opinion leader mapping",
                    "Volunteer recruitment from within the village",
                  ],
                },
                {
                  phase: "Phase 2: Ground Campaign (Week 3-6)",
                  activities: [
                    "Door-to-door visits to every household",
                    "Daily community gatherings and chai pe charcha",
                    "Local issue resolution demonstrations",
                    "Traditional media (posters, banners, wall paintings)",
                  ],
                },
                {
                  phase: "Phase 3: Final Push (Week 7-8)",
                  activities: [
                    "Intensive voter contact program",
                    "Gram sabha participation and speeches",
                    "Polling day booth management",
                    "GOTV (Get Out The Vote) operations",
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
            Win Your Gram Panchayat Election
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Let's build a campaign rooted in community trust and grassroots connection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-12 h-14"
            >
              <Link href="/contact">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-[#3377FF] text-[#3377FF] hover:bg-[#3377FF] hover:text-white font-heading font-semibold text-base px-12 h-14 bg-transparent"
            >
              <Link href="/packages/gram-panchayat">View Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
