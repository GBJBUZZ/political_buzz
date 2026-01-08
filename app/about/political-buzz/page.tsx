import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Megaphone, BarChart3, Users, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Political BuZZ | Data-Driven Political Campaign Agency | Maharashtra",
  description:
    "Political BuZZ is Maharashtra's first data-driven political strategy firm. 500+ successful campaigns since 2008 for MLAs, Corporators, and Municipal candidates.",
  keywords:
    "Political BuZZ, political campaign agency, election strategy, Maharashtra, data-driven campaigns, MLA campaigns",
}

export default function AboutPoliticalBuzzPage() {
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
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FFCF45] text-[#000629] px-4 py-2 rounded-full font-ui font-semibold text-sm mb-6">
              POWERED BY GBJ BUZZ
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              About <span className="text-[#FFCF45]">Political BuZZ</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed mb-8">
              Maharashtra's first data-driven political strategy firm. Transforming campaigns through AI analytics,
              public sentiment mapping, and creative mass communication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-12 px-8"
              >
                <Link href="/packages">
                  View Packages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#72E9CD] text-[#72E9CD] hover:bg-[#72E9CD] hover:text-[#000629] h-12 px-8 bg-transparent"
              >
                <Link href="/success-stories">Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Campaigns", value: "500+", sublabel: "Since 2008" },
              { label: "Voters Reached", value: "2M+", sublabel: "Across Maharashtra" },
              { label: "Success Rate", value: "95%", sublabel: "Winning Campaigns" },
              { label: "Team Members", value: "340+", sublabel: "Field & Digital" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/90 font-sans font-semibold">{stat.label}</div>
                <div className="text-xs text-white/70 font-sans mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Core Expertise</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Comprehensive political campaign services powered by data and delivered with precision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Political Strategy & Research",
                description: "SOW creation, execution, and booth-level targeting with ECI-verified data.",
              },
              {
                icon: Megaphone,
                title: "Digital Campaign Management",
                description: "End-to-end social media, content creation, and targeted advertising campaigns.",
              },
              {
                icon: Users,
                title: "PR & Reputation Engineering",
                description: "Media relations, press coverage, and strategic communication management.",
              },
              {
                icon: BarChart3,
                title: "Election Software Integration",
                description: "GBJ Command Platform with real-time analytics and voter management.",
              },
              {
                icon: Database,
                title: "Field Survey & Research",
                description: "Voter mood mapping, issue prioritization, and sentiment analysis.",
              },
              {
                icon: Award,
                title: "Training & Mobilization",
                description: "Volunteer coordination, polling agent training, and booth operations.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#E1F2FE] rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-[#3377FF] mb-4" />
                <h3 className="font-heading font-bold text-xl text-[#000629] mb-3">{service.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Layer Model */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">Our 3-Layer Campaign Model</h2>
            <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
              Every Political BuZZ campaign runs on our proven three-layer approach for maximum impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ground Layer",
                description: "Door-to-door outreach, local engagement, volunteer activation, and booth management.",
                color: "#72E9CD",
                image: "/field-operations-ground-rally.jpg",
              },
              {
                title: "Digital Layer",
                description: "Social media strategy, influencer campaigns, targeted ads, and online PR management.",
                color: "#3377FF",
                image: "/digital-campaign-social-media-management.jpg",
              },
              {
                title: "Decision Layer",
                description: "Research, analytics, voter targeting, and data-driven strategic clarity.",
                color: "#FFCF45",
                image: "/data-analytics-dashboard.jpg",
              },
            ].map((layer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={layer.image || "/placeholder.svg"} alt={layer.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 font-heading font-bold text-2xl"
                    style={{ color: layer.color }}
                  >
                    {layer.title}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 font-sans leading-relaxed">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-5xl text-white mb-8">Our Philosophy</h2>
          <p className="text-3xl font-heading font-bold text-[#FFCF45] mb-6">
            "Victory is not luck — IT'S DATA, DISCIPLINE, AND DESIGN."
          </p>
          <p className="text-xl text-white/90 font-sans max-w-3xl mx-auto leading-relaxed">
            We transform traditional politics into modern communication-led governance through evidence-driven
            strategies, disciplined execution, and creative excellence.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-[#000629] mb-6">Ready to Win Your Campaign?</h2>
          <p className="text-xl text-gray-600 font-sans mb-8 max-w-2xl mx-auto">
            Let's build your winning strategy together. Contact us for a free campaign consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
            >
              <Link href="/contact">
                Request Proposal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#3377FF] text-[#3377FF] hover:bg-[#3377FF] hover:text-white h-14 px-12 text-lg bg-transparent"
            >
              <a href="tel:7020107390">Call 7020107390</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
