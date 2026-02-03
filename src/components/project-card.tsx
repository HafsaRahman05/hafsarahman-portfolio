import Image from 'next/image';
import { Github, Globe } from 'lucide-react';
import { determineProjectCardLayout } from '@/ai/flows/project-card-layout';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

async function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-accent">{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-muted-foreground">{project.description}</p>
        <div>
          <h4 className="font-semibold mb-2 text-primary">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-code border border-transparent bg-secondary/50 text-secondary-foreground hover:bg-secondary/80">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col sm:flex-row gap-2 items-start sm:items-center">
        <div className="flex gap-2">
          {project.liveLink && (
            <Button asChild variant="outline">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <Globe />
                Live Demo
              </a>
            </Button>
          )}
          <Button asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github />
              GitHub
            </a>
          </Button>
        </div>
      </CardFooter>
    </>
  );
}

export async function ProjectCard({ project }: { project: Project }) {
  const layout = await determineProjectCardLayout({
    projectTitle: project.title,
    projectDescription: project.description,
    techStack: project.techStack.join(', '),
    liveLink: project.liveLink,
    githubLink: project.githubLink,
    category: project.category,
  });

  const imageElement = (
    <div className="relative w-full h-64 md:h-auto overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover rounded-t-lg md:rounded-t-none group-hover:scale-105 transition-transform duration-500"
        data-ai-hint={project.imageHint}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
  
  const cardClasses = "group h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 bg-card/50 backdrop-blur-lg border border-white/10";


  if (layout.layoutType === 'text-only') {
    return (
      <Card className={`${cardClasses} flex flex-col`}>
        <ProjectCardContent project={project} />
      </Card>
    );
  }

  return (
    <Card className={`${cardClasses} grid md:grid-cols-2 items-stretch`}>
      {layout.layoutType === 'image-left' && imageElement}
      <div className="flex flex-col">
        <ProjectCardContent project={project} />
      </div>
      {layout.layoutType === 'image-right' && imageElement}
    </Card>
  );
}
