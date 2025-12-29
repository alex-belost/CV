import { Skill } from "@/domain/types";
import { Badge } from "@/components/badge";

interface SkillsSectionProps {
    skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <section className="pt-24 pb-24 relative overflow-hidden">


            {/* Background Pattern */}
            <div
                className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
            />

            <div className="container relative px-4 md:px-6 mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Skills & Expertise
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A comprehensive overview of the technologies and tools I leverage to build scalable solutions.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                        <div
                            key={category}
                            className="group flex flex-col gap-4 rounded-3xl bg-card border border-border/50 shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:border-primary/20"
                        >
                            <h3 className="font-semibold text-xl tracking-tight text-foreground/90 capitalize pl-1">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {categorySkills.map(skill => (
                                    <Badge
                                        key={skill.id}
                                        className="transition-all duration-300 px-3.5 py-1.5 text-sm font-medium bg-card text-foreground/80 border border-border/40 shadow-sm hover:border-primary/30 hover:text-primary hover:shadow-md"
                                    >
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
