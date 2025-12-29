import { Skill } from '@/domain/types';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  // Group skills by category
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <div className="flex flex-col gap-6">
      <h3 className="border-foreground/10 mb-2 border-b pb-2 text-xl font-semibold">
        Skills
      </h3>
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category}>
          <h4 className="text-foreground/60 mb-3 text-sm font-medium tracking-wider uppercase">
            {category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill) => (
              <span
                key={skill.id}
                className="bg-foreground/5 dark:bg-foreground/10 text-foreground/80 rounded-full px-3 py-1 text-sm"
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
