import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-[#0F1724] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/blue-gradient-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 py-16 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/images/logo.png"
              alt="Political BuZZ Logo"
              width={200}
              height={60}
              className="h-14 w-auto mb-4 object-contain"
            />
            <p className="text-sm font-heading font-semibold text-[#FFCF45] mb-2">Powered By GBJ BUZZ</p>
            <p className="text-sm text-white/70 font-sans leading-relaxed">
              Maharashtra's first data-driven political strategy firm. Victory through data, discipline, and design.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-gold" style={{ color: "#FFD166" }}>
              Services
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link
                  href="/services/strategy"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Strategy & Research
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Digital Campaigns
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pr"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  PR & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/services/video"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Video Production
                </Link>
              </li>
              <li>
                <Link
                  href="/software"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Election Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services/training"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Training & Field Ops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-gold" style={{ color: "#FFD166" }}>
              Resources
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Playbooks & Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Press Room
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-gold" style={{ color: "#FFD166" }}>
              Contact
            </h3>
            <div className="space-y-3 text-sm font-sans mb-6">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" style={{ color: "#FFD166" }} />
                <a
                  href="tel:7020107390"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  7020107390
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" style={{ color: "#FFD166" }} />
                <a
                  href="mailto:campaign@politicalbuzzindia.in"
                  className="hover:text-gold transition-colors"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                >
                  campaign@politicalbuzzindia.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" style={{ color: "#FFD166" }} />
                <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>Nagpur, Maharashtra</span>
              </div>
            </div>

            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-gold"
              />
              <div className="flex items-start gap-2">
                <Checkbox id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-xs text-white/70 leading-tight">
                  I agree to receive campaign insights and updates
                </label>
              </div>
              <Button
                className="w-full bg-gold hover:bg-gold/90 text-neutral-dark font-ui font-semibold"
                style={{ backgroundColor: "#FFD166", color: "#0F1724" }}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/60 font-sans">
              © 2025 Political BuZZ - Powered by GBJ BUZZ Pvt Ltd. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <div className="flex gap-6 text-sm text-white/60 font-sans">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms
              </Link>
              <Link href="/insights" className="hover:text-gold transition-colors">
                Blog
              </Link>
              <Link href="/media" className="hover:text-gold transition-colors">
                Press
              </Link>
              <Link href="/careers" className="hover:text-gold transition-colors">
                Careers
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-white/70 italic font-sans">
              Every Vote Counts — Building Bonds with Every Voter, That's Our Promise!
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
