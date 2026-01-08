import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Nagar Sevak (Ward Member) Campaign Package | Political BuZZ - Ward Election Strategy",
  description:
    "Targeted Nagar Sevak ward member election campaign services with hyperlocal strategy, digital outreach, and community engagement for Maharashtra municipal elections.",
  keywords: "nagar sevak campaign, ward member election, municipal ward campaign, local body elections Maharashtra",
}

export default function NagarSevakPackagePage() {
  const services = [
    {
      category: "Digital Campaigning & Social Media",
      items: [
        "Account setup (Facebook, Instagram, YouTube Shorts)",
        "100 flyers, 60 reels per campaign phase",
        "Hyperlocal content targeting ward residents",
        "Local influencer partnerships",
        "Geo-targeted Meta & Google ads",
        "Daily engagement & community management",
        "Ward-specific hashtags and trending content",
      ],
    },
    {
      category: "Creative Production",
      items: [
        "2 campaign videos showcasing local issues",
        "Candidate introduction video",
        "Event coverage & rally documentation",
        "Photography for social media & print",
        "Short reels highlighting development work",
      ],
    },
    {
      category: "PR & Media",
      items: [
        "50+ local press releases",
        "Regional media coverage",
        "Local cable TV integration",
        "Community newspaper features",
        "WhatsApp media circuit engagement",
      ],
    },
    {
      category: "Website & Digital Presence",
      items: [
        "Candidate landing page under politicalbuzz.in",
        "Manifesto & vision statement",
        "Volunteer registration form",
        "Contact & feedback system",
        "Analytics integration",
      ],
    },
    {
      category: "Ground Communication & Field Operations",
      items: [
        "Door-to-door campaign coordination",
        "Volunteer mobilization (50-100 volunteers)",
        "Booth-level strategy & agent training",
        "Community meetings & nukkad sabhas",
        "Voter slip distribution",
        "Booth kit preparation",
      ],
    },
    {
      category: "Mass Messaging",
      items: [
        "3-5 lakh voice calls (IVR)",
        "SMS campaigns with manifesto highlights",
        "WhatsApp broadcasts to ward groups",
        "Personalized voter outreach",
      ],
    },
    {
      category: "Survey & Research",
      items: [
        "Ward-level voter sentiment analysis",
        "5-7 key local issues identification",
        "100-150 respondent survey",
        "Booth-wise data mapping",
      ],
    },
    {
      category: "Election Software & Technology",
      items: [
        "GBJ Election App access",
        "Voter list management",
        "Volunteer tracking dashboard",
        "Real-time reporting system",
        "Polling day monitoring",
      ],
    },
    {
      category: "Training & Support",
      items: [
        "2 training sessions for core team",
        "Polling agent briefing",
        "Social media team training",
        "Weekly performance reports",
      ],
    },
  ]

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
            <div className="inline-block bg-[#72E9CD] text-[#000629] px-4 py-2 rounded-full font-ui font-semibold text-sm mb-6">
              WARD MEMBER ELECTIONS
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Nagar Sevak <span className="text-[#FFCF45]">Campaign Package</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed mb-8">
              Hyperlocal campaign strategy designed for ward-level elections. Connect with every voter in your ward
              through targeted digital and ground outreach.
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
                className="border-2 border-[#72E9CD] text-[#72E9CD] hover:bg-[#72E9CD] hover:text-[#000629] h-14 px-12 text-lg bg-transparent"
              >
                <a href="tel:7020107390">Call 7020107390</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Campaign Duration", value: "30-45 Days" },
              { label: "Ward Coverage", value: "Single Ward" },
              { label: "Voter Reach", value: "5,000-15,000" },
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#72E9CD] to-[#3377FF] rounded-xl p-8 text-center">
                <div className="font-heading font-bold text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-white/80 font-sans">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading font-bold text-3xl text-[#000629] mb-6">Campaign Objective</h2>
            <p className="text-gray-700 font-sans leading-relaxed mb-8">
              Cost-effective, hyperlocal campaign focused on building strong community connections. Perfect for ward
              member candidates who want to establish direct voter relationships through personalized outreach and
              community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-20 bg-[#E1F2FE]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Ward-Level Campaign Services</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Comprehensive services tailored for ward member elections with focus on community engagement.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="font-heading font-bold text-2xl text-[#3377FF] mb-6">{service.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-sans text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">
              Why Choose Our Ward Campaign Package
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Hyperlocal Focus",
                description: "Every strategy tailored to your specific ward demographics and issues",
              },
              {
                title: "Cost-Effective",
                description: "Optimized budget allocation for maximum impact in ward-level campaigns",
              },
              {
                title: "Community Connect",
                description: "Door-to-door outreach and personal voter engagement strategies",
              },
              {
                title: "Data-Driven",
                description: "Real-time analytics and voter sentiment tracking for your ward",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="font-heading font-bold text-lg text-[#3377FF] mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-700 font-sans leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#72E9CD]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-[#000629] mb-6">
            Win Your Ward with Data-Driven Strategy
          </h2>
          <p className="text-xl text-[#000629]/80 font-sans mb-8 max-w-2xl mx-auto">
            Get a customized ward campaign proposal with hyperlocal targeting and community engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#000629] hover:bg-[#000629]/90 text-white font-ui font-semibold h-14 px-12 text-lg"
            >
              <Link href="/contact">
                Request Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#000629] text-[#000629] hover:bg-[#000629] hover:text-white h-14 px-12 text-lg bg-transparent"
            >
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
