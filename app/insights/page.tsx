import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Insights | Political BuZZ - Campaign Strategy & Political Marketing",
  description:
    "Expert insights on political campaign management, digital marketing strategies, and election trends from India's leading political consultancy.",
}

export default function InsightsPage() {
  const articles = [
    {
      title: "Digital Campaign Strategies for Rural Elections",
      excerpt: "How to effectively reach rural voters through digital platforms and grassroots mobilization.",
      category: "Digital Strategy",
      date: "January 15, 2025",
      author: "Political BuZZ Team",
      readTime: "8 min read",
    },
    {
      title: "The Power of Data-Driven Political Campaigns",
      excerpt: "Leveraging voter analytics and AI to create winning campaign strategies.",
      category: "Analytics",
      date: "January 10, 2025",
      author: "Research Team",
      readTime: "6 min read",
    },
    {
      title: "Social Media Best Practices for Political Leaders",
      excerpt: "Building authentic connections with constituents through strategic social media management.",
      category: "Social Media",
      date: "January 5, 2025",
      author: "Digital Team",
      readTime: "5 min read",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#3377FF]/20 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-5 w-5 text-[#FFCF45]" />
              <span className="text-sm font-semibold text-white">Expert Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Blog & Insights</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Stay updated with the latest trends, strategies, and insights in political campaign management
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/30 rounded-2xl overflow-hidden hover:border-[#FFCF45]/50 transition-all duration-300 hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-[#3377FF]/20 to-[#72E9CD]/20" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#FFCF45] font-semibold">{article.category}</span>
                    <span className="text-white/60">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-white">{article.title}</h2>
                  <p className="text-white/70 text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full text-[#FFCF45] hover:text-[#FFCF45]/80 hover:bg-[#FFCF45]/10"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/30 rounded-2xl p-12">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">More Insights Coming Soon</h2>
              <p className="text-white/70 mb-6">
                Subscribe to our newsletter to get the latest campaign strategies and political insights
              </p>
              <Button asChild size="lg" className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-semibold">
                <Link href="/contact">Subscribe Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
