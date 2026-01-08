import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, TrendingUp, Heart, Award, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Political BuZZ - Join Our Team",
  description:
    "Join Political BuZZ and be part of India's most trusted political campaign agency. Explore career opportunities in digital marketing, strategy, PR, and campaign management.",
}

export default function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Fast-track your career in political consulting and campaign management",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with experienced strategists and creative professionals",
    },
    {
      icon: Award,
      title: "Impactful Work",
      description: "Be part of winning campaigns that shape political landscapes",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and supportive team environment",
    },
  ]

  const openings = [
    {
      title: "Digital Campaign Manager",
      department: "Digital Marketing",
      location: "Nagpur, Maharashtra",
      type: "Full-time",
    },
    {
      title: "Social Media Strategist",
      department: "Social Media",
      location: "Nagpur, Maharashtra",
      type: "Full-time",
    },
    {
      title: "Content Writer (Marathi/Hindi)",
      department: "Content",
      location: "Nagpur, Maharashtra",
      type: "Full-time",
    },
    {
      title: "Video Editor",
      department: "Creative",
      location: "Nagpur, Maharashtra",
      type: "Full-time",
    },
    {
      title: "Field Coordinator",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
    },
    {
      title: "Data Analyst",
      department: "Research & Analytics",
      location: "Nagpur, Maharashtra",
      type: "Full-time",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#3377FF]/20 px-4 py-2 rounded-full mb-6">
              <Briefcase className="h-5 w-5 text-[#FFCF45]" />
              <span className="text-sm font-semibold text-white">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Build Your Career in
              <br />
              <span className="text-[#FFCF45]">Political Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Join Maharashtra's most trusted political campaign agency and be part of winning campaigns that make a
              difference.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            Why Join Political BuZZ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <benefit.icon className="h-10 w-10 text-[#FFCF45] mb-4" />
                <h3 className="text-xl font-heading font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#3377FF]/30 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span>{job.location}</span>
                      <span className="px-2 py-1 bg-[#3377FF]/20 rounded text-[#FFCF45]">{job.type}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-semibold whitespace-nowrap"
                  >
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#3377FF] to-[#000629] rounded-2xl p-8 md:p-12 text-center">
            <Zap className="h-12 w-12 text-[#FFCF45] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Don't See Your Role?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button asChild size="lg" className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-semibold px-8">
              <a href="mailto:campaign@politicalbuzzindia.in">Send Your Resume</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
