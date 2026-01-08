import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type') // 'city', 'ward', 'party'
        const id = searchParams.get('id')

        if (!type || !id) {
            return NextResponse.json(
                { success: false, error: 'Missing type or id parameter' },
                { status: 400 }
            )
        }

        let analytics: any = {}

        if (type === 'city') {
            // City-level analytics
            const city = await prisma.city.findUnique({
                where: { id },
                include: {
                    wards: {
                        include: {
                            representatives: {
                                include: {
                                    party: true,
                                    socialProfiles: true
                                }
                            },
                            issues: true
                        }
                    }
                }
            })

            if (!city) {
                return NextResponse.json(
                    { success: false, error: 'City not found' },
                    { status: 404 }
                )
            }

            const totalRepresentatives = city.wards.reduce((sum, ward) => sum + ward.representatives.length, 0)
            const activeProfiles = city.wards.reduce((sum, ward) =>
                sum + ward.representatives.filter(rep => rep.socialProfiles.length > 0).length, 0
            )
            const totalFollowers = city.wards.reduce((sum, ward) =>
                sum + ward.representatives.reduce((repSum, rep) =>
                    repSum + rep.socialProfiles.reduce((profSum, prof) => profSum + (prof.followers || 0), 0), 0
                ), 0
            )
            const totalIssues = city.wards.reduce((sum, ward) => sum + ward.issues.length, 0)

            // Party breakdown
            const partyBreakdown: any = {}
            city.wards.forEach(ward => {
                ward.representatives.forEach(rep => {
                    const partyName = rep.party.abbreviation
                    if (!partyBreakdown[partyName]) {
                        partyBreakdown[partyName] = {
                            name: rep.party.name,
                            abbreviation: partyName,
                            count: 0,
                            activeProfiles: 0,
                            totalFollowers: 0
                        }
                    }
                    partyBreakdown[partyName].count++
                    if (rep.socialProfiles.length > 0) {
                        partyBreakdown[partyName].activeProfiles++
                    }
                    partyBreakdown[partyName].totalFollowers += rep.socialProfiles.reduce((sum, prof) => sum + (prof.followers || 0), 0)
                })
            })

            analytics = {
                totalWards: city.wards.length,
                totalRepresentatives,
                activeProfiles,
                totalFollowers,
                totalIssues,
                digitalAdoption: totalRepresentatives > 0 ? Math.round((activeProfiles / totalRepresentatives) * 100) : 0,
                avgFollowers: activeProfiles > 0 ? Math.round(totalFollowers / activeProfiles) : 0,
                partyBreakdown: Object.values(partyBreakdown)
            }
        } else if (type === 'ward') {
            // Ward-level analytics
            const ward = await prisma.ward.findUnique({
                where: { id },
                include: {
                    representatives: {
                        include: {
                            party: true,
                            socialProfiles: true,
                            issueResponses: true
                        }
                    },
                    issues: {
                        include: {
                            _count: {
                                select: {
                                    issueUpvotes: true
                                }
                            }
                        }
                    }
                }
            })

            if (!ward) {
                return NextResponse.json(
                    { success: false, error: 'Ward not found' },
                    { status: 404 }
                )
            }

            const totalRepresentatives = ward.representatives.length
            const activeProfiles = ward.representatives.filter(rep => rep.socialProfiles.length > 0).length
            const totalFollowers = ward.representatives.reduce((sum, rep) =>
                sum + rep.socialProfiles.reduce((profSum, prof) => profSum + (prof.followers || 0), 0), 0
            )

            // Issue statistics
            const issuesByCategory: any = {}
            const issuesByStatus: any = {}
            ward.issues.forEach(issue => {
                issuesByCategory[issue.category] = (issuesByCategory[issue.category] || 0) + 1
                issuesByStatus[issue.status] = (issuesByStatus[issue.status] || 0) + 1
            })

            analytics = {
                wardNumber: ward.wardNumber,
                wardName: ward.name,
                population: ward.population,
                totalRepresentatives,
                activeProfiles,
                totalFollowers,
                totalIssues: ward.issues.length,
                digitalAdoption: totalRepresentatives > 0 ? Math.round((activeProfiles / totalRepresentatives) * 100) : 0,
                issuesByCategory,
                issuesByStatus,
                totalResponses: ward.representatives.reduce((sum, rep) => sum + rep.issueResponses.length, 0)
            }
        } else if (type === 'party') {
            // Party-level analytics
            const party = await prisma.party.findUnique({
                where: { id },
                include: {
                    representatives: {
                        include: {
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

            if (!party) {
                return NextResponse.json(
                    { success: false, error: 'Party not found' },
                    { status: 404 }
                )
            }

            const totalRepresentatives = party.representatives.length
            const activeProfiles = party.representatives.filter(rep => rep.socialProfiles.length > 0).length
            const totalFollowers = party.representatives.reduce((sum, rep) =>
                sum + rep.socialProfiles.reduce((profSum, prof) => profSum + (prof.followers || 0), 0), 0
            )

            // City breakdown
            const cityBreakdown: any = {}
            party.representatives.forEach(rep => {
                const cityName = rep.ward.city.name
                if (!cityBreakdown[cityName]) {
                    cityBreakdown[cityName] = {
                        name: cityName,
                        count: 0,
                        activeProfiles: 0
                    }
                }
                cityBreakdown[cityName].count++
                if (rep.socialProfiles.length > 0) {
                    cityBreakdown[cityName].activeProfiles++
                }
            })

            analytics = {
                partyName: party.name,
                abbreviation: party.abbreviation,
                totalRepresentatives,
                activeProfiles,
                totalFollowers,
                digitalAdoption: totalRepresentatives > 0 ? Math.round((activeProfiles / totalRepresentatives) * 100) : 0,
                avgFollowers: activeProfiles > 0 ? Math.round(totalFollowers / activeProfiles) : 0,
                totalResponses: party.representatives.reduce((sum, rep) => sum + rep.issueResponses.length, 0),
                cityBreakdown: Object.values(cityBreakdown)
            }
        }

        return NextResponse.json({
            success: true,
            data: analytics
        })
    } catch (error) {
        console.error('Error fetching analytics:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch analytics' },
            { status: 500 }
        )
    }
}
