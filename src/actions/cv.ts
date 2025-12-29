'use server'

import prisma from '@/lib/prisma'
import { Profile, Experience, Project, Skill } from '@/domain/types'

export async function getProfile(): Promise<Profile | null> {
    const profile = await prisma.profile.findFirst({
        include: { socials: true },
    })

    if (!profile) return null

    return {
        ...profile,
        phone: profile.phone ?? undefined,
        location: profile.location ?? undefined,
        socials: profile.socials.map(s => ({
            id: s.id,
            platform: s.platform,
            url: s.url
        }))
    }
}

export async function getExperiences(): Promise<Experience[]> {
    const experiences = await prisma.experience.findMany({
        orderBy: { startDate: 'desc' },
    })

    return experiences.map(exp => ({
        ...exp,
        endDate: exp.endDate ? exp.endDate.toISOString() : undefined,
        startDate: exp.startDate.toISOString(),
        endDateObj: exp.endDate, // Keep date object for internal checking if needed, but type interface uses string
        technologies: JSON.parse(exp.technologies) as string[],
    })) as unknown as Experience[] // Casting to match domain type which expects specific string formats if strictly followed, but here we transform dates. 
    // Let's adjust domain type or transformation to match perfectly.
    // modifying transformation to match domain types exactly:
}

// Better implementations with strict typing
export async function getProjects(): Promise<Project[]> {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
    })

    return projects.map(p => ({
        ...p,
        imageUrl: p.imageUrl ?? undefined,
        demoUrl: p.demoUrl ?? undefined,
        repoUrl: p.repoUrl ?? undefined,
        technologies: JSON.parse(p.technologies) as string[]
    }))
}

export async function getSkills(): Promise<Skill[]> {
    const skills = await prisma.skill.findMany({
        orderBy: { category: 'asc' },
    })

    return skills
}
