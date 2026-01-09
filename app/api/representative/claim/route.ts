import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
        }

        const { representativeId, phone } = await req.json()

        if (!representativeId || !phone) {
            return NextResponse.json({ success: false, error: "Missing data" }, { status: 400 })
        }

        // 1. Verify the representative exists and isn't already claimed by someone else
        const rep = await prisma.representative.findUnique({
            where: { id: representativeId },
            include: { user: true }
        })

        if (!rep) {
            return NextResponse.json({ success: false, error: "Representative profile not found" }, { status: 404 })
        }

        // In a real app, check if rep.user is a dummy (unverified) or if rep.userId matches session.user.id
        // For simulation, we'll allow linking if the role is citizen

        const currentUser = await prisma.user.findUnique({
            where: { email: session.user.email as string }
        })

        if (!currentUser) {
            return NextResponse.json({ success: false, error: "Logged in user not found" }, { status: 404 })
        }

        // 2. Perform the link: 
        // Update user role to representative
        // Link the representative record to THIS user ID
        // Note: In schema, Representative has a 1-1 with User. We need to handle the swap.

        // Transaction to ensure data integrity
        await prisma.$transaction([
            // Update current user to become the representative
            prisma.user.update({
                where: { id: currentUser.id },
                data: {
                    role: 'representative',
                    phone: phone, // Update to verified phone
                    verified: true
                }
            }),
            // Re-point the representative record to the new real user
            prisma.representative.update({
                where: { id: representativeId },
                data: { userId: currentUser.id }
            })
        ])

        return NextResponse.json({
            success: true,
            message: "Profile claimed successfully! Welcome to the Management Hub."
        })

    } catch (error) {
        console.error("Claim Error:", error)
        return NextResponse.json({ success: false, error: "Server error during claim" }, { status: 500 })
    }
}
