import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET: List all representatives awaiting verification
export async function GET() {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user || (session.user as any).role !== 'admin') {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
        }

        const pending = await prisma.representative.findMany({
            where: { verified: false },
            include: {
                user: true,
                party: true,
                ward: {
                    include: { city: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        })

        return NextResponse.json({ success: true, data: pending })

    } catch (error) {
        console.error("Verification List Error:", error)
        return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 })
    }
}

// POST: Approve or Reject a verification request
export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user || (session.user as any).role !== 'admin') {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
        }

        const { repId, action } = await req.json() // action: 'approve' | 'reject'

        if (action === 'approve') {
            await prisma.representative.update({
                where: { id: repId },
                data: { verified: true }
            })
        } else if (action === 'reject') {
            // Unlink the user from the representative record
            // but we keep the representative record (it might be a real person waiting for the right claim)
            // This is a simplified "Reset"
            const rep = await prisma.representative.findUnique({
                where: { id: repId }
            })

            if (rep) {
                // We'd ideally revert the User role to 'citizen' if they don't have other claims
                await prisma.user.update({
                    where: { id: rep.userId },
                    data: { role: 'citizen' }
                })
            }
        }

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error("Verification Action Error:", error)
        return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 })
    }
}
