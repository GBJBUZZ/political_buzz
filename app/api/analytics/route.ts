import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type') // 'city', 'ward', 'party'
        const id = searchParams.get('id')
        const partyId = searchParams.get('partyId') // NEW: Filter by party

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

            // Filter representatives by party if partyId is provided
            let allRepresentatives: any[] = []
            city.wards.forEach((ward: any) => {
                const filteredReps = partyId
                    ? ward.representatives.filter((rep: any) => rep.partyId === partyId)
                    : ward.representatives
                allRepresentatives.push(...filteredReps)
            })

            const totalRepresentatives = allRepresentatives.length
            const activeProfiles = allRepresentatives.filter((rep: any) => rep.socialProfiles.length > 0).length
            const totalFollowers = allRepresentatives.reduce((sum: number, rep: any) =>
                sum + rep.socialProfiles.reduce((profSum: number, prof: any) => profSum + (prof.followers || 0), 0), 0
            )

            // For party-specific view, only count issues in wards where the party has representatives
            const relevantWards = partyId
                ? city.wards.filter((ward: any) => ward.representatives.some((rep: any) => rep.partyId === partyId))
                : city.wards
            const totalIssues = relevantWards.reduce((sum: number, ward: any) => sum + ward.issues.length, 0)

            // Party breakdown
            const partyBreakdown: any = {}
            allRepresentatives.forEach((rep: any) => {
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
                partyBreakdown[partyName].totalFollowers += rep.socialProfiles.reduce((sum: number, prof: any) => sum + (prof.followers || 0), 0)
            })

            // Ward breakdown for Heatmap
            const wardBreakdown = city.wards.map((ward: any) => {
                const wardReps = partyId
                    ? ward.representatives.filter((rep: any) => rep.partyId === partyId)
                    : ward.representatives

                const wardReach = wardReps.reduce((sum: number, rep: any) =>
                    sum + rep.socialProfiles.reduce((pSum: number, p: any) => pSum + (p.followers || 0), 0), 0
                )

                const resolvedCount = ward.issues.filter((i: any) => i.status === 'resolved').length
                const resolutionRate = ward.issues.length > 0 ? Math.round((resolvedCount / ward.issues.length) * 100) : 0

                // Dominant party (by reach)
                const partyReach: any = {}
                ward.representatives.forEach((rep: any) => {
                    const abbrev = rep.party.abbreviation
                    const reach = rep.socialProfiles.reduce((pSum: number, p: any) => pSum + (p.followers || 0), 0)
                    partyReach[abbrev] = (partyReach[abbrev] || 0) + reach
                })
                const dominantParty = Object.entries(partyReach).sort((a: any, b: any) => b[1] - a[1])[0]?.[0] || 'NONE'

                return {
                    id: ward.id,
                    number: ward.wardNumber,
                    name: ward.name,
                    issues: ward.issues.length,
                    reach: wardReach,
                    resolutionRate,
                    dominantParty
                }
            })

            analytics = {
                totalWards: city.wards.length,
                totalRepresentatives,
                activeProfiles,
                totalFollowers,
                totalIssues,
                digitalAdoption: totalRepresentatives > 0 ? Math.round((activeProfiles / totalRepresentatives) * 100) : 0,
                avgFollowers: activeProfiles > 0 ? Math.round(totalFollowers / activeProfiles) : 0,
                partyBreakdown: Object.values(partyBreakdown),
                wardBreakdown,
                filteredParty: partyId ? allRepresentatives[0]?.party?.abbreviation : null // Include party name if filtered
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
            const activeProfiles = ward.representatives.filter((rep: any) => rep.socialProfiles.length > 0).length
            const totalFollowers = ward.representatives.reduce((sum: number, rep: any) =>
                sum + rep.socialProfiles.reduce((profSum: number, prof: any) => profSum + (prof.followers || 0), 0), 0
            )

            // Issue statistics
            const issuesByCategory: any = {}
            const issuesByStatus: any = {}
            ward.issues.forEach((issue: any) => {
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
                totalResponses: ward.representatives.reduce((sum: number, rep: any) => sum + rep.issueResponses.length, 0)
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
            const activeProfiles = party.representatives.filter((rep: any) => rep.socialProfiles.length > 0).length
            const totalFollowers = party.representatives.reduce((sum: number, rep: any) =>
                sum + rep.socialProfiles.reduce((profSum: number, prof: any) => profSum + (prof.followers || 0), 0), 0
            )

            // City breakdown
            const cityBreakdown: any = {}
            party.representatives.forEach((rep: any) => {
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
                totalResponses: party.representatives.reduce((sum: number, rep: any) => sum + rep.issueResponses.length, 0),
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
