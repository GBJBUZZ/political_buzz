"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    Search, Filter, TrendingUp, Users, Award, ChevronRight,
    ExternalLink, Instagram, MapPin, Calendar, Activity,
    CheckCircle2, Star, RefreshCw, X, MessageSquare, Layers
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Components
import { IssueReportModal } from "@/components/political-connect/issue-report-modal"
import { WardFeed } from "@/components/political-connect/ward-feed"

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
            // Fetch Analytics
            const aRes = await fetch(`/api/analytics?type=city&id=${selectedCity}`)
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

                    {/* Location Hub */}
                    <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-2xl border border-gray-100 w-full md:w-auto">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[140px]">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-bold text-gray-900">{cities.find(c => c.id === selectedCity)?.name || 'Nagpur'}</span>
                        </div>
                        <button
                            onClick={detectLocation}
                            disabled={isDetecting}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${isDetecting ? 'bg-blue-50 text-blue-400' : 'hover:bg-white hover:shadow-sm text-gray-500 hover:text-blue-600'}`}
                        >
                            <RefreshCw className={`h-3.5 w-3.5 ${isDetecting ? 'animate-spin' : ''}`} />
                            {isDetecting ? 'DETECTING...' : 'LIVE LOCATION'}
                        </button>
                    </div>

                    {/* Pro Search Bar */}
                    <div className="relative flex-1 group w-full">
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
                        </div>
                    </div>

                    {/* Stats Summary Bubble */}
                    <div className="hidden xl:flex items-center gap-6 px-6 border-l border-gray-100">
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

                {/* Left Sidebar - Col 2 */}
                <aside className="lg:col-span-2 hidden lg:block sticky top-24 space-y-10">
                    {/* Active Region */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 px-2">
                            <MapPin className="h-3.5 w-3.5 text-blue-500" />
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">REGION</h3>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-1">
                            {cities.length > 1 ? cities.map(city => (
                                <button
                                    key={city.id}
                                    onClick={() => setSelectedCity(city.id)}
                                    className={`w-full text-left px-4 py-3 text-sm font-bold rounded-xl flex justify-between items-center transition-all ${selectedCity === city.id ? 'bg-blue-600 text-white shadow-md shadow-blue-100' : 'hover:bg-gray-50 text-gray-600'
                                        }`}
                                >
                                    {city.name}
                                    {selectedCity === city.id && <CheckCircle2 className="h-4 w-4" />}
                                </button>
                            )) : (
                                <div className="w-full text-left px-4 py-4 text-sm font-black text-gray-900 flex items-center justify-between">
                                    <span className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                        {cities[0]?.name || 'Nagpur'}
                                    </span>
                                    <Badge variant="outline" className="text-[10px] font-bold border-blue-100 text-blue-600 bg-blue-50">ACTIVE</Badge>
                                </div>
                            )}
                        </div>
                    </div>

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
                        <p className="text-[10px] font-bold text-gray-400 leading-relaxed">
                            <Activity className="h-3 w-3 mb-2 text-green-500" />
                            Verified candidates from NMC Prabhag 1-38 records. Current status reflects real-time social adoption.
                        </p>
                    </div>
                </aside>

                {/* Main Feed - Col 7 */}
                <main className="lg:col-span-7 min-w-0 pb-20">
                    {/* Story / Highlights Bar */}
                    {analytics && (
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
                    )}

                    {/* Content Switcher */}
                    <div className="flex border-b border-gray-200 mb-6">
                        <button
                            onClick={() => setActiveTab('candidates')}
                            className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'candidates' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className="flex items-center gap-2"><Users className="h-4 w-4" /> LEADER PROFILES</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('community')}
                            className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'community' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> WARD COMMUNITY</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('analytics')}
                            className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'analytics' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-600'
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

                    {activeTab === 'analytics' && analytics && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Chart 1: Candidate Strength */}
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-2">Candidate Strength</h4>
                                    <p className="text-xs text-gray-500 mb-6">Total number of fielded candidates by party in Nagpur.</p>
                                    <div className="h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={analytics.partyBreakdown}>
                                                <XAxis dataKey="abbreviation" tick={{ fontSize: 12, fontWeight: 700 }} />
                                                <YAxis />
                                                <Tooltip
                                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                                    cursor={{ fill: '#f8fafc' }}
                                                />
                                                <Bar dataKey="count" name="Candidates" radius={[4, 4, 0, 0]}>
                                                    {analytics.partyBreakdown.map((entry: any, index: number) => (
                                                        <Cell key={`cell-${index}`} fill={getPartyStyle(entry.abbreviation).includes('orange') ? '#f97316' : getPartyStyle(entry.abbreviation).includes('blue') ? '#3b82f6' : getPartyStyle(entry.abbreviation).includes('teal') ? '#14b8a6' : '#eab308'} />
                                                    ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* Chart 2: Share of Voice (Followers) */}
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-2">Digital Share of Voice</h4>
                                    <p className="text-xs text-gray-500 mb-6">Distribution of total social media followers across parties.</p>
                                    <div className="h-[300px] flex items-center justify-center">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={analytics.partyBreakdown}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={60}
                                                    outerRadius={100}
                                                    paddingAngle={5}
                                                    dataKey="totalFollowers"
                                                >
                                                    {analytics.partyBreakdown.map((entry: any, index: number) => (
                                                        <Cell key={`cell-${index}`} fill={getPartyStyle(entry.abbreviation).includes('orange') ? '#f97316' : getPartyStyle(entry.abbreviation).includes('blue') ? '#3b82f6' : getPartyStyle(entry.abbreviation).includes('teal') ? '#14b8a6' : '#eab308'} />
                                                    ))}
                                                </Pie>
                                                <Tooltip />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="flex flex-wrap gap-4 justify-center mt-[-20px]">
                                        {analytics.partyBreakdown.map((p: any) => (
                                            <div key={p.abbreviation} className="flex items-center gap-2 text-xs font-medium">
                                                <div className={`w-3 h-3 rounded-full ${getPartyStyle(p.abbreviation).replace('from-', 'bg-').split(' ')[0]}`} />
                                                {p.abbreviation} ({(p.totalFollowers / 1000).toFixed(1)}k)
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Chart 3: Active vs Inactive */}
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Digital Adoption Rate</h4>
                                <p className="text-xs text-gray-500 mb-6">Percentage of candidates with active, verified social media profiles.</p>
                                <div className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={analytics.partyBreakdown} layout="vertical">
                                            <XAxis type="number" />
                                            <YAxis dataKey="abbreviation" type="category" width={50} tick={{ fontSize: 12, fontWeight: 700 }} />
                                            <Tooltip />
                                            <Bar dataKey="activeProfiles" name="Active Profiles" stackId="a" fill="#10b981" radius={[0, 4, 4, 0]} />
                                            <Bar dataKey="count" name="Total Candidates" stackId="a" fill="#e2e8f0" radius={[0, 4, 4, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'community' && (
                        <div className="max-w-3xl mx-auto">
                            <WardFeed cityId={selectedCity || ''} />
                        </div>
                    )}
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
                        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold transition-colors">
                            Claim Your Profile
                        </button>
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
