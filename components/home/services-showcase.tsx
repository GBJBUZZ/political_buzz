"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Megaphone,
  Video,
  Newspaper,
  MessageSquare,
  Users,
  FileCheck,
  BarChart3,
  Smartphone,
  Camera,
  Globe,
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Campaign Strategy & Research",
    description: "Data-driven insights, voter segmentation, and winning strategies",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Digital & Social Media",
    description: "Content factory, social campaigns, SEO/GMB optimization, targeted ads",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Newspaper,
    title: "PR & Media Relations",
    description: "Press releases, media training, crisis management, interview coordination",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Field Operations & Mobilization",
    description: "Door-to-door campaigns, volunteer management, booth operations",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Election Software & Analytics",
    description: "GBJ Command Platform with voter data ops, heatmaps, turnout tracking",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Video,
    title: "Creative Production & Video",
    description: "Campaign films, reels, drone footage, event coverage, graphics",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: MessageSquare,
    title: "Mass Outreach",
    description: "Voice calls, SMS, WhatsApp campaigns with script libraries",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Megaphone,
    title: "War Room Operations",
    description: "24/7 command center for last 20 days, real-time monitoring",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: FileCheck,
    title: "Compliance & Legal",
    description: "ECI rules adherence, disclosures, spend tracking, documentation",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Camera,
    title: "Event Management",
    description: "Rally planning, stage design, crowd management, live streaming",
    color: "from-red-500 to-pink-500",
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/political-map-india-pattern.jpg')] bg-repeat" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What <span className="text-primary">Political BuZZ</span> Does
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are more than a social media team — we are full campaign architects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-card/50 backdrop-blur-sm animate-in fade-in zoom-in-50 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <p className="text-lg text-primary font-semibold">
            "From streets to screens — we plan, produce, and power every stage of your election campaign."
          </p>
        </div>
      </div>
    </section>
  )
}
