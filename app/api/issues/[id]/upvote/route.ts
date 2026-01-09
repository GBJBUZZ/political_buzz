import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const issueId = params.id

        // In a real app, get userId from session (NextAuth)
        // For demonstration, we'll use the 'Concerned Citizen' from the seed/api
        const guest = await prisma.user.findFirst({ where: { phone: '9999999999' } })

        if (!guest) {
            return NextResponse.json({ success: false, error: "System Error" }, { status: 500 })
        }

        // Add or Remove upvote (Toggle logic)
        const existing = await prisma.issueUpvote.findUnique({
            where: {
                issueId_userId: {
                    issueId,
                    userId: guest.id
                }
            }
        })

        if (existing) {
            await prisma.issueUpvote.delete({
                where: { id: existing.id }
            })
            // Decrement Issue total
            await prisma.issue.update({
                where: { id: issueId },
                data: { upvotes: { decrement: 1 } }
            })
            return NextResponse.json({ success: true, action: 'removed' })
        } else {
            await prisma.issueUpvote.create({
                data: {
                    issueId,
                    userId: guest.id
                }
            })
            // Increment Issue total
            await prisma.issue.update({
                where: { id: issueId },
                data: { upvotes: { increment: 1 } }
            })
            return NextResponse.json({ success: true, action: 'added' })
        }

    } catch (error) {
        console.error("Upvote Error:", error)
        return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 })
    }
}
