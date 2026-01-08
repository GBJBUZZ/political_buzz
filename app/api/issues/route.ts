import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const wardId = searchParams.get('wardId');
        const cityId = searchParams.get('cityId');

        const issues = await prisma.issue.findMany({
            where: {
                ...(wardId && { wardId }),
                ...(cityId && { ward: { cityId } }) // Filter by city if ward not specific
            },
            include: {
                ward: { select: { name: true, wardNumber: true } },
                user: { select: { name: true, verified: true } },
                _count: { select: { responses: true, issueUpvotes: true } }
            },
            orderBy: { createdAt: 'desc' },
            take: 50
        });

        return NextResponse.json({ success: true, data: issues });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch issues' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, category, wardId, mediaUrls, userId } = body; // userId passed from frontend for now (mock auth)

        // Validate
        if (!title || !description || !wardId || !category) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Usually we get userId from session (NextAuth). For now we might need to create a dummy user or expect one.
        // If no userId, create a "Guest Citizen" for the demo.
        let targetUserId = userId;
        if (!targetUserId) {
            const guest = await prisma.user.upsert({
                where: { phone: '9999999999' },
                create: { phone: '9999999999', name: 'Concened Citizen', role: 'citizen' },
                update: {}
            });
            targetUserId = guest.id;
        }

        const issue = await prisma.issue.create({
            data: {
                title,
                description,
                category,
                wardId,
                mediaUrls: mediaUrls || '', // Comma separated string
                userId: targetUserId,
                status: 'pending'
            }
        });

        return NextResponse.json({ success: true, data: issue });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to create issue' }, { status: 500 });
    }
}
