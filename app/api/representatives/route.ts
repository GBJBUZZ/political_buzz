import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const cityId = searchParams.get('cityId')
        const wardId = searchParams.get('wardId')
        const partyId = searchParams.get('partyId')

        const where: any = {
            verified: true
        }

        if (wardId) {
            where.wardId = wardId
        } else if (cityId) {
            where.ward = {
                cityId: cityId
            }
        }

        if (partyId) {
            where.partyId = partyId
        }

        const representatives = await prisma.representative.findMany({
            where,
            include: {
                user: {
                    select: {
                        name: true,
                        phone: true
                    }
                },
                party: true,
                ward: {
                    include: {
                        city: true
                    }
                },
                socialProfiles: true,
                _count: {
                    select: {
                        issueResponses: true
                    }
                }
            },
            orderBy: {
                ward: {
                    wardNumber: 'asc'
                }
            }
        })

        // Calculate analytics for each representative
        const representativesWithAnalytics = representatives.map((rep: any) => {
            const totalFollowers = rep.socialProfiles.reduce((sum: number, profile: any) => sum + (profile.followers || 0), 0)
            const hasInstagram = rep.socialProfiles.some((p: any) => p.platform === 'instagram')

            return {
                ...rep,
                analytics: {
                    totalFollowers,
                    hasInstagram,
                    responseCount: rep._count.issueResponses,
                    socialProfileCount: rep.socialProfiles.length
                }
            }
        })

        return NextResponse.json({
            success: true,
            data: representativesWithAnalytics,
            count: representativesWithAnalytics.length
        })
    } catch (error) {
        console.error('Error fetching representatives:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch representatives' },
            { status: 500 }
        )
    }
}
