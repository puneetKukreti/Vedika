import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CallToActionButton } from '@/components/shared/CallToActionButton';
import { Gift } from 'lucide-react';

export default function ReferPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-accent/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <Gift className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">Refer and Earn ₹2,000!</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Love our services? Share Vedika Vista with your network and earn rewards for every successful referral.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary-foreground mb-6">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-left text-lg text-foreground/80 mx-auto max-w-xl mb-8">
            <li><strong>Share:</strong> Tell your friends, family, or business associates about Vedika Vista.</li>
            <li><strong>They Sign Up:</strong> When your referral signs up for any of our paid services.</li>
            <li><strong>You Earn:</strong> You receive ₹2,000 as a thank you from us!</li>
          </ol>
          <p className="text-foreground/80 mb-8">
            It's that simple! Help others streamline their finances and get rewarded for it.
            This feature is coming soon. Please check back later or contact us for more details.
          </p>
          <CallToActionButton href="/contact" size="lg">
            Contact Us to Learn More
          </CallToActionButton>
        </div>
      </SectionWrapper>
    </>
  );
}
