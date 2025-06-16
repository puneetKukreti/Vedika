'use server';
import { generatePersonalizedQuote, type GeneratePersonalizedQuoteInput, type GeneratePersonalizedQuoteOutput } from '@/ai/flows/generate-personalized-quote';
import { z } from 'zod';

const QuoteInputSchema = z.object({
  accountingNeeds: z.string().min(10, { message: "Please describe your needs in at least 10 characters." }),
});

interface FormState {
  message: string;
  fields?: Record<string, string>;
  quote?: GeneratePersonalizedQuoteOutput;
  error?: boolean;
}

export async function getAIQuoteAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    accountingNeeds: formData.get('accountingNeeds') as string,
  };

  const validatedFields = QuoteInputSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      fields: rawFormData,
      error: true,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const input: GeneratePersonalizedQuoteInput = {
      accountingNeeds: validatedFields.data.accountingNeeds,
    };
    const result = await generatePersonalizedQuote(input);
    return {
      message: "Successfully generated quote.",
      quote: result,
      error: false,
    };
  } catch (e) {
    console.error(e);
    return {
      message: "Failed to generate quote. Please try again later.",
      error: true,
    };
  }
}
