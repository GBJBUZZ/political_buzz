import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user || (session.user as any).role !== 'admin') {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
        }

        // 1. Core Platform Stats
        const totalReps = await prisma.representative.count()
        const pendingVerifications = await prisma.representative.count({ where: { verified: false } })
        const totalFollowers = await prisma.socialProfile.aggregate({
            _sum: { followers: true }
        })
        const totalIssues = await prisma.issue.count()
        const pendingIssues = await prisma.issue.count({ where: { status: 'pending' } })

        // 2. Party Breakdown
        const parties = await prisma.party.findMany({
            include: {
                _count: { select: { representatives: true } },
                representatives: {
                    include: { socialProfiles: true }
                }
            }
        })

        const partyStats = parties.map((p: any) => {
            const reach = p.representatives.reduce((sum: number, r: any) =>
                sum + r.socialProfiles.reduce((pSum: number, pr: any) => pSum + (pr.followers || 0), 0), 0
            )
            return {
                name: p.abbreviation,
                candidates: p._count.representatives,
                reach
            }
        })

        // 3. Recent Activites (Simulated or real)
        const recentIssues = await prisma.issue.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { user: true, ward: true }
        })

        return NextResponse.json({
            success: true,
            data: {
                stats: {
                    totalReps,
                    pendingVerifications,
                    totalReach: totalFollowers._sum.followers || 0,
                    totalIssues,
                    pendingIssues
                },
                partyStats,
                recentIssues: recentIssues.map((i: any) => ({
                    id: i.id,
                    title: i.title,
                    user: i.user.name,
                    ward: i.ward.wardNumber,
                    time: 'Just now'
                }))
            }
        })

    } catch (error) {
        console.error("Admin Stats Error:", error)
        return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 })
    }
}
