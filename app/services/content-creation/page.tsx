export default function ContentCreationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] to-[#001845]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Content Creation & Design</h1>
          <p className="text-lg lg:text-xl text-[#E1F2FE] mb-12">
            Professional creative content that tells your political story and connects with voters emotionally.
          </p>

          <div className="grid gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Creative Services</h2>
              <ul className="space-y-3 text-[#E1F2FE]">
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>150-200 custom flyers and posters per campaign phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>40-60 professional reels and short videos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Manifesto design and printing materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Campaign branding and visual identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Infographics and data visualization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Design Deliverables</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Print Materials</h3>
                  <ul className="space-y-2 text-[#E1F2FE] text-sm">
                    <li>• Posters & Banners</li>
                    <li>• Pamphlets & Brochures</li>
                    <li>• Voter Slips</li>
                    <li>• Hoardings Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Digital Assets</h3>
                  <ul className="space-y-2 text-[#E1F2FE] text-sm">
                    <li>• Social Media Graphics</li>
                    <li>• WhatsApp Status Images</li>
                    <li>• Email Templates</li>
                    <li>• Website Banners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD966] transition-all hover:scale-105"
            >
              Get Creative Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
