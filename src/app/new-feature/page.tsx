
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NewFeaturePage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">
            Exciting New Feature
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            This is a placeholder page for an upcoming feature. Great things are being built here!
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-headline text-2xl font-semibold text-primary-foreground mb-6">
            Under Construction
          </h2>
          <p className="text-foreground/80 mb-8">
            Content for this new feature will be added soon. Stay tuned for updates!
            You can start by editing this file: <code>src/app/new-feature/page.tsx</code>.
          </p>
          <Button asChild size="lg">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
