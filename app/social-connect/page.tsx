"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { Search, Filter, TrendingUp, Users, Award, ChevronRight, ExternalLink, Instagram, MapPin, Calendar, Activity } from 'lucide-react'

export default function SocialConnectPage() {
    const [selectedCity, setSelectedCity] = useState('nagpur')
    const [selectedParty, setSelectedParty] = useState('congress')
    const [activeTab, setActiveTab] = useState('dashboard')
    const [searchQuery, setSearchQuery] = useState('')
    const [congressData, setCongressData] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (selectedCity === 'nagpur' && selectedParty === 'congress') {
            fetch('/congress-nagpur-data.json')
                .then(res => res.json())
                .then(data => {
                    setCongressData(data)
                    setLoading(false)
                })
                .catch(err => {
                    console.error('Error loading data:', err)
                    setLoading(false)
                })
        }
    }, [selectedCity, selectedParty])

    const cityPartyData = {
        nagpur: {
            bjp: {
                name: "Nagpur BJP",
                fullName: "Nagpur BJP - Bharatiya Janata Party",
                totalCandidates: 151,
                activeProfiles: 124,
                totalFollowers: 189000,
                color: "orange",
                bgGradient: "from-orange-600 to-orange-500",
                partyName: "भारतीय जनता पार्टी"
            },
            congress: congressData ? {
                name: "Nagpur Congress",
                fullName: "Nagpur Congress - Indian National Congress",
                totalCandidates: congressData.totalCandidates,
                activeProfiles: congressData.activeProfiles,
                totalFollowers: congressData.totalFollowers,
                color: "blue",
                bgGradient: "from-blue-600 to-blue-500",
                partyName: "भारतीय राष्ट्रीय कांग्रेस",
                candidates: congressData.candidates
            } : null
        }
    }

    const currentData = cityPartyData[selectedCity]?.[selectedParty]

    const cities = [
        { id: 'nagpur', name: 'Nagpur', parties: ['bjp', 'congress'], wards: 38 }
    ]

    const parties = {
        bjp: { name: 'BJP', fullName: 'Bharatiya Janata Party', color: 'orange' },
        congress: { name: 'Congress', fullName: 'Indian National Congress', color: 'blue' }
    }

    const filteredCandidates = currentData?.candidates?.filter((c: any) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.seat.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.prabhag.toString().includes(searchQuery)
    ) || []

    // Advanced Analytics
    const prabhagStats = currentData?.candidates?.reduce((acc: any, c: any) => {
        if (!acc[c.prabhag]) {
            acc[c.prabhag] = { total: 0, active: 0, prabhag: c.prabhag }
        }
        acc[c.prabhag].total++
        if (c.instagram) acc[c.prabhag].active++
        return acc
    }, {})

    const prabhagChartData = prabhagStats ? Object.values(prabhagStats).map((stats: any) => ({
        name: `Ward ${stats.prabhag}`,
        active: stats.active,
        inactive: stats.total - stats.active,
        total: stats.total,
        percentage: Math.round((stats.active / stats.total) * 100)
    })) : []

    const overallStats = {
        totalWards: 38,
        avgCandidatesPerWard: currentData ? Math.round(currentData.totalCandidates / 38) : 0,
        digitalAdoption: currentData ? Math.round((currentData.activeProfiles / currentData.totalCandidates) * 100) : 0,
        avgFollowers: currentData ? Math.round(currentData.totalFollowers / currentData.activeProfiles) : 0
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-xl font-bold">Loading Analytics Platform...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Top Navigation Bar */}
            <nav className="bg-slate-900/80 backdrop-blur-xl border-b border-blue-500/20 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="text-xl font-black text-white">Political BuZZ</div>
                            <div className="text-sm text-blue-400">Social Connect</div>
                        </Link>

                        <div className="flex items-center gap-6">
                            <Link href="/" className="text-sm font-semibold text-blue-300 hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link href="/services" className="text-sm font-semibold text-blue-300 hover:text-white transition-colors">
                                Services
                            </Link>
                            <Link href="/social-connect" className="text-sm font-semibold text-white border-b-2 border-blue-500">
                                Social Connect
                            </Link>
                            <Link href="/contact" className="text-sm font-semibold text-blue-300 hover:text-white transition-colors">
                                Contact
                            </Link>
                            <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-blue-500/20 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
                    <div className="p-6">
                        <h3 className="text-lg font-black text-white mb-6">Analytics Hub</h3>

                        {/* City Selection */}
                        <div className="mb-6">
                            <label className="block text-xs font-bold text-blue-400 mb-3 uppercase tracking-wider">City</label>
                            <div className="space-y-2">
                                {cities.map(city => (
                                    <button
                                        key={city.id}
                                        onClick={() => {
                                            setSelectedCity(city.id)
                                            if (!city.parties.includes(selectedParty)) {
                                                setSelectedParty(city.parties[0])
                                            }
                                        }}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-all ${selectedCity === city.id
                                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                                                : 'bg-white/5 text-blue-200 hover:bg-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-sm">{city.name}</div>
                                                <div className="text-xs opacity-75">{city.wards} Wards</div>
                                            </div>
                                            {selectedCity === city.id && <ChevronRight className="w-4 h-4" />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Party Selection */}
                        <div className="mb-6">
                            <label className="block text-xs font-bold text-blue-400 mb-3 uppercase tracking-wider">Party</label>
                            <div className="space-y-2">
                                {cities.find(c => c.id === selectedCity)?.parties.map(partyId => {
                                    const party = parties[partyId]
                                    return (
                                        <button
                                            key={partyId}
                                            onClick={() => setSelectedParty(partyId)}
                                            className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-all ${selectedParty === partyId
                                                    ? `bg-gradient-to-r ${party.color === 'orange' ? 'from-orange-500 to-orange-600' : 'from-blue-500 to-blue-600'} text-white shadow-lg`
                                                    : 'bg-white/5 text-blue-200 hover:bg-white/10'
                                                }`}
                                        >
                                            <div className="text-sm">{party.name}</div>
                                            <div className="text-xs opacity-75">{party.fullName}</div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Quick Metrics */}
                        {currentData && (
                            <div className="pt-4 border-t border-blue-500/20">
                                <div className="text-xs font-bold text-blue-400 mb-3 uppercase tracking-wider">Quick Metrics</div>
                                <div className="space-y-3">
                                    <div className="bg-white/5 rounded-lg p-3">
                                        <div className="text-xs text-blue-300 font-semibold mb-1">Total Reach</div>
                                        <div className="text-2xl font-black text-white">{(currentData.totalFollowers / 1000).toFixed(0)}K+</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3">
                                        <div className="text-xs text-blue-300 font-semibold mb-1">Active Profiles</div>
                                        <div className="text-2xl font-black text-green-400">{currentData.activeProfiles}</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3">
                                        <div className="text-xs text-blue-300 font-semibold mb-1">Candidates</div>
                                        <div className="text-2xl font-black text-white">{currentData.totalCandidates}</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3">
                                        <div className="text-xs text-blue-300 font-semibold mb-1">Digital Adoption</div>
                                        <div className="text-2xl font-black text-purple-400">{overallStats.digitalAdoption}%</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto">
                    {currentData ? (
                        <>
                            {/* Header */}
                            <header className={`bg-gradient-to-r ${currentData.bgGradient} border-b border-white/20 shadow-xl`}>
                                <div className="max-w-7xl mx-auto px-8 py-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <MapPin className="w-6 h-6 text-white/80" />
                                                <span className="text-white/80 font-semibold">Nagpur Municipal Corporation</span>
                                            </div>
                                            <h1 className="text-5xl font-black text-white mb-2">{currentData.name.toUpperCase()}</h1>
                                            <p className="text-white/90 font-semibold text-xl">{currentData.partyName}</p>
                                            <div className="flex items-center gap-4 mt-3">
                                                <div className="flex items-center gap-2 text-white/80">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="text-sm">Municipal Elections 2026</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-white/80">
                                                    <Activity className="w-4 h-4" />
                                                    <span className="text-sm">Real-time Analytics</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-8">
                                            <div className="text-right">
                                                <div className="text-sm text-white/70 font-semibold mb-1">Total Reach</div>
                                                <div className="text-5xl font-black text-white">{(currentData.totalFollowers / 1000).toFixed(0)}K+</div>
                                            </div>
                                            <div className="h-16 w-px bg-white/20"></div>
                                            <div className="text-right">
                                                <div className="text-sm text-white/70 font-semibold mb-1">Active Profiles</div>
                                                <div className="text-5xl font-black text-green-300">{currentData.activeProfiles}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="border-t border-white/20">
                                    <div className="max-w-7xl mx-auto px-8">
                                        <nav className="flex gap-1 py-2">
                                            {[
                                                { id: 'dashboard', label: 'Dashboard Overview' },
                                                { id: 'candidates', label: 'All Candidates' },
                                                { id: 'analytics', label: 'Ward Analytics' },
                                                { id: 'insights', label: 'Performance Insights' }
                                            ].map(tab => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setActiveTab(tab.id)}
                                                    className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === tab.id
                                                            ? 'bg-white text-slate-900 shadow-lg'
                                                            : 'text-white/80 hover:bg-white/20'
                                                        }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </header>

                            {/* Content Area */}
                            <div className="max-w-7xl mx-auto px-8 py-8">
                                {activeTab === 'dashboard' && (
                                    <div className="space-y-8">
                                        {/* KPI Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
                                                <Users className="w-12 h-12 text-blue-400 mb-3" />
                                                <div className="text-4xl font-black text-white mb-1">{currentData.totalCandidates}</div>
                                                <div className="text-sm text-blue-300 font-semibold">Total Candidates</div>
                                                <div className="text-xs text-blue-400 mt-2">Across 38 wards</div>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
                                                <Instagram className="w-12 h-12 text-green-400 mb-3" />
                                                <div className="text-4xl font-black text-white mb-1">{currentData.activeProfiles}</div>
                                                <div className="text-sm text-green-300 font-semibold">Active on Instagram</div>
                                                <div className="text-xs text-green-400 mt-2">Social media presence</div>
                                            </div>
                                            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
                                                <TrendingUp className="w-12 h-12 text-purple-400 mb-3" />
                                                <div className="text-4xl font-black text-white mb-1">{overallStats.digitalAdoption}%</div>
                                                <div className="text-sm text-purple-300 font-semibold">Digital Adoption Rate</div>
                                                <div className="text-xs text-purple-400 mt-2">Platform engagement</div>
                                            </div>
                                            <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 hover:scale-105 transition-transform">
                                                <Award className="w-12 h-12 text-orange-400 mb-3" />
                                                <div className="text-4xl font-black text-white mb-1">{overallStats.avgFollowers}</div>
                                                <div className="text-sm text-orange-300 font-semibold">Avg Followers</div>
                                                <div className="text-xs text-orange-400 mt-2">Per active profile</div>
                                            </div>
                                        </div>

                                        {/* Campaign Overview */}
                                        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                                            <h3 className="text-2xl font-black text-white mb-4">Campaign Overview</h3>
                                            <p className="text-blue-200 mb-6 leading-relaxed">
                                                Comprehensive social media analytics for {currentData.fullName} covering all {currentData.totalCandidates} candidates
                                                across 38 wards in Nagpur Municipal Corporation. Real-time tracking of Instagram presence, follower growth, and engagement metrics.
                                            </p>
                                            <div className="grid grid-cols-5 gap-4">
                                                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                                                    <div className="text-3xl font-black text-white mb-1">38</div>
                                                    <div className="text-xs text-blue-300 font-semibold">Total Wards</div>
                                                </div>
                                                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                                                    <div className="text-3xl font-black text-white mb-1">{overallStats.avgCandidatesPerWard}</div>
                                                    <div className="text-xs text-blue-300 font-semibold">Candidates/Ward</div>
                                                </div>
                                                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                                                    <div className="text-3xl font-black text-white mb-1">{overallStats.digitalAdoption}%</div>
                                                    <div className="text-xs text-blue-300 font-semibold">Digital Coverage</div>
                                                </div>
                                                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                                                    <div className="text-3xl font-black text-white mb-1">{(currentData.totalFollowers / 1000).toFixed(0)}K</div>
                                                    <div className="text-xs text-blue-300 font-semibold">Total Reach</div>
                                                </div>
                                                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                                                    <div className="text-3xl font-black text-white mb-1">4</div>
                                                    <div className="text-xs text-blue-300 font-semibold">Seats/Ward</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Top Performing Wards */}
                                        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                                            <h3 className="text-2xl font-black text-white mb-6">Top Performing Wards</h3>
                                            <div className="grid grid-cols-3 gap-6">
                                                {prabhagChartData.slice(0, 6).sort((a, b) => b.percentage - a.percentage).slice(0, 3).map((ward, idx) => (
                                                    <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10">
                                                        <div className="flex items-center justify-between mb-4">
                                                            <div className="text-lg font-black text-white">{ward.name}</div>
                                                            <div className="text-3xl font-black text-green-400">{ward.percentage}%</div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <div className="flex justify-between text-sm">
                                                                <span className="text-blue-300">Active:</span>
                                                                <span className="text-white font-bold">{ward.active}</span>
                                                            </div>
                                                            <div className="flex justify-between text-sm">
                                                                <span className="text-blue-300">Total:</span>
                                                                <span className="text-white font-bold">{ward.total}</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-gradient-to-r from-green-500 to-green-400"
                                                                style={{ width: `${ward.percentage}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'candidates' && (
                                    <div className="space-y-6">
                                        {/* Search & Filter */}
                                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 p-6 rounded-2xl">
                                            <div className="flex items-center gap-6">
                                                <div className="flex-1 flex items-center gap-4">
                                                    <Search className="w-6 h-6 text-blue-400" />
                                                    <input
                                                        type="text"
                                                        value={searchQuery}
                                                        onChange={(e) => setSearchQuery(e.target.value)}
                                                        placeholder="Search by candidate name, seat number, or ward..."
                                                        className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder-blue-300/50"
                                                    />
                                                </div>
                                                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                                                    <Filter className="w-5 h-5" />
                                                    Filters
                                                </button>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="text-sm text-blue-300">
                                                    Showing <span className="font-bold text-white">{filteredCandidates.length}</span> of <span className="font-bold text-white">{currentData.candidates.length}</span> candidates
                                                </div>
                                                <div className="flex gap-2">
                                                    <button className="px-4 py-2 bg-white/5 text-blue-300 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                                                        All
                                                    </button>
                                                    <button className="px-4 py-2 bg-white/5 text-blue-300 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                                                        Active Only
                                                    </button>
                                                    <button className="px-4 py-2 bg-white/5 text-blue-300 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors">
                                                        Inactive Only
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Candidate Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {filteredCandidates.map((candidate: any, idx: number) => (
                                                <div
                                                    key={idx}
                                                    className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105"
                                                >
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className="flex-1">
                                                            <div className="text-xs text-blue-400 font-bold mb-1">Ward {candidate.prabhag} • Seat {candidate.seat}</div>
                                                            <h3 className="text-xl font-black text-white">{candidate.name}</h3>
                                                        </div>
                                                        {candidate.instagram ? (
                                                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                                <Instagram className="w-6 h-6 text-white" />
                                                            </div>
                                                        ) : (
                                                            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                                                                <div className="text-gray-400 text-xs font-bold">N/A</div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="text-xs text-blue-300 font-semibold mb-2">Status</div>
                                                        {candidate.instagram ? (
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                                <span className="text-sm text-green-400 font-semibold">Active on Instagram</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                                                <span className="text-sm text-gray-400 font-semibold">No Social Presence</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {candidate.instagram ? (
                                                        <a
                                                            href={candidate.instagram}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold text-sm hover:from-blue-700 hover:to-cyan-600 transition-all"
                                                        >
                                                            <Instagram className="w-4 h-4" />
                                                            View Instagram Profile
                                                            <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    ) : (
                                                        <div className="w-full px-4 py-3 bg-gray-700/50 text-gray-400 rounded-lg text-sm font-semibold text-center">
                                                            No Instagram Profile Found
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'analytics' && (
                                    <div className="space-y-6">
                                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                                            <h3 className="text-2xl font-black text-white mb-6">Ward-wise Digital Presence Analysis</h3>
                                            <ResponsiveContainer width="100%" height={600}>
                                                <BarChart data={prabhagChartData}>
                                                    <XAxis
                                                        dataKey="name"
                                                        stroke="#60a5fa"
                                                        tick={{ fill: '#60a5fa', fontSize: 12 }}
                                                        angle={-45}
                                                        textAnchor="end"
                                                        height={100}
                                                    />
                                                    <YAxis stroke="#60a5fa" tick={{ fill: '#60a5fa' }} />
                                                    <Tooltip
                                                        contentStyle={{
                                                            backgroundColor: '#1e293b',
                                                            border: '1px solid #3b82f6',
                                                            borderRadius: '8px',
                                                            padding: '12px'
                                                        }}
                                                        labelStyle={{ color: '#60a5fa', fontWeight: 'bold', marginBottom: '8px' }}
                                                        itemStyle={{ color: '#fff' }}
                                                    />
                                                    <Bar dataKey="active" stackId="a" fill="#22c55e" name="Active on Instagram" radius={[4, 4, 0, 0]} />
                                                    <Bar dataKey="inactive" stackId="a" fill="#6b7280" name="No Instagram Profile" radius={[4, 4, 0, 0]} />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>

                                        {/* Ward Statistics Table */}
                                        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                                            <h3 className="text-2xl font-black text-white mb-6">Detailed Ward Statistics</h3>
                                            <div className="overflow-x-auto">
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="border-b border-blue-500/20">
                                                            <th className="text-left py-4 px-4 text-sm font-bold text-blue-400">Ward</th>
                                                            <th className="text-center py-4 px-4 text-sm font-bold text-blue-400">Total Candidates</th>
                                                            <th className="text-center py-4 px-4 text-sm font-bold text-blue-400">Active Profiles</th>
                                                            <th className="text-center py-4 px-4 text-sm font-bold text-blue-400">Inactive</th>
                                                            <th className="text-center py-4 px-4 text-sm font-bold text-blue-400">Adoption Rate</th>
                                                            <th className="text-right py-4 px-4 text-sm font-bold text-blue-400">Performance</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {prabhagChartData.map((ward, idx) => (
                                                            <tr key={idx} className="border-b border-blue-500/10 hover:bg-white/5 transition-colors">
                                                                <td className="py-4 px-4 text-white font-bold">{ward.name}</td>
                                                                <td className="py-4 px-4 text-center text-white font-semibold">{ward.total}</td>
                                                                <td className="py-4 px-4 text-center text-green-400 font-semibold">{ward.active}</td>
                                                                <td className="py-4 px-4 text-center text-gray-400 font-semibold">{ward.inactive}</td>
                                                                <td className="py-4 px-4 text-center">
                                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${ward.percentage >= 75 ? 'bg-green-500/20 text-green-400' :
                                                                            ward.percentage >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                                                                                'bg-red-500/20 text-red-400'
                                                                        }`}>
                                                                        {ward.percentage}%
                                                                    </span>
                                                                </td>
                                                                <td className="py-4 px-4">
                                                                    <div className="flex items-center justify-end gap-2">
                                                                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                                                                            <div
                                                                                className={`h-full ${ward.percentage >= 75 ? 'bg-green-500' :
                                                                                        ward.percentage >= 50 ? 'bg-yellow-500' :
                                                                                            'bg-red-500'
                                                                                    }`}
                                                                                style={{ width: `${ward.percentage}%` }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'insights' && (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            {/* Digital Adoption Pie Chart */}
                                            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                                                <h3 className="text-xl font-black text-white mb-6">Digital Adoption Distribution</h3>
                                                <ResponsiveContainer width="100%" height={300}>
                                                    <PieChart>
                                                        <Pie
                                                            data={[
                                                                { name: 'Active on Instagram', value: currentData.activeProfiles, fill: '#22c55e' },
                                                                { name: 'No Instagram', value: currentData.totalCandidates - currentData.activeProfiles, fill: '#6b7280' }
                                                            ]}
                                                            cx="50%"
                                                            cy="50%"
                                                            labelLine={false}
                                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                                            outerRadius={100}
                                                            dataKey="value"
                                                        />
                                                        <Tooltip />
                                                    </PieChart>
                                                </ResponsiveContainer>
                                            </div>

                                            {/* Key Insights */}
                                            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
                                                <h3 className="text-xl font-black text-white mb-6">Key Performance Insights</h3>
                                                <div className="space-y-4">
                                                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                                        <div className="text-sm font-bold text-green-400 mb-1">Strong Digital Presence</div>
                                                        <div className="text-xs text-green-300">{overallStats.digitalAdoption}% of candidates are active on social media</div>
                                                    </div>
                                                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                                                        <div className="text-sm font-bold text-blue-400 mb-1">Average Reach</div>
                                                        <div className="text-xs text-blue-300">{overallStats.avgFollowers} followers per active profile</div>
                                                    </div>
                                                    <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                                                        <div className="text-sm font-bold text-purple-400 mb-1">Total Campaign Reach</div>
                                                        <div className="text-xs text-purple-300">{(currentData.totalFollowers / 1000).toFixed(0)}K+ combined followers across all profiles</div>
                                                    </div>
                                                    <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                                                        <div className="text-sm font-bold text-orange-400 mb-1">Ward Coverage</div>
                                                        <div className="text-xs text-orange-300">All 38 wards have candidate representation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-screen">
                            <div className="text-center">
                                <div className="text-6xl mb-4 text-blue-400">Select City & Party</div>
                                <p className="text-blue-200 text-xl">Choose from the sidebar to view detailed analytics</p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
