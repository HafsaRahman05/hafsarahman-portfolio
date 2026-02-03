import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative container mx-auto flex h-[calc(100vh-4rem)] min-h-[600px] items-center justify-center px-4 text-center overflow-hidden">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent rounded-full mix-blend-soft-light filter blur-2xl opacity-15 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary rounded-full mix-blend-soft-light filter blur-2xl opacity-15 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary rounded-full mix-blend-soft-light filter blur-2xl opacity-15 animate-blob animation-delay-4000"></div>
       </div>
      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl font-headline 
                         animate-text-gradient bg-gradient-to-r from-accent via-primary to-accent bg-[200%_auto] bg-clip-text text-transparent">
            Hafsa Rahman
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Software Engineering Student
          </p>
        </div>
        <p className="max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
          A passionate developer crafting intelligent solutions with a focus on AI, Machine Learning, and modern Web Development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/HafsaRahman05" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
