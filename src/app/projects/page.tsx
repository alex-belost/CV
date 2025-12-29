import { getProjects } from "@/actions/cv";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="container py-12 max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-10">
                <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Here are some of the projects I've worked on. Each one represents a different challenge and learning experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                        <div className="relative aspect-video overflow-hidden bg-muted">
                            {project.imageUrl ? (
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-muted-foreground">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-auto">
                                {project.demoUrl && (
                                    <Link
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        View Demo
                                    </Link>
                                )}
                                {project.repoUrl && (
                                    <Link
                                        href={project.repoUrl}
                                        target="_blank"
                                        className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
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
