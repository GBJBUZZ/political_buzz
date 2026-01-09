"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, Award, MessageCircle, Target, Zap } from "lucide-react"

export function Hero() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en')
  const [volunteersCount, setVolunteersCount] = useState(15405)
  const [currentLeader, setCurrentLeader] = useState(0)

  const leaders = [
    {
      name: "Narendra Modi",
      party: "BJP",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Narendra_Modi_2023.jpg/1200px-Narendra_Modi_2023.jpg"
    },
    {
      name: "Rahul Gandhi",
      party: "Congress",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Rahul_Gandhi_2023.jpg/1200px-Rahul_Gandhi_2023.jpg"
    },
    {
      name: "Arvind Kejriwal",
      party: "AAP",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Arvind_Kejriwal_2023.jpg/1200px-Arvind_Kejriwal_2023.jpg"
    },
    {
      name: "Uddhav Thackeray",
      party: "Shiv Sena",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Uddhav_Thackeray_2022.jpg/1200px-Uddhav_Thackeray_2022.jpg"
    },
    {
      name: "Sharad Pawar",
      party: "NCP",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sharad_Pawar_2023.jpg/1200px-Sharad_Pawar_2023.jpg"
    }
  ]

  useEffect(() => {
    const leaderInterval = setInterval(() => {
      setCurrentLeader((prev) => (prev + 1) % leaders.length)
    }, 5000)

    const counterInterval = setInterval(() => {
      setVolunteersCount(prev => prev + Math.floor(Math.random() * 3))
    }, 6000)

    return () => {
      clearInterval(leaderInterval)
      clearInterval(counterInterval)
    }
  }, [])

  const content = {
    en: {
      badge: "Political BuZZ - Powered by GBJ BUZZ",
      headline: "Data × Design × Delivery",
      subheadline: "Full-Stack Political Campaigns",
      tagline: "From Booth to Browser",
      description: "500+ Winning Campaigns Since 2018 • Serving All Political Parties Across India",
      cta1: "Get Free Consultation",
      cta2: "View Portfolio",
      whatsapp: "WhatsApp Us",
      phone: "Call +917058253695",
      volunteers: "Campaigns Managed",
      stat1: "Campaigns",
      stat2: "Win Rate",
      stat3: "Years",
      parties: "Trusted by All Major Political Parties",
      serving: "Currently Serving"
    },
    hi: {
      badge: "पॉलिटिकल बज़ - GBJ बज़ द्वारा संचालित",
      headline: "डेटा × डिज़ाइन × डिलीवरी",
      subheadline: "पूर्ण राजनीतिक अभियान",
      tagline: "बूथ से ब्राउज़र तक",
      description: "2008 से 500+ जीतने वाले अभियान • पूरे भारत में सभी राजनीतिक दलों की सेवा",
      cta1: "मुफ्त परामर्श प्राप्त करें",
      cta2: "पोर्टफोलियो देखें",
      whatsapp: "व्हाट्सएप करें",
      phone: "कॉल करें +917058253695",
      volunteers: "अभियान प्रबंधित",
      stat1: "अभियान",
      stat2: "जीत दर",
      stat3: "वर्ष",
      parties: "सभी प्रमुख राजनीतिक दलों द्वारा विश्वसनीय",
      serving: "वर्तमान में सेवा में"
    }
  }

  const t = content[language]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0e27]">
      {/* Leader Background Images */}
      <div className="absolute inset-0">
        {leaders.map((leader, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-2000 ${idx === currentLeader ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${leader.image})`,
                filter: 'grayscale(80%) brightness(0.25) contrast(1.2)',
                backgroundPosition: 'center 20%'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27] via-[#0a0e27]/98 to-[#0a0e27]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-transparent to-green-950/30" />
          </div>
        ))}
      </div>

      {/* Tricolor */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-500 z-10 shadow-lg" />

      {/* Language Toggle - Better Mobile Position */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20 flex gap-1 sm:gap-2 scale-90 sm:scale-100">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all backdrop-blur-xl ${language === 'en'
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/50'
            : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/10'
            }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all backdrop-blur-xl ${language === 'hi'
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/50'
            : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/10'
            }`}
        >
          हिं
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-3 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-2xl rounded-full border border-orange-500/40 shadow-2xl">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/80" />
              <span className="text-white/95 text-xs sm:text-sm font-bold">{t.badge}</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1]" style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}>
                {t.headline}
              </h1>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
                {t.subheadline}
              </h2>
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-300">
                {t.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-xl md:text-2xl text-blue-100/90 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0" style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}>
              {t.description}
            </p>

            {/* Current Serving */}
            <div className="inline-flex items-center gap-4 px-6 py-3.5 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl">
              <div className="text-sm text-blue-200 font-semibold">{t.serving}</div>
              <div className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-sm font-black shadow-lg">
                {leaders[currentLeader].party}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black px-10 py-8 text-xl rounded-2xl shadow-2xl shadow-orange-500/60 hover:scale-105 transition-all"
              >
                <Link href="/contact">
                  {t.cta1} <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-2xl border-2 border-white/30 text-white hover:bg-white/15 font-black px-10 py-8 text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all"
              >
                <Link href="/success-stories">{t.cta2}</Link>
              </Button>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black px-8 py-4 rounded-xl shadow-2xl shadow-green-500/60 hover:scale-105 transition-all"
              >
                <a href="https://wa.me/917058253695" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  {t.whatsapp}
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="bg-white/5 backdrop-blur-2xl border-2 border-white/30 text-white hover:bg-white/15 font-bold px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all"
              >
                <a href="tel:+917058253695">
                  {t.phone}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative space-y-6 lg:space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              <div className="group bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-2xl rounded-2xl p-5 sm:p-7 border border-blue-500/40 hover:scale-105 transition-all shadow-2xl hover:shadow-blue-500/60 text-center sm:text-left">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-3 mx-auto sm:mx-0 group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-5xl font-black text-white mb-1">500+</div>
                <div className="text-xs sm:text-sm text-blue-300 font-bold">{t.stat1}</div>
              </div>
              <div className="group bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-2xl rounded-2xl p-5 sm:p-7 border border-green-500/40 hover:scale-105 transition-all shadow-2xl hover:shadow-green-500/60 text-center sm:text-left">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mb-3 mx-auto sm:mx-0 group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-5xl font-black text-white mb-1">85%</div>
                <div className="text-xs sm:text-sm text-green-300 font-bold">{t.stat2}</div>
              </div>
              <div className="group bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-2xl rounded-2xl p-5 sm:p-7 border border-orange-500/40 hover:scale-105 transition-all shadow-2xl hover:shadow-orange-500/60 text-center sm:text-left">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400 mb-3 mx-auto sm:mx-0 group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-5xl font-black text-white mb-1">16+</div>
                <div className="text-xs sm:text-sm text-orange-300 font-bold">{t.stat3}</div>
              </div>
            </div>

            {/* Party Trust */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <p className="text-blue-200 text-xs sm:text-sm font-bold mb-5 sm:mb-7 text-center">{t.parties}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { name: "BJP", color: "from-orange-500 to-orange-600" },
                  { name: "Congress", color: "from-blue-500 to-blue-600" },
                  { name: "AAP", color: "from-blue-400 to-cyan-500" },
                  { name: "Shiv Sena", color: "from-orange-400 to-yellow-500" },
                  { name: "NCP", color: "from-teal-500 to-cyan-500" },
                  { name: "Independent", color: "from-purple-500 to-pink-500" }
                ].map((party, idx) => (
                  <div
                    key={idx}
                    className={`px-3 sm:px-5 py-3 sm:py-4 rounded-xl bg-gradient-to-r ${party.color} text-white text-center font-black text-[10px] sm:text-sm shadow-2xl hover:scale-105 transition-all`}
                  >
                    {party.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/60 to-transparent pointer-events-none" />
    </section>
  )
}
