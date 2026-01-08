import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Target, Lightbulb, Vote, GraduationCap, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Political Awareness & Leadership Research | Political BuZZ",
  description:
    "Comprehensive research on political leadership, voter awareness, and democratic processes. Learn what makes a great leader and how to make informed electoral choices.",
  keywords:
    "political awareness, leadership qualities, voter education, democratic processes, political research, good governance, electoral awareness",
}

export default function ResearchPage() {
  const researchTopics = [
    {
      icon: Users,
      title: "Who Should Lead?",
      description:
        "Explore the essential characteristics and qualifications that define an ideal political leader in modern democracy.",
      href: "/research/who-should-lead",
      color: "text-[#3377FF]",
    },
    {
      icon: Target,
      title: "Why Good Leaders Matter",
      description:
        "Understand the profound impact that effective leadership has on society, economy, and the future of communities.",
      href: "/research/why-good-leaders",
      color: "text-[#FFCF45]",
    },
    {
      icon: Lightbulb,
      title: "Essential Leadership Qualities",
      description:
        "Discover the key traits, skills, and values that distinguish exceptional leaders from ordinary politicians.",
      href: "/research/leadership-qualities",
      color: "text-[#72E9CD]",
    },
    {
      icon: Vote,
      title: "Voter Awareness",
      description:
        "Empower yourself with knowledge to make informed electoral decisions and participate actively in democracy.",
      href: "/research/voter-awareness",
      color: "text-[#3377FF]",
    },
    {
      icon: GraduationCap,
      title: "Political Education",
      description:
        "Learn about democratic processes, governance structures, and how political systems work for the people.",
      href: "/research/political-education",
      color: "text-[#FFCF45]",
    },
    {
      icon: BookOpen,
      title: "Research & Insights",
      description:
        "Access data-driven research, case studies, and insights on political campaigns and electoral strategies.",
      href: "/research/insights",
      color: "text-[#72E9CD]",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Political Awareness &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCF45] to-[#72E9CD]">
                Leadership Research
              </span>
            </h1>
            <p className="font-ui text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Empowering citizens with knowledge about political leadership, democratic processes, and informed
              decision-making for a better tomorrow.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-[#3377FF]/10 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-6 text-center">
              <div className="font-heading font-bold text-3xl text-[#FFCF45] mb-2">500+</div>
              <div className="font-ui text-sm text-white/70">Campaigns Analyzed</div>
            </div>
            <div className="bg-[#3377FF]/10 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-6 text-center">
              <div className="font-heading font-bold text-3xl text-[#72E9CD] mb-2">100+</div>
              <div className="font-ui text-sm text-white/70">Leaders Studied</div>
            </div>
            <div className="bg-[#3377FF]/10 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-6 text-center">
              <div className="font-heading font-bold text-3xl text-[#FFCF45] mb-2">15+</div>
              <div className="font-ui text-sm text-white/70">Years Experience</div>
            </div>
            <div className="bg-[#3377FF]/10 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-6 text-center">
              <div className="font-heading font-bold text-3xl text-[#72E9CD] mb-2">24/7</div>
              <div className="font-ui text-sm text-white/70">Research Support</div>
            </div>
          </div>

          {/* Research Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.href}
                className="group bg-[#001845]/50 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-8 hover:border-[#FFCF45] transition-all duration-300 hover:shadow-lg hover:shadow-[#3377FF]/20 hover:-translate-y-1"
              >
                <topic.icon className={`h-12 w-12 ${topic.color} mb-4`} />
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#FFCF45] transition-colors">
                  {topic.title}
                </h3>
                <p className="font-ui text-white/70 text-sm leading-relaxed mb-4">{topic.description}</p>
                <div className="flex items-center text-[#72E9CD] text-sm font-medium group-hover:text-[#FFCF45] transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Political Awareness Matters */}
      <section className="py-20 px-4 bg-[#001845]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Why Political Awareness Matters
            </h2>
            <p className="font-ui text-lg text-white/70 max-w-3xl mx-auto">
              Understanding politics and leadership is essential for every citizen to participate effectively in
              democracy and shape the future of their community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#3377FF]/20 to-[#000629]/50 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-8">
              <div className="h-12 w-12 bg-[#FFCF45] rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#000629]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Informed Decisions</h3>
              <p className="font-ui text-white/70 text-sm leading-relaxed">
                Make educated choices about who represents you and understand the impact of your vote on society.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#72E9CD]/20 to-[#000629]/50 backdrop-blur-sm border border-[#72E9CD]/30 rounded-xl p-8">
              <div className="h-12 w-12 bg-[#72E9CD] rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-[#000629]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Accountability</h3>
              <p className="font-ui text-white/70 text-sm leading-relaxed">
                Hold elected representatives accountable for their promises and actions through informed engagement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFCF45]/20 to-[#000629]/50 backdrop-blur-sm border border-[#FFCF45]/30 rounded-xl p-8">
              <div className="h-12 w-12 bg-[#3377FF] rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Better Governance</h3>
              <p className="font-ui text-white/70 text-sm leading-relaxed">
                Contribute to better governance by understanding policies, processes, and the role of leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Learn More About Political Leadership?
          </h2>
          <p className="font-ui text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive research and insights to become an informed citizen and contribute to building a
            better democracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold text-base h-12 px-8 rounded-lg"
            >
              <Link href="/research/who-should-lead">Start Learning</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-[#72E9CD] text-[#72E9CD] hover:bg-[#72E9CD] hover:text-[#000629] font-ui font-semibold text-base h-12 px-8 rounded-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
