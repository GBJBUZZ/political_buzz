import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, AlertTriangle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions | Political BuZZ - Service Agreement",
  description:
    "Read the terms and conditions for using Political BuZZ services. Understand your rights and obligations when engaging with our political campaign management services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#3377FF]/20 px-4 py-2 rounded-full mb-6">
              <Scale className="h-5 w-5 text-[#FFCF45]" />
              <span className="text-sm font-semibold text-white">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/30 rounded-2xl p-8 md:p-12 space-y-8">
            {/* Acceptance */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80 leading-relaxed">
                By accessing and using the services of Political BuZZ (a division of GBJ BUZZ Pvt. Ltd.), you accept and
                agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use
                our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">2. Services Provided</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Political BuZZ provides comprehensive political campaign management services including:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Digital Campaign Management",
                  "Social Media Strategy",
                  "PR & Media Relations",
                  "Video Production",
                  "Election Software",
                  "Field Operations",
                  "Volunteer Training",
                  "Research & Analytics",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#72E9CD] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Obligations */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">3. Client Obligations</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>Provide accurate and complete information necessary for campaign execution</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>Comply with all applicable election laws and regulations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>Make timely payments as per agreed payment schedules</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>Provide necessary approvals and feedback within agreed timelines</span>
                </li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">4. Payment Terms</h2>
              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed">
                  Payment schedules are defined in individual service agreements. Standard terms include:
                </p>
                <div className="bg-[#3377FF]/10 p-4 rounded-lg border border-[#3377FF]/30">
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 50% advance payment upon agreement signing</li>
                    <li>• 30% payment at mid-campaign milestone</li>
                    <li>• 20% final payment upon campaign completion</li>
                    <li>• Late payments may incur additional charges</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">5. Intellectual Property</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                All creative materials, strategies, and content developed by Political BuZZ remain our intellectual
                property until full payment is received. Upon full payment:
              </p>
              <ul className="space-y-2 text-white/80">
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Client receives usage rights for campaign materials</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Political BuZZ retains portfolio and case study rights</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Third-party content remains property of respective owners</span>
                </li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">6. Confidentiality</h2>
              <p className="text-white/80 leading-relaxed">
                Both parties agree to maintain confidentiality of sensitive campaign information, strategies, and data.
                This obligation continues even after the termination of services. We implement strict data protection
                measures and comply with applicable data protection laws.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">7. Limitation of Liability</h2>
              <div className="bg-[#3377FF]/10 p-6 rounded-lg border border-[#3377FF]/30">
                <div className="flex gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-[#FFCF45] flex-shrink-0" />
                  <p className="text-white/80 leading-relaxed">
                    Political BuZZ provides professional campaign management services but cannot guarantee election
                    outcomes. Our liability is limited to the fees paid for services rendered. We are not responsible
                    for:
                  </p>
                </div>
                <ul className="space-y-2 text-white/70 text-sm ml-9">
                  <li>• Election results or voter behavior</li>
                  <li>• Actions of third-party service providers</li>
                  <li>• Changes in election laws or regulations</li>
                  <li>• Force majeure events beyond our control</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">8. Termination</h2>
              <p className="text-white/80 leading-relaxed">
                Either party may terminate services with written notice as per the service agreement. Early termination
                may result in payment obligations for work completed and resources committed. Refunds are subject to the
                terms outlined in individual service agreements.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">9. Governing Law</h2>
              <p className="text-white/80 leading-relaxed">
                These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the
                exclusive jurisdiction of courts in Nagpur, Maharashtra.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#3377FF]/10 p-6 rounded-lg border border-[#3377FF]/30">
              <h2 className="text-xl font-heading font-bold text-white mb-3">Questions About Terms?</h2>
              <p className="text-white/80 mb-4">
                For clarifications or questions about these terms, please contact us:
              </p>
              <div className="space-y-2 text-white/80">
                <p>
                  <strong className="text-white">Email:</strong> campaign@politicalbuzzindia.in
                </p>
                <p>
                  <strong className="text-white">Phone:</strong> +917058253695
                </p>
                <p>
                  <strong className="text-white">Address:</strong> Nagpur, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-semibold px-8">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
