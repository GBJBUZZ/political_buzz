"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2, Home, MapPin, Users } from "lucide-react"

export function ElectionTypes() {
  const [activeTab, setActiveTab] = useState<"rural" | "urban">("rural")

  const ruralTypes = [
    {
      icon: Home,
      title: "Gram Panchayat Elections",
      description: "Village-level governance campaigns with community-first approach and local language content",
      services: "Door-to-door coverage, local influencers, gram sabha participation",
      investment: "₹3,00,000 - ₹8,00,000",
    },
    {
      icon: MapPin,
      title: "Block/Mandal Level Campaigns",
      description: "Intermediate-level campaigns covering multiple villages with coordinated messaging",
      services: "Multi-village coordination, regional media, grassroots mobilization",
      investment: "₹8,00,000 - ₹15,00,000",
    },
    {
      icon: Building2,
      title: "District-Level Strategy",
      description: "Comprehensive district campaigns with multi-block coordination and regional media",
      services: "District-wide strategy, media management, data analytics",
      investment: "₹15,00,000 - ₹30,00,000",
    },
    {
      icon: Users,
      title: "Village Head Elections",
      description: "Specialized campaigns for village leadership with hyper-local focus",
      services: "Community engagement, local events, targeted messaging",
      investment: "₹2,00,000 - ₹6,00,000",
    },
  ]

  const urbanTypes = [
    {
      icon: Building2,
      title: "Municipal Corporation",
      description: "Large city campaigns with comprehensive digital and ground operations",
      services: "Full-scale campaign management, media coverage, analytics",
      investment: "₹15,00,000+",
    },
    {
      icon: MapPin,
      title: "Municipality/Council",
      description: "Medium town campaigns with integrated digital-ground strategy",
      services: "Social media, PR, field operations, volunteer training",
      investment: "₹8,00,000 - ₹15,00,000",
    },
    {
      icon: Home,
      title: "Nagar Panchayat",
      description: "Small town governance with localized campaign approach",
      services: "Community outreach, digital presence, local media",
      investment: "₹5,00,000 - ₹10,00,000",
    },
    {
      icon: Users,
      title: "Ward Member (Nagar Sevak)",
      description: "Our specialty ward-level campaigns with proven success",
      services: "Micro-targeting, booth management, voter engagement",
      investment: "See Pricing Packages",
    },
  ]

  const types = activeTab === "rural" ? ruralTypes : urbanTypes

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#000629] mb-4">Election Coverage Types</h2>
          <p className="text-lg font-sans text-[#000629]/70 max-w-2xl mx-auto">
            Comprehensive campaign services for every electoral level across India
          </p>
        </div>

        {/* Tab interface */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#E1F2FE] rounded-lg p-1">
            <button
              onClick={() => setActiveTab("rural")}
              className={`px-8 py-3 rounded-md font-heading font-semibold transition-all duration-300 ${
                activeTab === "rural" ? "bg-[#3377FF] text-white shadow-lg" : "text-[#000629] hover:text-[#3377FF]"
              }`}
            >
              RURAL
            </button>
            <button
              onClick={() => setActiveTab("urban")}
              className={`px-8 py-3 rounded-md font-heading font-semibold transition-all duration-300 ${
                activeTab === "urban" ? "bg-[#3377FF] text-white shadow-lg" : "text-[#000629] hover:text-[#3377FF]"
              }`}
            >
              URBAN
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {types.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-[#E1F2FE] rounded-[10px] p-8 hover:border-[#3377FF] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#E1F2FE] p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-[#3377FF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-[#000629] mb-2">{type.title}</h3>
                    <p className="text-sm font-sans text-[#000629]/70 mb-3">{type.description}</p>
                    <p className="text-sm font-sans text-[#000629]/60 italic mb-3">{type.services}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-heading font-bold text-[#3377FF]">{type.investment}</span>
                      <Button variant="link" className="text-[#3377FF] p-0 h-auto font-heading">
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
