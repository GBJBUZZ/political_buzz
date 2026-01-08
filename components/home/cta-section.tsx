"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    electionType: "",
    budget: "",
  })

  return (
    <section className="py-24 bg-gradient-to-br from-[#FFCF45] to-[#FFCF45]/80 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/political-map-india-pattern.jpg')] bg-cover bg-center" />

      <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#000629] leading-tight">
            Ready to Launch Your Winning Campaign?
          </h2>

          <p className="text-lg md:text-xl font-sans text-[#000629]/80 max-w-2xl mx-auto">
            Get a free consultation and customized campaign strategy from India's most trusted political consultancy
          </p>

          {/* Inline contact form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 rounded-lg border-[#E1F2FE]"
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 rounded-lg border-[#E1F2FE]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Select
                value={formData.electionType}
                onValueChange={(value) => setFormData({ ...formData, electionType: value })}
              >
                <SelectTrigger className="h-12 rounded-lg border-[#E1F2FE]">
                  <SelectValue placeholder="Election Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gram-panchayat">Gram Panchayat</SelectItem>
                  <SelectItem value="nagar-parishad">Nagar Parishad</SelectItem>
                  <SelectItem value="nagar-sevak">Nagar Sevak (Ward)</SelectItem>
                  <SelectItem value="mla">MLA / Vidhan Sabha</SelectItem>
                  <SelectItem value="mp">MP / Lok Sabha</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                <SelectTrigger className="h-12 rounded-lg border-[#E1F2FE]">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5">Under ₹5 Lakhs</SelectItem>
                  <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                  <SelectItem value="10-20">₹10-20 Lakhs</SelectItem>
                  <SelectItem value="20-30">₹20-30 Lakhs</SelectItem>
                  <SelectItem value="above-30">Above ₹30 Lakhs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              size="lg"
              className="w-full bg-[#000629] hover:bg-[#000629]/90 text-white font-heading font-semibold h-14 rounded-lg"
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex-1 h-px bg-[#000629]/20" />
            <span className="text-sm font-ui font-semibold text-[#000629]/60">OR</span>
            <div className="flex-1 h-px bg-[#000629]/20" />
          </div>

          {/* Alternative contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-[#000629] text-[#000629] hover:bg-[#000629] hover:text-white font-heading font-semibold px-8 h-12 rounded-lg bg-transparent"
            >
              <a href="tel:+917058253695">
                <Phone className="mr-2 h-5 w-5" />
                Call +917058253695
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              className="bg-[#72E9CD] hover:bg-[#72E9CD]/90 text-[#000629] font-heading font-semibold px-8 h-12 rounded-lg"
            >
              <a href="https://wa.me/917058253695" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-[#000629] text-[#000629] hover:bg-[#000629] hover:text-white font-heading font-semibold px-8 h-12 rounded-lg bg-transparent"
            >
              <a href="mailto:campaign@politicalbuzzindia.in">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>

          {/* Trust badge */}
          <p className="text-sm font-sans text-[#000629]/70 pt-4">
            Join 100+ winning candidates who chose Political BuZZ
          </p>
        </div>
      </div>
    </section>
  )
}
