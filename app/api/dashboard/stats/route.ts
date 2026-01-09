import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
        }

        const user = await prisma.user.findUnique({
            where: { email: session.user.email as string },
            include: {
                representative: {
                    include: {
                        party: true,
                        ward: {
                            include: {
                                city: true
                            }
                        },
                        socialProfiles: true,
                        issueResponses: true
                    }
                }
            }
        })

        if (!user || !user.representative) {
            return NextResponse.json({ success: false, error: "Representative not found" }, { status: 404 })
        }

        const rep = user.representative
        const wardId = rep.wardId

        // 1. Fetch Ward Issues
        const pendingIssues = await prisma.issue.count({
            where: { wardId, status: 'pending' }
        })

        const criticalIssues = await prisma.issue.findMany({
            where: { wardId },
            include: { user: true, _count: { select: { issueUpvotes: true } } },
            orderBy: [{ upvotes: 'desc' }, { createdAt: 'desc' }],
            take: 3
        })

        // 2. Engagement Stats (Mocked or calculated from real upvotes/responses)
        const totalReach = rep.socialProfiles.reduce((sum: number, p: any) => sum + (p.followers || 0), 0)

        // 3. Resolution Rate
        const totalWardIssues = await prisma.issue.count({ where: { wardId } })
        const resolvedIssues = await prisma.issue.count({ where: { wardId, status: 'resolved' } })
        const resolutionRate = totalWardIssues > 0 ? Math.round((resolvedIssues / totalWardIssues) * 100) : 0

        return NextResponse.json({
            success: true,
            data: {
                rep: {
                    name: user.name,
                    party: rep.party.abbreviation,
                    ward: rep.ward.wardNumber,
                    cityName: rep.ward.city.name
                },
                stats: {
                    followers: totalReach,
                    pendingIssues,
                    resolutionRate,
                    totalReach
                },
                criticalIssues: criticalIssues.map((i: any) => ({
                    id: `#${i.id.substring(0, 4)}`,
                    realId: i.id,
                    title: i.title,
                    category: i.category,
                    priority: i.upvotes > 10 ? 'High' : 'Medium',
                    time: 'Recent'
                }))
            }
        })

    } catch (error) {
        console.error("Dashboard Stats Error:", error)
        return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 })
    }
}
