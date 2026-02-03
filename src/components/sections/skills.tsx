import { skills, skillCategories } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as Icons from 'lucide-react';
import { IconHexagon } from '@/components/icons';


export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline animate-text-gradient bg-gradient-to-r from-accent via-primary to-accent bg-[200%_auto] bg-clip-text text-transparent">My Skills</h2>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          A look at the technologies and tools I work with.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <Card key={category} className="bg-card/50 backdrop-blur-lg border border-border shadow-lg h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3">
                <IconHexagon className="w-7 h-7 text-accent" />
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    // @ts-ignore
                    const Icon = skill.icon ? Icons[skill.icon] : Icons['Code'];
                    return (
                      <li key={skill.name} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </li>
                    )
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
