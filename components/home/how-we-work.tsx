"use client"

import { Search, FileText, Palette, Rocket, BarChart, Trophy } from "lucide-react"

export function HowWeWork() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Understanding your constituency, opponents, and voter base",
      href: "/services/strategy",
    },
    {
      icon: FileText,
      title: "Research",
      description: "Booth-wise data collection, surveys, and voter segmentation",
      href: "/services/research",
    },
    {
      icon: Palette,
      title: "Creative",
      description: "Campaign messaging, content creation, and brand development",
      href: "/services/creative",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "Multi-channel execution across digital, field, and media",
      href: "/services/execution",
    },
    {
      icon: BarChart,
      title: "Monitor",
      description: "Real-time tracking, analytics, and strategy adjustments",
      href: "/software",
    },
    {
      icon: Trophy,
      title: "Win",
      description: "Victory through data-driven decisions and flawless execution",
      href: "/case-studies",
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
            How We Work
          </h2>
          <p className="text-lg text-neutral-dark/70 font-sans">Our proven 6-step process for winning campaigns</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-light-blue"
            style={{ backgroundColor: "#E6F0FF" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-4 relative z-10 transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: index % 2 === 0 ? "#003399" : "#FFD166" }}
                >
                  <step.icon className="h-10 w-10" style={{ color: index % 2 === 0 ? "#FFFFFF" : "#0F1724" }} />
                </div>

                {/* Step number */}
                <div className="text-sm font-ui font-semibold text-gold mb-2" style={{ color: "#FFD166" }}>
                  STEP {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-2" style={{ color: "#0F1724" }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-dark/70 font-sans leading-relaxed mb-3">{step.description}</p>

                {/* CTA link */}
                <a
                  href={step.href}
                  className="text-xs font-ui font-medium text-royal-blue hover:text-gold transition-colors"
                  style={{ color: "#003399" }}
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
