import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const cityId = searchParams.get('cityId')

        if (!cityId) {
            return NextResponse.json({ success: false, error: 'City ID required' }, { status: 400 })
        }

        // Get trending wards based on issue counts
        const wards = await prisma.ward.findMany({
            where: { cityId },
            include: {
                _count: {
                    select: { issues: true }
                },
                issues: {
                    take: 1,
                    orderBy: { createdAt: 'desc' },
                    select: { title: true }
                }
            },
            orderBy: {
                issues: { _count: 'desc' }
            },
            take: 5
        })

        const trending = wards.map((w: any) => ({
            ward: `Ward ${w.wardNumber}`,
            title: w.issues[0]?.title || 'Recent Activity',
            votes: w._count.issues * 12 + Math.floor(Math.random() * 5), // Simulating "Citizen alerts/votes" for now
            count: w._count.issues
        })).filter((t: any) => t.count > 0)

        // If no issues, return mock based on wards but label it as active
        if (trending.length === 0) {
            const allWards = await prisma.ward.findMany({ where: { cityId }, take: 3 })
            return NextResponse.json({
                success: true,
                data: allWards.map((w: any) => ({
                    ward: `Ward ${w.wardNumber}`,
                    title: 'Active Governance',
                    votes: 12,
                    count: 1
                }))
            })
        }

        return NextResponse.json({ success: true, data: trending })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 })
    }
}
