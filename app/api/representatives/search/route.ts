import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const query = searchParams.get('q') || ''
        const cityId = searchParams.get('cityId')

        if (!query || query.length < 2) {
            return NextResponse.json({ success: true, data: [] })
        }

        const representatives = await prisma.representative.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            { user: { name: { contains: query } } },
                            { party: { abbreviation: { contains: query } } },
                            { position: { contains: query } }
                        ]
                    },
                    cityId ? { ward: { cityId } } : {}
                ]
            },
            include: {
                user: {
                    select: { name: true, phone: true }
                },
                party: true,
                ward: true
            },
            take: 10
        })

        return NextResponse.json({
            success: true,
            data: representatives.map((r: any) => ({
                id: r.id,
                name: r.user.name,
                party: r.party.abbreviation,
                ward: r.ward.wardNumber,
                position: r.position,
                isVerified: r.verified
            }))
        })

    } catch (error) {
        console.error("Search Reps Error:", error)
        return NextResponse.json({ success: false, error: "Search failed" }, { status: 500 })
    }
}
