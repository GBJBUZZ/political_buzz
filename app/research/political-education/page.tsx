"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Vote, Scale, FileText, Award, ArrowRight } from "lucide-react"

export default function PoliticalEducationPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000629] via-[#001845] to-[#000629]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t("Political Education & Awareness", "राजनीतिक शिक्षा और जागरूकता")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              {t(
                "Understanding democratic processes, rights, and responsibilities for informed citizenship",
                "सूचित नागरिकता के लिए लोकतांत्रिक प्रक्रियाओं, अधिकारों और जिम्मेदारियों को समझना",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Democracy */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-[#3377FF]/10 to-[#000629] border border-[#3377FF]/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#3377FF]/20 flex items-center justify-center">
                <Scale className="w-8 h-8 text-[#3377FF]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                {t("Understanding Democracy", "लोकतंत्र को समझना")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-semibold text-[#FFCF45]">
                  {t("Core Principles", "मूल सिद्धांत")}
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      en: "Popular Sovereignty - Power resides with the people",
                      hi: "लोकप्रिय संप्रभुता - शक्ति लोगों के पास है",
                    },
                    {
                      en: "Political Equality - One person, one vote, one value",
                      hi: "राजनीतिक समानता - एक व्यक्ति, एक वोट, एक मूल्य",
                    },
                    {
                      en: "Political Freedom - Right to participate in governance",
                      hi: "राजनीतिक स्वतंत्रता - शासन में भाग लेने का अधिकार",
                    },
                    {
                      en: "Rule of Law - Everyone is equal before the law",
                      hi: "कानून का शासन - कानून के समक्ष सभी समान हैं",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#72E9CD] mt-2 flex-shrink-0" />
                      <span className="text-white/90">{t(item.en, item.hi)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-heading font-semibold text-[#FFCF45]">
                  {t("Types of Democracy", "लोकतंत्र के प्रकार")}
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#000629]/50 border border-[#3377FF]/20 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{t("Direct Democracy", "प्रत्यक्ष लोकतंत्र")}</h4>
                    <p className="text-sm text-white/70">
                      {t(
                        "Citizens directly participate in decision-making through referendums and initiatives",
                        "नागरिक जनमत संग्रह और पहलों के माध्यम से सीधे निर्णय लेने में भाग लेते हैं",
                      )}
                    </p>
                  </div>
                  <div className="bg-[#000629]/50 border border-[#3377FF]/20 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">
                      {t("Representative Democracy", "प्रतिनिधि लोकतंत्र")}
                    </h4>
                    <p className="text-sm text-white/70">
                      {t(
                        "Citizens elect representatives who make decisions on their behalf (India's system)",
                        "नागरिक प्रतिनिधियों का चुनाव करते हैं जो उनकी ओर से निर्णय लेते हैं (भारत की प्रणाली)",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Political System */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            {t("Indian Political System", "भारतीय राजनीतिक प्रणाली")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                titleEn: "Legislative Branch",
                titleHi: "विधायी शाखा",
                descEn: "Parliament (Lok Sabha & Rajya Sabha) - Makes laws",
                descHi: "संसद (लोकसभा और राज्यसभा) - कानून बनाती है",
                color: "#3377FF",
              },
              {
                icon: Scale,
                titleEn: "Executive Branch",
                titleHi: "कार्यकारी शाखा",
                descEn: "President, Prime Minister, Council of Ministers - Implements laws",
                descHi: "राष्ट्रपति, प्रधानमंत्री, मंत्रिपरिषद - कानूनों को लागू करती है",
                color: "#FFCF45",
              },
              {
                icon: Award,
                titleEn: "Judicial Branch",
                titleHi: "न्यायिक शाखा",
                descEn: "Supreme Court, High Courts - Interprets laws",
                descHi: "सर्वोच्च न्यायालय, उच्च न्यायालय - कानूनों की व्याख्या करती है",
                color: "#72E9CD",
              },
            ].map((branch, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#000629] to-[#001845] border border-[#3377FF]/30 rounded-xl p-6 hover:border-[#3377FF] transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${branch.color}20` }}
                >
                  <branch.icon className="w-7 h-7" style={{ color: branch.color }} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {t(branch.titleEn, branch.titleHi)}
                </h3>
                <p className="text-white/70">{t(branch.descEn, branch.descHi)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electoral Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-[#3377FF]/10 to-[#000629] border border-[#3377FF]/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-[#FFCF45]/20 flex items-center justify-center">
                <Vote className="w-8 h-8 text-[#FFCF45]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                {t("Electoral Process in India", "भारत में चुनावी प्रक्रिया")}
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  stepEn: "Announcement of Elections",
                  stepHi: "चुनावों की घोषणा",
                  descEn: "Election Commission announces election dates and schedule",
                  descHi: "चुनाव आयोग चुनाव की तारीखें और कार्यक्रम की घोषणा करता है",
                },
                {
                  stepEn: "Nomination of Candidates",
                  stepHi: "उम्मीदवारों का नामांकन",
                  descEn: "Candidates file nominations with required documents and deposits",
                  descHi: "उम्मीदवार आवश्यक दस्तावेजों और जमा राशि के साथ नामांकन दाखिल करते हैं",
                },
                {
                  stepEn: "Scrutiny & Withdrawal",
                  stepHi: "जांच और वापसी",
                  descEn: "Nominations are verified; candidates can withdraw",
                  descHi: "नामांकन की जांच की जाती है; उम्मीदवार वापस ले सकते हैं",
                },
                {
                  stepEn: "Campaigning",
                  stepHi: "प्रचार",
                  descEn: "Candidates campaign following Model Code of Conduct",
                  descHi: "उम्मीदवार आदर्श आचार संहिता का पालन करते हुए प्रचार करते हैं",
                },
                {
                  stepEn: "Voting Day",
                  stepHi: "मतदान दिवस",
                  descEn: "Citizens cast their votes at polling stations using EVMs",
                  descHi: "नागरिक ईवीएम का उपयोग करके मतदान केंद्रों पर अपना वोट डालते हैं",
                },
                {
                  stepEn: "Counting & Results",
                  stepHi: "गिनती और परिणाम",
                  descEn: "Votes are counted and results are declared",
                  descHi: "वोटों की गिनती की जाती है और परिणाम घोषित किए जाते हैं",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3377FF] flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-[#FFCF45] mb-1">
                      {t(step.stepEn, step.stepHi)}
                    </h3>
                    <p className="text-white/80">{t(step.descEn, step.descHi)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citizen Rights & Responsibilities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            {t("Citizen Rights & Responsibilities", "नागरिक अधिकार और जिम्मेदारियां")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#3377FF]/10 to-[#000629] border border-[#3377FF]/30 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-[#FFCF45] mb-6">
                {t("Your Rights", "आपके अधिकार")}
              </h3>
              <ul className="space-y-4">
                {[
                  { en: "Right to Vote (18+ years)", hi: "मतदान का अधिकार (18+ वर्ष)" },
                  { en: "Right to Contest Elections", hi: "चुनाव लड़ने का अधिकार" },
                  { en: "Right to Information (RTI)", hi: "सूचना का अधिकार (आरटीआई)" },
                  { en: "Freedom of Speech & Expression", hi: "भाषण और अभिव्यक्ति की स्वतंत्रता" },
                  { en: "Right to Peaceful Assembly", hi: "शांतिपूर्ण सभा का अधिकार" },
                  { en: "Right to Form Associations", hi: "संघ बनाने का अधिकार" },
                ].map((right, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#72E9CD] mt-2 flex-shrink-0" />
                    <span className="text-white/90">{t(right.en, right.hi)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#FFCF45]/10 to-[#000629] border border-[#FFCF45]/30 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-semibold text-[#FFCF45] mb-6">
                {t("Your Responsibilities", "आपकी जिम्मेदारियां")}
              </h3>
              <ul className="space-y-4">
                {[
                  { en: "Exercise Your Right to Vote", hi: "अपने मतदान के अधिकार का प्रयोग करें" },
                  { en: "Stay Informed About Issues", hi: "मुद्दों के बारे में जानकारी रखें" },
                  { en: "Respect Democratic Institutions", hi: "लोकतांत्रिक संस्थानों का सम्मान करें" },
                  { en: "Participate in Civic Activities", hi: "नागरिक गतिविधियों में भाग लें" },
                  { en: "Hold Leaders Accountable", hi: "नेताओं को जवाबदेह बनाएं" },
                  { en: "Promote Peaceful Discourse", hi: "शांतिपूर्ण चर्चा को बढ़ावा दें" },
                ].map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFCF45] mt-2 flex-shrink-0" />
                    <span className="text-white/90">{t(responsibility.en, responsibility.hi)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#3377FF] to-[#000629] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t("Empower Yourself Through Knowledge", "ज्ञान के माध्यम से खुद को सशक्त बनाएं")}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {t(
                "Understanding politics is the first step toward meaningful participation in democracy",
                "राजनीति को समझना लोकतंत्र में सार्थक भागीदारी की दिशा में पहला कदम है",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#FFCF45] hover:bg-[#FFCF45]/90 text-[#000629] font-semibold">
                <Link href="/research">
                  {t("Explore More Topics", "अधिक विषयों का अन्वेषण करें")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#000629] bg-transparent"
              >
                <Link href="/contact">{t("Get Involved", "शामिल हों")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
