import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  Users,
  Camera,
  Globe,
  BarChart3,
  MessageSquare,
  Award,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Tv,
  Radio,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MP Election Campaign Package | Lok Sabha Campaign Services | Political BuZZ",
  description:
    "Elite parliamentary election campaign management for Lok Sabha seats. Multi-constituency strategy, national media coverage, large-scale voter mobilization, and comprehensive digital dominance across Maharashtra.",
  keywords:
    "MP campaign, lok sabha election, parliamentary election, MP election strategy, national election campaign, constituency campaign, political campaign management, lok sabha campaign services",
}

export default function MPPackagePage() {
  const services = [
    {
      icon: Target,
      title: "Multi-Constituency Strategy",
      description: "Coordinated campaign across 6-8 assembly segments with unified messaging and local customization",
    },
    {
      icon: Globe,
      title: "Digital Supremacy",
      description: "400+ posts, 200+ reels, national influencer campaigns, and multi-platform advertising dominance",
    },
    {
      icon: Tv,
      title: "National Media Coverage",
      description: "250+ press releases, TV debates, national newspaper coverage, and prime-time visibility",
    },
    {
      icon: Camera,
      title: "Elite Content Production",
      description: "Feature-length documentaries, TV commercials, OTT content, and cinematic campaign films",
    },
    {
      icon: Users,
      title: "Large-Scale Mobilization",
      description: "2000+ volunteer army, multi-tier coordination, and constituency-wide ground operations",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & AI",
      description: "Predictive modeling, sentiment analysis, micro-targeting, and real-time intelligence",
    },
    {
      icon: MessageSquare,
      title: "Mass Communication at Scale",
      description: "5 Lakh+ voter outreach through IVR, SMS, WhatsApp, and personalized messaging",
    },
    {
      icon: Shield,
      title: "Central War Room",
      description: "Multi-location command centers, 24/7 operations, crisis management, and rapid response",
    },
    {
      icon: Zap,
      title: "Enterprise Election Platform",
      description: "Multi-constituency data management, real-time dashboards, and integrated campaign tools",
    },
    {
      icon: Radio,
      title: "Traditional Media Integration",
      description: "Radio spots, print campaigns, outdoor advertising, and local cable network coverage",
    },
    {
      icon: TrendingUp,
      title: "Opposition Research",
      description: "Comprehensive competitor analysis, debate preparation, and strategic positioning",
    },
    {
      icon: Award,
      title: "Brand Building & Legacy",
      description: "Long-term reputation management, thought leadership, and national profile development",
    },
  ]

  const deliverables = [
    "Multi-constituency campaign strategy and coordination",
    "400-500 social media posts and 200+ video reels",
    "250+ press releases across national, state, and regional media",
    "Feature documentary film and 25+ campaign videos",
    "TV commercials and OTT platform content",
    "Professional website with 30+ landing pages and constituency microsites",
    "Meta, Google, and YouTube advertising (₹1-2 Crore budget)",
    "5 Lakh+ IVR calls, SMS, and WhatsApp campaigns",
    "2000+ volunteer recruitment, training, and management",
    "Multi-tier booth management across all assembly segments",
    "25-30 major rallies and constituency-wide events",
    "National and regional influencer partnerships",
    "TV debate preparation and media training",
    "Polling agent training across 1500+ booths",
    "Central war room with constituency-level coordination",
    "Daily intelligence reports and analytics dashboards",
    "Crisis communication and reputation management",
    "Post-election documentation and legacy building",
  ]

  const phases = [
    {
      phase: "Phase 1: Strategic Foundation",
      duration: "Month 1-3",
      activities: [
        "Multi-constituency analysis and voter profiling",
        "National and local opposition research",
        "Campaign narrative and messaging framework",
        "Multi-tier team formation and infrastructure setup",
        "Digital ecosystem development and launch",
        "Initial media outreach and profile building",
      ],
    },
    {
      phase: "Phase 2: Brand Establishment",
      duration: "Month 4-6",
      activities: [
        "Documentary film production and national release",
        "Multi-platform social media campaign launch",
        "National PR campaign and media partnerships",
        "Constituency-wide ground mobilization",
        "First wave of major rallies and public meetings",
        "Influencer and celebrity endorsements",
      ],
    },
    {
      phase: "Phase 3: Intensive Campaigning",
      duration: "Month 7-9",
      activities: [
        "Mass communication campaigns at scale",
        "Multi-platform advertising blitz",
        "Booth-level voter contact programs",
        "Issue-based campaigns and manifesto promotion",
        "TV debates and national media appearances",
        "Opposition countering and rapid response",
      ],
    },
    {
      phase: "Phase 4: Final Mobilization",
      duration: "Month 10-12",
      activities: [
        "Intensive ground operations across all segments",
        "Last-mile voter persuasion and mobilization",
        "Multi-constituency polling agent deployment",
        "Booth management and real-time monitoring",
        "Result tracking and victory celebration planning",
        "Post-election analysis and documentation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge className="bg-[#FFCF45] text-[#000629] hover:bg-[#FFCF45]/90 text-sm px-4 py-1">
              Lok Sabha Elections
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              MP Election Campaign Package
            </h1>
            <p className="text-xl md:text-2xl font-sans text-[#E1F2FE] max-w-3xl mx-auto leading-relaxed">
              Elite parliamentary campaign management with national reach and multi-constituency coordination
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-[#72E9CD] text-sm font-semibold">
              <span>✓ 2000+ Volunteers</span>
              <span>✓ 250+ National Media</span>
              <span>✓ 5 Lakh+ Voter Outreach</span>
              <span>✓ Multi-Location War Rooms</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                asChild
                className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-10 h-14"
              >
                <Link href="/contact">
                  Get Elite Campaign Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-[#3377FF] text-[#3377FF] hover:bg-[#3377FF] hover:text-white font-heading font-semibold text-base px-10 h-14 bg-transparent"
              >
                <a href="tel:+917058253695">Call +917058253695</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-[#E1F2FE]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            Comprehensive Parliamentary Campaign Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 border-[#3377FF]/20 hover:border-[#3377FF] transition-all">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-[#FFCF45] mb-4" />
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#E1F2FE]/80">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            Elite Campaign Deliverables
          </h2>
          <Card className="bg-white/5 border-[#3377FF]/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#72E9CD] flex-shrink-0 mt-0.5" />
                    <span className="text-[#E1F2FE]">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Campaign Phases */}
      <section className="py-20 px-4 bg-[#E1F2FE]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            12-Month Parliamentary Campaign Timeline
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className="bg-white/5 border-[#3377FF]/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#FFCF45] text-[#000629]">{phase.duration}</Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{phase.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#E1F2FE]/80">
                        <CheckCircle2 className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Award className="h-16 w-16 text-[#FFCF45] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Win Your Lok Sabha Seat?
          </h2>
          <p className="text-xl text-[#E1F2FE] mb-8 max-w-2xl mx-auto">
            Join elite leaders who chose Political BuZZ for their parliamentary campaigns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-[#3377FF] hover:bg-[#3377FF]/90 text-white font-heading font-semibold text-base px-10 h-14"
            >
              <Link href="/contact">Schedule Elite Consultation</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[#72E9CD] hover:bg-[#72E9CD]/90 text-[#000629] font-heading font-semibold text-base px-10 h-14"
            >
              <a href="https://wa.me/917058253695" target="_blank" rel="noopener noreferrer">
                WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
