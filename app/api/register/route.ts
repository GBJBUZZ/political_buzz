import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
    try {
        const { name, email, phone, password, role } = await req.json()

        if (!email || !password || !name) {
            return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
        }

        // Check if user already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { phone }
                ]
            }
        })

        if (existingUser) {
            return NextResponse.json({ success: false, error: "User with this email or phone already exists" }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                role: role || 'citizen',
                verified: false // Needs separate verification after signup (usually OTP)
            }
        })

        return NextResponse.json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        }, { status: 201 })

    } catch (error: any) {
        console.error("Registration Error:", error)
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 })
    }
}
