import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Award, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About GBJ BUZZ | Marketing & Brand Building Company | Political BuZZ",
  description:
    "GBJ BUZZ Pvt. Ltd. is a service and product-based company building brands through data, design, and communication. Founded in 2018, serving 80+ clients across sectors.",
  keywords: "GBJ BUZZ, marketing company, brand building, Nagpur, Maharashtra, political marketing",
}

export default function AboutGBJBuzzPage() {
  const team = [
    { name: "Dhananjay Khadilkar", role: "Election Campaign Marketing Expert", experience: "25+ years" },
    { name: "Gunjan Jagnade", role: "Founder & CEO", experience: "7+ years in Marketing" },
    { name: "Praveen Bhagvatula", role: "Management Expert", experience: "5+ years" },
    { name: "Atharva Dhakulkar", role: "Performance Marketing", experience: "6+ years" },
    { name: "Shivprasad Motghare", role: "Digital Marketing", experience: "5+ years" },
    { name: "Atharva Jhode", role: "Technical Expert", experience: "5+ years" },
    { name: "Sumit Chawke", role: "Marathi Content Marketing Expert", experience: "5+ years" },
    { name: "Anirudh Damodar", role: "Marathi Content Marketing Expert", experience: "5+ years" },
  ]

  return (
    <div className="min-h-screen bg-[#000629]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/blue-gradient-background.jpg')",
            backgroundSize: "cover",
          }}
        />
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              About <span className="text-[#FFCF45]">GBJ BUZZ</span>
            </h1>
            <p className="text-xl text-white/80 font-sans leading-relaxed mb-8">
              A service and product-based company that builds brands through a perfect mix of data, design, and
              communication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-12 px-8"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#72E9CD] text-[#72E9CD] hover:bg-[#72E9CD] hover:text-[#000629] h-12 px-8 bg-transparent"
              >
                <Link href="/about/political-buzz">Political BuZZ Division</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-[#000629] mb-6">Founded in 2018, Growing Strong</h2>
              <p className="text-lg text-gray-700 font-sans leading-relaxed mb-6">
                GBJ BUZZ Pvt. Ltd. has grown from a small creative agency to a multi-division marketing powerhouse,
                serving <strong>80+ clients</strong> across sectors.
              </p>
              <p className="text-lg text-gray-700 font-sans leading-relaxed mb-6">
                Our philosophy reflects in every project we undertake, whether for business brands or political leaders.
              </p>
              <div className="bg-[#E1F2FE] border-l-4 border-[#3377FF] p-6 rounded-r-lg">
                <p className="font-heading font-bold text-2xl text-[#000629]">
                  "We aim for GROWTH, for everyone & with EVERYONE!!"
                </p>
                <p className="text-sm text-gray-600 mt-2">— Gunjan Jagnade, Founder & CEO</p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/modern-office-team-collaboration-workspace.jpg" alt="GBJ BUZZ Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0F1724]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Clients Served", value: "80+" },
              { icon: Target, label: "Projects Completed", value: "500+" },
              { icon: Award, label: "Years of Excellence", value: "7+" },
              { icon: TrendingUp, label: "Success Rate", value: "95%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-[#FFCF45] mx-auto mb-4" />
                <div className="font-heading font-bold text-4xl text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/70 font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-[#000629] mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
              A powerhouse of experienced professionals driving success across marketing, strategy, and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#E1F2FE] rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-[#3377FF] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#000629] text-center mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 font-sans text-center mb-2">{member.role}</p>
                <p className="text-xs text-[#3377FF] font-semibold text-center">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3377FF]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">Ready to Build Your Brand?</h2>
          <p className="text-xl text-white/90 font-sans mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Contact us today for a free consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-ui font-semibold h-14 px-12 text-lg"
          >
            <Link href="/contact">
              Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
