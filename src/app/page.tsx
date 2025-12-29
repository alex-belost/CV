import { getProfile, getExperiences, getProjects, getSkills } from "@/actions/cv";
import { Hero, ExperienceSection, SkillsSection } from "@/components/section";

export default async function Home() {
  const profile = await getProfile();
  const experiences = await getExperiences();
  const projects = await getProjects();
  const skills = await getSkills();

  if (!profile) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Profile not found</h1>
          <p>Please run the seed script to populate the database.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero profile={profile} />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
    </div>
  );
}
