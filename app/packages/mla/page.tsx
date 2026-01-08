import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  Users,
  Megaphone,
  Camera,
  Globe,
  BarChart3,
  MessageSquare,
  Award,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MLA Election Campaign Package | Vidhan Sabha Campaign Services | Political BuZZ",
  description:
    "Professional MLA election campaign management for Vidhan Sabha elections. Comprehensive digital strategy, ground operations, PR management, and data-driven voter outreach across Maharashtra constituencies.",
  keywords:
    "MLA campaign, vidhan sabha election, state assembly campaign, MLA election strategy, constituency campaign management, legislative assembly election, political campaign services Maharashtra",
}

export default function MLAPackagePage() {
  const services = [
    {
      icon: TrendingUp,
      title: "360° Campaign Strategy",
      description: "Comprehensive constituency analysis, voter segmentation, and multi-channel campaign planning",
    },
    {
      icon: Globe,
      title: "Digital Dominance",
      description: "200+ social media posts, 100+ reels, influencer campaigns, and targeted digital advertising",
    },
    {
      icon: Megaphone,
      title: "PR & Media Management",
      description: "150+ press releases, TV interviews, newspaper coverage, and media relationship building",
    },
    {
      icon: Camera,
      title: "Premium Content Production",
      description: "Documentary films, campaign videos, drone coverage, and professional photography",
    },
    {
      icon: Users,
      title: "Ground Operations",
      description: "500+ volunteer network, booth management, door-to-door campaigns, and rally organization",
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "Real-time voter sentiment tracking, opposition monitoring, and data-driven decision making",
    },
    {
      icon: MessageSquare,
      title: "Mass Communication",
      description: "1 Lakh+ IVR calls, SMS campaigns, WhatsApp broadcasts, and personalized voter messaging",
    },
    {
      icon: Shield,
      title: "War Room Operations",
      description: "24/7 command center, crisis management, rapid response team, and real-time monitoring",
    },
    {
      icon: Zap,
      title: "Election Software Suite",
      description: "Voter database management, booth analytics, volunteer tracking, and polling day dashboard",
    },
  ]

  const deliverables = [
    "Comprehensive constituency research and voter analysis",
    "200-300 social media posts and 100-150 video reels",
    "150+ press releases across national, state, and local media",
    "Campaign documentary film and 15+ promotional videos",
    "Professional website with 20+ landing pages",
    "Meta and Google advertising campaigns (₹30-50 Lakh budget)",
    "1-2 Lakh IVR calls and SMS campaigns",
    "500+ volunteer recruitment, training, and management",
    "Booth-wise voter data management and analytics",
    "10-15 major rallies and public events",
    "Polling agent training and booth kit distribution",
    "24/7 war room with real-time monitoring",
    "Daily performance reports and analytics dashboards",
    "Crisis communication and reputation management",
    "Post-election analysis and documentation",
  ]

  const phases = [
    {
      phase: "Phase 1: Foundation & Strategy",
      duration: "Month 1-2",
      activities: [
        "Comprehensive constituency analysis and voter profiling",
        "Opposition research and competitive analysis",
        "Campaign messaging and narrative development",
        "Team formation and volunteer recruitment",
        "Digital infrastructure setup and website launch",
      ],
    },
    {
      phase: "Phase 2: Brand Building & Awareness",
      duration: "Month 3-4",
      activities: [
        "Documentary film production and release",
        "Social media campaign launch and influencer partnerships",
        "PR campaign initiation and media outreach",
        "Ground mobilization and door-to-door campaigns",
        "First wave of rallies and public meetings",
      ],
    },
    {
      phase: "Phase 3: Intensive Outreach",
      duration: "Month 5-6",
      activities: [
        "Mass messaging campaigns (IVR, SMS, WhatsApp)",
        "Targeted digital advertising across platforms",
        "Booth-level voter contact programs",
        "Issue-based campaigns and manifesto promotion",
        "Media interviews and press conferences",
      ],
    },
    {
      phase: "Phase 4: Final Push & Polling",
      duration: "Month 7-8",
      activities: [
        "Intensive ground operations and voter mobilization",
        "Last-mile voter contact and persuasion",
        "Polling agent deployment and training",
        "Booth management and monitoring",
        "Real-time result tracking and analysis",
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
              Vidhan Sabha Elections
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              MLA Election Campaign Package
            </h1>
            <p className="text-xl md:text-2xl font-sans text-[#E1F2FE] max-w-3xl mx-auto leading-relaxed">
              Complete State Assembly election campaign management with data-driven strategies and proven results
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-[#72E9CD] text-sm font-semibold">
              <span>✓ 500+ Volunteers</span>
              <span>✓ 150+ Media Coverage</span>
              <span>✓ 1 Lakh+ Voter Outreach</span>
              <span>✓ 24/7 War Room</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                asChild
                className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-10 h-14"
              >
                <Link href="/contact">
                  Get Custom Proposal
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
            Comprehensive Campaign Services
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
            Campaign Deliverables
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
            8-Month Campaign Timeline
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
            Ready to Win Your Vidhan Sabha Seat?
          </h2>
          <p className="text-xl text-[#E1F2FE] mb-8 max-w-2xl mx-auto">
            Join 100+ winning candidates who trusted Political BuZZ for their MLA campaigns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-[#3377FF] hover:bg-[#3377FF]/90 text-white font-heading font-semibold text-base px-10 h-14"
            >
              <Link href="/contact">Schedule Strategy Session</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[#72E9CD] hover:bg-[#72E9CD]/90 text-[#000629] font-heading font-semibold text-base px-10 h-14"
            >
              <a href="https://wa.me/917058253695" target="_blank" rel="noopener noreferrer">
                WhatsApp Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
