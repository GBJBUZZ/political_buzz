"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SoftwareSpotlight() {
  const features = [
    "ECI-verified voter DB & booth-level targeting",
    "Volunteer tracking & last-day command",
    "IVR/SMS/WhatsApp mass communication modules",
    "Real-time analytics & reporting",
  ]

  return (
    <section className="py-20 bg-light-blue" style={{ backgroundColor: "#E6F0FF" }}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative opacity-0 animate-fade-in-up">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/election-software-dashboard-with-maps-voter-analyt.jpg"
                alt="GBJ Command Platform"
                width={700}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in-up stagger-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark" style={{ color: "#0F1724" }}>
              GBJ Command — Election Intelligence
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: "#003399" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-lg text-neutral-dark/80 font-sans">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-royal-blue hover:bg-gold hover:text-neutral-dark text-white transition-all duration-300"
                style={{ backgroundColor: "#003399" }}
              >
                Request Demo
              </Button>
              <p className="text-sm text-neutral-dark/60 mt-3 font-sans">15-min product walkthrough</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
