"use client"

import { useState, useEffect } from 'react'
import {
    Users,
    MessageSquare,
    TrendingUp,
    ShieldCheck,
    ArrowUpRight,
    MapPin,
    AlertCircle,
    CheckCircle2,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts'
import { Badge } from "@/components/ui/badge"

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    const fetchStats = async () => {
        try {
            const res = await fetch('/api/admin/stats')
            const data = await res.json()
            if (data.success) setStats(data.data)
        } catch (e) { console.error(e) }
        finally { setLoading(false) }
    }

    useEffect(() => {
        fetchStats()
    }, [])

    if (loading) return (
        <div className="h-[60vh] flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="font-black text-slate-400 uppercase tracking-[0.3em] text-[10px]">Initializing Admin Core...</p>
        </div>
    )

    const kpis = [
        { label: 'Total Reach', val: `${(stats?.stats?.totalReach / 1000).toFixed(1)}k`, growth: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Ward Issues', val: stats?.stats?.totalIssues, growth: `${stats?.stats?.pendingIssues} Pending`, icon: MessageSquare, color: 'text-orange-600', bg: 'bg-orange-50' },
        { label: 'Verification Queue', val: stats?.stats?.pendingVerifications, growth: 'Action Required', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'Candidate Matrix', val: stats?.stats?.totalReps, growth: 'Nagpur Wide', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    ]

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${kpi.bg} ${kpi.color} transition-transform group-hover:scale-110`}>
                                <kpi.icon className="h-6 w-6" />
                            </div>
                            <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-full">{kpi.growth}</span>
                        </div>
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{kpi.label}</h3>
                        <div className="text-3xl font-black text-slate-900 tracking-tight">{kpi.val}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Party Reach Matrix */}
                <div className="xl:col-span-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                        <div>
                            <h4 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-blue-600" />
                                Party Power Matrix
                            </h4>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Digital reach & candidate distribution per party</p>
                        </div>
                        <div className="flex gap-2">
                            <Badge className="bg-slate-100 text-slate-400 border-none font-bold uppercase text-[9px]">Last 24 Hours</Badge>
                        </div>
                    </div>

                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats?.partyStats}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#94A3B8' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#94A3B8' }} />
                                <Tooltip
                                    cursor={{ fill: '#F8FAFC' }}
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                                />
                                <Bar dataKey="reach" radius={[12, 12, 12, 12]} barSize={40}>
                                    {stats?.partyStats?.map((entry: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={entry.name === 'BJP' ? '#F97316' : entry.name === 'INC' ? '#2563EB' : '#64748B'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Verification Queue (Critical) */}
                <div className="xl:col-span-4 bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-8">
                            <h4 className="text-lg font-black tracking-tight leading-tight">Verification<br />Queue</h4>
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="h-6 w-6 text-blue-400" />
                            </div>
                        </div>

                        <div className="space-y-4 flex-1">
                            {stats?.stats?.pendingVerifications > 0 ? (
                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Awaiting Approval</p>
                                    {[1, 2, 3].slice(0, stats.stats.pendingVerifications).map(i => (
                                        <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-[10px]">REP</div>
                                                <div>
                                                    <p className="text-xs font-bold">New Candidate Claim</p>
                                                    <p className="text-[10px] text-slate-500">Prabhag {i + 2}</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-center py-10 opacity-50 grayscale">
                                    <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Queue Clear</p>
                                </div>
                            )}
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none rounded-2xl h-14 font-black mt-8 shadow-xl shadow-blue-500/20">
                            VIEW FULL QUEUE
                        </Button>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px] -ml-16 -mb-16" />
                </div>
            </div>

            {/* Global Issue Feed */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h4 className="text-xl font-black text-slate-900 tracking-tight">Recent Live Reports</h4>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Cross-ward civic activity monitored in real-time</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats?.recentIssues?.map((issue: any) => (
                        <div key={issue.id} className="p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <Badge className="bg-white text-blue-600 border-none font-black text-[9px]">WARD {issue.ward}</Badge>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{issue.time}</span>
                            </div>
                            <h5 className="font-black text-slate-900 mb-2 truncate">{issue.title}</h5>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Reported by {issue.user}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
