import { Smartphone, Users, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeatureBands() {
  return (
    <section className="py-20">
      {/* Digital Campaigning */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                <Smartphone className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Digital Campaigning</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Dominate social media, search engines, and digital platforms. Our content factory produces viral
                campaigns that drive voter engagement and sentiment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Social Media Strategy & Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Content Creation & Viral Campaigns</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>SEO, GMB Optimization & Paid Ads</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Influencer Partnerships & PR</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/services">Explore Digital Services</Link>
              </Button>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">80→250</div>
                <div className="text-xl">Media Platforms Reached</div>
                <div className="text-sm text-gray-400 mt-2">Bhandara 2025 Campaign</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Field Operations */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-lg flex items-center justify-center order-2 lg:order-1">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">35+</div>
                <div className="text-xl text-secondary">Ward Campaigns</div>
                <div className="text-sm text-gray-600 mt-2">Micro-Localized Strategy</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Field Operations</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Boots on the ground where it matters. Our volunteer mobilization and door-to-door strategies ensure
                every voter is reached, heard, and convinced.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Door-to-Door Canvassing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Volunteer Training & Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Booth-Level Operations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>GOTV (Get Out The Vote) Strategy</span>
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <Link href="/services">Learn About Field Ops</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Intelligence */}
      <div className="bg-gradient-to-br from-secondary to-primary/20 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Decision Intelligence</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Real-time analytics, predictive modeling, and AI-powered insights. Make data-driven decisions that win
                elections, not guesses.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Voter Segmentation & Targeting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sentiment Analysis & Polling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Heatmaps & Turnout Prediction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Issue Tracking & Response</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-gray-100">
                <Link href="/software">View Software Suite</Link>
              </Button>
            </div>
            <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">AI</div>
                <div className="text-xl">Powered Analytics</div>
                <div className="text-sm text-gray-400 mt-2">GBJ Command Platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
