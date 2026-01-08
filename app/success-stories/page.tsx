import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, TrendingUp, Users, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Success Stories & Case Studies | Political BuZZ - 500+ Winning Campaigns",
  description:
    "Explore Political BuZZ success stories including Bhandara 2025 case study with 60% voter engagement. 500+ winning campaigns across Maharashtra since 2008.",
  keywords: "political campaign success stories, election case studies, Bhandara 2025, winning campaigns, Maharashtra",
}

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-[#000629]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/hero-team-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#FFCF45] text-[#000629] px-4 py-2 rounded-full font-ui font-semibold text-sm mb-6">
              500+ WINNING CAMPAIGNS
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Success Stories & <span className="text-[#FFCF45]">Case Studies</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed">
              Real campaigns, real results. Explore how we've helped candidates win across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Bhandara 2025 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="bg-gradient-to-br from-[#3377FF] to-[#000629] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto">
                <Image
                  src="/indian-election-voting-crowd-rally-democracy.jpg"
                  alt="Bhandara 2025 Campaign"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="inline-block bg-[#FFCF45] text-[#000629] px-3 py-1 rounded-full font-ui font-bold text-xs mb-2">
                    FEATURED CASE STUDY
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-white">Bhandara 2025</h2>
                </div>
              </div>
              <div className="p-12">
                <h3 className="font-heading font-bold text-2xl text-white mb-6">
                  17 Wards | 85,000 Voters | Women Mayor Seat
                </h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#FFCF45] mb-2">Challenge</h4>
                    <p className="text-white/80 font-sans leading-relaxed">
                      17 wards with high literacy rates and significant swing voters. Needed to micro-target women and
                      youth voters using a hybrid field and data model.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#FFCF45] mb-2">Strategy</h4>
                    <p className="text-white/80 font-sans leading-relaxed">
                      Implemented micro-targeting with WhatsApp and field synchronization, weekly analytics dashboards,
                      and real-time voter sentiment tracking across all 17 wards.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#FFCF45] mb-2">Outcome</h4>
                    <p className="text-white/80 font-sans leading-relaxed">
                      Achieved 60% voter engagement with record turnout in 10 key wards. Successfully delivered targeted
                      wins through data-driven campaign execution.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Voter Engagement", value: "60%" },
                    { label: "Wards Won", value: "10/17" },
                    { label: "Turnout Increase", value: "+15%" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="font-heading font-bold text-2xl text-[#FFCF45] mb-1">{stat.value}</div>
                      <div className="text-xs text-white/70 font-sans">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-12 px-8"
                >
                  <Link href="/contact">
                    Request Similar Strategy <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">Campaign Impact & Outcomes</h2>
            <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
              Measurable results that demonstrate the effectiveness of our data-driven approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Image Building",
                description: "Enhanced digital reputation and candidate visibility across all platforms",
              },
              {
                icon: Users,
                title: "Direct Voter Communication",
                description: "Personalized outreach reaching 2M+ voters through multiple channels",
              },
              {
                icon: Target,
                title: "Technological Edge",
                description: "Real-time analytics and AI-powered insights for strategic decisions",
              },
              {
                icon: TrendingUp,
                title: "Informed Strategy",
                description: "Data-driven decision making with measurable volunteer productivity",
              },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                <impact.icon className="h-12 w-12 text-[#3377FF] mb-4" />
                <h3 className="font-heading font-bold text-lg text-[#000629] mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Hear from candidates and campaign managers who achieved victory with Political BuZZ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Political BuZZ made our campaign digital and decisive. Every voter knew our work.",
                author: "Local Candidate",
                location: "Bhandara 2025",
              },
              {
                quote:
                  "The analytics dashboard changed how we managed volunteers and booths. Game-changing technology.",
                author: "Campaign Manager",
                location: "Ward No. 8",
              },
              {
                quote: "From flyers to films to press — one team handled everything flawlessly.",
                author: "Independent Candidate",
                location: "Nagpur Region",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl text-[#3377FF] mb-4">"</div>
                <p className="text-gray-700 font-sans leading-relaxed mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-[#3377FF]/20 pt-4">
                  <p className="font-heading font-bold text-[#000629]">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 font-sans">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Join 500+ winning campaigns. Let's build your victory strategy together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
            >
              <Link href="/contact">
                Request Campaign Proposal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#3377FF] h-14 px-12 text-lg bg-transparent"
            >
              <a href="tel:7020107390">Call 7020107390</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
