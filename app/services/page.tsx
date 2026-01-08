import {
  Target,
  Megaphone,
  MessageSquare,
  Video,
  Database,
  GraduationCap,
  Users,
  TrendingUp,
  FileText,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Target,
      title: "Political Strategy & Research",
      description:
        "Comprehensive campaign planning with booth-wise analysis, voter segmentation, and data-driven strategy development.",
      features: [
        "Booth mapping & SOW development",
        "Voter segmentation & targeting",
        "Survey design & execution",
        "Message testing & refinement",
        "Opposition research",
        "Manifesto development",
      ],
      color: "#003399",
    },
    {
      icon: Megaphone,
      title: "Digital Campaigning",
      description:
        "Full-spectrum digital strategy including social media, content creation, SEO, and paid advertising.",
      features: [
        "Social media management (all platforms)",
        "Content factory & creative production",
        "SEO & Google My Business optimization",
        "Paid advertising (Meta, Google, YouTube)",
        "Influencer partnerships",
        "Online reputation management",
      ],
      color: "#FFD166",
    },
    {
      icon: MessageSquare,
      title: "PR & Media Relations",
      description: "Strategic media outreach, press management, and crisis communication for maximum visibility.",
      features: [
        "Press release writing & distribution",
        "Media interview coordination",
        "Media training for candidates",
        "Crisis management & rapid response",
        "Editorial placement",
        "Press conference organization",
      ],
      color: "#003399",
    },
    {
      icon: Video,
      title: "Creative Production",
      description: "Professional video production, photography, and creative content for all campaign channels.",
      features: [
        "Campaign films & documentaries",
        "Social media reels & shorts",
        "Event coverage & live streaming",
        "Drone videography",
        "Photography & image editing",
        "Motion graphics & animation",
      ],
      color: "#FFD166",
    },
    {
      icon: Users,
      title: "Mass Outreach",
      description: "Large-scale voter communication through voice, SMS, and WhatsApp with compliance management.",
      features: [
        "IVR (voice call) campaigns",
        "Bulk SMS with personalization",
        "WhatsApp broadcast & groups",
        "Script library & A/B testing",
        "Delivery tracking & analytics",
        "ECI compliance management",
      ],
      color: "#003399",
    },
    {
      icon: GraduationCap,
      title: "Ground Operations",
      description: "Field coordination, volunteer management, and booth-level execution for maximum voter contact.",
      features: [
        "Door-to-door campaign coordination",
        "Volunteer recruitment & training",
        "Booth committee formation",
        "GOTV (Get Out The Vote) operations",
        "Polling agent deployment",
        "Field reporting & tracking",
      ],
      color: "#FFD166",
    },
    {
      icon: Database,
      title: "Election Software (GBJ Command)",
      description: "Proprietary campaign management platform with voter database, analytics, and real-time tracking.",
      features: [
        "ECI-verified voter database",
        "Booth-level targeting & segmentation",
        "Volunteer tracking & management",
        "Real-time analytics dashboards",
        "Survey & feedback collection",
        "Mobile app for field teams",
      ],
      color: "#003399",
    },
    {
      icon: TrendingUp,
      title: "Training & Capacity Building",
      description: "Expert-led training programs for candidates, campaign managers, and field teams.",
      features: [
        "Campaign management workshops",
        "Social media training",
        "Public speaking & media training",
        "Polling agent training modules",
        "War room operations training",
        "Custom training programs",
      ],
      color: "#FFD166",
    },
    {
      icon: FileText,
      title: "War Room Operations",
      description: "24/7 command center setup and management for the critical last 20 days of your campaign.",
      features: [
        "War room infrastructure setup",
        "24/7 staffing & coordination",
        "Real-time monitoring & response",
        "Crisis management protocols",
        "Daily strategy briefings",
        "Post-campaign analysis",
      ],
      color: "#003399",
    },
    {
      icon: Shield,
      title: "Compliance & Legal",
      description: "Election Commission compliance, expenditure tracking, and legal advisory services.",
      features: [
        "ECI rules & regulations compliance",
        "Expenditure tracking & reporting",
        "Legal disclosures & filings",
        "Spend limit management",
        "Documentation & record keeping",
        "Legal advisory support",
      ],
      color: "#FFD166",
    },
  ]

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-br from-light-blue to-white"
        style={{ background: "linear-gradient(to bottom right, #E6F0FF, #FFFFFF)" }}
      >
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold text-neutral-dark mb-6"
            style={{ color: "#0F1724" }}
          >
            Full Campaign Services
          </h1>
          <p className="text-xl text-neutral-dark/70 font-sans max-w-3xl mx-auto leading-relaxed">
            Everything you need: strategy, tech, media, and boots on the ground. From planning to victory, we handle
            every aspect of your political campaign.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-soft-gray rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: "#F5F7FA" }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: service.color === "#FFD166" ? "#FFD166" : "#E6F0FF" }}
                >
                  <service.icon
                    className="h-8 w-8"
                    style={{ color: service.color === "#FFD166" ? "#0F1724" : "#003399" }}
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-neutral-dark mb-4" style={{ color: "#0F1724" }}>
                  {service.title}
                </h2>

                <p className="text-neutral-dark/70 font-sans leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-dark/70">
                      <span className="text-gold mr-2" style={{ color: "#FFD166" }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-royal-blue" style={{ backgroundColor: "#003399" }}>
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to Build Your Winning Campaign?</h2>
          <p className="text-xl text-white/80 font-sans mb-8 max-w-2xl mx-auto">
            Let's discuss your campaign goals and create a customized strategy for victory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-neutral-dark font-ui font-semibold"
              style={{ backgroundColor: "#FFD166", color: "#0F1724" }}
              asChild
            >
              <Link href="/contact">Request Proposal</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-royal-blue bg-transparent"
              asChild
            >
              <a href="tel:7020107390">Call 7020107390</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
