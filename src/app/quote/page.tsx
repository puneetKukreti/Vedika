'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getAIQuoteAction } from './actions';
import { Lightbulb, Loader2, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: '',
  quote: undefined,
  error: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Generating Quote...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-5 w-5" />
          Get Personalized Quote
        </>
      )}
    </Button>
  );
}

export default function AIQuotePage() {
  const [state, formAction] = useFormState(getAIQuoteAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state.message, state.error, toast]);


  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">AI-Powered Quote Tool</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Describe your accounting needs, and our AI will provide a personalized service suggestion and an estimated quote.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary-foreground">Describe Your Requirements</CardTitle>
              <CardDescription>
                The more details you provide, the more accurate our suggestion and estimate will be. For example, mention your business type, transaction volume, specific services needed (e.g., GST, payroll for 10 employees), etc.
              </CardDescription>
            </CardHeader>
            <form action={formAction}>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="accountingNeeds" className="text-lg font-medium text-foreground/90">Your Accounting Needs</Label>
                  <Textarea
                    id="accountingNeeds"
                    name="accountingNeeds"
                    placeholder="e.g., I run a small e-commerce business and need help with monthly bookkeeping, GST filing, and annual IT returns. I have about 100-150 transactions per month."
                    className="min-h-[150px] mt-2 text-base"
                    required
                    aria-describedby="needs-description"
                  />
                   <p id="needs-description" className="text-sm text-muted-foreground mt-1">
                    Please provide as much detail as possible.
                  </p>
                  {state.errors?.accountingNeeds && (
                    <p className="text-sm font-medium text-destructive mt-1">{state.errors.accountingNeeds[0]}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>

          {state.quote && !state.error && (
            <Card className="mt-8 shadow-lg rounded-xl border-green-500 border-2 animate-fade-in">
              <CardHeader className="bg-green-500/10">
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                  <CardTitle className="font-headline text-2xl text-green-700">Your Personalized Suggestion & Estimate</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">Suggested Service:</h3>
                  <p className="text-foreground/80 bg-muted/30 p-3 rounded-md">{state.quote.serviceSuggestion}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-1">Estimated Quote:</h3>
                  <p className="text-foreground/80 bg-muted/30 p-3 rounded-md">{state.quote.quoteEstimate}</p>
                </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                  Please note: This is an AI-generated estimate. For a precise quote and detailed discussion, please contact us.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <a href="/contact">Discuss with an Expert</a>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </SectionWrapper>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
