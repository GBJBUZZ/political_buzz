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


    if (loading && issues.length === 0) return <div className="p-10 text-center text-gray-500">Loading community issues...</div>

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Ward Community</h3>
                <span className="text-sm text-gray-500">{issues.length} active discussions</span>
            </div>

            {issues.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center border border-dashed border-gray-300">
                    <Archive className="h-10 w-10 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">No issues reported yet</h3>
                    <p className="text-gray-500 text-sm mt-1">Be the first to report a problem in your ward.</p>
                </div>
            ) : (
                issues.map(issue => (
                    <div key={issue.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                    {issue.user?.name?.[0] || 'U'}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">{issue.user?.name || 'Anonymous Citizen'}</div>
                                    <div className="text-xs text-gray-500 flex items-center gap-1">
                                        Ward {issue.ward?.wardNumber} • {new Date(issue.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${issue.status === 'resolved' ? 'bg-green-100 text-green-700' :
                                    issue.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                {issue.status}
                            </span>
                        </div>

                        <h4 className="font-bold text-gray-900 mb-2">{issue.title}</h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{issue.description}</p>

                        <div className="flex items-center gap-4 border-t border-gray-50 pt-3">
                            <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors">
                                <ThumbsUp className="h-3.5 w-3.5" />
                                {issue._count?.issueUpvotes || 0} Supports
                            </button>
                            <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                                <Clock className="h-3.5 w-3.5" />
                                Pending Action
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}
