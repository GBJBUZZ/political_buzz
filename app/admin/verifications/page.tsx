"use client"

import { useState, useEffect } from 'react'
import {
    UserCheck,
    XCircle,
    CheckCircle2,
    ExternalLink,
    Instagram,
    Search,
    MapPin,
    ShieldAlert
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function VerificationsPage() {
    const [pending, setPending] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const fetchPending = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/admin/verifications')
            const data = await res.json()
            if (data.success) setPending(data.data)
        } catch (e) { console.error(e) }
        finally { setLoading(false) }
    }

    useEffect(() => {
        fetchPending()
    }, [])

    const handleAction = async (repId: string, action: 'approve' | 'reject') => {
        try {
            const res = await fetch('/api/admin/verifications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ repId, action })
            })
            if (res.ok) {
                // Success
                setPending(prev => prev.filter(p => p.id !== repId))
            }
        } catch (e) { console.error(e) }
    }

    if (loading) return <div className="p-20 text-center font-black animate-pulse text-slate-400">Scanning for requests...</div>

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Identity Verifications</h1>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">Approve or reject representative profile claims for Nagpur</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search requests..." className="pl-10 h-11 rounded-xl border-slate-200" />
                    </div>
                </div>
            </div>

            {pending.length === 0 ? (
                <div className="bg-white rounded-[2.5rem] border border-dashed border-slate-200 p-20 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                        <UserCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Queue is Empty</h3>
                    <p className="text-slate-400 font-bold text-sm">All identity claims have been processed for Nagpur MC.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {pending.map((req) => (
                        <div key={req.id} className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center text-2xl font-black text-slate-400">
                                    {req.user?.name?.[0]}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-xl font-black text-slate-900">{req.user?.name}</h3>
                                        <Badge className={`bg-slate-900 text-white border-none font-black text-[9px]`}>{req.party?.abbreviation}</Badge>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-slate-400">
                                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                                            <MapPin className="h-3 w-3 text-orange-500" /> Ward {req.ward?.wardNumber}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest">
                                            <ShieldAlert className="h-3 w-3 text-blue-500" /> {req.position}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            {req.user?.phone}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pl-8 lg:border-l border-slate-100">
                                <Button
                                    onClick={() => handleAction(req.id, 'reject')}
                                    variant="ghost"
                                    className="h-12 px-6 rounded-xl font-black text-red-500 hover:bg-red-50 hover:text-red-600 transition-all gap-2"
                                >
                                    <XCircle className="h-4 w-4" /> REJECT
                                </Button>
                                <Button
                                    onClick={() => handleAction(req.id, 'approve')}
                                    className="h-12 px-8 rounded-xl font-black bg-slate-900 hover:bg-black text-white shadow-xl shadow-slate-200 gap-2"
                                >
                                    <CheckCircle2 className="h-4 w-4" /> VERIFY IDENTITY
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Verification Policy Note */}
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 flex gap-6 items-start">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                    <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                    <h4 className="text-sm font-black text-blue-900 uppercase tracking-tight mb-2">Protocol: Identity Verification</h4>
                    <p className="text-xs font-medium text-blue-700 leading-relaxed max-w-2xl">
                        Before verifying, ensure the phone number matches official NMC candidate filings. Once verified, the representative will gain access to the Ward Action Hub and the ability to post official responses to civic issues. Verified status will grant a blue checkmark badge on their public profile.
                    </p>
                </div>
            </div>
        </div>
    )
}
