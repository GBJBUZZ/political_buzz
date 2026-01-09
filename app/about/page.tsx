"use client"

import { Target, Users, TrendingUp, ShieldCheck, Award, Rocket, Globe } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-[#000629] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Beyond Data.<br />Toward Victory.</h1>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto font-bold uppercase text-[10px] tracking-[0.5em] mb-12">The Intelligence Engine for Nagpur Elections 2026</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-1">10+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200/40">Elections Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-1">38</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200/40">Nagpur Wards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-1">1M+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200/40">Voter Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400 mb-1">24/7</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200/40">War Room Support</div>
            </div>
          </div>
        </div>
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-48 -mt-48" />
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4 italic">Our Core Mission</p>
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Empowering Leaders.<br />Engaging Citizens.</h2>
              <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
                <p>Political Buzz was born from a simple realization: the gap between citizens and their representatives in Nagpur was widening. Decisions were being made without real-time data, and issues were lingering without accountability.</p>
                <p>In 2024, we launched our intelligence platform to bridge this gap. By combining field-level research with high-performance digital tools, we transform how campaigns are fought and how wards are managed.</p>
                <p>Our technology doesn't just count votes; it maps aspirations, tracks resolutions, and builds lasting trust between leaders and their constituencies.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <Target className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-black text-slate-900 mb-2">Precision</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Booth-level intelligence for surgical targeting.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <ShieldCheck className="h-10 w-10 text-emerald-600 mb-4" />
                  <h3 className="font-black text-slate-900 mb-2">Integrity</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Verified claims and authentic voter engagement.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <TrendingUp className="h-10 w-10 text-orange-600 mb-4" />
                  <h3 className="font-black text-slate-900 mb-2">Growth</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Continuous reach expansion across digital platforms.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <Rocket className="h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="font-black text-slate-900 mb-2">Impact</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Real-time issue resolution and ward health visibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">The Nagpur 2026 Strategy</h2>
            <p className="text-blue-200/40 font-bold uppercase text-[10px] tracking-[0.4em]">Our Triple-Layer Model for Electoral Success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="text-6xl font-black text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors">01</div>
              <h4 className="text-xl font-black mb-4">Digital Dominance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Securing your narrative across Instagram, WhatsApp, and Facebook. We build the "Digital Wall" that protects your reputation and amplifies your message to every voter's smartphone.</p>
            </div>
            <div className="group">
              <div className="text-6xl font-black text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors">02</div>
              <h4 className="text-xl font-black mb-4">BOOTH Intelligence</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Winning ward by ward, booth by booth. Our GIS-mapped voter database allows you to know exactly who to talk to, when, and with what message.</p>
            </div>
            <div className="group">
              <div className="text-6xl font-black text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors">03</div>
              <h4 className="text-xl font-black mb-4">Last-Mile Execution</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Converting sentiment into votes. Our high-precision "Get Out The Vote" (GOTV) systems ensure that your supporters actually reach the polling station on election day.</p>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </section>

      <Footer />
    </div>
  )
}
