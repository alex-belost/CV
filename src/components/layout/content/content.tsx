import { Experience, Project, Profile } from '@/domain/types';
import { Card } from '@/components/card';
import { SectionAnimated } from '@/components/section/animated';
import { ContactForm } from '@/components/contact/form';

interface ContentProps {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
}

export function Content({ profile, experiences, projects }: ContentProps) {
  return (
    <main className="flex w-full flex-col gap-16 p-6 lg:w-2/3 lg:px-12 lg:py-12">
      {/* Summary */}
      <SectionAnimated>
        <h3 className="border-foreground/10 mb-6 border-b pb-2 text-2xl font-bold">
          About Me
        </h3>
        <div className="prose dark:prose-invert text-foreground/80 max-w-none leading-relaxed whitespace-pre-wrap">
          {profile.summary}
        </div>
      </SectionAnimated>

      {/* Experience */}
      <SectionAnimated delay={0.2}>
        <h3 className="border-foreground/10 mb-8 border-b pb-2 text-2xl font-bold">
          Work Experience
        </h3>
        <div className="border-foreground/10 relative ml-3 flex flex-col gap-10 border-l pl-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline dot */}
              <div className="bg-background border-foreground/30 absolute top-1.5 -left-[39px] h-4 w-4 rounded-full border-2" />

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
        <h3 className="border-foreground/10 mb-8 border-b pb-2 text-2xl font-bold">
          Projects
        </h3>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
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
        <h3 className="border-foreground/10 mb-8 border-b pb-2 text-2xl font-bold">
          Contact
        </h3>
        <ContactForm />
      </SectionAnimated>

      <footer className="text-foreground/40 pt-12 text-center text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
