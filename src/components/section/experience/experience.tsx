import { Experience } from '@/domain/types';
import { Card } from '@/components/card';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed">
            My professional journey and the roles I&apos;ve held.
          </p>
        </div>

        <div className="border-primary/20 relative ml-4 space-y-12 border-l-2 md:ml-0">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="bg-background border-primary shadow-primary/40 absolute top-6 -left-[9px] h-4 w-4 rounded-full border-4 shadow-lg" />

              <Card
                className="bg-card border-border/50 rounded-2xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
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
