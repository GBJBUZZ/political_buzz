export default function PRMediaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000629] via-[#001845] to-[#3377FF] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">PR & Media Communication</h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] mb-8">
              250+ Media Platforms - National, State & Local Coverage
            </p>
          </div>
        </div>
      </section>

      {/* Media Network */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000629] mb-12 text-center">Our Media Network</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "National Media",
                count: "100+",
                outlets: ["Times of India", "Business Insider", "NDTV", "Hitavada", "National dailies", "News portals"],
              },
              {
                title: "State Media",
                count: "100+",
                outlets: ["Lokmat", "Sakal", "Loksatta", "Regional newspapers", "State TV channels", "Radio stations"],
              },
              {
                title: "Local Media",
                count: "50+",
                outlets: [
                  "Vidarbha24News",
                  "Nagpur Media",
                  "Local newspapers",
                  "Cable TV",
                  "WhatsApp groups",
                  "Community radio",
                ],
              },
            ].map((network, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-[#3377FF] mb-2">{network.count}</div>
                <h3 className="text-2xl font-bold text-[#000629] mb-4">{network.title}</h3>
                <ul className="space-y-2">
                  {network.outlets.map((outlet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#000629]">
                      <span className="text-[#3377FF]">✓</span>
                      <span>{outlet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Press Release Management",
                description: "Strategic press note creation and distribution across all media tiers",
              },
              {
                title: "Interview Coordination",
                description: "TV, radio, and print interview scheduling and preparation",
              },
              {
                title: "Media Monitoring",
                description: "24/7 media coverage tracking and sentiment analysis",
              },
              {
                title: "Crisis Management",
                description: "Rapid response team for negative coverage and reputation protection",
              },
            ].map((service, index) => (
              <div key={index} className="border-l-4 border-[#3377FF] pl-6 py-4">
                <h3 className="text-xl font-bold text-[#000629] mb-2">{service.title}</h3>
                <p className="text-[#000629]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3377FF] to-[#000629]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Amplify Your Message Across All Media</h2>
          <a
            href="/contact"
            className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors"
          >
            Get Media Coverage
          </a>
        </div>
      </section>
    </div>
  )
}
