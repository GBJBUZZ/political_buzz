"use client"

import { Target, Megaphone, Video, MessageSquare, Users, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesGrid() {
  const services = [
    {
      icon: Target,
      title: "Strategy & Research",
      description: "Booth-wise SOW, voter segmentation, manifestos.",
      bullets: ["Booth mapping", "Survey design", "Message testing"],
      href: "/services/strategy",
      image: "/data-analytics-dashboard.jpg",
    },
    {
      icon: Megaphone,
      title: "Digital Campaigns",
      description: "Social media, content factory, SEO/GMB, ads.",
      bullets: ["Social media", "Content creation", "Paid advertising"],
      href: "/services/digital",
      image: "/digital-campaign-social-media-management.jpg",
    },
    {
      icon: MessageSquare,
      title: "PR & Media",
      description: "Press notes, interviews, media training, crisis.",
      bullets: ["Press releases", "Media training", "Crisis management"],
      href: "/services/pr",
      image: "/pr-media-press-conference.jpg",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Films, reels, events, drones.",
      bullets: ["Campaign films", "Social reels", "Event coverage"],
      href: "/services/video",
      image: "/video-production-campaign.jpg",
    },
    {
      icon: Users,
      title: "Election Software",
      description: "GBJ Command Platform with voter analytics.",
      bullets: ["Voter database", "Analytics dashboard", "GOTV tools"],
      href: "/software",
      image: "/election-management-software-dashboard.jpg",
    },
    {
      icon: GraduationCap,
      title: "Training & Field Ops",
      description: "Expert sessions, war room, booth operations.",
      bullets: ["Training programs", "War room setup", "Field coordination"],
      href: "/services/training",
      image: "/field-operations-ground-rally.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-4"
            style={{ color: "#0F1724" }}
          >
            What We Do — Full Campaign Services
          </h2>
          <p className="text-xl text-neutral-dark/70 font-sans">
            Everything you need: strategy, tech, media, and boots on the ground.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-soft-gray rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up group"
              style={{
                backgroundColor: "#F5F7FA",
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000629] via-transparent to-transparent opacity-60" />
                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#E6F0FF" }}
                >
                  <service.icon className="h-6 w-6" style={{ color: "#003399" }} />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3" style={{ color: "#0F1724" }}>
                  {service.title}
                </h3>

                <p className="text-neutral-dark/70 font-sans mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-dark/70">
                      <span className="text-gold mr-2" style={{ color: "#FFD166" }}>
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="text-sm font-ui font-medium text-royal-blue hover:text-gold transition-colors"
                  style={{ color: "#003399" }}
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
