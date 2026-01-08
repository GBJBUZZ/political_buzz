"use client"

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function ChandrapurCongressPage() {
    const [activeTab, setActiveTab] = useState('dashboard')
    const [searchQuery, setSearchQuery] = useState('')

    // TODO: Replace with actual data from Chandrapur_INC_All_Candidates_with_Instagram.xlsx
    const data = [
        // Add your candidate data here
        // Example structure:
        // {
        //   name: "Candidate Name",
        //   ward: "Ward 1",
        //   instagram: "username",
        //   followers: 5000,
        //   status: "ACTIVE"
        // }
    ]

    const totalFollowers = data.reduce((sum, c) => sum + (c.followers || 0), 0)
    const activeProfiles = data.filter(c => c.status === 'ACTIVE').length

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-800 to-blue-600 border-b border-blue-500/30 sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Congress Hand Symbol */}
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <span className="text-4xl">✋</span>
                            </div>

                            <div>
                                <h1 className="text-3xl font-black text-white">CHANDRAPUR CONGRESS</h1>
                                <p className="text-sm text-blue-200 font-semibold">Social Media Analytics • Municipal Elections 2026</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <div className="text-sm text-blue-200 font-semibold">Total Reach</div>
                                <div className="text-3xl font-black text-white">{(totalFollowers / 1000).toFixed(0)}K+</div>
                            </div>
                            <div className="h-12 w-px bg-blue-400/30"></div>
                            <div className="text-right">
                                <div className="text-sm text-blue-200 font-semibold">Active</div>
                                <div className="text-3xl font-black text-green-400">{activeProfiles}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-t border-blue-500/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <nav className="flex gap-2 py-2">
                            {[
                                { id: 'dashboard', label: '📊 Dashboard' },
                                { id: 'candidates', label: '👥 Candidates' },
                                { id: 'wards', label: '🗺️ Wards' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === tab.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-blue-200 hover:bg-blue-700/50'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {activeTab === 'dashboard' && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">📊</div>
                        <h2 className="text-3xl font-black text-white mb-4">Chandrapur Congress Dashboard</h2>
                        <p className="text-blue-200 text-xl mb-8">
                            Data will be loaded from Chandrapur_INC_All_Candidates_with_Instagram.xlsx
                        </p>
                        <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                            <p className="text-white font-semibold mb-4">To complete this page:</p>
                            <ol className="text-left text-blue-200 space-y-2">
                                <li>1. Copy the Excel file to a simpler path</li>
                                <li>2. Convert to JSON or CSV</li>
                                <li>3. Update the data array in this component</li>
                            </ol>
                        </div>
                    </div>
                )}

                {activeTab === 'candidates' && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">👥</div>
                        <h2 className="text-3xl font-black text-white mb-4">Congress Candidates</h2>
                        <p className="text-blue-200">Candidate data will appear here</p>
                    </div>
                )}

                {activeTab === 'wards' && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🗺️</div>
                        <h2 className="text-3xl font-black text-white mb-4">Ward Analysis</h2>
                        <p className="text-blue-200">Ward-wise data will appear here</p>
                    </div>
                )}
            </main>
        </div>
    )
}
