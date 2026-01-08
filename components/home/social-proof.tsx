import { CheckCircle2, Award, TrendingUp, Users } from 'lucide-react'

export function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E1F2FE]/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3377FF] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFCF45] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3377FF]/10 border border-[#3377FF]/20 mb-4">
              <Award className="h-4 w-4 text-[#3377FF]" />
              <span className="text-sm font-semibold text-[#3377FF]">Trusted Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#000629] mb-4">
              Trusted by Leaders Across India
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Nagar Parishad to Parliament — we've powered campaigns at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#3377FF]/30 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3377FF] to-[#3377FF]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#000629] mb-3">Municipal Elections</h3>
              <p className="text-gray-600 leading-relaxed">
                Nagar Parishad, Corporation, Ward campaigns with proven grassroots strategies
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFCF45]/30 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFCF45] to-[#FFCF45]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-7 w-7 text-[#000629]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#000629] mb-3">State Assembly</h3>
              <p className="text-gray-600 leading-relaxed">
                MLA campaigns with data-driven strategies and proven track record
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#72E9CD]/30 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#72E9CD] to-[#72E9CD]/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-7 w-7 text-[#000629]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#000629] mb-3">Parliamentary</h3>
              <p className="text-gray-600 leading-relaxed">
                Lok Sabha campaigns with national reach and comprehensive media coverage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
