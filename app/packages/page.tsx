import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Campaign Packages & Pricing | Political BuZZ - Transparent Election Campaign Costs",
  description:
    "Political BuZZ campaign packages: Nagar Parishad (₹16.8L - ₹28.9L) and Nagar Sevak (₹6.5L - ₹11.5L). Comprehensive election campaign services with transparent pricing.",
  keywords:
    "political campaign pricing, election campaign packages, Nagar Parishad campaign cost, ward member campaign, Maharashtra",
}

export default function PackagesPage() {
  const nagarParishadPlans = [
    {
      name: "Basic Plan",
      price: "₹16,83,695",
      description: "Focused campaign with essential digital and ground coverage",
      features: [
        "200 Flyers & Graphics",
        "120 Reels & Videos",
        "80 PR Media Platforms",
        "₹30L Digital Ads Budget",
        "7L Mass Messages (IVR/SMS/WhatsApp)",
        "GBJ Election App Access",
        "2 Training Sessions",
        "5 Professional Videos",
        "Website & Hosting (3 Years)",
        "Team Training & Support",
      ],
      popular: false,
    },
    {
      name: "Advanced Plan",
      price: "₹23,23,695",
      description: "Extended coverage with enhanced media reach and team support",
      features: [
        "300 Flyers & Graphics",
        "180 Reels & Videos",
        "150 PR Media Platforms",
        "₹30L Digital Ads Budget",
        "10 Professional Videos",
        "Expanded Team & Press Coverage",
        "GBJ Election App & Dashboard",
        "Enhanced Training Programs",
        "Drone Coverage",
        "Crisis Communication Support",
        "Website & Hosting (3 Years)",
        "24/7 War Room Support",
      ],
      popular: true,
    },
    {
      name: "Premium Plan",
      price: "₹28,93,695",
      description: "Mayor-level campaign with comprehensive coverage and elite PR",
      features: [
        "450 Flyers & Graphics",
        "240+ Reels & Videos",
        "250+ PR Media Platforms",
        "18L Mass Messages",
        "TV & Press Integration",
        "10 Major Events Coverage",
        "Elite PR Management",
        "Documentary Film Production",
        "Advanced Analytics Dashboard",
        "Dedicated Campaign Manager",
        "Website & Hosting (3 Years)",
        "Full War Room Operations",
      ],
      popular: false,
    },
  ]

  const nagarSevakPlans = [
    {
      name: "Basic Plan",
      price: "₹6,50,000",
      description: "Essential ward-level campaign for Nagar Sevak candidates",
      features: [
        "100 Flyers & Graphics",
        "60 Reels & Videos",
        "50 PR Media Platforms",
        "3L Mass Messages",
        "2 Professional Videos",
        "GBJ Election App Access",
        "Website & Hosting (3 Years)",
        "Basic Training Session",
        "Field Coordination Support",
      ],
      popular: false,
    },
    {
      name: "Advanced Plan",
      price: "₹8,50,000",
      description: "Enhanced ward campaign with geo-targeted advertising",
      features: [
        "200 Flyers & Graphics",
        "100 Reels & Videos",
        "80 PR Media Platforms",
        "5L Mass Messages",
        "Geo-Targeted Digital Ads",
        "5 Professional Videos",
        "Drone Coverage",
        "GBJ Election App & Dashboard",
        "Enhanced Training Programs",
        "Website & Hosting (3 Years)",
        "Field Team Coordination",
      ],
      popular: true,
    },
    {
      name: "Premium Plan",
      price: "₹11,50,000",
      description: "Comprehensive ward campaign with TV integration",
      features: [
        "300 Flyers & Graphics",
        "150 Reels & Videos",
        "100 PR Media Platforms",
        "10L Mass Messages",
        "TV Integration & Coverage",
        "7 Professional Videos",
        "Event Coverage & Management",
        "Advanced Analytics Dashboard",
        "Dedicated Field Coordinator",
        "Website & Hosting (3 Years)",
        "War Room Support",
        "Crisis Management",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#000629]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/blue-gradient-background.jpg')",
            backgroundSize: "cover",
          }}
        />
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Campaign Packages & <span className="text-[#FFCF45]">Pricing</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed mb-8">
              Transparent, comprehensive pricing for Nagar Parishad and Nagar Sevak campaigns. Choose the package that
              fits your campaign needs.
            </p>
          </div>
        </div>
      </section>

      {/* Nagar Parishad Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Nagar Parishad Member Plans</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Comprehensive campaign packages for Municipal Council and Nagar Parishad elections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nagarParishadPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#3377FF] to-[#000629] text-white shadow-2xl scale-105"
                    : "bg-[#E1F2FE] text-[#000629]"
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#FFCF45] text-[#000629] text-center py-2 font-ui font-bold text-sm">
                    <Star className="inline h-4 w-4 mr-1" />
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                  <div className="font-heading font-bold text-4xl mb-4">{plan.price}</div>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check
                          className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "text-[#FFCF45]" : "text-[#3377FF]"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full h-12 font-ui font-semibold ${
                      plan.popular
                        ? "bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629]"
                        : "bg-[#3377FF] hover:bg-[#3377FF]/90 text-white"
                    }`}
                  >
                    <Link href="/contact">
                      Request Proposal <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nagar Sevak Plans */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">Nagar Sevak (Ward Member) Plans</h2>
            <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
              Targeted ward-level campaign packages for Municipal Ward Member elections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nagarSevakPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#FFCF45] to-[#72E9CD] text-[#000629] shadow-2xl scale-105"
                    : "bg-white text-[#000629]"
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#3377FF] text-white text-center py-2 font-ui font-bold text-sm">
                    <Star className="inline h-4 w-4 mr-1" />
                    RECOMMENDED
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                  <div className="font-heading font-bold text-4xl mb-4">{plan.price}</div>
                  <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-[#3377FF] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full h-12 font-ui font-semibold ${
                      plan.popular
                        ? "bg-[#3377FF] hover:bg-[#3377FF]/90 text-white"
                        : "bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629]"
                    }`}
                  >
                    <Link href="/contact">
                      Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Plans Include */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">All Plans Include</h2>
            <p className="text-lg text-gray-600 font-sans">Standard features included in every package</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Website & Hosting (3 Years)",
              "GBJ Election App & Data Dashboard",
              "PR Media Cycle",
              "Team Training & Reporting Support",
              "Video Production & Branding",
              "Field Coordination",
              "Analytics & Reporting",
              "Compliance Management",
            ].map((feature, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-lg p-6 text-center">
                <Check className="h-8 w-8 text-[#3377FF] mx-auto mb-3" />
                <p className="font-sans font-semibold text-[#000629]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            We offer combo packages, multi-ward campaigns, and enterprise solutions tailored to your specific needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
            >
              <Link href="/contact">
                Request Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#3377FF] h-14 px-12 text-lg bg-transparent"
            >
              <a href="tel:7020107390">Call 7020107390</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
