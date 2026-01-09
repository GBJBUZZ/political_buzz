"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    ShieldCheck,
    Phone,
    ArrowLeft,
    CheckCircle2,
    Search,
    MapPin,
    User,
    Loader2,
    AlertCircle
} from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function ClaimProfilePage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState<any[]>([])
    const [selectedRep, setSelectedRep] = useState<any>(null)
    const [phone, setPhone] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(1) // 1: Search, 2: Phone/OTP, 3: Success
    const [error, setError] = useState<string | null>(null)

    // Redirect if not logged in
    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login?callbackUrl=/claim-profile')
        }
    }, [status, router])

    // Search effect
    useEffect(() => {
        const fetchResults = async () => {
            if (searchQuery.length < 2) {
                setResults([])
                return
            }
            try {
                const res = await fetch(`/api/representatives/search?q=${searchQuery}`)
                const data = await res.json()
                if (data.success) setResults(data.data)
            } catch (e) { console.error(e) }
        }

        const timer = setTimeout(fetchResults, 300)
        return () => clearTimeout(timer)
    }, [searchQuery])

    const handleClaimSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setIsLoading(true)

        try {
            const res = await fetch('/api/representative/claim', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    representativeId: selectedRep.id,
                    phone: phone
                })
            })
            const data = await res.json()

            if (data.success) {
                setStep(3)
            } else {
                setError(data.error || "Claim failed. Please check your data.")
            }
        } catch (e) {
            setError("A server error occurred. Please try again later.")
        } finally {
            setIsLoading(false)
        }
    }

    if (status === 'loading') return null

    return (
        <div className="min-h-screen bg-[#000629] flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

            <div className="max-w-xl w-full relative z-10">
                {/* Back Button */}
                <Link href="/political-connect" className="mb-8 inline-flex items-center gap-2 text-blue-400/60 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest">
                    <ArrowLeft className="h-3 w-3" /> Back to Intelligence
                </Link>

                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative">
                    {/* Progress Indicator */}
                    <div className="flex gap-2 mb-10">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-blue-500' : 'bg-white/10'}`} />
                        ))}
                    </div>

                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/20">
                                <Search className="h-8 w-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Find Your Profile</h1>
                            <p className="text-blue-200/60 text-sm mb-8 leading-relaxed font-medium">Search for your name as it appears in the official Nagpur Electoral rolls.</p>

                            <div className="space-y-6">
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400/50" />
                                    <input
                                        type="text"
                                        placeholder="Enter your name (e.g. Rajratna Bansod)"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white font-bold focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-blue-100/20"
                                    />
                                </div>

                                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {results.map((rep) => (
                                        <button
                                            key={rep.id}
                                            onClick={() => {
                                                setSelectedRep(rep)
                                                setStep(2)
                                            }}
                                            className="w-full bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all p-4 rounded-2xl flex items-center justify-between group"
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xs font-black text-blue-400">
                                                    {rep.name[0]}
                                                </div>
                                                <div>
                                                    <div className="text-white font-bold text-sm flex items-center gap-2">
                                                        {rep.name}
                                                        {rep.isVerified && <CheckCircle2 className="h-3 w-3 text-blue-400" />}
                                                    </div>
                                                    <div className="text-[9px] font-black text-blue-200/40 uppercase tracking-widest mt-0.5">
                                                        Ward {rep.ward} • {rep.party}
                                                    </div>
                                                </div>
                                            </div>
                                            <Badge className="bg-blue-600/10 text-blue-400 border-none text-[8px] font-black uppercase tracking-tighter group-hover:bg-blue-600 group-hover:text-white transition-colors">Select</Badge>
                                        </button>
                                    ))}
                                    {searchQuery.length >= 2 && results.length === 0 && (
                                        <div className="py-10 text-center opacity-40">
                                            <div className="mb-2 font-black text-xs uppercase tracking-[0.2em] text-white">No Record Found</div>
                                            <p className="text-[10px] text-blue-100 font-bold uppercase tracking-widest leading-loose">Check for spelling or try another ward.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && selectedRep && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/20">
                                <Phone className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Verify Identity</h2>
                            <p className="text-blue-200/60 text-sm mb-8 leading-relaxed font-medium">Claiming profile for <span className="text-blue-400 font-black">{selectedRep.name}</span>.<br />We will verify this against NMC filing records.</p>

                            {error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex gap-3 items-center text-red-200 text-xs font-bold">
                                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleClaimSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 ml-1">Official Phone Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500" />
                                        <input
                                            type="tel"
                                            required
                                            placeholder="+91 91234 56789"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white font-bold focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-blue-100/20"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        variant="outline"
                                        className="h-14 flex-1 border-white/10 text-white font-black hover:bg-white/5 rounded-2xl"
                                    >
                                        BACK
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="h-14 flex-[2] bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-900/40"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'INITIATE VERIFICATION'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                            </div>
                            <h2 className="text-3xl font-black text-white mb-2">Claim Initiated!</h2>
                            <p className="text-blue-200/60 text-sm mb-8 font-medium leading-relaxed px-4">Your claim for <span className="text-white font-black">{selectedRep.name}</span> has been sent to the Admin Hub for final verification.</p>
                            <Button
                                onClick={() => router.push('/political-connect')}
                                className="w-full bg-white text-[#000629] hover:bg-gray-100 h-14 rounded-2xl font-black shadow-2xl shadow-white/10"
                            >
                                BACK TO HUB
                            </Button>
                        </div>
                    )}
                </div>

                <p className="text-center mt-8 text-blue-200/20 text-[9px] font-black uppercase tracking-[0.3em] leading-loose">
                    TRUSTED IDENTITY PROTOCOL • Nagpur MC 2026<br />
                    AUTHORIZED BY POLITICAL BUZZ SYSTEMS
                </p>
            </div>
        </div>
    )
}
