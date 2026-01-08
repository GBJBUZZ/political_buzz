import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "500+ Campaign Portfolio | Political BuZZ Success Stories",
  description:
    "Political BuZZ has successfully executed 500+ political campaigns since 2008 for MLAs, Corporators, and Municipal candidates across Maharashtra with 95% success rate.",
  keywords:
    "political campaign portfolio, election success stories, Maharashtra campaigns, MLA campaigns, municipal elections",
}

export default function PortfolioPage() {
  const campaignTypes = [
    {
      title: "MLA Campaigns",
      count: "150+",
      description: "State Assembly elections across Maharashtra constituencies",
      icon: Award,
    },
    {
      title: "Municipal Corporation",
      count: "200+",
      description: "Mayor, Corporator, and Ward Member campaigns in major cities",
      icon: Users,
    },
    {
      title: "Nagar Parishad",
      count: "100+",
      description: "Municipal Council and Nagar Panchayat elections",
      icon: TrendingUp,
    },
    {
      title: "Gram Panchayat",
      count: "50+",
      description: "Rural local body elections and Sarpanch campaigns",
      icon: CheckCircle,
    },
  ]

  const highlights = [
    {
      year: "2025",
      campaign: "Bhandara Municipal Election",
      scope: "17 Wards | 85,000 Voters | Women Mayor Seat",
      result: "60% voter engagement, targeted wins in 10 wards",
      image: "/indian-election-voting-crowd-rally-democracy.jpg",
    },
    {
      year: "2024",
      campaign: "Nagpur Corporation Campaign",
      scope: "Multiple Wards | 500,000+ Voters",
      result: "12 out of 15 candidates won their seats",
      image: "/indian-political-rally-crowd-with-candidate-speaki.jpg",
    },
    {
      year: "2023",
      campaign: "Vidarbha MLA Campaigns",
      scope: "5 Constituencies | 2M+ Voters",
      result: "4 out of 5 candidates elected successfully",
      image: "/indian-political-leader-campaign-rally.jpg",
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
            <div className="inline-block bg-[#FFCF45] text-[#000629] px-4 py-2 rounded-full font-ui font-semibold text-sm mb-6">
              SINCE 2008
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              500+ Campaign <span className="text-[#FFCF45]">Portfolio</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed mb-8">
              Over 15 years of proven success in political campaign management across Maharashtra.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-12 px-8"
              >
                <Link href="/success-stories">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#72E9CD] text-[#72E9CD] hover:bg-[#72E9CD] hover:text-[#000629] h-12 px-8 bg-transparent"
              >
                <Link href="/contact">Request Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Campaigns", value: "500+", sublabel: "Since 2008" },
              { label: "Success Rate", value: "95%", sublabel: "Winning Campaigns" },
              { label: "Voters Reached", value: "2M+", sublabel: "Across Maharashtra" },
              { label: "Active Clients", value: "80+", sublabel: "Ongoing Partnerships" },
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

      {/* Campaign Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Campaign Types</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Comprehensive experience across all levels of political elections in Maharashtra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignTypes.map((type, index) => (
              <div
                key={index}
                className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <type.icon className="h-12 w-12 text-[#3377FF] mb-4" />
                <div className="font-heading font-bold text-3xl text-[#FFCF45] mb-2">{type.count}</div>
                <h3 className="font-heading font-bold text-lg text-[#000629] mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">Recent Campaign Highlights</h2>
            <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
              Featured success stories from our recent political campaigns.
            </p>
          </div>

          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={highlight.image || "/placeholder.svg"}
                      alt={highlight.campaign}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-block bg-[#3377FF] text-white px-3 py-1 rounded-full font-ui font-semibold text-xs mb-4">
                      {highlight.year}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[#000629] mb-3">{highlight.campaign}</h3>
                    <p className="text-sm text-gray-600 font-sans mb-4">{highlight.scope}</p>
                    <div className="bg-[#E1F2FE] rounded-lg p-4">
                      <p className="text-sm font-semibold text-[#3377FF] mb-1">Result:</p>
                      <p className="text-sm text-gray-700 font-sans">{highlight.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Join Our Success Story</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Be part of our winning portfolio. Let's build your campaign strategy together.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
          >
            <Link href="/packages">
              View Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
