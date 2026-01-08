import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Megaphone, Target, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      name: "Narendra Bhondekar",
      title: "A Legacy in Action",
      location: "Municipal Corporation Campaign",
      image: "/indian-political-leader-campaign-rally-crowd.jpg",
      problem:
        "Established leader needed to maintain dominance while facing new challengers and changing voter demographics in urban wards.",
      strategy: [
        "Comprehensive voter database with 85% coverage across all wards",
        "Hyper-local messaging highlighting past infrastructure achievements",
        "Digital campaign showcasing roads, electrification, and education projects",
        "Volunteer mobilization with 200+ trained booth agents",
      ],
      execution: [
        "35 ward-specific micro-campaigns with localized content",
        "Daily social media updates with project visuals and testimonials",
        "Door-to-door outreach covering 75,000+ households",
        "PR campaign across 150+ local and regional media platforms",
      ],
      results: [
        "Won with 62% vote share, highest in constituency history",
        "Increased youth voter turnout by 28%",
        "Achieved 80% positive sentiment in post-election surveys",
        "Established model for future municipal campaigns",
      ],
      lessons:
        "Combining legacy credibility with modern digital outreach creates unstoppable momentum. Data-driven micro-targeting at ward level is essential for urban campaigns.",
      icon: TrendingUp,
      stats: { reach: "250K+", engagement: "62%", platforms: "150+" },
    },
    {
      name: "Raju Karemore",
      title: "Voice of Tumsar",
      location: "Tumsar Regional Campaign",
      image: "/indian-politician-public-meeting-farmers-healthcar.jpg",
      problem:
        "Rising leader needed to consolidate support across diverse rural-urban mix while addressing healthcare and farmer issues.",
      strategy: [
        "Issue-based segmentation: healthcare for urban, farmer support for rural",
        "Grassroots volunteer network of 300+ local influencers",
        "Mobile-first digital strategy for younger demographics",
        "Traditional media for senior voters, social media for youth",
      ],
      execution: [
        "Organized 50+ public meetings with targeted messaging",
        "WhatsApp groups covering every village and mohalla",
        "Video testimonials from beneficiaries of past initiatives",
        "Field operations with daily reporting through GBJ Command Platform",
      ],
      results: [
        "Victory margin increased by 18,000 votes vs previous election",
        "Farmer vote share improved from 45% to 68%",
        "Healthcare messaging reached 90% of target audience",
        "Created replicable model for semi-urban constituencies",
      ],
      lessons:
        "Authentic connection with local issues beats generic messaging. Hybrid digital-field approach is crucial for constituencies with mixed demographics.",
      icon: Users,
      stats: { reach: "180K+", engagement: "68%", platforms: "120+" },
    },
    {
      name: "Prashant Padole",
      title: "From Bhandara-Gondiya to Parliament",
      location: "Bhandara-Gondiya Parliamentary Constituency",
      image: "/indian-election-parliament-campaign-large-rally.jpg",
      problem:
        "Parliamentary campaign requiring massive scale, multi-district coordination, and overcoming negative media narrative.",
      strategy: [
        "Crisis management and PR overhaul to shift media sentiment",
        "Data-driven identification of 45,000 swing voters across 8 assembly segments",
        "Coordinated ground operations across 2,000+ polling booths",
        "Aggressive digital campaign with daily content across 10+ platforms",
      ],
      execution: [
        "War room operations for final 30 days with 24/7 monitoring",
        "PR lift from 80 to 250+ media platforms with positive coverage",
        "Booth-level GOTV strategy with personalized voter contact",
        "Real-time sentiment tracking and rapid response team",
      ],
      results: [
        "Won parliamentary seat with 52% vote share",
        "Media sentiment shifted from 35% negative to 70% positive",
        "Achieved 72% turnout in favorable booths (vs 58% average)",
        "Set new benchmark for parliamentary campaign management",
      ],
      lessons:
        "Scale requires systems. GBJ Command Platform enabled coordination across massive geography. PR and media management can flip narratives when backed by ground truth.",
      icon: Megaphone,
      stats: { reach: "1.2M+", engagement: "52%", platforms: "250+" },
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/election-victory-celebration-india.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-primary">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Real campaigns, real challenges, real victories. See how we've helped leaders win elections across India
              through data, strategy, and flawless execution.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => {
        const Icon = study.icon
        return (
          <section key={index} className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
            <div className="container mx-auto px-4">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-in fade-in slide-in-from-${index % 2 === 0 ? "left" : "right"}-8 duration-1000`}
                >
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image src={study.image || "/placeholder.svg"} alt={study.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white">{study.name}</h2>
                          <p className="text-primary font-semibold text-lg">{study.title}</p>
                        </div>
                      </div>
                      <p className="text-white/90">{study.location}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <Card className="bg-primary/10 border-primary/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{study.stats.reach}</div>
                        <div className="text-xs text-muted-foreground">Voter Reach</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/10 border-primary/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{study.stats.engagement}</div>
                        <div className="text-xs text-muted-foreground">Vote Share</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/10 border-primary/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{study.stats.platforms}</div>
                        <div className="text-xs text-muted-foreground">Media Platforms</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-8 animate-in fade-in slide-in-from-${index % 2 === 0 ? "right" : "left"}-8 duration-1000 delay-200`}
                >
                  {/* Problem */}
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${index % 2 === 0 ? "text-foreground" : "text-white"}`}>
                      <Target className="inline h-6 w-6 text-primary mr-2" />
                      The Challenge
                    </h3>
                    <p className={`${index % 2 === 0 ? "text-muted-foreground" : "text-gray-300"} leading-relaxed`}>
                      {study.problem}
                    </p>
                  </div>

                  {/* Strategy */}
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${index % 2 === 0 ? "text-foreground" : "text-white"}`}>
                      <TrendingUp className="inline h-6 w-6 text-primary mr-2" />
                      Our Strategy
                    </h3>
                    <div className="space-y-2">
                      {study.strategy.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className={`text-sm ${index % 2 === 0 ? "text-foreground" : "text-gray-300"}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Execution */}
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${index % 2 === 0 ? "text-foreground" : "text-white"}`}>
                      <Megaphone className="inline h-6 w-6 text-primary mr-2" />
                      Execution
                    </h3>
                    <div className="space-y-2">
                      {study.execution.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className={`text-sm ${index % 2 === 0 ? "text-foreground" : "text-gray-300"}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${index % 2 === 0 ? "text-foreground" : "text-white"}`}>
                      <CheckCircle2 className="inline h-6 w-6 text-primary mr-2" />
                      Results
                    </h3>
                    <div className="space-y-2">
                      {study.results.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span
                            className={`text-sm font-semibold ${index % 2 === 0 ? "text-primary" : "text-primary"}`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lessons */}
                  <Card
                    className={`${index % 2 === 0 ? "bg-primary/10" : "bg-card/10 backdrop-blur-sm"} border-primary/30`}
                  >
                    <CardContent className="p-6">
                      <h4 className={`font-bold mb-2 ${index % 2 === 0 ? "text-foreground" : "text-white"}`}>
                        Key Lessons
                      </h4>
                      <p
                        className={`text-sm ${index % 2 === 0 ? "text-muted-foreground" : "text-gray-300"} leading-relaxed italic`}
                      >
                        {study.lessons}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Let's discuss how we can replicate this success for your campaign
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <a href="https://wa.me/917058253695">
                Book Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
