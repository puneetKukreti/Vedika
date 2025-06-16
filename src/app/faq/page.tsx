import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/constants';

export default function FaqPage() {
  const allFaqs = SERVICES_DATA.reduce((acc, service) => {
    service.faqs.forEach(faq => {
      acc.push({ ...faq, serviceTitle: service.title });
    });
    return acc;
  }, [] as Array<{ question: string; answer: string; serviceTitle: string }>);

  // Add some general FAQs
  const generalFaqs = [
    { question: "What industries does Vedika Vista specialize in?", answer: "We cater to a diverse range of industries including e-commerce, manufacturing, IT services, startups, retail, and more. Our team has experience handling the unique compliance needs of various sectors.", serviceTitle: "General"},
    { question: "How do you ensure data security and confidentiality?", answer: "Data security is our top priority. We use encrypted communication channels, secure cloud storage, and strict access controls. Our team is trained on data privacy best practices and adheres to confidentiality agreements.", serviceTitle: "General"},
    { question: "Can I switch from my current accountant to Vedika Vista?", answer: "Absolutely! We make the transition process smooth and hassle-free. We'll coordinate with your previous accountant to ensure all necessary data is transferred securely and efficiently.", serviceTitle: "General"},
    { question: "What are your payment terms?", answer: "We offer flexible payment terms, including monthly, quarterly, and annual subscriptions for ongoing services. For one-time services, payment is typically due upon engagement. We accept various payment methods.", serviceTitle: "General"}
  ];
  
  const combinedFaqs = [...generalFaqs, ...allFaqs];


  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          {combinedFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {combinedFaqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border rounded-lg shadow-sm bg-card">
                  <AccordionTrigger className="p-4 md:p-6 text-left hover:no-underline font-medium text-primary-foreground text-lg">
                    {faq.question}
                    <span className="ml-auto text-xs font-normal text-muted-foreground pr-2">({faq.serviceTitle})</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 md:p-6 pt-0 text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-lg text-foreground/70">No FAQs available at the moment. Please check back later or contact us if you have specific questions.</p>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
