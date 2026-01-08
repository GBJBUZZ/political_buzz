import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const parties = await prisma.party.findMany({
            orderBy: {
                name: 'asc'
            },
            include: {
                _count: {
                    select: {
                        representatives: true
                    }
                }
            }
        })

        return NextResponse.json({
            success: true,
            data: parties
        })
    } catch (error) {
        console.error('Error fetching parties:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch parties' },
            { status: 500 }
        )
    }
}
