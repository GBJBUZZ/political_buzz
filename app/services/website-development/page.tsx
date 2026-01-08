export default function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] to-[#001845]">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Website Development & SEO</h1>
          <p className="text-lg lg:text-xl text-[#E1F2FE] mb-12">
            Professional campaign websites with SEO optimization to reach voters online and collect valuable data.
          </p>

          <div className="grid gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">Website Features</h2>
              <ul className="space-y-3 text-[#E1F2FE]">
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>15+ landing pages with candidate profile and manifesto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Interactive polls and sentiment surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>AI chatbot for voter interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>SEO in Marathi, Hindi, and English</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Real-time analytics and heatmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#72E9CD] mt-1">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-[#FFCF45] mb-4">SEO Services</h2>
              <div className="space-y-4 text-[#E1F2FE]">
                <p>• Keyword research and optimization for local searches</p>
                <p>• Google My Business setup and management</p>
                <p>• Content marketing and blog articles</p>
                <p>• Backlink building from news and media sites</p>
                <p>• Technical SEO and site speed optimization</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-[#FFCF45] text-[#000629] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD966] transition-all hover:scale-105"
            >
              Build Your Campaign Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
