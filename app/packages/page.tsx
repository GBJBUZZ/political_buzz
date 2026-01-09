"use client"

import { Check, Zap, Crown, Shield, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PackagesPage() {
  const packages = [
    {
      name: "WARD BASIC",
      price: "Request Quote",
      desc: "Ideal for first-time ward candidates looking to establish a digital presence.",
      icon: Shield,
      color: "text-slate-400",
      bg: "bg-slate-50",
      border: "border-slate-100",
      btn: "outline",
      features: [
        "Profile Verification",
        "Basic Social Media Setup",
        "Ward Issue Tracking (Basic)",
        "50,000 Voter Reach",
        "Weekly Growth Reports",
        "Email Support"
      ]
    },
    {
      name: "CAMPAIGN PRO",
      price: "Best Value",
      desc: "Comprehensive solution for serious candidates aiming for decisive victory.",
      icon: Zap,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      btn: "default",
      popular: true,
      features: [
        "Total Dashboard Access",
        "Premium Content Production",
        "WhatsApp API Integration",
        "Booth-Level Data Mapping",
        "200,000+ Voter Reach",
        "24/7 War Room Liaison",
        "AI Sentiment Analysis"
      ]
    },
    {
      name: "PARTY COMMAND",
      price: "Elite Choice",
      desc: "Designed for party leaders overseeing multiple wards/constituencies.",
      icon: Crown,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      btn: "outline",
      features: [
        "Cross-Ward Master Hub",
        "Political Intelligence Network",
        "Opposition Tracking (Premium)",
        "1M+ Total Reach",
        "Priority Resource Allocation",
        "Direct Strategic Advisory",
        "Legal & ECI Compliance Hub"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-40 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Strategic Packages.</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-bold uppercase text-[10px] tracking-[0.4em]">Investment Tiers for Nagpur Election Victory</p>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col p-10 rounded-[3rem] border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 ${pkg.border} ${pkg.popular ? 'scale-105 z-10 bg-white ring-8 ring-blue-50' : 'bg-white'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] shadow-xl">
                    MOST REPUTED
                  </div>
                )}

                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${pkg.bg} ${pkg.color} flex items-center justify-center mb-6`}>
                    <pkg.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{pkg.name}</h3>
                  <p className="text-sm font-black text-blue-600 mt-1 uppercase tracking-widest">{pkg.price}</p>
                </div>

                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{pkg.desc}</p>

                <div className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 bg-green-500/10 rounded-full p-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant={pkg.btn as any}
                  className={`h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${pkg.popular ? 'bg-blue-600 hover:bg-black text-white' : 'border-slate-200 text-slate-900'}`}
                >
                  <Link href="/contact" className="gap-2">
                    GET STARTED
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="mt-24 p-12 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-3">Custom Enterprise Deployment</h3>
              <p className="text-slate-400 font-medium max-w-xl">Need a full constituency or city-wide digital infrastructure? We create custom private server deployments for major political parties.</p>
            </div>
            <Button asChild className="relative z-10 h-16 px-10 bg-white text-slate-900 hover:bg-blue-500 hover:text-white rounded-2xl font-black tracking-widest uppercase text-xs transition-all">
              <Link href="/contact">Book Strategic Audit</Link>
            </Button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
