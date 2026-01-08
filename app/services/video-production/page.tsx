export default function VideoProductionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000629] via-[#001845] to-[#3377FF] py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Video Production & Reels</h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] mb-8">
              Cinematic Storytelling for Political Campaigns - 150+ Videos Per Campaign
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Documentary Films",
                description:
                  "2-3 minute 'Vikas Kam' documentaries showcasing development work with interviews and testimonials",
              },
              {
                title: "Campaign Reels",
                description: "150-200 short-form vertical videos optimized for Instagram, Facebook, and YouTube Shorts",
              },
              {
                title: "Speech Videos",
                description: "Professional recording and editing of candidate speeches and public addresses",
              },
              {
                title: "Event Coverage",
                description: "Complete video documentation of rallies, meetings, and campaign events",
              },
              {
                title: "Drone Footage",
                description: "Aerial cinematography for large gatherings and constituency overview shots",
              },
              {
                title: "Testimonial Videos",
                description: "Authentic voter testimonials and success story documentation",
              },
              {
                title: "Manifesto Videos",
                description: "Animated explainer videos breaking down campaign promises and vision",
              },
              {
                title: "TV Commercials",
                description: "Broadcast-quality ads for TV, OTT platforms, and cinema halls",
              },
              {
                title: "Behind-the-Scenes",
                description: "Humanizing content showing candidate's daily life and work ethic",
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#000629] mb-3">{service.title}</h3>
                <p className="text-[#000629]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Quality */}
      <section className="py-16 bg-[#E1F2FE]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#000629] mb-12 text-center">
            Professional Production Standards
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: "4K Resolution", value: "Ultra HD" },
              { label: "Color Grading", value: "Cinema Quality" },
              { label: "Sound Design", value: "Studio Mix" },
              { label: "Delivery Time", value: "24-48 Hours" },
            ].map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#3377FF] mb-2">{spec.value}</div>
                <div className="text-[#000629] font-semibold">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#3377FF] to-[#000629]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tell Your Story with Cinematic Excellence</h2>
          <a
            href="/contact"
            className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFD966] transition-colors"
          >
            Start Production
          </a>
        </div>
      </section>
    </div>
  )
}
