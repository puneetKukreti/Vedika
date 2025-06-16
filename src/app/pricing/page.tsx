import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { PRICING_PLANS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CallToActionButton } from '@/components/shared/CallToActionButton';
import { CheckCircle, BadgeIndianRupee } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PricingPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">Transparent Pricing</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Affordable and clear pricing plans designed to fit your business needs. No hidden fees, just straightforward value.
          </p>
        </div>
      </SectionWrapper>

      {/* Pricing Table */}
      <SectionWrapper>
        <Card className="shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="p-6 md:p-8 bg-muted/30">
            <CardTitle className="font-headline text-3xl text-primary-foreground text-center">Our Service Plans</CardTitle>
            <CardDescription className="text-center text-foreground/80 max-w-lg mx-auto">
              Find the perfect plan for your business. For custom requirements, please request a quote.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableCaption className="py-4 text-sm">Prices are indicative and may vary based on complexity and transaction volume. GST applicable.</TableCaption>
                <TableHeader>
                  <TableRow className="bg-secondary/50 hover:bg-secondary/60">
                    <TableHead className="w-[250px] font-semibold text-secondary-foreground">Service</TableHead>
                    <TableHead className="font-semibold text-secondary-foreground">Plan Type</TableHead>
                    <TableHead className="font-semibold text-secondary-foreground text-right">Starting Price</TableHead>
                    <TableHead className="font-semibold text-secondary-foreground text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {PRICING_PLANS.map((plan) => (
                    <TableRow key={plan.service + plan.planType} className="hover:bg-background/50">
                      <TableCell className="font-medium text-primary-foreground">{plan.service}</TableCell>
                      <TableCell className="text-foreground/80">{plan.planType}</TableCell>
                      <TableCell className="text-right font-semibold text-primary-foreground/90">{plan.startingPrice}</TableCell>
                      <TableCell className="text-center">
                        <CallToActionButton 
                          href={plan.ctaLink || "/quote"} 
                          size="sm" 
                          variant="outline"
                          className="text-xs"
                        >
                          {plan.ctaLink ? 'View Details' : 'Get Custom Quote'}
                        </CallToActionButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </SectionWrapper>

      {/* Highlighted Plans or Custom Quote Section */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.slice(0, 3).map((plan, index) => (
             <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col">
              <CardHeader className="bg-primary/5 p-6">
                <div className="flex items-center justify-center mb-3">
                    <BadgeIndianRupee className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-center text-primary-foreground">{plan.service}</CardTitle>
                <CardDescription className="text-center text-foreground/70">{plan.planType} Plan</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-3xl font-bold text-center text-primary mb-4">{plan.startingPrice}</p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 border-t mt-auto">
                <CallToActionButton href="/quote" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Request This Plan
                </CallToActionButton>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Need a Tailored Solution?</h3>
            <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
                Every business is unique. If our standard plans don't quite fit, we're happy to create a custom quote based on your specific requirements.
            </p>
            <CallToActionButton href="/quote" size="lg">
                Request Custom Quote
            </CallToActionButton>
        </div>
      </SectionWrapper>
    </>
  );
}
