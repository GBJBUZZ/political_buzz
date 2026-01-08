import type { Metadata } from "next"
import { Users, Award, Target, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team & Leadership | Political BuZZ - Expert Campaign Professionals",
  description:
    "Meet the Political BuZZ team: 25+ years of election expertise, 340+ field members, and specialists in digital marketing, strategy, and campaign management.",
  keywords: "political campaign team, election experts, campaign managers, Maharashtra, Nagpur",
}

export default function TeamPage() {
  const leadership = [
    {
      name: "Dhananjay Khadilkar",
      role: "Election Campaign Marketing Expert",
      experience: "25+ years",
      description:
        "Veteran strategist with deep expertise in Maharashtra political landscape and grassroots mobilization.",
    },
    {
      name: "Gunjan Jagnade",
      role: "Founder & CEO",
      experience: "7+ years in Marketing",
      description: "Visionary leader driving data-driven innovation in political campaign management.",
    },
    {
      name: "Praveen Bhagvatula",
      role: "Management Expert",
      experience: "5+ years",
      description: "Operations specialist ensuring seamless campaign execution and team coordination.",
    },
  ]

  const specialists = [
    {
      name: "Atharva Dhakulkar",
      role: "Performance Marketing Lead",
      experience: "6+ years",
      expertise: "Digital advertising, Meta & Google campaigns, ROI optimization",
    },
    {
      name: "Shivprasad Motghare",
      role: "Digital Marketing Strategist",
      experience: "5+ years",
      expertise: "Social media strategy, content planning, audience engagement",
    },
    {
      name: "Atharva Jhode",
      role: "Technical Expert",
      experience: "5+ years",
      expertise: "Election software, data analytics, dashboard development",
    },
    {
      name: "Sumit Chawke",
      role: "Marathi Content Marketing Expert",
      experience: "5+ years",
      expertise: "Regional content creation, cultural messaging, local storytelling",
    },
    {
      name: "Anirudh Damodar",
      role: "Marathi Content Marketing Expert",
      experience: "5+ years",
      expertise: "Marathi copywriting, regional PR, community communication",
    },
  ]

  return (
    <div className="min-h-screen bg-[#000629]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/hero-team-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Our Team & <span className="text-[#FFCF45]">Leadership</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed">
              A powerhouse of experienced professionals driving campaign success across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Team Members", value: "340+" },
              { icon: Award, label: "Years Combined Experience", value: "100+" },
              { icon: Target, label: "Campaigns Managed", value: "500+" },
              { icon: Briefcase, label: "Specialists", value: "50+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-[#FFCF45] mx-auto mb-4" />
                <div className="font-heading font-bold text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/90 font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              Guided by seasoned professionals with decades of political campaign expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-[#E1F2FE] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-[#3377FF] to-[#000629]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-24 w-24 text-white/30" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#000629] mb-2">{leader.name}</h3>
                  <p className="text-sm text-[#3377FF] font-semibold mb-1">{leader.role}</p>
                  <p className="text-xs text-gray-500 font-sans mb-4">{leader.experience}</p>
                  <p className="text-sm text-gray-700 font-sans leading-relaxed">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Team */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">Specialist Team</h2>
            <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
              Domain experts bringing specialized skills in digital marketing, content, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((specialist, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#3377FF] rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#000629] mb-1">{specialist.name}</h3>
                <p className="text-sm text-[#3377FF] font-semibold mb-1">{specialist.role}</p>
                <p className="text-xs text-gray-500 font-sans mb-3">{specialist.experience}</p>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{specialist.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="bg-gradient-to-r from-[#3377FF] to-[#000629] rounded-2xl p-12 text-center">
            <h2 className="font-heading font-bold text-4xl text-white mb-6">340-Member Field Network</h2>
            <p className="text-xl text-white/90 font-sans mb-8 max-w-3xl mx-auto leading-relaxed">
              Our ground team structure: <strong>17 Ward Leads × 20 Volunteers</strong> = comprehensive on-ground
              coverage for every campaign.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { label: "Ward Leads", value: "17" },
                { label: "Volunteers per Ward", value: "20" },
                { label: "Total Field Members", value: "340" },
                { label: "Training Sessions", value: "10+" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="font-heading font-bold text-3xl text-[#FFCF45] mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80 font-sans">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
