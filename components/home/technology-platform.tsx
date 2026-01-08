import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Database, Smartphone, BarChart3, Users, Bell, TrendingUp, Lock } from "lucide-react"

export function TechnologyPlatform() {
  const features = [
    {
      icon: Database,
      title: "Voter Data Integration",
      description: "ECI-compatible databases with booth-level accuracy",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Live performance metrics and campaign tracking",
    },
    {
      icon: Users,
      title: "Booth-wise Management",
      description: "Micro-level tracking and coordination tools",
    },
    {
      icon: Smartphone,
      title: "Volunteer Tracking App",
      description: "Android mobile application for field teams",
    },
    {
      icon: Bell,
      title: "Survey & Feedback Module",
      description: "Sentiment analysis and voter pulse tracking",
    },
    {
      icon: TrendingUp,
      title: "GOTV Tools",
      description: "Get-out-the-vote automation and reminders",
    },
    {
      icon: BarChart3,
      title: "Live Result Tracking",
      description: "Election day monitoring and real-time updates",
    },
    {
      icon: Lock,
      title: "DPDP Compliant Security",
      description: "Data privacy standards and encrypted storage",
    },
  ]

  const techStack = ["Windows Server", "Android App", "PostgreSQL", "AWS Hosted", "Real-time Sync", "Encrypted"]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Platform Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/election-management-software-dashboard.jpg"
                alt="GBJ Command Platform Dashboard"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Mobile app preview */}
            <div className="absolute -bottom-8 -right-8 w-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/mobile-app-volunteer-tracking.jpg"
                alt="Mobile App"
                width={200}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Feature List */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block">
              <span className="text-xs font-ui font-semibold tracking-widest uppercase text-[#3377FF]">
                PROPRIETARY TECHNOLOGY
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#000629] leading-tight">
              GBJ Command Platform
            </h2>

            <p className="text-lg font-sans text-[#000629]/70 leading-relaxed">
              Election management software built specifically for winning Indian campaigns
            </p>

            <div className="grid gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#E1F2FE] p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-[#3377FF]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-[#000629] mb-1">{feature.title}</h4>
                      <p className="text-sm font-sans text-[#000629]/70">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button
              size="lg"
              className="bg-[#3377FF] hover:bg-[#3377FF]/90 text-white font-heading font-semibold px-8 h-[52px] rounded-[10px]"
            >
              Request Platform Demo
            </Button>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#E1F2FE] text-[#000629] text-xs font-ui font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
