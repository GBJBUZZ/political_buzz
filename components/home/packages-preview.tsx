"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PackagesPreview() {
  const packages = [
    {
      name: "Basic",
      price: "₹16,83,695",
      tier: "Nagar Parishad Member",
      deliverables: [
        "Campaign strategy & research",
        "Social media management",
        "Basic PR & media outreach",
        "Volunteer coordination",
        "Monthly analytics reports",
      ],
    },
    {
      name: "Advanced",
      price: "₹23,23,695",
      tier: "Nagar Parishad Member",
      featured: true,
      deliverables: [
        "Everything in Basic",
        "Video production & reels",
        "GBJ Command software access",
        "War room setup (last 20 days)",
        "Weekly strategy sessions",
      ],
    },
    {
      name: "Premium",
      price: "₹28,93,695",
      tier: "Nagar Parishad Member",
      deliverables: [
        "Everything in Advanced",
        "24/7 war room operations",
        "Crisis management team",
        "Advanced voter analytics",
        "Dedicated campaign manager",
      ],
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
            Packages (Quick View)
          </h2>
          <p className="text-lg text-neutral-dark/70 font-sans">Comprehensive campaign solutions for every budget</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in-up ${
                pkg.featured ? "bg-royal-blue shadow-xl scale-105" : "bg-soft-gray shadow-md"
              }`}
              style={{
                backgroundColor: pkg.featured ? "#003399" : "#F5F7FA",
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              {pkg.featured && (
                <div className="text-center mb-4">
                  <span
                    className="inline-block px-4 py-1 bg-gold text-neutral-dark text-xs font-ui font-semibold rounded-full"
                    style={{ backgroundColor: "#FFD166", color: "#0F1724" }}
                  >
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`text-2xl font-heading font-bold mb-2 ${pkg.featured ? "text-white" : "text-neutral-dark"}`}
                >
                  {pkg.name}
                </h3>
                <p className={`text-sm font-sans mb-4 ${pkg.featured ? "text-white/80" : "text-neutral-dark/70"}`}>
                  {pkg.tier}
                </p>
                <div
                  className={`text-4xl font-heading font-bold ${pkg.featured ? "text-gold" : "text-royal-blue"}`}
                  style={{ color: pkg.featured ? "#FFD166" : "#003399" }}
                >
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 ${pkg.featured ? "text-gold" : "text-royal-blue"}`}
                      style={{ color: pkg.featured ? "#FFD166" : "#003399" }}
                    />
                    <span className={`text-sm font-sans ${pkg.featured ? "text-white" : "text-neutral-dark/80"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full transition-all duration-300 ${
                  pkg.featured
                    ? "bg-gold hover:bg-gold/90 text-neutral-dark"
                    : "bg-royal-blue hover:bg-gold hover:text-neutral-dark text-white"
                }`}
                style={{
                  backgroundColor: pkg.featured ? "#FFD166" : "#003399",
                  color: pkg.featured ? "#0F1724" : "#FFFFFF",
                }}
              >
                Request Quote
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/packages#nagar-sevak"
            className="text-royal-blue hover:text-gold font-ui font-medium transition-colors"
            style={{ color: "#003399" }}
          >
            See Nagar Sevak plans →
          </a>
        </div>
      </div>
    </section>
  )
}
