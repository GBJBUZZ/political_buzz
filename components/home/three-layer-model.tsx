"use client"

import { Database, Smartphone, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function ThreeLayerModel() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const layers = [
    {
      icon: Database,
      title: "Ground Layer",
      subtitle: "Grassroots Connection",
      description: "Field operations, volunteer mobilization, door-to-door campaigns & booth management.",
      color: "#3377FF",
      gradient: "from-[#3377FF]/20 to-[#3377FF]/5",
      image: "/field-operations-ground-rally.jpg",
      features: ["340+ Volunteers", "17 Ward Leads", "100% Coverage"],
    },
    {
      icon: Smartphone,
      title: "Digital Layer",
      subtitle: "Online Dominance",
      description: "Social media strategy, targeted ads, influencer campaigns, reels & WhatsApp funnels.",
      color: "#FFCF45",
      gradient: "from-[#FFCF45]/20 to-[#FFCF45]/5",
      image: "/digital-campaign-social-media-management.jpg",
      features: ["150+ Reels", "250+ Posts", "5M+ Reach"],
    },
    {
      icon: TrendingUp,
      title: "Decision Layer",
      subtitle: "Data Intelligence",
      description: "Real-time analytics, live dashboards, predictive voter models & AI-powered insights.",
      color: "#72E9CD",
      gradient: "from-[#72E9CD]/20 to-[#72E9CD]/5",
      image: "/data-analytics-dashboard.jpg",
      features: ["Live Dashboard", "AI Analytics", "24/7 Tracking"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#E1F2FE] to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3377FF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFCF45]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#72E9CD]/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider text-[#3377FF] uppercase bg-[#3377FF]/10 px-4 py-2 rounded-full">
              Our Proven Strategy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#000629] mb-6 leading-tight">
            Our Campaign Model
          </h2>
          <p className="text-xl text-[#000629]/70 font-sans max-w-2xl mx-auto leading-relaxed">
            A three-layer approach combining <span className="text-[#3377FF] font-semibold">Ground Operations</span>,{" "}
            <span className="text-[#FFCF45] font-semibold">Digital Dominance</span>, and{" "}
            <span className="text-[#72E9CD] font-semibold">Data Intelligence</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${layer.color}15 0%, ${layer.color}05 100%)` }}
              />

              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={layer.image || "/placeholder.svg"}
                  alt={layer.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000629] via-[#000629]/50 to-transparent" />

                <div
                  className="absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md shadow-xl transform group-hover:rotate-12 transition-transform duration-500"
                  style={{ backgroundColor: `${layer.color}20`, border: `2px solid ${layer.color}` }}
                >
                  <layer.icon className="h-7 w-7" style={{ color: layer.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: layer.color }}>
                    {layer.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#000629] mb-3 group-hover:text-[#3377FF] transition-colors duration-300">
                  {layer.title}
                </h3>
                <p className="text-[#000629]/70 font-sans leading-relaxed mb-6">{layer.description}</p>

                <div className="flex flex-wrap gap-2">
                  {layer.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${layer.color}15`,
                        color: layer.color,
                        border: `1px solid ${layer.color}30`,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, ${layer.color} 0%, ${layer.color}50 100%)` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-[#000629] to-[#3377FF] rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-heading font-bold text-white mb-4">Ready to Launch Your Winning Campaign?</h3>
          <p className="text-[#E1F2FE] text-lg mb-8 max-w-2xl mx-auto">
            Our three-layer model has powered 100+ winning campaigns. Let's build yours next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-10 h-14 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              asChild
            >
              <a href="/services">Explore Our Services</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#000629] font-heading font-semibold text-base px-10 h-14 rounded-xl transition-all duration-300 hover:shadow-xl bg-transparent"
              asChild
            >
              <a href="/packages">View Packages</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
