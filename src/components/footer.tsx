import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Hafsa Rahman. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/HafsaRahman05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/hafsa-rahman-8268022b6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
