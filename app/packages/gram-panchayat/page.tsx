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
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gram Panchayat Election Campaign Package | Political BuZZ",
  description:
    "Comprehensive Gram Panchayat election campaign services. Rural-focused digital campaigns, ground mobilization, voter outreach, and grassroots strategies for Sarpanch and Panch elections across Maharashtra.",
  keywords:
    "gram panchayat campaign, sarpanch election, panch election, rural election campaign, village election strategy, grassroots mobilization, rural voter outreach, panchayat election services",
}

export default function GramPanchayatPackagePage() {
  const services = [
    {
      icon: Users,
      title: "Grassroots Mobilization",
      description: "Village-level volunteer networks, door-to-door campaigns, and community engagement programs",
    },
    {
      icon: Megaphone,
      title: "Rural Communication Strategy",
      description: "Localized messaging, regional language content, and culturally relevant campaign materials",
    },
    {
      icon: Camera,
      title: "Video & Photography",
      description: "Village event coverage, candidate introduction videos, and development work documentation",
    },
    {
      icon: Globe,
      title: "Digital Presence",
      description: "Social media management, WhatsApp campaigns, and local influencer collaboration",
    },
    {
      icon: BarChart3,
      title: "Voter Data Analytics",
      description: "Booth-wise voter analysis, family mapping, and targeted voter identification",
    },
    {
      icon: MessageSquare,
      title: "Mass Messaging",
      description: "IVR calls, SMS campaigns, and WhatsApp broadcasts in local languages",
    },
  ]

  const deliverables = [
    "Village-level campaign strategy and planning",
    "50-80 social media posts with regional language content",
    "20-30 campaign videos and reels",
    "Door-to-door campaign coordination",
    "Volunteer training and mobilization (50-100 volunteers)",
    "Booth-wise voter list management",
    "5,000-10,000 IVR calls and SMS campaigns",
    "Local event organization and coverage",
    "Polling agent training and booth kit preparation",
    "Daily campaign monitoring and reporting",
  ]

  const phases = [
    {
      phase: "Phase 1: Planning & Research",
      duration: "Week 1-2",
      activities: [
        "Village demographic analysis",
        "Issue identification and priority mapping",
        "Volunteer recruitment and team formation",
        "Campaign messaging development",
      ],
    },
    {
      phase: "Phase 2: Ground Mobilization",
      duration: "Week 3-5",
      activities: [
        "Door-to-door voter contact program",
        "Village meetings and community gatherings",
        "Local influencer engagement",
        "Development work documentation",
      ],
    },
    {
      phase: "Phase 3: Digital & Mass Outreach",
      duration: "Week 4-6",
      activities: [
        "Social media campaign launch",
        "WhatsApp group management",
        "IVR and SMS campaigns",
        "Video content distribution",
      ],
    },
    {
      phase: "Phase 4: Final Push & Polling Day",
      duration: "Week 7-8",
      activities: [
        "Intensive voter contact program",
        "Polling agent deployment",
        "Booth management and monitoring",
        "Real-time result tracking",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge className="bg-[#72E9CD] text-[#000629] hover:bg-[#72E9CD]/90 text-sm px-4 py-1">
              Rural Election Campaigns
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Gram Panchayat Election Campaign Package
            </h1>
            <p className="text-xl md:text-2xl font-sans text-[#E1F2FE] max-w-3xl mx-auto leading-relaxed">
              Comprehensive grassroots campaign services for Sarpanch, Panch, and Panchayat Samiti elections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                asChild
                className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-10 h-14"
              >
                <Link href="/contact">
                  Get Custom Quote
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
            Campaign Timeline & Phases
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
            Ready to Win Your Gram Panchayat Election?
          </h2>
          <p className="text-xl text-[#E1F2FE] mb-8 max-w-2xl mx-auto">
            Get a customized campaign strategy tailored to your village and constituency needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-[#3377FF] hover:bg-[#3377FF]/90 text-white font-heading font-semibold text-base px-10 h-14"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[#72E9CD] hover:bg-[#72E9CD]/90 text-[#000629] font-heading font-semibold text-base px-10 h-14"
            >
              <a href="https://wa.me/917058253695" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
