"use client"

import {
    Users,
    MessageSquare,
    TrendingUp,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    ArrowRight,
    Zap,
    Star
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
    Bar
} from 'recharts'

const data = [
    { name: 'Mon', reach: 4500, engagement: 2400 },
    { name: 'Tue', reach: 5200, engagement: 1398 },
    { name: 'Wed', reach: 6100, engagement: 9800 },
    { name: 'Thu', reach: 4800, engagement: 3908 },
    { name: 'Fri', reach: 7200, engagement: 4800 },
    { name: 'Sat', reach: 8900, engagement: 3800 },
    { name: 'Sun', reach: 9500, engagement: 4300 },
];

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

export default function DashboardPage() {
    const { data: session } = useSession()
    const [stats, setStats] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    const fetchStats = async () => {
        try {
            const res = await fetch('/api/dashboard/stats')
            const data = await res.json()
            if (data.success) setStats(data.data)
        } catch (e) { console.error(e) }
        finally { setLoading(false) }
    }

    useEffect(() => {
        fetchStats()
    }, [])

    if (loading) return (
        <div className="min-h-[400px] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Waking up Nagpur Intelligence Hub...</p>
            </div>
        </div>
    )

    const dash = stats || {
        stats: { followers: 0, pendingIssues: 0, resolutionRate: 0, totalReach: 0 },
        criticalIssues: []
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                        <Users className="h-16 w-16" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Followers</p>
                    <div className="flex items-end gap-3">
                        <h3 className="text-3xl font-black text-slate-900">{dash.stats.followers.toLocaleString()}</h3>
                        <span className="text-xs font-bold text-green-500 flex items-center mb-1">
                            <ArrowUpRight className="h-3 w-3" /> 14%
                        </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-50">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Influence Share</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                        <MessageSquare className="h-16 w-16" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Issues Pending</p>
                    <div className="flex items-end gap-3">
                        <h3 className="text-3xl font-black text-slate-900">{dash.stats.pendingIssues}</h3>
                        <span className="text-xs font-bold text-orange-500 mb-1">Urgent Attention</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-50">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-red-100" />
                            <div className="text-[10px] font-bold text-slate-400 ml-4 self-center">+9 reporting today</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="h-16 w-16" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Resolution Rate</p>
                    <div className="flex items-end gap-3">
                        <h3 className="text-3xl font-black text-slate-900">{dash.stats.resolutionRate}%</h3>
                        <span className="text-xs font-bold text-blue-500 mb-1">Local Performance</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-50">
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: `${dash.stats.resolutionRate}%` }} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                        <TrendingUp className="h-16 w-16" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Reach (Total IG)</p>
                    <div className="flex items-end gap-3">
                        <h3 className="text-3xl font-black text-slate-900">{(dash.stats.totalReach / 1000).toFixed(1)}k</h3>
                        <span className="text-xs font-bold text-green-500 mb-1 flex items-center">
                            <Zap className="h-3 w-3 mr-1" /> Verified
                        </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-50">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Ward Presence</p>
                    </div>
                </div>
            </div>

            {/* Charts & Main Content Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Reach Analysis Chart */}
                <div className="xl:col-span-2 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h4 className="font-black text-slate-900 tracking-tight text-xl mb-1">Engagement Analytics</h4>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Weekly interaction performance</p>
                        </div>
                    </div>

                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fontWeight: 700, fill: '#94a3b8' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fontWeight: 700, fill: '#94a3b8' }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="reach"
                                    stroke="#2563eb"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorReach)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity / Actions Side */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-[#000629] to-[#00104a] rounded-[2rem] p-8 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-xl">
                                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                            </div>
                            <h5 className="text-xl font-black mb-1">Elite Representative</h5>
                            <p className="text-xs text-blue-200/60 font-medium mb-6">You are in the top active leaders in Nagpur.</p>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-xs font-black uppercase tracking-widest h-12 rounded-xl">
                                VIEW SUCCESS SCORE
                            </Button>
                        </div>
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px]" />
                    </div>

                    <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm">
                        <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex justify-between items-center">
                            Ward Intelligence
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                        </h5>
                        <div className="space-y-4">
                            {[
                                { icon: Clock, text: "New report filed in your ward: Sanitation Issue", time: "Just now" },
                                { icon: Zap, text: "High upvote alert: Pothole on Wardha Road.", time: "2h ago" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-700 leading-snug">{item.text}</p>
                                        <p className="text-[10px] text-slate-400 font-bold mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row - Urgent Issues List */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8">
                <div className="flex items-center justify-between mb-8">
                    <h4 className="font-black text-slate-900 tracking-tight text-xl">Critical Ward Issues</h4>
                    <Button asChild variant="outline" className="rounded-xl font-bold h-10 px-6">
                        <a href="/dashboard/issues">Manage All</a>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dash.criticalIssues.length === 0 ? (
                        <div className="col-span-full py-10 text-center text-slate-400 font-bold">No active issues in your ward. Great job!</div>
                    ) : (
                        dash.criticalIssues.map((issue: any) => (
                            <div key={issue.id} className="p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-slate-200 hover:bg-white transition-all cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{issue.id} • {issue.category}</span>
                                    <span className={`px-2 py-1 rounded-md text-[8px] font-black uppercase ${issue.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                                        {issue.priority} Priority
                                    </span>
                                </div>
                                <h6 className="text-base font-black text-slate-900 mb-2 truncate group-hover:text-blue-600 transition-colors">{issue.title}</h6>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-3 w-3 text-slate-400" />
                                        <span className="text-[10px] text-slate-400 font-bold">{issue.time}</span>
                                    </div>
                                    <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                                        RESPOND <ArrowRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

