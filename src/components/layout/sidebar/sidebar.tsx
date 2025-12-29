import { Profile, Skill } from "@/domain/types";
import { Skills } from "@/components/skills";
import { ThemeToggle } from "@/components/theme/toggle";

interface SidebarProps {
    profile: Profile;
    skills: Skill[];
}

export function Sidebar({ profile, skills }: SidebarProps) {
    return (
        <aside className="w-full lg:w-1/3 flex flex-col gap-8 p-6 lg:py-12 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-r border-foreground/5 bg-background/50 backdrop-blur-sm">
            <div className="flex justify-between items-start">
                <div className="w-32 h-32 rounded-full bg-foreground/10 overflow-hidden mb-6 flex items-center justify-center text-4xl font-bold text-foreground/20">
                    {profile.name.charAt(0)}
                </div>
                <ThemeToggle />
            </div>


            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">{profile.name}</h1>
                <h2 className="text-lg text-foreground/60 font-medium">{profile.title}</h2>
            </div>

            <div className="flex flex-col gap-3 text-sm text-foreground/70">
                {profile.location && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold w-20">Location:</span>
                        <span>{profile.location}</span>
                    </div>
                )}
                {profile.email && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold w-20">Email:</span>
                        <a href={`mailto:${profile.email}`} className="hover:text-foreground transition-colors">{profile.email}</a>
                    </div>
                )}
                {profile.phone && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold w-20">Phone:</span>
                        <a href={`tel:${profile.phone}`} className="hover:text-foreground transition-colors">{profile.phone}</a>
                    </div>
                )}
            </div>

            <div className="flex gap-4">
                {profile.socials.map(social => (
                    <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-foreground transition-colors font-medium border-b border-transparent hover:border-foreground/60"
                    >
                        {social.platform}
                    </a>
                ))}
            </div>

            <div className="mt-4">
                <Skills skills={skills} />
            </div>
        </aside>
    );
}
