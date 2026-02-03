import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex h-[calc(100vh-4rem)] min-h-[600px] items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl font-headline 
                         animate-text-gradient bg-gradient-to-r from-accent via-primary to-accent bg-[200%_auto] bg-clip-text text-transparent">
            i dont like this
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
