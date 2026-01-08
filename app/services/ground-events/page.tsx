export default function GroundEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] to-[#001845]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ground Events & Rallies</h1>
          <p className="text-lg lg:text-xl text-[#E1F2FE] mb-12">
            Impactful ground events that create buzz, mobilize supporters, and demonstrate your campaign's strength.
          </p>

          <div className="grid gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Event Types</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Large-Scale Events</h3>
                  <ul className="space-y-2 text-[#E1F2FE] text-sm">
                    <li>• Public rallies and road shows</li>
                    <li>• Constituency-wide gatherings</li>
                    <li>• Cultural programs and festivals</li>
                    <li>• Youth and women conventions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Community Events</h3>
                  <ul className="space-y-2 text-[#E1F2FE] text-sm">
                    <li>• Ward-level meetings</li>
                    <li>• Mohalla sabhas</li>
                    <li>• Sector-specific interactions</li>
                    <li>• Door-to-door campaigns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Event Management Services</h2>
              <ul className="space-y-3 text-[#E1F2FE]">
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Complete event planning and logistics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Stage setup, sound systems, and lighting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Crowd mobilization and volunteer coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Professional photography and videography</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Live streaming and social media coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Post-event analytics and impact assessment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD966] transition-all hover:scale-105"
            >
              Plan Your Event
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
