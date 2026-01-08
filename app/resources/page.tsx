import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Video, Download, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Campaign Resources & Guides | Political BuZZ - Free Election Tools",
  description:
    "Free political campaign resources, guides, templates, and tools. Learn election strategies, digital marketing, and campaign management from Political BuZZ experts.",
  keywords:
    "political campaign resources, election guides, campaign templates, political marketing tools, free resources",
}

export default function ResourcesPage() {
  const resources = [
    {
      category: "Campaign Guides",
      icon: BookOpen,
      items: [
        {
          title: "Complete Guide to Municipal Elections",
          description: "Step-by-step guide for Nagar Parishad and Municipal Corporation campaigns",
          type: "PDF Guide",
        },
        {
          title: "Digital Campaign Playbook 2025",
          description: "Latest strategies for social media, content, and online advertising",
          type: "eBook",
        },
        {
          title: "Booth Management Handbook",
          description: "Best practices for booth-level organization and voter mobilization",
          type: "PDF Guide",
        },
      ],
    },
    {
      category: "Templates & Tools",
      icon: FileText,
      items: [
        {
          title: "Campaign Budget Calculator",
          description: "Excel template to plan and track campaign expenditure within ECI limits",
          type: "Excel Template",
        },
        {
          title: "Volunteer Management Tracker",
          description: "Spreadsheet to organize field teams and track daily activities",
          type: "Google Sheets",
        },
        {
          title: "Social Media Content Calendar",
          description: "Pre-planned posting schedule for 30-day campaign period",
          type: "Template",
        },
      ],
    },
    {
      category: "Video Tutorials",
      icon: Video,
      items: [
        {
          title: "How to Use GBJ Election App",
          description: "Complete walkthrough of our campaign management software",
          type: "Video Tutorial",
        },
        {
          title: "Social Media Best Practices",
          description: "Tips for creating engaging political content on Instagram and Facebook",
          type: "Video Series",
        },
        {
          title: "Crisis Communication Training",
          description: "How to handle negative publicity and media controversies",
          type: "Webinar Recording",
        },
      ],
    },
  ]

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
              Campaign Resources & <span className="text-[#FFCF45]">Guides</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed">
              Free tools, templates, and guides to help you run a successful political campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="space-y-16">
            {resources.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-8">
                  <category.icon className="h-8 w-8 text-[#3377FF]" />
                  <h2 className="font-heading font-bold text-3xl text-[#000629]">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="inline-block bg-[#3377FF] text-white px-3 py-1 rounded-full text-xs font-ui font-semibold mb-4">
                        {item.type}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#000629] mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">{item.description}</p>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[#3377FF] text-[#3377FF] hover:bg-[#3377FF] hover:text-white bg-transparent"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">Latest Insights & Articles</h2>
            <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
              Expert analysis and tips from our campaign strategists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Digital Marketing Mistakes Political Candidates Make",
                date: "March 2025",
                readTime: "5 min read",
              },
              {
                title: "How to Build a Winning Ground Campaign in 30 Days",
                date: "February 2025",
                readTime: "8 min read",
              },
              {
                title: "Understanding ECI Guidelines for Social Media Advertising",
                date: "January 2025",
                readTime: "6 min read",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#3377FF] to-[#000629]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-sans mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#000629] mb-4">{article.title}</h3>
                  <Button variant="link" className="text-[#3377FF] p-0 h-auto font-ui font-semibold">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Need Expert Campaign Support?</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            While these resources are helpful, nothing beats professional campaign management. Let's talk strategy.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
          >
            <Link href="/contact">
              Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
