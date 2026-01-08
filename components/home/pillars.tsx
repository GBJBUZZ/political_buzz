import { Database, Palette, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Pillars() {
  const pillars = [
    {
      icon: Database,
      title: "Data",
      description:
        "AI-powered voter analytics, segmentation, and predictive modeling. Know your electorate better than they know themselves.",
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Creative campaigns that resonate. From viral social content to compelling narratives that move voters.",
      color: "text-purple-500",
    },
    {
      icon: Target,
      title: "Delivery",
      description:
        "Flawless execution on ground and digital. War rooms, GOTV operations, and 24/7 campaign management.",
      color: "text-green-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">The Three Pillars of Victory</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven methodology combines cutting-edge technology with grassroots expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-transform ${pillar.color}`}
                >
                  <pillar.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
