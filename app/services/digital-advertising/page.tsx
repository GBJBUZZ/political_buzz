export default function DigitalAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] to-[#001845]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Digital Advertising (Meta/Google)</h1>
          <p className="text-lg lg:text-xl text-[#E1F2FE] mb-12">
            Targeted digital advertising campaigns across Meta and Google platforms to reach the right voters at the
            right time.
          </p>

          <div className="grid gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Meta Advertising</h2>
              <ul className="space-y-3 text-[#E1F2FE]">
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Facebook & Instagram ad campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Geo-targeted ads for specific constituencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Demographic targeting (age, gender, interests)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Video ads and carousel campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>A/B testing and optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Google Advertising</h2>
              <ul className="space-y-3 text-[#E1F2FE]">
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Google Search ads for candidate name searches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>YouTube video advertising campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Display network banner ads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Remarketing to website visitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Performance tracking and ROI analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Campaign Management</h2>
              <p className="text-[#E1F2FE] mb-4">
                Our certified Meta Business Partners and Google Ads experts manage your entire digital advertising
                ecosystem with:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-[#E1F2FE] text-sm">
                <div>• Daily budget optimization</div>
                <div>• Real-time performance dashboards</div>
                <div>• Conversion tracking setup</div>
                <div>• Audience insights reports</div>
                <div>• Creative testing & rotation</div>
                <div>• Competitor analysis</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD966] transition-all hover:scale-105"
            >
              Start Digital Advertising
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
