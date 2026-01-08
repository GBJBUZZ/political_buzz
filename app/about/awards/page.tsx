import type { Metadata } from "next"
import { Award, Trophy, Star, Medal } from "lucide-react"

export const metadata: Metadata = {
  title: "Awards & Recognition | Political BuZZ",
  description:
    "Celebrating our achievements and recognition in the political campaign industry. Awards, certifications, and client testimonials.",
}

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Awards & Recognition</h1>
            <p className="text-base md:text-lg lg:text-xl text-[#E1F2FE] max-w-3xl mx-auto px-4">
              Celebrating excellence in political campaign management and digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              { icon: Trophy, number: "500+", label: "Winning Campaigns" },
              { icon: Award, number: "100%", label: "Client Success Rate" },
              { icon: Star, number: "7+", label: "Years of Excellence" },
              { icon: Medal, number: "80+", label: "Satisfied Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/20 rounded-xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 md:w-16 md:h-16 text-[#FFCF45] mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-[#E1F2FE]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Recognition List */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
              Industry Recognition
            </h2>
            {[
              {
                year: "2025",
                title: "Maharashtra's Most Trusted Political Campaign Agency",
                description: "Recognized for delivering 100% winning campaigns in Bhandara 2025 municipal elections",
              },
              {
                year: "2024",
                title: "Digital Innovation in Political Marketing",
                description: "Pioneering AI-driven voter analytics and real-time campaign dashboards",
              },
              {
                year: "2023",
                title: "Excellence in Grassroots Mobilization",
                description: "Successfully trained and managed 2000+ volunteers across multiple constituencies",
              },
              {
                year: "2022",
                title: "Best Integrated Campaign Strategy",
                description: "Seamless integration of digital, field, and PR operations for MLA campaigns",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/20 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFCF45] rounded-full flex items-center justify-center">
                      <span className="text-xl md:text-2xl font-bold text-[#000629]">{award.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{award.title}</h3>
                    <p className="text-sm md:text-base text-[#E1F2FE] leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#3377FF]/10 to-[#000629]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                quote:
                  "Political BuZZ transformed our campaign with data-driven strategies. Every voter knew our work.",
                author: "Local Candidate, Bhandara 2025",
              },
              {
                quote:
                  "The analytics dashboard changed how we managed volunteers and booths. Game-changing technology.",
                author: "Campaign Manager, Ward No. 8",
              },
              {
                quote: "From flyers to films to press — one team handled everything flawlessly. Highly recommended.",
                author: "Independent Candidate, Nagpur Region",
              },
              {
                quote: "Their 3-layer model (Ground + Digital + Decision) gave us a comprehensive winning strategy.",
                author: "MLA Candidate, Vidarbha",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-[#72E9CD]/30 rounded-xl p-6 md:p-8">
                <p className="text-sm md:text-base text-[#E1F2FE] italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-xs md:text-sm text-[#FFCF45] font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Join Our Success Story</h2>
          <p className="text-base md:text-lg text-[#E1F2FE] mb-8 md:mb-10 px-4">
            Let's build your winning campaign together with proven strategies and award-winning execution
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FFCF45] text-[#000629] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors text-sm md:text-base"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
