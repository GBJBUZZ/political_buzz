"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CandidateShowcase() {
  const candidates = [
    {
      name: "Prashant Padole",
      title: "MP - Bhandara-Gondiya",
      description: "From grassroots to Parliament - A journey of dedication and service",
      image: "/images/prashant-padole.png",
      stats: { campaigns: "3", winRate: "100%", reach: "2.5M+" },
      link: "/candidates/prashant-padole"
    },
    {
      name: "Raju Karemore",
      title: "Voice of Tumsar",
      description: "Empowering communities through dedicated leadership",
      image: "/images/raju-karemore.png",
      stats: { campaigns: "2", winRate: "100%", reach: "500K+" },
      link: "/candidates/raju-karemore"
    },
    {
      name: "Narendra Bhondekar",
      title: "A Legacy in Action",
      description: "Building tomorrow with vision and integrity",
      image: "/images/narendra-bhondekar.png",
      stats: { campaigns: "4", winRate: "100%", reach: "1.2M+" },
      link: "/candidates/narendra-bhondekar"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
            <span className="text-blue-300 text-sm font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Winning Candidates We've Served
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            From local elections to Parliament - Our proven track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {candidates.map((candidate, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl overflow-hidden hover:border-blue-500 transition-all hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Candidate Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <Image
                  src={candidate.image}
                  alt={candidate.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                  {idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2">{candidate.name}</h3>
                <p className="text-blue-400 font-semibold mb-3">{candidate.title}</p>
                <p className="text-blue-200 text-sm mb-6">{candidate.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-lg font-black text-white">{candidate.stats.campaigns}</div>
                    <div className="text-xs text-blue-300">Campaigns</div>
                  </div>
                  <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="text-lg font-black text-white">{candidate.stats.winRate}</div>
                    <div className="text-xs text-green-300">Win Rate</div>
                  </div>
                  <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-lg font-black text-white">{candidate.stats.reach}</div>
                    <div className="text-xs text-purple-300">Reach</div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold"
                >
                  <Link href={candidate.link}>
                    View Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-blue-500/30 text-white hover:bg-white/20 font-bold"
          >
            <Link href="/candidates">
              View All Success Stories <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
