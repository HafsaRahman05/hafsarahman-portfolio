'use client';

import { useFormStatus } from 'react-dom';
import { useActionState, useEffect } from 'react';
import { Github, Linkedin, Send } from 'lucide-react';
import { submitContactForm, type FormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
      <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const initialState: FormState = { message: '', status: 'idle' };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.status === 'success') {
      toast({ title: 'Success!', description: state.message });
    } else if (state.status === 'error') {
      toast({
        title: 'Error!',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline animate-text-gradient bg-gradient-to-r from-accent via-primary to-accent bg-[200%_auto] bg-clip-text text-transparent">Contact Me</h2>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-lg border border-border">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                 {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." required rows={5} />
                 {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold font-headline text-primary">Or find me on social media</h3>
            <div className="space-y-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-lg hover:bg-secondary transition-colors">
                    <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                        <p className="font-semibold text-primary">GitHub</p>
                        <p className="text-sm text-muted-foreground">View my projects and contributions</p>
                    </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-lg hover:bg-secondary transition-colors">
                    <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                        <p className="font-semibold text-primary">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
