"use client"

import { useEffect, useState } from "react"
import { Archive, CheckCircle2, Circle, Clock, MapPin, ThumbsUp } from "lucide-react"

export function WardFeed({ cityId, cityData }: { cityId: string, cityData?: any }) {
    const [issues, setIssues] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const fetchIssues = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/issues?cityId=${cityId}`)
            const data = await res.json()
            if (data.success) {
                setIssues(data.data)
            }
        } catch (e) { console.error(e) }
        finally { setLoading(false) }
    }

    useEffect(() => {
        fetchIssues()
    }, [cityId])

    // Expose refresh function to parent via ref if needed, or just auto-refresh
    useEffect(() => {
        const interval = setInterval(fetchIssues, 15000) // 15s refresh for feed
        return () => clearInterval(interval)
    }, [cityId])


    const [upvoting, setUpvoting] = useState<string | null>(null)

    const handleUpvote = async (issueId: string) => {
        setUpvoting(issueId)
        try {
            const res = await fetch(`/api/issues/${issueId}/upvote`, { method: 'POST' })
            if (res.ok) await fetchIssues()
        } catch (e) { console.error(e) }
        finally { setUpvoting(null) }
    }

    if (loading && issues.length === 0) return <div className="p-10 text-center text-gray-400 font-bold animate-pulse">Synchronizing Nagpur Ward Signals...</div>

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">Nagpur Community Pulse</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Live Civic Intelligence Hub</p>
                </div>
                <div className="px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{issues.length} Issues Active</span>
                </div>
            </div>

            {issues.length === 0 ? (
                <div className="bg-white rounded-[2.5rem] p-16 text-center border-2 border-dashed border-gray-100 shadow-sm">
                    <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                        <Archive className="h-8 w-8 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Ward Signal Silent</h3>
                    <p className="text-gray-500 text-sm font-medium max-w-[250px] mx-auto">Prabhag 1-38 are currently monitoring. Be the first to report an issue.</p>
                </div>
            ) : (
                issues.map(issue => (
                    <div key={issue.id} className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-50 flex items-center justify-center text-sm font-black text-gray-900 shadow-inner group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all">
                                    {issue.user?.name?.[0] || 'U'}
                                </div>
                                <div>
                                    <div className="text-sm font-black text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase">{issue.user?.name || 'Concerned Citizen'}</div>
                                    <div className="flex items-center gap-3 mt-1">
                                        <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                            <MapPin className="h-3 w-3 text-red-500" /> Ward {issue.ward?.wardNumber}
                                        </div>
                                        <div className="w-1 h-1 bg-gray-200 rounded-full" />
                                        <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                            <Clock className="h-3 w-3" /> {new Date(issue.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm ${issue.status === 'resolved' ? 'bg-green-500 text-white' :
                                    issue.status === 'pending' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                                }`}>
                                {issue.status}
                            </span>
                        </div>

                        <h4 className="text-lg font-black text-gray-900 mb-3 group-hover:translate-x-1 transition-transform">{issue.title}</h4>
                        <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed line-clamp-2">{issue.description}</p>

                        <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                            <button
                                onClick={() => handleUpvote(issue.id)}
                                disabled={upvoting === issue.id}
                                className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-xs font-black transition-all ${issue.issueUpvotes?.length > 0 || (issue.upvotes > 0)
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                <ThumbsUp className={`h-4 w-4 ${upvoting === issue.id ? 'animate-bounce' : ''}`} />
                                {issue.upvotes || 0} SUPPORT THIS
                            </button>

                            <div className="flex items-center gap-3 text-xs font-black text-gray-400 uppercase tracking-widest">
                                <div className="flex -space-x-2">
                                    {[1, 2].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-100" />)}
                                </div>
                                {issue._count?.responses || 0} Responses
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
