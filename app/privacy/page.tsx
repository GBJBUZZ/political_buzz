import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Political BuZZ - Data Protection & Privacy",
  description:
    "Learn how Political BuZZ protects your personal data and privacy. Our comprehensive privacy policy covers data collection, usage, and your rights.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#3377FF]/20 px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5 text-[#FFCF45]" />
              <span className="text-sm font-semibold text-white">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/30 rounded-2xl p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">1. Introduction</h2>
              <p className="text-white/80 leading-relaxed">
                Political BuZZ, a division of GBJ BUZZ Pvt. Ltd., is committed to protecting your privacy and personal
                data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Personal Information</h3>
                    <p className="text-white/70 text-sm">
                      Name, email address, phone number, and other contact details you provide when requesting
                      consultations or services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Campaign Data</h3>
                    <p className="text-white/70 text-sm">
                      Information related to political campaigns, voter data, and constituency information provided for
                      campaign management services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-[#72E9CD] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Usage Data</h3>
                    <p className="text-white/70 text-sm">
                      Information about how you interact with our website, including IP address, browser type, pages
                      visited, and time spent on pages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>To provide and maintain our campaign management services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>To communicate with you about services, updates, and promotional offers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>To analyze and improve our services and website functionality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FFCF45]">•</span>
                  <span>To comply with legal obligations and protect our rights</span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">4. Data Protection & Security</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal data
                against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#3377FF]/10 p-4 rounded-lg border border-[#3377FF]/30">
                  <Lock className="h-6 w-6 text-[#72E9CD] mb-2" />
                  <h3 className="font-semibold text-white mb-1">Encryption</h3>
                  <p className="text-white/70 text-sm">SSL/TLS encryption for data transmission</p>
                </div>
                <div className="bg-[#3377FF]/10 p-4 rounded-lg border border-[#3377FF]/30">
                  <Eye className="h-6 w-6 text-[#72E9CD] mb-2" />
                  <h3 className="font-semibold text-white mb-1">Access Control</h3>
                  <p className="text-white/70 text-sm">Restricted access to authorized personnel only</p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#FFCF45] mb-4">5. Your Rights</h2>
              <p className="text-white/80 leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-white/80">
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Access your personal data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Correct inaccurate data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Object to processing of your data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#72E9CD]">✓</span>
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-[#3377FF]/10 p-6 rounded-lg border border-[#3377FF]/30">
              <h2 className="text-xl font-heading font-bold text-white mb-3">Contact Us About Privacy</h2>
              <p className="text-white/80 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
