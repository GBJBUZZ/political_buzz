import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

// Simple CSV Parser
function parseCSV(content: string) {
    const lines = content.split(/\r?\n/).filter(line => line.trim() !== '')
    if (lines.length === 0) return []

    // Headers
    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
    const data = []

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i]
        const vals = currentLine.split(',').map(v => v.trim().replace(/^"|"$/g, ''))

        const rowData: any = {}
        headers.forEach((header, index) => {
            rowData[header] = vals[index] || ''
        })
        data.push(rowData)
    }
    return data
}

async function main() {
    console.log('Restoring BJP Data...')

    const city = await prisma.city.findFirst({ where: { name: 'Nagpur' } })
    if (!city) throw new Error('Nagpur city not found.')

    // Get BJP Party
    const bjp = await prisma.party.findFirst({ where: { abbreviation: 'BJP' } })

    // Read CSV
    const csvPath = path.join(process.cwd(), '..', 'NMC_Elections_2026_Prabhag_1_to_38.xlsx - NMC_Elections_2026_Prabhag_1_to.csv')
    const fileContent = fs.readFileSync(csvPath, 'utf-8')
    const records = parseCSV(fileContent)

    for (const record of records) {
        const prabhagNoStr = record['Prabhag'] || record['Prabhag No'] || record['Ward'] || '0'
        const prabhagNo = parseInt(prabhagNoStr)
        let name = record['BJP_Sena_Candidate'] || record['Candidate Name'] || record['Name']
        const instaLink = record['Instagram Link'] || record['Link'] || ''
        const distinctFollowers = record['Followers'] || record['Follo'] || '0'

        if (!name || !prabhagNo) continue;

        // Parse Followers
        let followerCount = 0
        if (distinctFollowers) {
            const clean = distinctFollowers.toLowerCase().replace(/,/g, '').replace(/^"|"$/g, '')
            if (clean.includes('k')) {
                followerCount = parseFloat(clean.replace('k', '')) * 1000
            } else if (clean.includes('m')) {
                followerCount = parseFloat(clean.replace('m', '')) * 1000000
            } else {
                followerCount = parseInt(clean) || 0
            }
        }

        // Only restore Bunty Kukde for speed, or all? 
        // Let's do all to be safe.
        // But mainly we need to fix the one we broke.
        if (!name.includes('Kukde')) continue; // Optimization: Just fix Kukde

        console.log(`Restoring: ${name} (Ward ${prabhagNo}) -> Followers: ${followerCount}`)

        const user = await prisma.user.findFirst({ where: { name: name, ward: { wardNumber: prabhagNo } } })
        if (user) {
            const rep = await prisma.representative.findFirst({ where: { userId: user.id } })
            if (rep) {
                await prisma.socialProfile.upsert({
                    where: { representativeId_platform: { representativeId: rep.id, platform: 'instagram' } },
                    create: {
                        representativeId: rep.id,
                        platform: 'instagram',
                        handle: instaLink || 'https://instagram.com/unknown', // Fallback if missing
                        followers: followerCount,
                        verified: true
                    },
                    update: {
                        handle: instaLink || 'https://instagram.com/unknown',
                        followers: followerCount
                    }
                })
            }
        }
    }
    console.log('Restoration Complete!')
}

main()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
