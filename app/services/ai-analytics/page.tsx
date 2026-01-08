export default function AIAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000629] via-[#001845] to-[#3377FF] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Analytics & Election Software
            </h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] mb-8">
              Powered by Unity Infotech - All Election Services Under One Roof
            </p>
          </div>
        </div>
      </section>

      {/* Software Modules */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000629] mb-12 text-center">
            Comprehensive Election Software Suite
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Voter List Management",
                features: [
                  "Booth-wise voter printing",
                  "Family cards generation",
                  "Voter slip printing",
                  "Inland letters",
                ],
              },
              {
                title: "War Room Setup",
                features: ["Real-time dashboards", "Live data sync", "Command center", "Analytics hub"],
              },
              {
                title: "Mobile App & Portal",
                features: ["Rajyakarta portal", "Voter search engine", "Field agent app", "Real-time updates"],
              },
              {
                title: "Communication Suite",
                features: ["SMS portal", "IVR integration", "WhatsApp campaigns", "Automated calls"],
              },
              {
                title: "Survey Module",
                features: ["Digital surveys", "Sentiment analysis", "Mood tracking", "Issue mapping"],
              },
              {
                title: "AI Analytics",
                features: ["Voter segmentation", "Predictive modeling", "Opponent analysis", "Performance tracking"],
              },
            ].map((module, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#000629] mb-4">{module.title}</h3>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#000629]">
                      <span className="text-[#3377FF] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3377FF] to-[#000629]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Leverage AI for Your Campaign?</h2>
          <a
            href="/contact"
            className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}
