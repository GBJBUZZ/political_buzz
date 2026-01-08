import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Users, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const timeline = [
    { year: "2008", event: "Founded GBJ BUZZ - Started political consulting journey" },
    { year: "2012", event: "Expanded to digital campaign management" },
    { year: "2015", event: "Launched GBJ Command Platform software" },
    { year: "2018", event: "Achieved 250+ successful campaigns milestone" },
    { year: "2020", event: "Introduced AI-powered voter analytics" },
    { year: "2023", event: "Launched Political BuZZ division" },
    { year: "2025", event: "500+ campaigns won, international recognition" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Ethics & Compliance",
      description: "Strict adherence to ECI guidelines and DPDP data protection standards",
    },
    {
      icon: Target,
      title: "Data-Driven Decisions",
      description: "Every strategy backed by research, analytics, and proven methodologies",
    },
    {
      icon: Users,
      title: "People-First Approach",
      description: "Campaigns that connect with voters on human level, not just data points",
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "Cutting-edge AI, software, and digital tools for modern campaigns",
    },
  ]

  const metrics = [
    { value: "500+", label: "Campaigns Won", icon: Award },
    { value: "17 Years", label: "Experience", icon: TrendingUp },
    { value: "35+", label: "Ward Campaigns", icon: Target },
    { value: "250+", label: "Media Platforms", icon: Users },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/india-democracy-voting-election-history.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-primary">Political BuZZ</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              India's first data-driven political strategy firm, powered by GBJ BUZZ Pvt Ltd. Since 2008, we've been
              transforming how elections are won through intelligence, innovation, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card
                  key={index}
                  className="text-center border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in-50 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our <span className="text-primary">Journey</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 animate-in fade-in slide-in-from-${index % 2 === 0 ? "left" : "right"}-8 duration-700`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                  >
                    <div className="flex-1 md:text-right md:pr-8 pl-16 md:pl-0">
                      {index % 2 === 0 && (
                        <Card className="inline-block bg-card/50 backdrop-blur-sm border-primary/20">
                          <CardContent className="p-4">
                            <div className="font-bold text-primary mb-1">{item.year}</div>
                            <div className="text-sm text-foreground">{item.event}</div>
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary transform -translate-x-1/2" />

                    <div className="flex-1 md:pl-8 pl-16 md:text-left">
                      {index % 2 !== 0 && (
                        <Card className="inline-block bg-card/50 backdrop-blur-sm border-primary/20">
                          <CardContent className="p-4">
                            <div className="font-bold text-primary mb-1">{item.year}</div>
                            <div className="text-sm text-foreground">{item.event}</div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our <span className="text-primary">Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-primary/20 animate-in fade-in zoom-in-50 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/india-map-pattern.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Ready to Win Your Campaign?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Join 500+ successful campaigns. Let's build your victory strategy together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <a href="https://wa.me/917058253695">Contact Us on WhatsApp</a>
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
