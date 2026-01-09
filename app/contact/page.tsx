"use client"

import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#000629] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Connect with the Hub</h1>
          <p className="text-blue-200/60 text-lg max-w-2xl mx-auto font-bold uppercase text-[10px] tracking-[0.4em]">Expert Campaign Advisory for Nagpur 2026</p>
        </div>
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Let's build your<br />winning strategy.</h2>
                <p className="text-slate-500 font-medium leading-relaxed">Whether you're a first-time candidate or an established party leader, our team is ready to deploy the technology and strategy you need to win Nagpur 2026.</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="text-lg font-black text-slate-900">+91 70201 07390</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Official Inquiry</p>
                    <p className="text-lg font-black text-slate-900">connect@politicalbuzz.in</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Nagpur HQ</p>
                    <p className="text-lg font-black text-slate-900 leading-snug">Civil Lines, Opposite NMC Office<br />Nagpur, Maharashtra 440001</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-blue-200" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">War Room Hours</span>
                  </div>
                  <p className="text-xl font-black mb-1">Open 24/7 during Elections</p>
                  <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest italic">Always on duty for your victory</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-col-span-1 hidden lg:block border-l border-slate-200" />

            <div className="lg:col-span-6">
              <div className="bg-white rounded-[3rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</Label>
                      <Input placeholder="John Doe" className="h-14 rounded-2xl border-slate-200" />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Designation / Role</Label>
                      <Input placeholder="Candidate / Party Head" className="h-14 rounded-2xl border-slate-200" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Official Email</Label>
                    <Input placeholder="you@leader.com" className="h-14 rounded-2xl border-slate-200" />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Constituency / Ward</Label>
                    <Input placeholder="Prabhag No. (1-38)" className="h-14 rounded-2xl border-slate-200" />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Campaign Goal / Message</Label>
                    <Textarea placeholder="How can we assist your campaign?" className="min-h-[150px] rounded-2xl border-slate-200" />
                  </div>

                  <Button className="w-full h-16 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-slate-900/20 group transition-all">
                    SEND CAMPAIGN INQUIRY
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
