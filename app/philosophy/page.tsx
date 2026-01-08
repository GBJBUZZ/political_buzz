import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Megaphone, CheckCircle2, Users } from "lucide-react"
import Link from "next/link"

export default function PhilosophyPage() {
  const layers = [
    {
      icon: Users,
      title: "Ground Layer",
      subtitle: "The Foundation",
      description: "Traditional field operations meet modern data science",
      features: [
        "Door-to-door voter contact with digital tracking",
        "Booth-level micro-targeting and mobilization",
        "Volunteer management through mobile apps",
        "Real-time feedback loops from ground to command center",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Megaphone,
      title: "Digital Layer",
      subtitle: "The Amplifier",
      description: "Multi-channel communication that reaches every voter",
      features: [
        "Social media campaigns with AI-powered content",
        "WhatsApp, SMS, and voice broadcast systems",
        "Hyper-local digital advertising and SEO",
        "PR and media relations across 250+ platforms",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Decision Layer",
      subtitle: "The Intelligence",
      description: "Data analytics that drive winning strategies",
      features: [
        "AI-powered voter segmentation and profiling",
        "Predictive modeling for turnout and swing voters",
        "Real-time sentiment analysis and issue tracking",
        "GBJ Command Platform for unified campaign management",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const principles = [
    "Every vote is earned through authentic connection, not manipulation",
    "Data informs strategy, but human insight drives decisions",
    "Campaigns must be ethical, transparent, and compliant",
    "Victory comes from discipline, not just resources",
    "Local context matters more than national templates",
    "Continuous learning and adaptation beat rigid plans",
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/strategy-planning-data-analytics-political.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Philosophy</span>
            </h1>
            <p className="text-2xl text-primary font-bold mb-4">"Victory is Data, Discipline, Design"</p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Elections aren't won by chance. They're won through systematic strategy, relentless execution, and deep
              understanding of voters. Here's how we think about winning campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Layer Model */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The <span className="text-primary">Three-Layer Model</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated approach combines ground operations, digital amplification, and data intelligence into one
              seamless campaign machine
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {layers.map((layer, index) => {
              const Icon = layer.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-primary/20 animate-in fade-in zoom-in-50 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 text-center">{layer.title}</h3>
                    <p className="text-primary font-semibold text-center mb-4">{layer.subtitle}</p>
                    <p className="text-muted-foreground mb-6 text-center">{layer.description}</p>
                    <div className="space-y-3">
                      {layer.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Card className="inline-block bg-primary/10 border-primary/30">
              <CardContent className="p-6">
                <p className="text-lg text-foreground font-semibold">
                  These three layers work in perfect sync through our{" "}
                  <span className="text-primary">GBJ Command Platform</span>, giving you real-time visibility and
                  control over every aspect of your campaign.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Research Converts to Results */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            How Research Converts to <span className="text-primary">Results</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Data Collection",
                  description:
                    "We gather voter data, demographic info, past election results, and ground intelligence from every booth and ward.",
                },
                {
                  step: "02",
                  title: "Segmentation & Analysis",
                  description:
                    "AI algorithms identify swing voters, loyal supporters, and opposition strongholds. We map issues to demographics.",
                },
                {
                  step: "03",
                  title: "Strategy Design",
                  description:
                    "Custom messaging for each segment. Resource allocation based on winnable margins. Timeline and milestone planning.",
                },
                {
                  step: "04",
                  title: "Multi-Channel Execution",
                  description:
                    "Ground teams, digital campaigns, PR, and mass outreach all execute in coordinated waves based on the strategy.",
                },
                {
                  step: "05",
                  title: "Real-Time Monitoring",
                  description:
                    "Track sentiment, engagement, turnout predictions. Adjust tactics daily based on feedback and analytics.",
                },
                {
                  step: "06",
                  title: "GOTV & Victory",
                  description:
                    "Final 20 days: war room operations, booth-level mobilization, last-mile voter contact. Win on election day.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our <span className="text-primary">Core Principles</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 animate-in fade-in zoom-in-50 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-foreground leading-relaxed">{principle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Ready to Apply This Philosophy to Your Campaign?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Let's discuss how our three-layer model can deliver victory for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <a href="https://wa.me/917058253695">Book Strategy Call</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/case-studies">See Our Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
