// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting design elements based on a text prompt.
 *
 * @exports suggestDesignElements - An async function that takes a text prompt and returns design element suggestions.
 * @exports SuggestDesignElementsInput - The input type for the suggestDesignElements function.
 * @exports SuggestDesignElementsOutput - The output type for the suggestDesignElements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDesignElementsInputSchema = z.object({
  prompt: z
    .string()
    .describe('A text prompt describing the desired design elements.'),
});
export type SuggestDesignElementsInput = z.infer<typeof SuggestDesignElementsInputSchema>;

const SuggestDesignElementsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of design element suggestions based on the prompt.'),
});
export type SuggestDesignElementsOutput = z.infer<typeof SuggestDesignElementsOutputSchema>;

export async function suggestDesignElements(input: SuggestDesignElementsInput): Promise<SuggestDesignElementsOutput> {
  return suggestDesignElementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDesignElementsPrompt',
  input: {schema: SuggestDesignElementsInputSchema},
  output: {schema: SuggestDesignElementsOutputSchema},
  prompt: `Suggest design elements based on the following prompt:\n\n{{prompt}}\n\nReturn the suggestions as a JSON array of strings.`, 
});

const suggestDesignElementsFlow = ai.defineFlow(
  {
    name: 'suggestDesignElementsFlow',
    inputSchema: SuggestDesignElementsInputSchema,
    outputSchema: SuggestDesignElementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
