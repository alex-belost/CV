import { getProfile, getExperiences, getSkills } from '@/actions/cv';
import { Hero, ExperienceSection, SkillsSection } from '@/components/section';

export default async function Home() {
  const profile = await getProfile();
  const experiences = await getExperiences();
  const skills = await getSkills();

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Profile not found</h1>
          <p>Please run the seed script to populate the database.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Hero profile={profile} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
    </div>
  );
}
