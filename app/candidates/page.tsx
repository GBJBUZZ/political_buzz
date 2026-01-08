import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Featured Candidates | Political BuZZ Success Stories",
  description:
    "Meet the candidates we've helped win: Narendra Bhondekar, Raju Karemore, Prashant Padole. Success stories from Maharashtra's political campaigns.",
  keywords: "political candidates, Maharashtra politicians, election winners, campaign success stories",
}

export default function CandidatesPage() {
  const candidates = [
    {
      name: "Narendra Bhondekar",
      title: "A Legacy in Action",
      constituency: "Bhandara",
      achievements: [
        "Infrastructure Development: Roads, electrification, water supply",
        "Education Initiatives: School improvements and student support",
        "Community Welfare: Healthcare and farmer support programs",
        "Public Recognition: Multiple awards for public service",
      ],
      role: "We supported his campaign with data-driven strategy, digital management, PR coordination, and documentary film production.",
      image: "/indian-political-leader-portrait.jpg",
    },
    {
      name: "Raju Karemore",
      title: "Voice of Tumsar",
      constituency: "Tumsar",
      achievements: [
        "Healthcare Access: Improved medical facilities and services",
        "Farmer Support: Agricultural initiatives and relief programs",
        "Infrastructure Growth: Road development and public amenities",
        "Community Recognition: Trusted leader with strong grassroots support",
      ],
      role: "Comprehensive campaign strategy including digital outreach, field operations, and media management.",
      image: "/indian-political-candidate.jpg",
    },
    {
      name: "Prashant Padole",
      title: "From Bhandara-Gondiya to Parliament",
      constituency: "Bhandara-Gondiya",
      achievements: [
        "Relief Work: Disaster management and community support",
        "Public Service: Consistent delivery on electoral promises",
        "Media Presence: Strong recognition across regional and national platforms",
        "Parliamentary Representation: Effective voice for constituency issues",
      ],
      role: "Full-stack campaign including digital strategy, field coordination, PR management, and voter mobilization.",
      image: "/indian-parliamentary-candidate.jpg",
    },
  ]

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
              Featured <span className="text-[#FFCF45]">Candidates</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed">
              Meet the leaders we've helped achieve electoral success across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Candidates Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="space-y-16">
            {candidates.map((candidate, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={candidate.image || "/placeholder.svg"}
                      alt={candidate.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="font-heading font-bold text-3xl text-white mb-2">{candidate.name}</h2>
                      <p className="text-[#FFCF45] font-heading font-semibold text-lg">{candidate.title}</p>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-[#3377FF]" />
                    <span className="font-ui font-semibold text-[#3377FF]">{candidate.constituency}</span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-[#000629] mb-6">Key Achievements</h3>
                  <ul className="space-y-3 mb-8">
                    {candidate.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-[#FFCF45] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-sans leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#E1F2FE] rounded-lg p-6 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-[#3377FF]" />
                      <h4 className="font-heading font-bold text-lg text-[#000629]">Our Role</h4>
                    </div>
                    <p className="text-gray-700 font-sans leading-relaxed">{candidate.role}</p>
                  </div>

                  <Button
                    asChild
                    className="bg-[#3377FF] hover:bg-[#3377FF]/90 text-white font-ui font-semibold h-12 px-8"
                  >
                    <Link href="/contact">
                      Request Similar Campaign <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Join Our Success Stories</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Be the next winning candidate. Let's craft your campaign strategy for victory.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
          >
            <Link href="/packages">
              View Campaign Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
