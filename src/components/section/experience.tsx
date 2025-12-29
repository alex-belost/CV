import { Experience } from "@/domain/types";
import { Card } from "@/components/card";

interface ExperienceSectionProps {
    experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">Work Experience</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        My professional journey and the roles I&apos;ve held.
                    </p>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 md:pl-12">
                            {/* Timeline dot */}
                            <div className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-background border-4 border-primary shadow-lg shadow-primary/40" />

                            <Card
                                className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
                                title={exp.position}
                                subtitle={exp.company}
                                date={`${new Date(exp.startDate).getFullYear()} - ${exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}`}
                                description={exp.description}
                                tags={exp.technologies}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
