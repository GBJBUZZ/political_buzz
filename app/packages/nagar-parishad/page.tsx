import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Nagar Parishad Campaign Package | Political BuZZ - Municipal Council Election Strategy",
  description:
    "Comprehensive Nagar Parishad election campaign services including digital strategy, field operations, PR management, and voter outreach for municipal council elections in Maharashtra.",
  keywords:
    "nagar parishad campaign, municipal council election, Maharashtra municipal elections, political campaign services",
}

export default function NagarParishadPackagePage() {
  const services = [
    {
      category: "Digital Campaigning & Social Media",
      items: [
        "Account setup & optimization (Facebook, Instagram, YouTube Shorts)",
        "100-120 creative posts, 40-60 reels/videos per phase",
        "SEO-friendly captions & hashtags in Marathi, Hindi, English",
        "Local influencer collaboration (2-5 influencers per region)",
        "Meta + Google ad strategy with geo-targeting",
        "Daily posting, engagement tracking & audience moderation",
        "Trending reels, buzz words, and campaign hashtags",
        "QR code engagement and link tracking",
      ],
    },
    {
      category: "Creative Production & Video Marketing",
      items: [
        "Political documentaries & campaign films",
        "Drone coverage & event shoots",
        "Speech and manifesto videos",
        "80-250+ press platforms (regional/national)",
        "Interview coordination & media handling",
        '"Vikas Kam" short documentaries showcasing development work',
        "Cinematic ads & interviews for broadcast media",
        "High-quality content tailored for TV, OTT, and social platforms",
      ],
    },
    {
      category: "PR & Media Communication",
      items: [
        "100+ National Press Releases (Times of India, Business Insider, NDTV, Hitavada)",
        "100+ State Media coverage (Lokmat, Sakal, Loksatta)",
        "Regional & Local News placement",
        "Press notes, interviews, and coverage placement",
        "Positive visibility across all media layers",
        "Media relations & crisis communication",
      ],
    },
    {
      category: "Website & SEO Management",
      items: [
        "Candidate Profile Website (15+ Landing Pages)",
        "Polls, sentiment surveys & live heatmaps",
        "AI Chatbots for voter interaction",
        "SEO in Marathi, Hindi, and English",
        "Real-time traffic & data analysis",
        "CMS for quick updates",
        "Article & backlink integration",
      ],
    },
    {
      category: "AI, Analytics & Election Software",
      items: [
        "GBJ Command Platform - Built for Elections",
        "Voter List Printing (Booth-wise)",
        "Family Cards, Voter Slips, Inland Letters",
        "Booth Kits & War Room Setup",
        "Dedicated Call Center & Mobile App",
        "Rajyakarta Portal & Voter Search Engine",
        "SMS Portal, IVR Integration, Survey Module",
        "Real-time voter data sync & booth analytics dashboard",
        "AI mood detection & sentiment analysis",
        "Polling-day monitoring & data visualization",
      ],
    },
    {
      category: "Mass Messaging & IVR Outreach",
      items: [
        "IVR Calls: Personalized automated calls",
        "SMS Campaigns: Manifesto, events, and reminders",
        "WhatsApp Broadcasts: Interactive scripts & updates",
        "Voice calls, SMS, WhatsApp campaigns",
        "Multilingual scripts (Marathi | Hindi | English)",
        "22 lakh+ verified voter data records",
      ],
    },
    {
      category: "Survey & Research Program",
      items: [
        "10 key local issues per Prabhag",
        "200-300 respondent surveys",
        "Data integration with messaging framework",
        "Continuous sentiment analysis",
        "Clear voter mood mapping",
        "Issue prioritization for every ward",
      ],
    },
    {
      category: "Training & Volunteer Network",
      items: [
        "17 Ward Leads × 20 Volunteers = 340-member network",
        "Polling agent training",
        "Volunteer coordination workshops",
        "Data reporting sessions",
        "Performance dashboards",
        "Campaign planning workshops",
        "Field agent & social media training",
        "Daily report monitoring",
        "Weekly performance dashboards",
      ],
    },
    {
      category: "Ground Events & Public Engagement",
      items: [
        "Rallies, community meetings, and cultural events",
        "Event coverage (photo, video, live)",
        "Outcome monitoring for attendance, sentiment, and engagement metrics",
        "Door-to-door outreach",
        "Local engagement & volunteer activation",
      ],
    },
    {
      category: "Advertising Ecosystem",
      items: [
        "Meta Platforms: Facebook, Instagram, WhatsApp",
        "Google & YouTube Ads",
        "OTT Platforms: MX Player, ShareChat, Moj",
        "Local Influencers & Micro Ads",
        "A/B testing, conversion tracking, and ad optimization",
      ],
    },
    {
      category: "Constituency Strategy & Issue Management",
      items: [
        "Employment generation & industrial linkages",
        "Interstate trade facilitation",
        "Youth & business sentiment research",
        "Comparative audit of promises vs. delivery",
        "Association demand prioritization",
        "Volunteer mobilization & community events",
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
            <div className="inline-block bg-[#FFCF45] text-[#000629] px-4 py-2 rounded-full font-ui font-semibold text-sm mb-6">
              MUNICIPAL COUNCIL ELECTIONS
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Nagar Parishad <span className="text-[#FFCF45]">Campaign Package</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed mb-8">
              Comprehensive 360° campaign strategy for Municipal Council elections. Data-driven, field-tested, and
              results-oriented.
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
              { label: "Campaign Duration", value: "45-60 Days" },
              { label: "Coverage", value: "17+ Wards" },
              { label: "Voter Reach", value: "85,000+" },
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-[#3377FF] to-[#000629] rounded-xl p-8 text-center">
                <div className="font-heading font-bold text-4xl text-[#FFCF45] mb-2">{stat.value}</div>
                <div className="text-white/80 font-sans">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading font-bold text-3xl text-[#000629] mb-6">Campaign Objective</h2>
            <p className="text-gray-700 font-sans leading-relaxed mb-8">
              Focused, localized & cost-effective campaign emphasizing voter connection through ground + digital
              strategies. A professional, data-backed, full-stack political campaign connecting candidate vision with
              voters through analytics, storytelling & ground coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-20 bg-[#E1F2FE]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Comprehensive Scope of Work</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Every aspect of your campaign, meticulously planned and executed by our expert team.
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

      {/* Three-Layer Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Our Proven 3-Layer Model</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Every campaign runs on our data-driven, field-tested approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ground Layer",
                description: "Door-to-door outreach, local engagement & volunteer activation",
                color: "from-[#FFCF45] to-[#FF9F45]",
              },
              {
                title: "Digital Layer",
                description: "Social media, influencer strategy, targeted ads & online PR",
                color: "from-[#3377FF] to-[#72E9CD]",
              },
              {
                title: "Decision Layer",
                description: "Research, analytics & voter targeting for strategic clarity",
                color: "from-[#72E9CD] to-[#3377FF]",
              },
            ].map((layer, index) => (
              <div key={index} className={`bg-gradient-to-br ${layer.color} rounded-xl p-8 text-white`}>
                <h3 className="font-heading font-bold text-2xl mb-4">{layer.title}</h3>
                <p className="font-sans leading-relaxed">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Ready to Launch Your Winning Campaign?</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Get a customized campaign proposal tailored to your constituency and goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
            >
              <Link href="/contact">
                Request Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#3377FF] h-14 px-12 text-lg bg-transparent"
            >
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
