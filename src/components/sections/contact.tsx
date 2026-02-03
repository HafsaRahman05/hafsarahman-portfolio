'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
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
    <Button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const initialState: FormState = { message: '', status: 'idle' };
  const [state, formAction] = useFormState(submitContactForm, initialState);

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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">Contact Me</h2>
        <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-xl">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                   {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required />
                   {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold font-headline">Or find me on social media</h3>
            <div className="space-y-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-sm text-muted-foreground">View my projects and contributions</p>
                    </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
