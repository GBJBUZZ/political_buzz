import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Newspaper, Download, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Press Room | Political BuZZ - Media Coverage & Press Releases",
  description:
    "Latest media coverage, press releases, and news about Political BuZZ's successful political campaigns across India.",
}

export default function MediaPage() {
  const pressReleases = [
    {
      title: "Political BuZZ Manages 100+ Successful Campaigns in 2024",
      date: "December 2024",
      excerpt: "Leading political consultancy achieves milestone with all-winning track record",
    },
    {
      title: "Bhandara 2025: A Case Study in Data-Driven Campaigning",
      date: "November 2024",
      excerpt: "How Political BuZZ leveraged analytics and grassroots mobilization for victory",
    },
    {
      title: "Political BuZZ Expands Services to Include AI-Powered Analytics",
      date: "October 2024",
      excerpt: "New election software platform revolutionizes campaign management",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#3377FF]/20 px-4 py-2 rounded-full mb-6">
              <Newspaper className="h-5 w-5 text-[#FFCF45]" />
              <span className="text-sm font-semibold text-white">Media & Press</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">Press Room</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Latest news, press releases, and media coverage about Political BuZZ
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-white mb-8">Recent Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/30 rounded-2xl p-8 hover:border-[#FFCF45]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">{release.title}</h3>
                    <p className="text-white/60 text-sm">{release.date}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-[#FFCF45] hover:text-[#FFCF45]/80">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">{release.excerpt}</p>
                <Button variant="ghost" className="text-[#72E9CD] hover:text-[#72E9CD]/80 hover:bg-[#72E9CD]/10">
                  Read Full Release <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Media Contact */}
          <div className="mt-16 bg-gradient-to-br from-[#3377FF]/20 to-[#72E9CD]/20 backdrop-blur-sm border border-[#3377FF]/30 rounded-2xl p-8">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">Media Inquiries</h2>
            <p className="text-white/80 mb-6">
              For press inquiries, interviews, or media partnerships, please contact our communications team:
            </p>
            <div className="space-y-2 text-white/80 mb-6">
              <p>
                <strong className="text-white">Email:</strong> campaign@politicalbuzzindia.in
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +917058253695
              </p>
            </div>
            <Button asChild size="lg" className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-semibold">
              <Link href="/contact">Contact Media Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
