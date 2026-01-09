import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
        }

        const issueId = params.id
        const { content, status } = await req.json()

        const user = await prisma.user.findUnique({
            where: { email: session.user.email as string },
            include: { representative: true }
        })

        if (!user || !user.representative) {
            return NextResponse.json({ success: false, error: "Only representatives can respond" }, { status: 403 })
        }

        // Create response and Update issue status in a transaction
        await prisma.$transaction([
            prisma.issueResponse.create({
                data: {
                    content,
                    issueId,
                    representativeId: user.representative.id
                }
            }),
            prisma.issue.update({
                where: { id: issueId },
                data: { status }
            })
        ])

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error("Response Error:", error)
        return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 })
    }
}
