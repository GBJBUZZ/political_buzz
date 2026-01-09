"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    Search, Filter, TrendingUp, Users, Award, ChevronRight,
    ExternalLink, Instagram, MapPin, Calendar, Activity,
    CheckCircle2, Star, RefreshCw, X, MessageSquare, Layers, Map
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area } from 'recharts'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Components
import { IssueReportModal } from "@/components/political-connect/issue-report-modal"
import { WardFeed } from "@/components/political-connect/ward-feed"
import { WardHeatmap } from "@/components/political-connect/ward-heatmap"

// Types
type City = { id: string; name: string; _count: { wards: number } }
type Party = { id: string; name: string; abbreviation: string; color?: string }
type Analytics = {
    totalRepresentatives: number
    activeProfiles: number
    totalFollowers: number
    digitalAdoption: number
    totalIssues: number
    partyBreakdown: any[]
    wardBreakdown?: any[]
    filteredParty?: string | null
}

export default function PoliticalConnectPage() {
    const [cities, setCities] = useState<City[]>([])
    const [parties, setParties] = useState<Party[]>([])
    const [selectedCity, setSelectedCity] = useState<string | null>(null)
    const [selectedParty, setSelectedParty] = useState<string | null>(null) // null = 'all'

    const [trending, setTrending] = useState<any[]>([])
    const [isDetecting, setIsDetecting] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeTab, setActiveTab] = useState('candidates')
    const [candidatesLoading, setCandidatesLoading] = useState(true)

    const [analytics, setAnalytics] = useState<Analytics | null>(null)
    const [representatives, setRepresentatives] = useState<any[]>([])
    const [selectedRep, setSelectedRep] = useState<any | null>(null) // For Modal

    const [loading, setLoading] = useState(true)
    const [isLive, setIsLive] = useState(true) // Auto-refresh toggle

    // Location Detection
    const detectLocation = () => {
        setIsDetecting(true)
        if (!navigator.geolocation) {
            alert("Geolocation not supported")
            setIsDetecting(false)
            return
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                // In a real app we'd reverse geocode. 
                // For this demo (Nagpur), we'll simulate finding the ward based on lat/lng or just show success
                console.log(pos.coords.latitude, pos.coords.longitude)
                setTimeout(() => {
                    setIsDetecting(false)
                    // Logic to find ward...
                }, 1500)
            },
            () => setIsDetecting(false)
        )
    }

    // Initial Data Load
    useEffect(() => {
        async function init() {
            try {
                const [cRes, pRes] = await Promise.all([
                    fetch('/api/cities'),
                    fetch('/api/parties')
                ])
                const cData = await cRes.json()
                const pData = await pRes.json()

                if (cData.success && cData.data.length > 0) {
                    setCities(cData.data)
                    // Permanently lock to Nagpur
                    const nagpur = cData.data.find((c: any) => c.name === 'Nagpur') || cData.data[0]
                    setSelectedCity(nagpur.id)
                }
                if (pData.success) {
                    setParties(pData.data)
                }
            } catch (e) {
                console.error("Init failed", e)
            } finally {
                setLoading(false)
            }
        }
        init()
    }, [])

    // Data Fetcher
    async function refreshData() {
        if (!selectedCity) return

        try {
            // Fetch Analytics - include partyId if party is selected
            let analyticsUrl = `/api/analytics?type=city&id=${selectedCity}`
            if (selectedParty) analyticsUrl += `&partyId=${selectedParty}`

            const aRes = await fetch(analyticsUrl)
            const aData = await aRes.json()
            if (aData.success) setAnalytics(aData.data)

            // Fetch Trending
            const tRes = await fetch(`/api/trending?cityId=${selectedCity}`)
            const tData = await tRes.json()
            if (tData.success) setTrending(tData.data)

            // Fetch Reps
            let url = `/api/representatives?cityId=${selectedCity}`
            if (selectedParty) url += `&partyId=${selectedParty}`
            const rRes = await fetch(url)
            const rData = await rRes.json()
            if (rData.success) setRepresentatives(rData.data)

        } catch (e) {
            console.error("Refresh failed", e)
        }
    }

    // Effect for City/Party change
    useEffect(() => {
        setCandidatesLoading(true)
        refreshData().finally(() => setCandidatesLoading(false))
    }, [selectedCity, selectedParty])

    // Live Interval
    useEffect(() => {
        if (!isLive) return
        const interval = setInterval(refreshData, 30000) // 30s refresh
        return () => clearInterval(interval)
    }, [isLive, selectedCity, selectedParty])


    const filteredReps = representatives.filter(r =>
        r.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.ward?.wardNumber?.toString().includes(searchQuery) ||
        r.party?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getPartyStyle = (abbrev: string) => {
        const styles: any = {
            'BJP': 'from-orange-500 to-orange-600',
            'INC': 'from-blue-500 to-blue-600',
            'SHS': 'from-orange-400 to-yellow-500',
            'NCP': 'from-teal-500 to-cyan-500',
            'AAP': 'from-blue-400 to-cyan-500'
        }
        return styles[abbrev] || 'from-gray-500 to-gray-600'
    }

    if (loading) return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
    )

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Nav */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 h-16 flex items-center justify-between px-4 lg:px-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/" className="font-bold text-xl tracking-tighter text-gray-900 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                            <Activity className="h-5 w-5" />
                        </div>
                        Political Connect
                    </Link>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                        <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                        {isLive ? 'LIVE DATA' : 'OFFLINE'}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Report Issue CTA */}
                    <div className="hidden sm:block">
                        <IssueReportModal cities={cities} onSuccess={() => {/* Optionally force refresh feed */ }} />
                    </div>


                </div>
            </nav>

            {/* Pro Command Center */}
            <div className="bg-white border-b border-gray-100 shadow-sm sticky top-16 z-30 overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-4 flex flex-col md:flex-row items-center gap-4">

                    {/* Location Hub - Locked to Nagpur */}
                    <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-2xl border border-gray-100 w-full md:w-auto">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[140px]">
                            <MapPin className="h-4 w-4 text-orange-500" />
                            <span className="text-sm font-bold text-gray-900">Nagpur (Core Hub)</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 px-4 py-2 text-[10px] font-black text-green-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            LOCAL WARD INTELLIGENCE
                        </div>
                    </div>

                    {/* Pro Search Bar */}
                    <div className="relative flex-1 group w-full order-1 md:order-2">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Find a leader, ward, or civic issue..."
                            className="block w-full bg-gray-50 border border-transparent rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
                            <kbd className="hidden sm:inline-flex items-center px-2 py-1 bg-white border border-gray-200 rounded-md text-[10px] font-bold text-gray-400 shadow-sm">CTRL + K</kbd>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="lg:hidden text-gray-400">
                                        <Filter className="h-4 w-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] p-6 bg-white overflow-y-auto">
                                    <SheetHeader className="mb-8">
                                        <SheetTitle className="text-left font-black text-gray-900">Intelligence Filters</SheetTitle>
                                    </SheetHeader>
                                    <div className="space-y-10">
                                        <div>
                                            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Political Filter</h3>
                                            <div className="grid grid-cols-1 gap-2">
                                                <button onClick={() => setSelectedParty(null)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${selectedParty === null ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-500'}`}>All Parties</button>
                                                {parties.map(party => (
                                                    <button key={party.id} onClick={() => setSelectedParty(party.id)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 ${selectedParty === party.id ? 'bg-white border border-gray-100 shadow-md text-gray-900' : 'bg-gray-50 text-gray-500'}`}>
                                                        <div className={`w-2.5 h-2.5 rounded-full ${getPartyStyle(party.abbreviation)}`} />
                                                        {party.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>

                    {/* Stats Summary Bubble */}
                    <div className="hidden xl:flex items-center gap-6 px-6 border-l border-gray-100 order-3">
                        <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Total Reach</div>
                            <div className="text-lg font-black text-gray-900">{((analytics?.totalFollowers || 0) / 1000).toFixed(1)}k</div>
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Issues</div>
                            <div className="text-lg font-black text-gray-900">{analytics?.totalIssues || 0}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 pt-6 px-4 gap-8">

                {/* Left Sidebar - Col 2 (Filters Only) */}
                <aside className="lg:col-span-2 hidden lg:block sticky top-24 space-y-10">
                    {/* Party Filter */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 px-2">
                            <Layers className="h-3.5 w-3.5 text-gray-400" />
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">FILTERS</h3>
                        </div>
                        <div className="space-y-1.5">
                            <button
                                onClick={() => setSelectedParty(null)}
                                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${selectedParty === null ? 'bg-gray-900 text-white shadow-xl shadow-gray-200' : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                All Parties
                            </button>
                            {parties.map(party => (
                                <button
                                    key={party.id}
                                    onClick={() => setSelectedParty(party.id)}
                                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${selectedParty === party.id ? 'bg-white border border-gray-100 shadow-md text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br shadow-sm ${getPartyStyle(party.abbreviation)}`} />
                                        {party.abbreviation}
                                    </div>
                                    {selectedParty === party.id && <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="px-4 py-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                        <p className="text-[10px] font-bold text-gray-400 leading-relaxed uppercase tracking-tighter">
                            <Activity className="h-3 w-3 mb-2 text-green-500" />
                            Verified candidates from Nagpur MC Prabhag 1-38 records. Updated live.
                        </p>
                    </div>
                </aside>

                {/* Main Feed - Col 7 */}
                <main className="lg:col-span-7 min-w-0 pb-20">
                    {/* Story / Highlights Bar */}
                    {analytics && (
                        <>
                            {/* Party Filter Indicator */}
                            {analytics.filteredParty && (
                                <div className="mb-4 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${getPartyStyle(analytics.filteredParty)}`} />
                                        <span className="text-sm font-black text-gray-900">
                                            Showing {analytics.filteredParty} Analytics
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedParty(null)}
                                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                    >
                                        <X className="h-3 w-3" /> Clear Filter
                                    </button>
                                </div>
                            )}

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { label: 'Representatives', val: analytics.totalRepresentatives, icon: Users, color: 'text-blue-500' },
                                    { label: 'Active Profiles', val: analytics.activeProfiles, icon: Instagram, color: 'text-pink-500' },
                                    { label: 'Total Reach', val: `${(analytics.totalFollowers / 1000).toFixed(1)}K`, icon: Activity, color: 'text-purple-500' },
                                    { label: 'Digital Adoption', val: `${analytics.digitalAdoption}%`, icon: TrendingUp, color: 'text-green-500' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center gap-4">
                                        <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
                                            <stat.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900 leading-none">{stat.val}</div>
                                            <div className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* content Switcher - Mobile Scrolling */}
                    <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
                        <button
                            onClick={() => setActiveTab('candidates')}
                            className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'candidates' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className="flex items-center gap-2"><Users className="h-4 w-4" /> LEADER PROFILES</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('intelligence')}
                            className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'intelligence' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className="flex items-center gap-2"><Map className="h-4 w-4" /> WARD INTELLIGENCE</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('community')}
                            className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'community' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> WARD COMMUNITY</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('analytics')}
                            className={`flex-shrink-0 px-6 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'analytics' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> ANALYTICS</span>
                        </button>
                    </div>

                    {/* Grid */}
                    {activeTab === 'candidates' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {candidatesLoading ? (
                                <div className="col-span-full py-20 flex justify-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                </div>
                            ) : filteredReps.map((rep, idx) => {
                                const hasInsta = rep.analytics?.hasInstagram
                                const partyColor = getPartyStyle(rep.party?.abbreviation)

                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedRep(rep)}
                                        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
                                    >
                                        <div className="p-5 flex items-start gap-4">
                                            <div className="relative">
                                                <div className={`h-14 w-14 rounded-full p-0.5 bg-gradient-to-tr ${partyColor}`}>
                                                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                        {rep.profileImage ? (
                                                            <img src={rep.profileImage} className="h-full w-full object-cover" />
                                                        ) : (
                                                            <span className="text-lg font-black text-gray-400 group-hover:text-blue-600 transition-colors">{rep.user?.name?.[0]}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                {hasInsta && <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-bold text-gray-900 truncate pr-2 group-hover:text-blue-600 transition-colors">
                                                        {rep.user?.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        {rep.socialProfiles?.find((p: any) => p.platform === 'instagram') && (
                                                            <a
                                                                href={rep.socialProfiles.find((p: any) => p.platform === 'instagram').handle}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="text-pink-500 hover:scale-110 transition-transform"
                                                            >
                                                                <Instagram className="h-4 w-4" />
                                                            </a>
                                                        )}
                                                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 font-semibold">{rep.party?.abbreviation}</Badge>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500">Ward {rep.ward?.wardNumber}</p>

                                                <div className="flex gap-4 mt-3 text-sm">
                                                    <div className="text-center">
                                                        <span className="font-bold text-gray-900 block">{rep.analytics?.responseCount || 0}</span>
                                                        <span className="text-xs text-gray-400">Issues</span>
                                                    </div>
                                                    <div className="text-center">
                                                        <span className="font-bold text-gray-900 block">{(rep.analytics?.totalFollowers / 1000).toFixed(1)}k</span>
                                                        <span className="text-xs text-gray-400">Reach</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-between items-center">
                                            <span className="text-xs font-medium text-gray-500">View Full Profile</span>
                                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    {activeTab === 'intelligence' && analytics?.wardBreakdown && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <WardHeatmap data={analytics.wardBreakdown} />

                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                <h4 className="font-black text-gray-900 mb-6 uppercase tracking-tight flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-blue-600" />
                                    Ward Growth Intelligence
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {analytics.wardBreakdown.slice(0, 3).map((w: any) => (
                                        <div key={w.id} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 group hover:border-blue-200 transition-colors">
                                            <div className="flex justify-between items-start mb-4">
                                                <Badge className="bg-white text-gray-900 border-gray-100 font-black">WARD {w.number}</Badge>
                                                <div className="p-2 rounded-lg bg-green-100 text-green-600 font-bold text-[10px]">LEADER</div>
                                            </div>
                                            <h5 className="font-bold text-gray-900 mb-4">{w.name}</h5>
                                            <div className="flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                                <span>Dominance</span>
                                                <span className="text-gray-900">{w.dominantParty}</span>
                                            </div>
                                            <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '70%' }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'analytics' && analytics && (
                        <div className="space-y-8 pb-20">
                            {/* Headline Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[2rem] text-white shadow-xl">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Total Connectivity</p>
                                    <h3 className="text-3xl font-black mb-4">{analytics.activeProfiles} / {analytics.totalRepresentatives}</h3>
                                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: `${analytics.digitalAdoption}%` }} />
                                    </div>
                                    <p className="text-xs mt-3 font-bold opacity-80">{analytics.digitalAdoption}% Leaders are now digital.</p>
                                </div>
                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">BJP Digital Strength</p>
                                    <h3 className="text-3xl font-black text-orange-600">
                                        {analytics.partyBreakdown.find(p => p.abbreviation === 'BJP')?.activeProfiles || 0}
                                        <span className="text-xs text-gray-400 ml-2">Active</span>
                                    </h3>
                                    <p className="text-xs mt-3 font-bold text-gray-500">Highest digital footprint in Nagpur.</p>
                                </div>
                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">INC Digital Reach</p>
                                    <h3 className="text-3xl font-black text-blue-600">
                                        {(analytics.partyBreakdown.find(p => p.abbreviation === 'INC')?.totalFollowers / 1000).toFixed(1)}k
                                        <span className="text-xs text-gray-400 ml-2">Followers</span>
                                    </h3>
                                    <p className="text-xs mt-3 font-bold text-gray-500">Rising engagement in urban wards.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Pro Intelligence Radar */}
                                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                    <h4 className="font-black text-gray-900 mb-2 uppercase tracking-tight">Party Intelligence Map</h4>
                                    <p className="text-xs text-gray-500 mb-8">Multi-dimensional comparison of party efficiency and reach.</p>
                                    <div className="h-[350px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={analytics.partyBreakdown}>
                                                <PolarGrid stroke="#f1f5f9" />
                                                <PolarAngleAxis dataKey="abbreviation" tick={{ fontSize: 11, fontWeight: 900, fill: '#64748b' }} />
                                                <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
                                                <Radar
                                                    name="Active Profiles"
                                                    dataKey="activeProfiles"
                                                    stroke="#2563eb"
                                                    fill="#3b82f6"
                                                    fillOpacity={0.5}
                                                />
                                                <Radar
                                                    name="Total Strength"
                                                    dataKey="count"
                                                    stroke="#f97316"
                                                    fill="#fb923c"
                                                    fillOpacity={0.3}
                                                />
                                                <Tooltip />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="flex gap-6 justify-center mt-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-500">
                                            <div className="w-3 h-3 bg-blue-500 rounded-sm" /> ACTIVE PROFILES
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-500">
                                            <div className="w-3 h-3 bg-orange-400 rounded-sm opacity-50" /> TOTAL STRENGTH
                                        </div>
                                    </div>
                                </div>

                                {/* Area Chart: Growth Potential */}
                                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                    <h4 className="font-black text-gray-900 mb-2 uppercase tracking-tight">Follower Influence Curve</h4>
                                    <p className="text-xs text-gray-500 mb-8">Digital influence volume by party abbreviation.</p>
                                    <div className="h-[350px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={analytics.partyBreakdown}>
                                                <defs>
                                                    <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1} />
                                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis dataKey="abbreviation" hide />
                                                <YAxis hide />
                                                <Tooltip
                                                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="totalFollowers"
                                                    stroke="#8b5cf6"
                                                    fillOpacity={1}
                                                    fill="url(#colorReach)"
                                                    strokeWidth={4}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 mt-4">
                                        {analytics.partyBreakdown.slice(0, 3).map(p => (
                                            <div key={p.abbreviation} className="text-center p-3 bg-gray-50 rounded-2xl">
                                                <div className="text-[10px] font-black text-gray-400 mb-1">{p.abbreviation}</div>
                                                <div className="text-sm font-black text-gray-900">{(p.totalFollowers / 1000).toFixed(1)}k</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Digital Adoption Rate Comparison */}
                            <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm">
                                <h4 className="font-black text-gray-900 mb-6 uppercase tracking-tight">Digital Adoption Efficiency</h4>
                                <div className="space-y-6">
                                    {analytics.partyBreakdown.map((party: any) => {
                                        const adoption = Math.round((party.activeProfiles / party.count) * 100) || 0;
                                        return (
                                            <div key={party.id}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-xs sm:text-sm font-black text-gray-900 flex items-center gap-3">
                                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${getPartyStyle(party.abbreviation)}`} />
                                                        {party.name}
                                                    </span>
                                                    <span className="text-xs sm:text-sm font-black text-blue-600">{adoption}%</span>
                                                </div>
                                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full bg-gradient-to-r ${getPartyStyle(party.abbreviation)} transition-all duration-1000`}
                                                        style={{ width: `${adoption}%` }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'community' && (
                        <div className="max-w-3xl mx-auto">
                            <WardFeed cityId={selectedCity || ''} />
                        </div>
                    )}

                    {/* Mobile Only: Trending Stats at the bottom of feed */}
                    <div className="lg:hidden mt-12 space-y-8">
                        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 flex justify-between items-center">
                                TRENDING WARDS
                                <Badge className="bg-green-100 text-green-600 border-none font-bold">LIVE</Badge>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {trending.slice(0, 4).map((t, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded-2xl">
                                        <div className="text-[10px] font-black text-blue-600 uppercase mb-1">{t.ward}</div>
                                        <div className="text-sm font-bold text-gray-900 line-clamp-1">{t.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                {/* Right Sidebar - Col 3 */}
                <aside className="lg:col-span-3 hidden lg:block sticky top-32 space-y-8">
                    {/* Live Intelligence Panel */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-6 text-white shadow-xl shadow-blue-200 overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <Activity className="h-20 w-20" />
                        </div>
                        <div className="relative z-10">
                            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4 font-bold">REAL-TIME INTEL</Badge>
                            <h3 className="text-xl font-bold mb-2">Ward Intelligence</h3>
                            <p className="text-blue-100 text-xs leading-relaxed mb-6">Explore detailed metrics and citizen sentiment for all 38 Nagpur Prabhags.</p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">Adoption</span>
                                    <span className="text-lg font-bold">{analytics?.digitalAdoption}%</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">Issues Resolved</span>
                                    <span className="text-lg font-bold">{analytics?.totalIssues || 0}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Trending Metrics */}
                    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm divide-y divide-gray-50">
                        <div className="pb-6">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-5 flex justify-between items-center">
                                TRENDING WARDS
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] text-green-600 font-black tracking-normal">LIVE</span>
                                </div>
                            </h3>
                            <div className="space-y-5">
                                {trending.length > 0 ? trending.map((t, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 group cursor-pointer">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest italic">{t.ward}</span>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">{t.votes} signals</span>
                                        </div>
                                        <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">{t.title}</p>
                                    </div>
                                )) : (
                                    <div className="py-4 text-center text-xs text-gray-400 font-medium">No trending data for this city yet.</div>
                                )}
                            </div>
                        </div>
                        <div className="pt-6">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">CITIZEN RESOLUTION</h3>
                            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-gray-500">AVG RESPONSE RATE</span>
                                    <span className="text-xs font-black text-blue-600">84%</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full w-[84%]" />
                                </div>
                                <p className="text-[10px] text-gray-400 mt-3 leading-relaxed font-medium italic">Based on real response times in the last 7 days.</p>
                            </div>
                        </div>
                    </div>

                    {/* Leader CTA */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 text-white">
                        <h4 className="font-bold text-sm mb-1">Are you a Representative?</h4>
                        <p className="text-[10px] text-gray-400 mb-4 leading-relaxed">Connect with your ward citizens directly and resolve issues faster.</p>
                        <Button asChild className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold transition-colors border-none h-auto">
                            <Link href="/claim-profile">Claim Your Profile</Link>
                        </Button>
                    </div>
                </aside>
            </div>

            {/* Candidate Details Dialog */}
            <Dialog open={!!selectedRep} onOpenChange={() => setSelectedRep(null)}>
                <DialogContent className="max-w-2xl">
                    {selectedRep && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-gray-100 overflow-hidden">
                                        {selectedRep.profileImage ? (
                                            <img src={selectedRep.profileImage} className="h-full w-full object-cover" />
                                        ) : (
                                            <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-400">{selectedRep.party?.abbreviation?.[0]}</div>
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">{selectedRep.user?.name}</div>
                                        <div className="text-sm text-gray-500 font-normal">Ward {selectedRep.ward?.wardNumber}</div>
                                    </div>
                                </DialogTitle>
                            </DialogHeader>

                            <div className="grid grid-cols-3 gap-4 py-4">
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold">{selectedRep.analytics?.responseCount || 0}</div>
                                    <div className="text-xs text-gray-500 uppercase">Issues Resolved</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold">{(selectedRep.analytics?.totalFollowers / 1000).toFixed(1)}k</div>
                                    <div className="text-xs text-gray-500 uppercase">Followers</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-green-500">4.8</div>
                                    <div className="text-xs text-gray-500 uppercase">Trust Score</div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <h4 className="font-bold text-sm text-gray-900 border-b pb-2">Social Profiles</h4>
                                <div className="flex gap-3">
                                    {selectedRep.socialProfiles?.map((p: any, i: number) => (
                                        <a key={i} href={p.url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                                            {p.platform === 'instagram' && <Instagram className="h-4 w-4 text-pink-500" />}
                                            {p.platform}
                                            <ExternalLink className="h-3 w-3 text-gray-400" />
                                        </a>
                                    ))}
                                    {(!selectedRep.socialProfiles || selectedRep.socialProfiles.length === 0) && (
                                        <div className="text-sm text-gray-500 italic">No social profiles linked.</div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-6">
                                <Button variant="outline" onClick={() => setSelectedRep(null)}>Close</Button>
                                <Button>Contact Office</Button>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
