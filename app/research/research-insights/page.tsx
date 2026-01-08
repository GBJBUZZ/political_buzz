export default function ResearchInsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] to-[#001845]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Research & Insights</h1>
          <p className="text-lg lg:text-xl text-[#E1F2FE] mb-12">
            Data-driven political research and voter insights to inform campaign strategy and decision-making.
          </p>

          <div className="grid gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Research Services</h2>
              <ul className="space-y-3 text-[#E1F2FE]">
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Constituency-level voter surveys and opinion polls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Issue prioritization and sentiment analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Demographic and psychographic voter profiling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Competitor analysis and benchmarking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Social media mood tracking and analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
