'use server';

/**
 * @fileOverview A Genkit flow to determine the layout of project cards on a portfolio website.
 *
 * - determineProjectCardLayout - A function that determines the project card layout.
 * - ProjectCardLayoutInput - The input type for the determineProjectCardLayout function.
 * - ProjectCardLayoutOutput - The return type for the determineProjectCardLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectCardLayoutInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  projectDescription: z.string().describe('A short description of the project.'),
  techStack: z.string().describe('The tech stack used in the project.'),
  liveLink: z.string().optional().describe('The live working project link, if available.'),
  githubLink: z.string().describe('The GitHub repository link.'),
  category: z
    .enum(['AI / ML', 'Database', 'Web', 'Game Development'])
    .describe('The category of the project.'),
});
export type ProjectCardLayoutInput = z.infer<typeof ProjectCardLayoutInputSchema>;

const ProjectCardLayoutOutputSchema = z.object({
  layoutType: z
    .enum(['image-left', 'image-right', 'text-only'])
    .describe(
      'The layout type for the project card. image-left: Image on the left, text on the right. image-right: Image on the right, text on the left. text-only: Text only, no image.'
    ),
  reasoning: z.string().describe('Reasoning behind the layout choice.'),
});
export type ProjectCardLayoutOutput = z.infer<typeof ProjectCardLayoutOutputSchema>;

export async function determineProjectCardLayout(
  input: ProjectCardLayoutInput
): Promise<ProjectCardLayoutOutput> {
  return determineProjectCardLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectCardLayoutPrompt',
  input: {schema: ProjectCardLayoutInputSchema},
  output: {schema: ProjectCardLayoutOutputSchema},
  prompt: `You are a UI/UX design expert, tasked with determining the best layout for a project card on a portfolio website.

  Given the following project information, choose the most appropriate layout type (image-left, image-right, or text-only) to make the card visually appealing and professional.

  Consider the project category, description length, and the availability of a live link when making your decision.  If there is a live link, prefer a layout that uses an image, since the user will want to see it. Explain your reasoning for the layout choice.

  Project Title: {{{projectTitle}}}
  Description: {{{projectDescription}}}
  Tech Stack: {{{techStack}}}
  Live Link: {{{liveLink}}}
  GitHub Link: {{{githubLink}}}
  Category: {{{category}}}

  Layout Type:`,
});

const determineProjectCardLayoutFlow = ai.defineFlow(
  {
    name: 'determineProjectCardLayoutFlow',
    inputSchema: ProjectCardLayoutInputSchema,
    outputSchema: ProjectCardLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
