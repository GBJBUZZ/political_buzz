import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Searching for Congress VIPs...')

    const shelkes = await prisma.user.findMany({
        where: { name: { contains: 'Shelke' } },
        include: { representative: { include: { party: true } } }
    })

    const bunty = await prisma.user.findMany({
        where: { name: { contains: 'Bunty' } },
        include: { representative: { include: { party: true } } }
    })

    console.log('--- Shelkes ---')
    shelkes.forEach(u => console.log(`${u.name} - ${u.representative?.party.abbreviation}`))

    console.log('--- Buntys ---')
    bunty.forEach(u => console.log(`${u.name} - ${u.representative?.party.abbreviation}`))

}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())
