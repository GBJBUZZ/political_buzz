import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const wards = await prisma.ward.findMany({
            where: {
                cityId: params.id
            },
            orderBy: {
                wardNumber: 'asc'
            },
            include: {
                _count: {
                    select: {
                        representatives: true,
                        issues: true
                    }
                }
            }
        })

        return NextResponse.json({
            success: true,
            data: wards
        })
    } catch (error) {
        console.error('Error fetching wards:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch wards' },
            { status: 500 }
        )
    }
}
