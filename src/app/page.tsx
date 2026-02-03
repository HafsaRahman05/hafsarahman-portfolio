import { Suspense } from 'react';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection />
      </Suspense>
      <ContactSection />
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">My Projects</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="mt-8">
        <Skeleton className="h-10 w-full max-w-md mx-auto" />
        <div className="mt-8 grid grid-cols-1 gap-8">
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    </section>
  )
}
