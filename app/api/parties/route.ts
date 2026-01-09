import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const parties = await prisma.party.findMany({
            include: {
                _count: {
                    select: {
                        representatives: true
                    }
                }
            }
        })

        // Sort parties: BJP first, then INC, then others alphabetically
        const sortedParties = parties.sort((a: any, b: any) => {
            const priority: any = {
                'BJP': 1,
                'INC': 2
            }

            const aPriority = priority[a.abbreviation] || 999
            const bPriority = priority[b.abbreviation] || 999

            if (aPriority !== bPriority) {
                return aPriority - bPriority
            }

            // If same priority (both are "others"), sort alphabetically
            return a.name.localeCompare(b.name)
        })

        return NextResponse.json({
            success: true,
            data: sortedParties
        })
    } catch (error) {
        console.error('Error fetching parties:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch parties' },
            { status: 500 }
        )
    }
}
