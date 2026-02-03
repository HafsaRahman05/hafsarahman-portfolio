import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === "about-me");
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground md:text-lg">
            <p>
              I am a passionate Software Engineering student with a strong focus on building practical, project-based experience. My primary interests lie at the intersection of Artificial Intelligence, Machine Learning, and robust Database Systems. I'm constantly exploring new technologies and methodologies to create efficient and intelligent solutions.
            </p>
            <p>
              Beyond my core focus, I also have a keen interest in Web and Game Development, which allows me to be creative and build engaging user experiences. I thrive on a strong learning mindset and am always eager to tackle new challenges and expand my skill set.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto">
          {aboutImage && (
            <Card className="overflow-hidden shadow-xl">
                <Image 
                    src={aboutImage.imageUrl} 
                    alt="A portrait" 
                    width={400} 
                    height={500} 
                    className="w-full object-cover" 
                    data-ai-hint={aboutImage.imageHint}
                />
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
