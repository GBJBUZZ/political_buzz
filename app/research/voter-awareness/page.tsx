import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Vote, Users, BookOpen, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Voter Awareness & Education | Political BuZZ - Empowering Citizens",
  description:
    "Comprehensive voter awareness and education programs. Learn about your voting rights, electoral process, and how to make informed decisions in elections.",
  keywords: "voter awareness, voter education, voting rights, electoral process, informed voting, citizen empowerment",
}

export default function VoterAwarenessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E1F2FE] to-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#000629] to-[#3377FF]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Voter Awareness & Education
            </h1>
            <p className="text-lg md:text-xl text-[#E1F2FE] max-w-3xl mx-auto leading-relaxed">
              Empowering citizens with knowledge to make informed electoral decisions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#000629] mb-6">Your Vote, Your Voice</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Democracy thrives when citizens are informed and engaged. Understanding your voting rights, the
                electoral process, and how to evaluate candidates empowers you to make decisions that shape your
                community's future.
              </p>
              <div className="space-y-4">
                {[
                  "Know your fundamental voting rights and responsibilities",
                  "Understand the complete electoral process from nomination to results",
                  "Learn how to verify your voter registration and polling booth",
                  "Evaluate candidates based on track record and promises",
                  "Recognize and report electoral malpractices",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#3377FF] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#3377FF]/20">
              <img src="/indian-voters-casting-vote-election-awareness.jpg" alt="Voter Awareness" className="w-full h-auto rounded-lg mb-6" />
              <div className="bg-[#E1F2FE] rounded-lg p-6">
                <h4 className="font-heading font-semibold text-[#000629] mb-3">Did You Know?</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  India has over 900 million registered voters, making it the world's largest democracy. Your single
                  vote contributes to this massive democratic exercise that shapes the nation's future.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#3377FF] to-[#000629] rounded-2xl p-8 md:p-12 text-white mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Essential Voter Knowledge</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Vote,
                  title: "Voting Rights",
                  description:
                    "Every Indian citizen aged 18+ has the right to vote. Your vote is secret and cannot be influenced.",
                },
                {
                  icon: BookOpen,
                  title: "Electoral Process",
                  description:
                    "From nomination to counting, understand each stage of the election cycle and your role in it.",
                },
                {
                  icon: Users,
                  title: "Candidate Evaluation",
                  description:
                    "Learn to assess candidates based on education, criminal record, assets, and past performance.",
                },
                {
                  icon: AlertCircle,
                  title: "Electoral Malpractice",
                  description:
                    "Recognize vote buying, intimidation, and other illegal practices. Know how to report them.",
                },
              ].map((topic, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                >
                  <topic.icon className="h-12 w-12 text-[#FFCF45] mb-4" />
                  <h4 className="text-xl font-heading font-semibold mb-3">{topic.title}</h4>
                  <p className="text-[#E1F2FE] leading-relaxed text-sm">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#FFCF45]/30">
              <h3 className="text-2xl font-heading font-bold text-[#000629] mb-6">Your Voting Rights</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Right to Vote",
                    description: "Every citizen aged 18+ can register and vote in elections",
                  },
                  {
                    title: "Secret Ballot",
                    description: "Your vote is completely confidential and cannot be traced back to you",
                  },
                  {
                    title: "Free from Influence",
                    description: "No one can force you to vote for a particular candidate",
                  },
                  {
                    title: "Right to Information",
                    description: "Access candidate affidavits, criminal records, and asset declarations",
                  },
                  {
                    title: "Right to NOTA",
                    description: "Choose 'None of the Above' if you don't support any candidate",
                  },
                ].map((right, index) => (
                  <li key={index} className="border-l-4 border-[#3377FF] pl-4">
                    <h4 className="font-heading font-semibold text-[#000629] mb-1">{right.title}</h4>
                    <p className="text-gray-600 text-sm">{right.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#72E9CD]/30">
              <h3 className="text-2xl font-heading font-bold text-[#000629] mb-6">How to Be an Informed Voter</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Research Candidates",
                    description: "Check their education, experience, criminal record, and assets on ECI website",
                  },
                  {
                    title: "Verify Promises",
                    description: "Compare manifesto promises with past performance and feasibility",
                  },
                  {
                    title: "Attend Public Meetings",
                    description: "Participate in rallies and town halls to hear candidates directly",
                  },
                  {
                    title: "Check Fact-Checkers",
                    description: "Verify claims through credible fact-checking organizations",
                  },
                  {
                    title: "Discuss with Community",
                    description: "Engage in informed discussions with family and neighbors",
                  },
                ].map((step, index) => (
                  <li key={index} className="border-l-4 border-[#72E9CD] pl-4">
                    <h4 className="font-heading font-semibold text-[#000629] mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FFCF45]/20 to-[#72E9CD]/20 rounded-2xl p-8 md:p-12 border-2 border-[#FFCF45]/50">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#000629] mb-6 text-center">
              Electoral Process Timeline
            </h3>
            <div className="space-y-6">
              {[
                {
                  stage: "1. Announcement",
                  description: "Election Commission announces election dates and schedule",
                },
                {
                  stage: "2. Nomination",
                  description: "Candidates file nomination papers with required documents and deposits",
                },
                {
                  stage: "3. Scrutiny",
                  description: "Election officials verify nomination papers and candidate eligibility",
                },
                {
                  stage: "4. Campaigning",
                  description: "Candidates campaign within legal limits (48 hours before polling is silent period)",
                },
                {
                  stage: "5. Polling Day",
                  description: "Voters cast their votes at designated polling booths using EVMs",
                },
                {
                  stage: "6. Counting",
                  description: "Votes are counted under strict supervision with candidate agents present",
                },
                {
                  stage: "7. Results",
                  description: "Winner is declared and certificate of election is issued",
                },
              ].map((stage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3377FF] text-white rounded-full flex items-center justify-center font-heading font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#000629] mb-1">{stage.stage}</h4>
                    <p className="text-gray-700">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E1F2FE]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#000629] mb-6">
            Empower Yourself with Knowledge
          </h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            An informed voter is the foundation of a strong democracy. Learn more about your rights and
            responsibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-heading font-semibold text-base px-12 h-14"
            >
              <Link href="/resources">
                Download Voter Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-[#3377FF] text-[#3377FF] hover:bg-[#3377FF] hover:text-white font-heading font-semibold text-base px-12 h-14 bg-transparent"
            >
              <Link href="/research">Back to Research</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
