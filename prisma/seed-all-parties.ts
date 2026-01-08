import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding Political Connect Data...')

    // 1. Ensure Country/State/City (Nagpur) exists
    const country = await prisma.country.upsert({
        where: { code: 'IN' },
        update: {},
        create: { name: 'India', code: 'IN' }
    })

    const state = await prisma.state.upsert({
        where: { code: 'MH' },
        update: {},
        create: { name: 'Maharashtra', code: 'MH', countryId: country.id }
    })

    const city = await prisma.city.create({
        data: {
            name: 'Nagpur',
            type: 'Municipal Corporation',
            stateId: state.id
        }
    })

    console.log(`City Created: ${city.name}`)

    // 2. Create Wards (1-50 Mock)
    for (let i = 1; i <= 50; i++) {
        await prisma.ward.upsert({
            where: { cityId_wardNumber: { cityId: city.id, wardNumber: i } },
            update: {},
            create: {
                cityId: city.id,
                wardNumber: i,
                name: `Ward ${i}`,
                population: 25000 + Math.floor(Math.random() * 10000)
            }
        })
    }

    // 3. Create Parties
    const partiesData = [
        { name: 'Bharatiya Janata Party', abbreviation: 'BJP', color: '#ff9933' },
        { name: 'Indian National Congress', abbreviation: 'INC', color: '#00ccff' },
        { name: 'Shiv Sena', abbreviation: 'SHS', color: '#ff6600' },
        { name: 'Nationalist Congress Party', abbreviation: 'NCP', color: '#00ffcc' },
        { name: 'Aam Aadmi Party', abbreviation: 'AAP', color: '#0077ff' }
    ]

    const parties = {}
    for (const p of partiesData) {
        const party = await prisma.party.upsert({
            where: { abbreviation: p.abbreviation },
            update: { color: p.color },
            create: p
        })
        parties[p.abbreviation] = party
    }
    console.log('Parties Created')

    // 4. Create Mock Representatives (Focus on BJP & SHS to balance Congress)
    // We'll create 30 BJP reps, 10 SHS, 5 NCP
    const createMockRep = async (partyAbbrev, count) => {
        const party = parties[partyAbbrev]
        const wards = await prisma.ward.findMany({
            where: { cityId: city.id },
            take: count,
            skip: partyAbbrev === 'BJP' ? 0 : (partyAbbrev === 'SHS' ? 30 : 40) // Distribute wards
        })

        for (const ward of wards) {
            const name = `${partyAbbrev} Leader ${ward.wardNumber}`
            const user = await prisma.user.create({
                data: {
                    name: name,
                    email: `${name.toLowerCase().replace(/ /g, '')}@example.com`,
                    phone: `91${Math.floor(1000000000 + Math.random() * 9000000000)}`,
                    role: 'representative',
                    verified: true,
                    wardId: ward.id
                }
            })

            const rep = await prisma.representative.create({
                data: {
                    userId: user.id,
                    partyId: party.id,
                    wardId: ward.id,
                    position: 'Corporator',
                    verified: true
                }
            })

            // Social Profile (Instagram)
            await prisma.socialProfile.create({
                data: {
                    representativeId: rep.id,
                    platform: 'instagram',
                    handle: `@${name.toLowerCase().replace(/ /g, '_')}`,
                    followers: Math.floor(Math.random() * 50000) + 1000,
                    verified: Math.random() > 0.5
                }
            })

            // Some mock issues resolved stats (stored in memory/analytics usually, but we simulate via Issue responses later if needed)
            // For now, we rely on the Analytics API to aggregate.
        }
    }

    await createMockRep('BJP', 30)
    await createMockRep('SHS', 10)
    await createMockRep('NCP', 5)

    console.log('Mock Data Seeding Complete')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
