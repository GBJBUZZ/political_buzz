import { Button } from "@/components/ui/button"
import { FileText, Target, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

export function CaseStudyBhandara() {
  return (
    <section id="case-study" className="py-24 bg-[#E1F2FE]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#3377FF] text-white text-xs font-ui font-medium px-4 py-2 rounded-full uppercase tracking-wide">
                Featured Success Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#000629] leading-tight">
              Bhandara 2025: Record-Breaking Campaign Success
            </h2>

            <div className="flex flex-wrap gap-4 text-base font-heading font-medium text-[#000629]">
              <span>17 Prabhags</span>
              <span className="text-[#3377FF]">•</span>
              <span>85,000 Voters</span>
              <span className="text-[#3377FF]">•</span>
              <span>Women Mayor Seat</span>
            </div>

            <div className="bg-[#3377FF]/10 border-l-4 border-[#3377FF] p-4 rounded">
              <p className="text-lg font-heading font-semibold text-[#3377FF]">
                60% voter engagement and record turnout achieved
              </p>
            </div>

            <p className="text-base font-sans text-[#000629]/80 leading-relaxed">
              Our comprehensive 360° campaign strategy combined micro-targeting at the ward level with real-time
              analytics and coordinated digital-ground operations. We deployed advanced voter segmentation, personalized
              messaging across 17 prabhags, and maintained live performance dashboards throughout the campaign.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-[#3377FF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-[#000629]">360° Strategy</h4>
                  <p className="text-sm text-[#000629]/70">Integrated approach</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-[#3377FF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-[#000629]">Live Analytics</h4>
                  <p className="text-sm text-[#000629]/70">Real-time tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-[#3377FF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-[#000629]">PR Coverage</h4>
                  <p className="text-sm text-[#000629]/70">250+ platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-[#3377FF] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-[#000629]">Volunteer Network</h4>
                  <p className="text-sm text-[#000629]/70">Trained & mobilized</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold px-8 h-[52px] rounded-[10px]"
            >
              Read Complete Case Study
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/political-campaign-analytics-dashboard.jpg"
                alt="Bhandara 2025 Campaign Dashboard"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="text-3xl font-heading font-bold text-[#3377FF]">60%</div>
              <div className="text-sm font-sans text-[#000629]/70">Engagement Rate</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="text-3xl font-heading font-bold text-[#FFCF45]">85K</div>
              <div className="text-sm font-sans text-[#000629]/70">Voters Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
