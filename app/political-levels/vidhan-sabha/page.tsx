export default function VidhanSabhaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] to-[#001845]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Vidhan Sabha (MLA/State Assembly)</h1>
          <p className="text-lg lg:text-xl text-[#E1F2FE] mb-12">
            Comprehensive state assembly election campaigns designed to win MLA seats across Maharashtra.
          </p>

          <div className="grid gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Campaign Scope</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#3377FF] mb-2">500+</div>
                  <div className="text-[#E1F2FE]">Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#FFCF45] mb-2">8</div>
                  <div className="text-[#E1F2FE]">Months Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#72E9CD] mb-2">100%</div>
                  <div className="text-[#E1F2FE]">Constituency Coverage</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Services Included</h2>
              <ul className="space-y-3 text-[#E1F2FE]">
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Complete constituency mapping and voter analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>360° digital campaign across all platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>State and regional media PR coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Ground operations with booth-level strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Volunteer training and mobilization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>War room with real-time monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD966] transition-all hover:scale-105"
            >
              Plan Your MLA Campaign
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
