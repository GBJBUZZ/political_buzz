export default function MassMessagingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000629] via-[#001845] to-[#3377FF] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Mass Messaging & IVR Outreach
            </h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] mb-8">
              Reach 22 Lakh+ Verified Voters with Personalized Communication
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "IVR Calls",
                description: "Personalized automated voice calls in local languages",
                features: ["Candidate voice messages", "Event reminders", "Manifesto highlights", "Voter engagement"],
              },
              {
                title: "SMS Campaigns",
                description: "Targeted text message campaigns with high delivery rates",
                features: ["Event notifications", "Manifesto sharing", "Polling reminders", "Real-time updates"],
              },
              {
                title: "WhatsApp Broadcasts",
                description: "Interactive messaging with rich media content",
                features: ["Video messages", "Image campaigns", "Document sharing", "Two-way communication"],
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-[#000629] mb-4">{service.title}</h3>
                <p className="text-[#000629] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#000629]">
                      <span className="text-[#3377FF]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#3377FF] to-[#72E9CD] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Multilingual Support</h3>
            <p className="text-lg">
              All messaging campaigns available in Marathi, Hindi, and English with culturally appropriate content and
              timing optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#000629]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Mass Outreach Campaign</h2>
          <a
            href="/contact"
            className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
