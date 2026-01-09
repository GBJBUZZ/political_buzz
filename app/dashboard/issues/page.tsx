"use client"

import { useState, useEffect } from 'react'
import {
    MessageSquare,
    Search,
    Filter,
    Clock,
    MapPin,
    CheckCircle2,
    AlertCircle,
    MoreVertical,
    Send,
    ArrowRight
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function IssuesManagementPage() {
    const [filter, setFilter] = useState('all')
    const [issues, setIssues] = useState<any[]>([])
    const [selectedIssue, setSelectedIssue] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [response, setResponse] = useState('')

    const fetchIssues = async () => {
        setLoading(true)
        try {
            // In a better API we'd filter by Ward in the backend, but for demo:
            const res = await fetch('/api/issues')
            const data = await res.json()
            if (data.success) {
                setIssues(data.data)
                if (data.data.length > 0) setSelectedIssue(data.data[0])
            }
        } catch (e) { console.error(e) }
        finally { setLoading(false) }
    }

    useEffect(() => {
        fetchIssues()
    }, [])

    const handleAction = async (newStatus: string) => {
        if (!selectedIssue) return
        try {
            // Need a Status Update API or put it in Respond context
            const res = await fetch(`/api/issues/${selectedIssue.id}/respond`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: response, status: newStatus })
            })
            if (res.ok) {
                setResponse('')
                fetchIssues()
            }
        } catch (e) { console.error(e) }
    }

    if (loading) return <div className="p-20 text-center font-black animate-pulse text-slate-400">Loading Ward Reports...</div>

    const filteredIssues = issues.filter(i => filter === 'all' || i.status === filter)

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Ward Issues</h1>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">Manage and respond to citizen reports in your ward</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search issues..." className="pl-10 h-11 rounded-xl border-slate-200" />
                    </div>
                </div>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit">
                {['All', 'Pending', 'In Progress', 'Resolved'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setFilter(tab.toLowerCase())}
                        className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${filter === tab.toLowerCase() ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        {tab.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Issues List */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Master List */}
                <div className="xl:col-span-4 space-y-4">
                    {filteredIssues.map((issue) => (
                        <div key={issue.id}
                            onClick={() => setSelectedIssue(issue)}
                            className={`p-6 rounded-[2rem] border transition-all cursor-pointer group ${selectedIssue?.id === issue.id ? 'bg-white border-blue-200 shadow-xl shadow-blue-500/10' : 'bg-white border-slate-100 hover:border-slate-200 opacity-60'
                                }`}>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">#{issue.id.substring(0, 4)} • {issue.category}</span>
                                <Badge variant="outline" className={`text-[8px] font-black uppercase border-none ${issue.status === 'pending' ? 'bg-red-50 text-red-600' :
                                    issue.status === 'resolved' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                    {issue.status}
                                </Badge>
                            </div>
                            <h3 className="font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">{issue.title}</h3>
                            <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed font-medium">{issue.description}</p>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold">{issue.user?.name?.[0]}</div>
                                    <span className="text-[10px] font-bold text-slate-600">{issue.user?.name}</span>
                                </div>
                                <div className="flex items-center gap-1 text-slate-400">
                                    <Clock className="h-3 w-3" />
                                    <span className="text-[10px] font-bold">{new Date(issue.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Response Detail / Action Pane */}
                {selectedIssue ? (
                    <div className="xl:col-span-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">{selectedIssue.title}</h2>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-blue-600" />
                                            <span className="text-sm font-bold text-slate-600">Ward {selectedIssue.ward?.wardNumber || 'X'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <AlertCircle className="h-4 w-4" />
                                            <span className="text-sm font-bold">{selectedIssue.upvotes || 0} Citizen Supports</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    "{selectedIssue.description}"
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 p-8 space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <MessageSquare className="h-5 w-5 text-blue-600" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-black text-slate-900">Official Action Hub</p>
                                    <p className="text-xs text-slate-500 font-medium">Post your official response and update issue status.</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <textarea
                                    value={response}
                                    onChange={(e) => setResponse(e.target.value)}
                                    className="w-full min-h-[150px] bg-slate-50 rounded-3xl border border-slate-200 p-6 text-sm font-medium focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                                    placeholder="Write your response as a representative..."
                                />

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <Button variant="ghost" onClick={() => handleAction('in-progress')} className="bg-slate-100 text-slate-600 border-none px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-red-100 hover:text-red-600 transition-colors uppercase text-[9px]">IN-PROGRESS</Button>
                                        <Button variant="ghost" onClick={() => handleAction('resolved')} className="bg-slate-100 text-slate-600 border-none px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-green-100 hover:text-green-600 transition-colors uppercase text-[9px]">SOLVED</Button>
                                    </div>
                                    <Button onClick={() => handleAction(selectedIssue.status)} className="bg-blue-600 hover:bg-blue-700 h-12 px-8 rounded-xl font-black flex items-center gap-2 shadow-xl shadow-blue-500/20">
                                        POST UPDATE <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Responses are publicly displayed on the Ward Feed</p>
                        </div>
                    </div>
                ) : (
                    <div className="xl:col-span-8 flex items-center justify-center text-slate-400 font-bold">Select an issue to manage</div>
                )}
            </div>
        </div>
    )
}
