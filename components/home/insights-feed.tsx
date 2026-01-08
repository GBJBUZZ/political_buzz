"use client"

import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function InsightsFeed() {
  const insights = [
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: "Bhandara 2025: A Case Study in Micro-Targeting",
      excerpt:
        "How we achieved 60%+ voter engagement through data-driven ward-level strategies and WhatsApp integration.",
      date: "March 15, 2025",
      category: "Case Study",
      href: "/insights/bhandara-2025",
    },
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: "Digital Campaign Playbook for Municipal Elections",
      excerpt: "Essential strategies for social media, content creation, and online voter outreach in local elections.",
      date: "March 10, 2025",
      category: "Guide",
      href: "/insights/digital-playbook",
    },
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: "Mass Messaging Best Practices: IVR, SMS & WhatsApp",
      excerpt: "Compliance guidelines and proven tactics for effective voter communication at scale.",
      date: "March 5, 2025",
      category: "Best Practices",
      href: "/insights/mass-messaging",
    },
  ]

  return (
    <section className="py-20 bg-light-blue" style={{ backgroundColor: "#E6F0FF" }}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-4"
            style={{ color: "#0F1724" }}
          >
            Insights & Reports
          </h2>
          <p className="text-lg text-neutral-dark/70 font-sans">
            Latest research, case studies, and campaign best practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <Link
              key={index}
              href={insight.href}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up group"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.thumbnail || "/placeholder.svg"}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="inline-block px-3 py-1 bg-royal-blue text-white text-xs font-ui font-semibold rounded-full"
                    style={{ backgroundColor: "#003399" }}
                  >
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-dark/60 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="font-sans">{insight.date}</span>
                </div>

                <h3
                  className="text-xl font-heading font-semibold text-neutral-dark mb-3 group-hover:text-royal-blue transition-colors"
                  style={{ color: "#0F1724" }}
                >
                  {insight.title}
                </h3>

                <p className="text-sm text-neutral-dark/70 font-sans leading-relaxed mb-4">{insight.excerpt}</p>

                <div
                  className="flex items-center text-royal-blue font-ui font-medium text-sm group-hover:text-gold transition-colors"
                  style={{ color: "#003399" }}
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-royal-blue hover:text-gold font-ui font-semibold transition-colors text-lg"
            style={{ color: "#003399" }}
          >
            View All Insights
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
