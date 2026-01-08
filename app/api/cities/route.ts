import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const cities = await prisma.city.findMany({
            include: {
                state: {
                    include: {
                        country: true
                    }
                },
                _count: {
                    select: {
                        wards: true
                    }
                }
            },
            orderBy: {
                name: 'asc'
            }
        })

        return NextResponse.json({
            success: true,
            data: cities
        })
    } catch (error) {
        console.error('Error fetching cities:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch cities' },
            { status: 500 }
        )
    }
}
