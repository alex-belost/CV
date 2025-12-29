import { Skill } from "@/domain/types";
import { ThemeToggle } from "@/components/theme/toggle";

interface SkillsProps {
    skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-2 border-foreground/10">Skills</h3>
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category}>
                    <h4 className="text-sm font-medium text-foreground/60 mb-3 uppercase tracking-wider">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill) => (
                            <span
                                key={skill.id}
                                className="px-3 py-1 bg-foreground/5 dark:bg-foreground/10 text-sm rounded-full text-foreground/80"
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
