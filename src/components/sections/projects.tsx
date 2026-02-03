import { Suspense } from 'react';
import { projects, projectCategories } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { ProjectCardSkeleton } from '@/components/project-card-skeleton';
import { ProjectTabs } from './project-tabs';

export function ProjectsSection() {
  const tabs = [
    {
      value: 'All',
      label: 'All',
      content: (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Suspense key={project.id} fallback={<ProjectCardSkeleton />}>
              <ProjectCard project={project} index={index} />
            </Suspense>
          ))}
        </div>
      ),
    },
    ...projectCategories.map((category) => ({
      value: category,
      label: category,
      content: (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects
            .filter((p) => p.category === category)
            .map((project, index) => (
              <Suspense key={project.id} fallback={<ProjectCardSkeleton />}>
                <ProjectCard project={project} index={index} />
              </Suspense>
            ))}
        </div>
      ),
    })),
  ];

  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline animate-text-gradient bg-gradient-to-r from-accent via-primary to-accent bg-[200%_auto] bg-clip-text text-transparent">My Projects</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          A collection of my academic and personal projects.
        </p>
      </div>

      <ProjectTabs tabs={tabs} />
    </section>
  );
}
