"use client"

import { useState } from 'react'
import {
    Camera,
    Save,
    Instagram,
    Twitter,
    Facebook,
    Globe,
    Mail,
    Phone,
    Link as LinkIcon,
    CheckCircle2,
    AlertCircle,
    TrendingUp
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function ProfileEditorPage() {
    const [isSaving, setIsSaving] = useState(false)
    const [saved, setSaved] = useState(false)

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)
        setTimeout(() => {
            setIsSaving(false)
            setSaved(true)
            setTimeout(() => setSaved(false), 3000)
        }, 1500)
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Public Profile</h1>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">Manage your digital presence on Political Connect</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="rounded-xl font-bold h-12 px-6">Preview Profile</Button>
                    <Button
                        onClick={handleSave}
                        className="bg-blue-600 hover:bg-blue-700 rounded-xl font-black h-12 px-8 flex items-center gap-2 shadow-xl shadow-blue-500/20"
                        disabled={isSaving}
                    >
                        {isSaving ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Save className="h-4 w-4" />}
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </div>

            {saved && (
                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex items-center gap-3 text-green-600 animate-in zoom-in duration-300">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-bold">Successfully updated! Your public profile is syncing with the live servers.</span>
                </div>
            )}

            <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
                {/* Left - Identity */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8">
                        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            <div className="relative group">
                                <div className="w-32 h-32 bg-slate-100 rounded-[2.5rem] overflow-hidden border-4 border-slate-50 flex items-center justify-center">
                                    <span className="text-4xl font-black text-slate-300">AB</span>
                                </div>
                                <button type="button" className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg border-2 border-white hover:scale-110 transition-transform">
                                    <Camera className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="space-y-3 flex-1">
                                <h3 className="text-xl font-black text-slate-900 leading-none">Avatar & Identity</h3>
                                <p className="text-sm text-slate-400 font-medium">Use a professional high-resolution image to maintain trust with citizens.</p>
                                <div className="flex gap-2">
                                    <Badge className="bg-blue-50 text-blue-600 border-none font-bold uppercase text-[9px]">OFFICIAL REP</Badge>
                                    <Badge className="bg-orange-50 text-orange-600 border-none font-bold uppercase text-[9px]">NMC VERIFIED</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <Input defaultValue="Ajit Bhondekar" className="h-12 rounded-xl border-slate-200 font-bold focus:ring-blue-500/20 focus:border-blue-500" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Position / Designation</label>
                                <Input defaultValue="Corporator, Ward 1" className="h-12 rounded-xl border-slate-200 font-bold focus:ring-blue-500/20 focus:border-blue-500" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Official Bio & Mission</label>
                            <Textarea
                                className="min-h-[150px] rounded-2xl border-slate-200 font-medium p-4 focus:ring-blue-500/20 focus:border-blue-500"
                                placeholder="Describe your vision for your ward and your commitment to the people..."
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
                        <h3 className="text-xl font-black text-slate-900 tracking-tight mb-6">Contact & Outreach</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input defaultValue="ajit.nmc@nagpur.gov.in" className="h-12 rounded-xl border-slate-200 pl-12 font-bold" />
                            </div>
                            <div className="relative group">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input defaultValue="+91 98765 43210" className="h-12 rounded-xl border-slate-200 pl-12 font-bold" />
                            </div>
                            <div className="relative group sm:col-span-2">
                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input placeholder="www.yourname.in" className="h-12 rounded-xl border-slate-200 pl-12 font-bold" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Social & Metrics */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-blue-600" />
                            Social Links
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl group border border-transparent hover:border-slate-200 transition-all">
                                <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                                    <Instagram className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase">Instagram</p>
                                    <input defaultValue="@ajit_nagpur" className="w-full bg-transparent border-none p-0 text-sm font-bold text-slate-700 focus:ring-0" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl group border border-transparent hover:border-slate-200 transition-all">
                                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                                    <Twitter className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase">X / Twitter</p>
                                    <input defaultValue="@AjitBhondekar" className="w-full bg-transparent border-none p-0 text-sm font-bold text-slate-700 focus:ring-0" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl group border border-transparent hover:border-slate-200 transition-all">
                                <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white">
                                    <Facebook className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase">Facebook</p>
                                    <input defaultValue="ajitbhondekar.inc" className="w-full bg-transparent border-none p-0 text-sm font-bold text-slate-700 focus:ring-0" />
                                </div>
                            </div>
                        </div>
                        <Button variant="ghost" className="w-full mt-6 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-colors">
                            + ADD ANOTHER PLATFORM
                        </Button>
                    </div>

                    <div className="bg-orange-500/5 border border-orange-500/10 p-8 rounded-[2rem]">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="h-5 w-5 text-orange-600" />
                            <h4 className="font-black text-orange-900 tracking-tight">Public Visibility</h4>
                        </div>
                        <p className="text-sm text-orange-700/70 font-medium mb-6 leading-relaxed">Changes made here are visible to all citizens in the Political Connect feed instantly.</p>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg bg-green-500 shadow-green-500/50" />
                            <span className="text-xs font-bold text-slate-600 uppercase">Live Everywhere</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
