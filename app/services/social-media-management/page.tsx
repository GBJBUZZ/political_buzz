import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Users, TrendingUp, Target, BarChart3, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Social Media Management | Political BuZZ - Election Campaign Services",
  description:
    "Professional social media management for political campaigns. 150-200 posts, influencer collaboration, daily engagement, and targeted advertising for winning elections.",
  keywords:
    "political social media, election campaign social media, political marketing, social media strategy, political advertising",
}

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E1F2FE] to-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#000629] to-[#3377FF]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Social Media Management
            </h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] max-w-3xl mx-auto leading-relaxed">
              Build digital trust and recall through consistent, emotion-driven storytelling across all platforms
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#000629] mb-6">360° Digital Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Engage voters across all touchpoints with a comprehensive social media strategy that builds trust,
                drives engagement, and creates lasting recall.
              </p>
              <div className="space-y-4">
                {[
                  "Platform setup & optimization (Facebook, Instagram, YouTube)",
                  "150-200 reels and 250-300 flyers per campaign phase",
                  "Daily posting, engagement tracking & audience moderation",
                  "Local influencer collaboration for authentic reach",
                  "Trending content, buzz words, and campaign hashtags",
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
                src="/social-media-dashboard-analytics-political-campaig.jpg"
                alt="Social Media Management Dashboard"
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#E1F2FE] rounded-lg">
                  <div className="text-3xl font-bold text-[#3377FF]">150-200</div>
                  <div className="text-sm text-gray-600">Reels & Videos</div>
                </div>
                <div className="text-center p-4 bg-[#E1F2FE] rounded-lg">
                  <div className="text-3xl font-bold text-[#3377FF]">250-300</div>
                  <div className="text-sm text-gray-600">Posts & Flyers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#3377FF] to-[#000629] rounded-2xl p-8 md:p-12 text-white mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Our Social Media Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Platform Management",
                  description: "Complete setup, optimization, and daily management of all social media accounts",
                },
                {
                  icon: TrendingUp,
                  title: "Content Strategy",
                  description: "Data-driven content calendar with trending topics, hashtags, and viral formats",
                },
                {
                  icon: Target,
                  title: "Targeted Advertising",
                  description: "Geo-targeted paid campaigns with A/B testing and conversion optimization",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Reporting",
                  description: "Real-time performance tracking with detailed insights and recommendations",
                },
                {
                  icon: MessageSquare,
                  title: "Community Management",
                  description: "Active engagement, comment moderation, and reputation management",
                },
                {
                  icon: Calendar,
                  title: "Influencer Collaboration",
                  description: "Partnership with 2-5 local influencers per region for authentic reach",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <service.icon className="h-12 w-12 text-[#FFCF45] mb-4" />
                  <h4 className="text-xl font-heading font-semibold mb-3">{service.title}</h4>
                  <p className="text-[#E1F2FE] leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#FFCF45]/30">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#000629] mb-8 text-center">
              Campaign Deliverables
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-heading font-semibold text-[#3377FF] mb-4">Content Creation</h4>
                <ul className="space-y-3">
                  {[
                    "150-200 short-form videos (Reels, Shorts)",
                    "250-300 graphic posts and flyers",
                    "SEO-friendly captions with hashtags",
                    "Trending audio and visual formats",
                    "QR code integration for tracking",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-heading font-semibold text-[#3377FF] mb-4">Campaign Management</h4>
                <ul className="space-y-3">
                  {[
                    "Daily posting schedule (3-5 posts/day)",
                    "Real-time engagement monitoring",
                    "Comment moderation and response",
                    "Influencer coordination and amplification",
                    "Weekly performance reports",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E1F2FE]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#000629] mb-6">
            Ready to Dominate Social Media?
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Let's build your digital presence and connect with voters where they spend their time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-12 h-14"
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-[#3377FF] text-[#3377FF] hover:bg-[#3377FF] hover:text-white font-heading font-semibold text-base px-12 h-14 bg-transparent"
            >
              <Link href="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
