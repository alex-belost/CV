import { Experience, Project, Profile } from "@/domain/types";
import { Card } from "@/components/card";
import { SectionAnimated } from "@/components/section/animated";
import { ContactForm } from "@/components/contact/form";

interface ContentProps {
    profile: Profile;
    experiences: Experience[];
    projects: Project[];
}

export function Content({ profile, experiences, projects }: ContentProps) {
    return (
        <main className="w-full lg:w-2/3 p-6 lg:py-12 flex flex-col gap-16 lg:px-12">
            {/* Summary */}
            <SectionAnimated>
                <h3 className="text-2xl font-bold mb-6 border-b pb-2 border-foreground/10">About Me</h3>
                <div className="prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed whitespace-pre-wrap">
                    {profile.summary}
                </div>
            </SectionAnimated>

            {/* Experience */}
            <SectionAnimated delay={0.2}>
                <h3 className="text-2xl font-bold mb-8 border-b pb-2 border-foreground/10">Work Experience</h3>
                <div className="flex flex-col gap-10 border-l border-foreground/10 ml-3 pl-8 relative">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative">
                            {/* Timeline dot */}
                            <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-foreground/30" />

                            <Card
                                title={exp.position}
                                subtitle={exp.company}
                                date={`${new Date(exp.startDate).getFullYear()} - ${exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}`}
                                description={exp.description}
                                tags={exp.technologies}
                            />
                        </div>
                    ))}
                </div>
            </SectionAnimated>

            {/* Projects */}
            <SectionAnimated delay={0.3}>
                <h3 className="text-2xl font-bold mb-8 border-b pb-2 border-foreground/10">Projects</h3>
                <div className="grid grid-cols-1 gap-8">
                    {projects.map(project => (
                        <Card
                            key={project.id}
                            title={project.title}
                            subtitle=""
                            description={project.description}
                            tags={project.technologies}
                            link={project.demoUrl || project.repoUrl}
                        />
                    ))}
                </div>
            </SectionAnimated>

            {/* Contact */}
            <SectionAnimated delay={0.4}>
                <h3 className="text-2xl font-bold mb-8 border-b pb-2 border-foreground/10">Contact</h3>
                <ContactForm />
            </SectionAnimated>

            <footer className="text-center text-sm text-foreground/40 pt-12">
                <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            </footer>
        </main>
    );
}
