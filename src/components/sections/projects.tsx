'use client';

import { Suspense } from 'react';
import { projects, projectCategories } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { ProjectCardSkeleton } from '@/components/project-card-skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline animate-text-gradient bg-gradient-to-r from-accent via-primary to-accent bg-[200%_auto] bg-clip-text text-transparent">My Projects</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
          A collection of my academic and personal projects. The card layout is dynamically chosen by a GenAI model!
        </p>
      </div>

      <Tabs defaultValue="All" className="mt-8">
        <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 md:grid-cols-5 bg-secondary/50">
          <TabsTrigger value="All">All</TabsTrigger>
          {projectCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="All">
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Suspense key={project.id} fallback={<ProjectCardSkeleton />}>
                <ProjectCard project={project} />
              </Suspense>
            ))}
          </div>
        </TabsContent>

        {projectCategories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <Suspense key={project.id} fallback={<ProjectCardSkeleton />}>
                    <ProjectCard project={project} />
                  </Suspense>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
