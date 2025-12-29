import { Profile, Skill } from '@/domain/types';
import { Skills } from '@/components/skills';
import { ThemeToggle } from '@/components/theme/toggle';

interface SidebarProps {
  profile: Profile;
  skills: Skill[];
}

export function Sidebar({ profile, skills }: SidebarProps) {
  return (
    <aside className="border-foreground/5 bg-background/50 flex w-full flex-col gap-8 border-r p-6 backdrop-blur-sm lg:sticky lg:top-0 lg:h-screen lg:w-1/3 lg:overflow-y-auto lg:py-12">
      <div className="flex items-start justify-between">
        <div className="bg-foreground/10 text-foreground/20 mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full text-4xl font-bold">
          {profile.name.charAt(0)}
        </div>
        <ThemeToggle />
      </div>

      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {profile.name}
        </h1>
        <h2 className="text-foreground/60 text-lg font-medium">
          {profile.title}
        </h2>
      </div>

      <div className="text-foreground/70 flex flex-col gap-3 text-sm">
        {profile.location && (
          <div className="flex items-center gap-2">
            <span className="w-20 font-semibold">Location:</span>
            <span>{profile.location}</span>
          </div>
        )}
        {profile.email && (
          <div className="flex items-center gap-2">
            <span className="w-20 font-semibold">Email:</span>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-foreground transition-colors"
            >
              {profile.email}
            </a>
          </div>
        )}
        {profile.phone && (
          <div className="flex items-center gap-2">
            <span className="w-20 font-semibold">Phone:</span>
            <a
              href={`tel:${profile.phone}`}
              className="hover:text-foreground transition-colors"
            >
              {profile.phone}
            </a>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        {profile.socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground hover:border-foreground/60 border-b border-transparent font-medium transition-colors"
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
