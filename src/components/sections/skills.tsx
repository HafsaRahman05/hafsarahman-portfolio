import { skills, skillCategories } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">My Skills</h2>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          A look at the technologies and tools I work with.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <Card key={category} className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Badge key={skill.name} variant="default" className="text-sm font-code">
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
