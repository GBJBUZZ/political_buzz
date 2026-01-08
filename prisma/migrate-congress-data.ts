import { PrismaClient } from '@prisma/client'
import congressData from '../public/congress-nagpur-data.json'

const prisma = new PrismaClient()

async function migrateCongressData() {
    console.log('Migrating Congress Nagpur data...')

    // Get Nagpur city and Congress party
    const nagpur = await prisma.city.findFirst({ where: { name: 'Nagpur' } })
    const congress = await prisma.party.findFirst({ where: { abbreviation: 'INC' } })

    if (!nagpur || !congress) {
        throw new Error('Nagpur city or Congress party not found. Run seed first.')
    }

    let imported = 0
    let skipped = 0

    for (const candidate of congressData.candidates) {
        try {
            // Find the ward
            const ward = await prisma.ward.findFirst({
                where: {
                    cityId: nagpur.id,
                    wardNumber: candidate.prabhag
                }
            })

            if (!ward) {
                console.log(`Ward ${candidate.prabhag} not found, skipping ${candidate.name}`)
                skipped++
                continue
            }

            // Create user for representative
            const user = await prisma.user.create({
                data: {
                    phone: `+91${Math.floor(Math.random() * 9000000000) + 1000000000}`, // Dummy phone
                    name: candidate.name,
                    role: 'representative',
                    wardId: ward.id,
                    verified: true
                }
            })

            // Create representative
            const representative = await prisma.representative.create({
                data: {
                    userId: user.id,
                    partyId: congress.id,
                    wardId: ward.id,
                    position: 'corporator',
                    verified: true
                }
            })

            // Create Instagram profile if exists
            if (candidate.instagram) {
                await prisma.socialProfile.create({
                    data: {
                        representativeId: representative.id,
                        platform: 'instagram',
                        handle: candidate.instagram.split('/').pop()?.replace(/[?#].*/, '') || '',
                        followers: Math.floor(Math.random() * 5000) + 500,
                        verified: true,
                        lastSynced: new Date()
                    }
                })
            }

            imported++
            console.log(`Imported: ${candidate.name} (Ward ${candidate.prabhag}, Seat ${candidate.seat})`)
        } catch (error) {
            console.error(`Error importing ${candidate.name}:`, error)
            skipped++
        }
    }

    console.log(`Migration complete! Imported: ${imported}, Skipped: ${skipped}`)
}

migrateCongressData()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
