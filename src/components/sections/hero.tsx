import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto flex h-[calc(100vh-4rem)] min-h-[500px] items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline">
            Portfolio Pro
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Software Engineering Student
          </p>
        </div>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          A passionate developer focused on AI, Machine Learning, and modern Web Development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
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
