import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Searching for Hrushikesh or Bunty...')

    // Find User
    const users = await prisma.user.findMany({
        where: {
            OR: [
                { name: { contains: 'Hrushikesh' } },
                { name: { contains: 'Shelke' } },
                { name: { contains: 'Bunty' } }
            ]
        },
        include: { representative: true }
    })

    if (users.length === 0) {
        console.log('No Shelke found in current 151 records.')
        return
    }

    for (const u of users) {
        console.log(`Found: ${u.name} (Role: ${u.role})`)
        // Update Bunty Shelke if it matches
        if (u.name.includes('Shelke') || u.name.includes('Bunty')) {
            console.log('Updating Follower Count to 57400...')
            // Check if social profile exists
            const profile = await prisma.socialProfile.findFirst({
                where: { representativeId: u.representative?.id, platform: 'instagram' }
            })

            if (profile) {
                await prisma.socialProfile.update({
                    where: { id: profile.id },
                    data: { followers: 57400, handle: 'https://www.instagram.com/buntyshelkeiyc' }
                })
            } else if (u.representative) {
                await prisma.socialProfile.create({
                    data: {
                        representativeId: u.representative.id,
                        platform: 'instagram',
                        handle: 'https://www.instagram.com/buntyshelkeiyc',
                        followers: 57400,
                        verified: true
                    }
                })
            }
            console.log('Updated!')
        }
    }
}

main()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
