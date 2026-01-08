import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Starting seed...')

    // Create India
    const india = await prisma.country.upsert({
        where: { code: 'IN' },
        update: {},
        create: {
            name: 'India',
            code: 'IN'
        }
    })

    // Create Maharashtra
    const maharashtra = await prisma.state.upsert({
        where: { code: 'MH' },
        update: {},
        create: {
            name: 'Maharashtra',
            code: 'MH',
            countryId: india.id
        }
    })

    // Create Nagpur
    const nagpur = await prisma.city.upsert({
        where: { id: 'nagpur-city' },
        update: {},
        create: {
            id: 'nagpur-city',
            name: 'Nagpur',
            type: 'municipal_corp',
            stateId: maharashtra.id
        }
    })

    // Create 38 Wards for Nagpur
    const wards = []
    for (let i = 1; i <= 38; i++) {
        const ward = await prisma.ward.upsert({
            where: { cityId_wardNumber: { cityId: nagpur.id, wardNumber: i } },
            update: {},
            create: {
                cityId: nagpur.id,
                wardNumber: i,
                name: `Ward ${i}`,
                population: Math.floor(Math.random() * 50000) + 20000
            }
        })
        wards.push(ward)
    }

    // Create Political Parties
    const bjp = await prisma.party.upsert({
        where: { abbreviation: 'BJP' },
        update: {},
        create: {
            name: 'Bharatiya Janata Party',
            abbreviation: 'BJP',
            symbol: 'Lotus',
            color: '#FF9933'
        }
    })

    const congress = await prisma.party.upsert({
        where: { abbreviation: 'INC' },
        update: {},
        create: {
            name: 'Indian National Congress',
            abbreviation: 'INC',
            symbol: 'Hand',
            color: '#0066CC'
        }
    })

    console.log('Seed completed successfully!')
    console.log({ india, maharashtra, nagpur, wardsCreated: wards.length, bjp, congress })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
