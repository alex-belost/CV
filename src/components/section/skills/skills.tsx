import { Skill } from '@/domain/types';
import { Badge } from '@/components/badge';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
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
    <section className="relative overflow-hidden pt-24 pb-24">
      {/* Background Pattern */}
      <div className="bg-dot-pattern pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-30" />

      <div className="relative container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A comprehensive overview of the technologies and tools I leverage to
            build scalable solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="group bg-card border-border/50 hover:border-primary/20 flex flex-col gap-4 rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-foreground/90 pl-1 text-xl font-semibold tracking-tight capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {categorySkills.map((skill) => (
                  <Badge
                    key={skill.id}
                    className="bg-card text-foreground/80 border-border/40 hover:border-primary/30 hover:text-primary border px-3.5 py-1.5 text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md"
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
