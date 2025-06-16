// use server'

/**
 * @fileOverview Generates a personalized service suggestion and custom quote estimate based on user input.
 *
 * - generatePersonalizedQuote - A function that handles the personalized quote generation process.
 * - GeneratePersonalizedQuoteInput - The input type for the generatePersonalizedQuote function.
 * - GeneratePersonalizedQuoteOutput - The return type for the generatePersonalizedQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedQuoteInputSchema = z.object({
  accountingNeeds: z
    .string()
    .describe("A description of the user's accounting needs and business requirements."),
});
export type GeneratePersonalizedQuoteInput = z.infer<
  typeof GeneratePersonalizedQuoteInputSchema
>;

const GeneratePersonalizedQuoteOutputSchema = z.object({
  serviceSuggestion: z
    .string()
    .describe('A personalized service suggestion based on the user input.'),
  quoteEstimate: z
    .string()
    .describe('A custom quote estimate based on the user input.'),
});
export type GeneratePersonalizedQuoteOutput = z.infer<
  typeof GeneratePersonalizedQuoteOutputSchema
>;

export async function generatePersonalizedQuote(
  input: GeneratePersonalizedQuoteInput
): Promise<GeneratePersonalizedQuoteOutput> {
  return generatePersonalizedQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedQuotePrompt',
  input: {schema: GeneratePersonalizedQuoteInputSchema},
  output: {schema: GeneratePersonalizedQuoteOutputSchema},
  prompt: `You are an AI assistant specialized in providing personalized service suggestions and custom quote estimates for accounting services.

  Based on the user's description of their accounting needs, provide a relevant service suggestion and a custom quote estimate.

  Accounting Needs: {{{accountingNeeds}}}

  Respond in the following format:
  {
    "serviceSuggestion": "[Service Suggestion]",
    "quoteEstimate": "[Quote Estimate]"
  }`,
});

const generatePersonalizedQuoteFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedQuoteFlow',
    inputSchema: GeneratePersonalizedQuoteInputSchema,
    outputSchema: GeneratePersonalizedQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
