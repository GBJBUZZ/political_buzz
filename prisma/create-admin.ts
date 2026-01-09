import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const adminEmail = 'admin@politicalconnect.com'
    const adminPassword = 'adminpassword123'
    const hashedPassword = await bcrypt.hash(adminPassword, 10)

    console.log(`🚀 Creating/Updating Master Admin: ${adminEmail}`)

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {
            password: hashedPassword,
            role: 'admin',
            verified: true
        },
        create: {
            email: adminEmail,
            phone: '+91-ADMIN-001',
            name: 'Master Administrator',
            password: hashedPassword,
            role: 'admin',
            verified: true
        }
    })

    console.log('✅ Admin account ready.')
    console.log(`📧 Email: ${adminEmail}`)
    console.log(`🔑 Password: ${adminPassword}`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
