import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Advanced Merge: Duplicate Cities & Wards...')
    const cities = await prisma.city.findMany({ where: { name: 'Nagpur' } })

    if (cities.length < 2) {
        console.log('No duplicate cities found.')
        return
    }

    const mainCity = cities.find(c => c.id === 'nagpur-city') || cities[0]
    const dupeCity = cities.find(c => c.id !== mainCity.id)

    if (!dupeCity) return

    console.log(`Main City: ${mainCity.id}, Dupe City: ${dupeCity.id}`)

    const dupeWards = await prisma.ward.findMany({ where: { cityId: dupeCity.id } })
    console.log(`Processing ${dupeWards.length} wards from duplicate city...`)

    for (const dWard of dupeWards) {
        // Check if main city has this ward
        const mWard = await prisma.ward.findFirst({
            where: { cityId: mainCity.id, wardNumber: dWard.wardNumber }
        })

        if (mWard) {
            console.log(`Merging Ward ${dWard.wardNumber}: ${dWard.id} -> ${mWard.id}`)

            // Move User
            await prisma.user.updateMany({
                where: { wardId: dWard.id },
                data: { wardId: mWard.id }
            })

            // Move Representatives
            await prisma.representative.updateMany({
                where: { wardId: dWard.id },
                data: { wardId: mWard.id }
            })

            // Move Issues
            await prisma.issue.updateMany({
                where: { wardId: dWard.id },
                data: { wardId: mWard.id }
            })

            // Delete dupe ward
            await prisma.ward.delete({ where: { id: dWard.id } })
        } else {
            console.log(`Moving Ward ${dWard.wardNumber} to Main City...`)
            await prisma.ward.update({
                where: { id: dWard.id },
                data: { cityId: mainCity.id }
            })
        }
    }

    // Finally delete dupe city
    await prisma.city.delete({ where: { id: dupeCity.id } })
    console.log('Duplicate City Deleted!')
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())
