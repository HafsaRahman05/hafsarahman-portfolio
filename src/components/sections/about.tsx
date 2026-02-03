import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === "about-me");
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline animate-text-gradient bg-gradient-to-r from-accent via-primary to-accent bg-[200%_auto] bg-clip-text text-transparent">About Me</h2>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          My journey and passion for technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full max-w-md mx-auto relative">
          {aboutImage && (
            <Card className="overflow-hidden shadow-2xl shadow-accent/10 border border-border rounded-xl">
                <Image 
                    src={aboutImage.imageUrl} 
                    alt="A portrait" 
                    width={500} 
                    height={600} 
                    className="w-full object-cover aspect-[4/5]" 
                    data-ai-hint={aboutImage.imageHint}
                />
            </Card>
          )}
        </div>
        <div className="space-y-6 text-muted-foreground md:text-lg">
            <h3 className="text-2xl font-bold font-headline text-primary">Software Engineering Student</h3>
            <p>
              I am a passionate Software Engineering student with a strong focus on building practical, project-based experience. My primary interests lie at the intersection of Artificial Intelligence, Machine Learning, and robust Database Systems. I'm constantly exploring new technologies and methodologies to create efficient and intelligent solutions.
            </p>
            <p>
              Beyond my core focus, I also have a keen interest in Web and Game Development, which allows me to be creative and build engaging user experiences. I thrive on a strong learning mindset and am always eager to tackle new challenges and expand my skill set.
            </p>
          </div>
      </div>
    </section>
  );
}
