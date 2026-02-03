import Image from 'next/image';
import { Github, Globe } from 'lucide-react';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function ProjectCardContent({ project }: { project: Project }) {
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

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const layoutType = index % 2 === 0 ? 'image-left' : 'image-right';

  const imageElement = (
    <div className="relative w-full h-64 md:h-auto overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-contain rounded-t-lg md:rounded-t-none transition-transform duration-500"
        data-ai-hint={project.imageHint}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
  
  const cardClasses = "h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 bg-card/50 backdrop-blur-lg border border-border";

  return (
    <Card className={`${cardClasses} grid md:grid-cols-2 items-stretch`}>
      {layoutType === 'image-left' && imageElement}
      <div className="flex flex-col">
        <ProjectCardContent project={project} />
      </div>
      {layoutType === 'image-right' && imageElement}
    </Card>
  );
}
