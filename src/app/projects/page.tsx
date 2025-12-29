import { getProjects } from '@/actions/cv';
import Link from 'next/link';
import Image from 'next/image';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">My Projects</h1>

        <p className="text-muted-foreground max-w-2xl text-xl">
          Here are some of the projects I&apos;ve worked on. Each one represents
          a different challenge and learning experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card text-card-foreground relative flex flex-col overflow-hidden rounded-xl border shadow transition-all hover:shadow-lg"
          >
            <div className="bg-muted relative aspect-video overflow-hidden">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="text-muted-foreground flex h-full items-center justify-center">
                  No Image
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>

              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                {project.description}
              </p>

              <div className="mt-auto mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 flex-1 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    View Demo
                  </Link>
                )}
                {project.repoUrl && (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 flex-1 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
