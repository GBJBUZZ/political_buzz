"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Megaphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    name: "Narendra Bhondekar",
    title: "A Legacy in Action",
    location: "Municipal Corporation",
    image: "/indian-political-leader-campaign-rally.jpg",
    achievements: ["Infrastructure Development", "Electrification Projects", "Education Initiatives"],
    impact: "Comprehensive digital strategy with 80% voter reach",
    icon: TrendingUp,
  },
  {
    name: "Raju Karemore",
    title: "Voice of Tumsar",
    location: "Tumsar Region",
    image: "/indian-politician-public-meeting-crowd.jpg",
    achievements: ["Healthcare Expansion", "Farmer Support Programs", "Infrastructure Growth"],
    impact: "Field operations covering 35+ wards with micro-targeting",
    icon: Users,
  },
  {
    name: "Prashant Padole",
    title: "From Bhandara-Gondiya to Parliament",
    location: "Bhandara-Gondiya",
    image: "/indian-election-campaign-parliament-candidate.jpg",
    achievements: ["Relief Work Leadership", "Public Service Excellence", "Promise Fulfillment"],
    impact: "PR lift from 80 to 250+ platforms with sentiment shift",
    icon: Megaphone,
  },
]

export function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proven <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real campaigns, real results — see how we've helped leaders win elections across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden border-primary/20 bg-card/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in zoom-in-50 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{study.name}</h3>
                    <p className="text-primary font-semibold">{study.title}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-gray-300">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{study.location}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {study.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-sm text-primary font-semibold">{study.impact}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
