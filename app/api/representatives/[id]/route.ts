import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const representative = await prisma.representative.findUnique({
            where: {
                id: params.id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        phone: true
                    }
                },
                party: true,
                ward: {
                    include: {
                        city: {
                            include: {
                                state: true
                            }
                        }
                    }
                },
                socialProfiles: true,
                issueResponses: {
                    include: {
                        issue: {
                            select: {
                                title: true,
                                category: true,
                                status: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 10
                }
            }
        })

        if (!representative) {
            return NextResponse.json(
                { success: false, error: 'Representative not found' },
                { status: 404 }
            )
        }

        // Calculate performance metrics
        const totalFollowers = representative.socialProfiles.reduce((sum, profile) => sum + (profile.followers || 0), 0)
        const responseRate = representative.issueResponses.length

        const analytics = {
            totalFollowers,
            socialProfileCount: representative.socialProfiles.length,
            responseCount: representative.issueResponses.length,
            responseRate,
            platforms: representative.socialProfiles.map(p => p.platform)
        }

        return NextResponse.json({
            success: true,
            data: {
                ...representative,
                analytics
            }
        })
    } catch (error) {
        console.error('Error fetching representative:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch representative' },
            { status: 500 }
        )
    }
}
