"use client"

import { useState } from 'react'
import { MapPin, AlertCircle, TrendingUp, Users, Info } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
    Tooltip as ReTooltip,
    ResponsiveContainer,
    Treemap,
    Cell
} from 'recharts'

type WardStat = {
    id: string
    number: number
    name: string
    issues: number
    reach: number
    resolutionRate: number
    dominantParty: string
}

export function WardHeatmap({ data }: { data: WardStat[] }) {
    const [view, setView] = useState<'issues' | 'reach' | 'resolution'>('issues')
    const [hoveredWard, setHoveredWard] = useState<WardStat | null>(null)

    if (!data || data.length === 0) return null

    // Sort by ward number to keep grid consistent
    const sortedData = [...data].sort((a, b) => a.number - b.number)

    const getIntensity = (ward: WardStat) => {
        if (view === 'issues') {
            // Scale: 0-20 issues
            const intensity = Math.min(ward.issues / 20, 1)
            return `rgba(239, 68, 68, ${0.1 + intensity * 0.9})` // Red
        }
        if (view === 'reach') {
            // Scale: 0-10k reach
            const intensity = Math.min(ward.reach / 10000, 1)
            return `rgba(147, 51, 234, ${0.1 + intensity * 0.9})` // Purple
        }
        // Resolution Rate: 0-100%
        const intensity = ward.resolutionRate / 100
        return `rgba(34, 197, 94, ${0.1 + intensity * 0.9})` // Green
    }

    const getPartyColor = (abbrev: string) => {
        const colors: any = {
            'BJP': 'bg-orange-500',
            'INC': 'bg-blue-500',
            'SHS': 'bg-orange-400',
            'NCP': 'bg-teal-500',
            'AAP': 'bg-blue-400',
            'NONE': 'bg-gray-300'
        }
        return colors[abbrev] || 'bg-gray-400'
    }

    return (
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-red-500" />
                        Nagpur Ward Intelligence
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Live Civic Heatmap across 38 Prabhags</p>
                </div>

                <div className="flex gap-2 bg-gray-200/50 p-1 rounded-xl">
                    {(['issues', 'reach', 'resolution'] as const).map((v) => (
                        <button
                            key={v}
                            onClick={() => setView(v)}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${view === v ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {v}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 p-6 grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* The Grid Heatmap */}
                <div className="xl:col-span-8 flex flex-col">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                        {sortedData.map((ward) => (
                            <div
                                key={ward.id}
                                onMouseEnter={() => setHoveredWard(ward)}
                                className="aspect-square rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-110 hover:z-10 relative group"
                                style={{ backgroundColor: getIntensity(ward) }}
                            >
                                <span className={`text-[10px] font-black ${(view === 'issues' && ward.issues > 10) ||
                                        (view === 'reach' && ward.reach > 5000) ||
                                        (view === 'resolution' && ward.resolutionRate > 50)
                                        ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    W{ward.number}
                                </span>

                                {/* Dominant Party Indicator */}
                                <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white shadow-sm ${getPartyColor(ward.dominantParty)}`} title={ward.dominantParty} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded bg-red-100" /> <span>Low Intensity</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded bg-red-600" /> <span>High Intensity</span>
                            </div>
                        </div>
                        <div>Source: NMC Public Records 2026</div>
                    </div>
                </div>

                {/* Ward Inspector Sidebar */}
                <div className="xl:col-span-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    {hoveredWard ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <Badge className="bg-white text-gray-900 border-gray-200 mb-2 font-black text-[10px]">WARD {hoveredWard.number}</Badge>
                                <h4 className="text-xl font-black text-gray-900 leading-tight">{hoveredWard.name}</h4>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Reports</div>
                                    <div className="text-xl font-black text-red-600">{hoveredWard.issues}</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Reach</div>
                                    <div className="text-xl font-black text-purple-600">{(hoveredWard.reach / 1000).toFixed(1)}k</div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="h-4 w-4 text-green-500" />
                                        <span className="text-xs font-bold text-gray-600">Resolution Rate</span>
                                    </div>
                                    <span className="text-xs font-black text-gray-900">{hoveredWard.resolutionRate}%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-blue-500" />
                                        <span className="text-xs font-bold text-gray-600">Dominant Party</span>
                                    </div>
                                    <Badge className={`${getPartyColor(hoveredWard.dominantParty)} text-white border-none font-black text-[9px]`}>
                                        {hoveredWard.dominantParty}
                                    </Badge>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-4 flex gap-3 items-start">
                                <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                                <p className="text-[10px] font-bold text-blue-700 leading-relaxed uppercase">
                                    Citizens in Ward {hoveredWard.number} are primarily concerned with {hoveredWard.issues > 10 ? 'Infrastructure' : 'Civic'} issues.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-50 grayscale">
                            <MapPin className="h-12 w-12 text-gray-400 mb-4" />
                            <p className="text-sm font-black text-gray-500 uppercase tracking-widest">Hover over a Ward<br />to inspect intelligence</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
