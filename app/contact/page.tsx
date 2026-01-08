import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Political BuZZ | Request Campaign Proposal - Call +917058253695",
  description:
    "Contact Political BuZZ for professional political campaign services. Call +917058253695 or email campaign@politicalbuzzindia.in. Based in Nagpur, serving all of Maharashtra.",
  keywords: "contact political buzz, campaign consultation, Nagpur political agency, election campaign inquiry",
}

export default function ContactPage() {
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
              Let's Build Your <span className="text-[#FFCF45]">Winning Campaign</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed">
              Ready to start? Reach out for a free consultation and campaign proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-[#000629] mb-6">Request Campaign Proposal</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-ui font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-ui font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-ui font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-ui font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>

                <div>
                  <label htmlFor="electionType" className="block text-sm font-ui font-semibold text-gray-700 mb-2">
                    Election Type *
                  </label>
                  <select
                    id="electionType"
                    className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#3377FF]"
                    required
                  >
                    <option value="">Select election type</option>
                    <option value="mla">MLA (State Assembly)</option>
                    <option value="mp">MP (Parliament)</option>
                    <option value="municipal">Municipal Corporation</option>
                    <option value="nagarParishad">Nagar Parishad</option>
                    <option value="gramPanchayat">Gram Panchayat</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="constituency" className="block text-sm font-ui font-semibold text-gray-700 mb-2">
                    Constituency / Ward
                  </label>
                  <Input id="constituency" placeholder="Enter your constituency or ward" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-ui font-semibold text-gray-700 mb-2">
                    Message / Requirements
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your campaign needs, timeline, and any specific requirements..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#3377FF] hover:bg-[#3377FF]/90 text-white font-ui font-semibold h-12"
                >
                  Submit Request
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-[#000629] mb-6">Get In Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3377FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#000629] mb-1">Phone</h3>
                    <a
                      href="tel:+917058253695"
                      className="text-[#3377FF] font-sans hover:underline text-lg font-semibold"
                    >
                      +91 7058253695
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFCF45] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#000629]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#000629] mb-1">Email</h3>
                    <a
                      href="mailto:campaign@politicalbuzzindia.in"
                      className="text-[#3377FF] font-sans hover:underline"
                    >
                      campaign@politicalbuzzindia.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#72E9CD] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#000629]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#000629] mb-1">Location</h3>
                    <p className="text-gray-600 font-sans">
                      Nagpur, Maharashtra
                      <br />
                      Serving all of Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E1F2FE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#3377FF]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#000629] mb-1">Business Hours</h3>
                    <p className="text-gray-600 font-sans">
                      Monday - Saturday: 9:00 AM - 8:00 PM
                      <br />
                      Sunday: By Appointment
                      <br />
                      <span className="text-[#3377FF] font-semibold">24/7 during campaign season</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#E1F2FE] rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl text-[#000629] mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Instagram", handle: "@politicalbuzz.india" },
                    { name: "Facebook", handle: "@politicalbuzz.india" },
                    { name: "LinkedIn", handle: "Political BuZZ" },
                    { name: "Twitter", handle: "@politicalbuzz" },
                    { name: "YouTube", handle: "Political BuZZ" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="inline-block bg-white px-4 py-2 rounded-lg text-sm font-ui font-semibold text-[#3377FF] hover:bg-[#3377FF] hover:text-white transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-[400px] bg-gradient-to-br from-[#3377FF] to-[#000629] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-[#FFCF45]" />
                <p className="font-heading font-bold text-2xl">Nagpur, Maharashtra</p>
                <p className="text-white/70 font-sans mt-2">Serving all of Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
