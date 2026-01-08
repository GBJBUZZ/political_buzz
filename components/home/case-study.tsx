"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="py-20 bg-neutral-dark relative overflow-hidden"
      style={{ backgroundColor: "#0F1724" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/indian-political-rally-crowd-with-candidate-speaki.jpg" alt="Bhandara 2025 Campaign" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark via-neutral-dark/90 to-transparent" />

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span
              className="text-gold text-sm font-ui font-semibold tracking-widest uppercase"
              style={{ color: "#FFD166" }}
            >
              CASE STUDY
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-4 mb-8">Bhandara 2025</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-heading font-semibold text-gold mb-3" style={{ color: "#FFD166" }}>
                Challenge
              </h3>
              <p className="text-white/80 font-sans leading-relaxed">17 wards, high literacy, lots of swing voters.</p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-gold mb-3" style={{ color: "#FFD166" }}>
                Strategy
              </h3>
              <p className="text-white/80 font-sans leading-relaxed">
                Micro-targeting, WhatsApp + field sync, weekly dashboards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-gold mb-3" style={{ color: "#FFD166" }}>
                Outcome
              </h3>
              <p className="text-white/80 font-sans leading-relaxed">60%+ engagement, targeted wins in 10 wards.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-neutral-dark transition-all duration-300"
              style={{ backgroundColor: "#FFD166", color: "#0F1724" }}
            >
              <Download className="mr-2 h-5 w-5" />
              Full Report (PDF)
            </Button>

            <div className="flex items-center gap-2 text-sm text-white/60 font-sans">
              <span className="w-2 h-2 rounded-full bg-gold" style={{ backgroundColor: "#FFD166" }} />
              Prepared by GBJ Research Lab
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
