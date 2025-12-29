
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const profile = await prisma.profile.findFirst({ include: { socials: true } })
    console.log('Profile:', JSON.stringify(profile, null, 2))

    const experiences = await prisma.experience.findMany()
    console.log('Experiences:', experiences.length)
    experiences.forEach(exp => console.log(`- ${exp.company}: ${exp.position} (${exp.startDate.toISOString().split('T')[0]})`))

    const skills = await prisma.skill.findMany()
    console.log('Skills:', skills.length)
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())
