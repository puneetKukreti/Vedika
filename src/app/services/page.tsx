import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SERVICES_DATA } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CallToActionButton } from '@/components/shared/CallToActionButton';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">Our Comprehensive Services</h1>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Vedika Vista offers a full spectrum of accounting and compliance services tailored to meet the diverse needs of businesses in India. Explore how we can help your business thrive.
          </p>
        </div>
      </SectionWrapper>

      {SERVICES_DATA.map((service, index) => (
        <SectionWrapper key={service.id} id={service.id} className={index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}>
          <Card className="overflow-hidden shadow-xl rounded-xl">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative min-h-[300px] md:min-h-full">
                <Image 
                  src={`https://placehold.co/600x700.png?a=${service.id}`}
                  alt={service.title} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={service.imageHint || service.title.toLowerCase()}
                />
              </div>
              <div className="flex flex-col">
                <CardHeader className="p-6 md:p-8">
                  <div className="flex items-center mb-3">
                    <service.icon className="w-10 h-10 text-primary mr-4" />
                    <CardTitle className="font-headline text-3xl text-primary-foreground">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-md text-foreground/80">{service.overview}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 flex-grow">
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-primary-foreground mb-3">Key Benefits:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 shrink-0" />
                          <span className="text-foreground/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-primary-foreground mb-3">Our Process:</h3>
                     <ol className="list-decimal list-inside space-y-2 mb-6 text-foreground/80">
                        {service.process.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>
                  </div>

                  {service.faqs && service.faqs.length > 0 && (
                    <div>
                      <h3 className="font-headline text-xl font-semibold text-primary-foreground mb-3">FAQs:</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {service.faqs.map((faq, i) => (
                          <AccordionItem value={`item-${i}`} key={i}>
                            <AccordionTrigger className="text-left hover:no-underline text-primary-foreground/90">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-foreground/70">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-6 md:p-8 bg-muted/20">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <CallToActionButton href="/quote" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                      Get Quotation for {service.title}
                    </CallToActionButton>
                    <CallToActionButton href="/contact" variant="outline" className="flex-1">
                      Book Now
                    </CallToActionButton>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        </SectionWrapper>
      ))}
    </>
  );
}
