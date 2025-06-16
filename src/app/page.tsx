'use client';
import Image from 'next/image';
import { SERVICES_DATA, WHY_CHOOSE_US_DATA } from '@/lib/constants';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CallToActionButton } from '@/components/shared/CallToActionButton';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              India’s Trusted Accounting & Compliance Partner
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              Vedika Vista provides expert, tech-enabled accounting and compliance solutions to empower your business growth.
            </p>
            <CallToActionButton href="/contact" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
              Get a Free Consultation
            </CallToActionButton>
          </div>
          <div className="relative h-64 md:h-96 animate-slide-in-up">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Professionals at work"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-2xl"
              data-ai-hint="professionals business meeting"
              priority
            />
          </div>
        </div>
      </SectionWrapper>

      {/* About Us (Brief) */}
      <SectionWrapper className="bg-background">
        <div className="text-center max-w-3xl mx-auto animate-fade-in animation-delay-200">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">About Vedika Vista</h2>
          <p className="text-md md:text-lg text-foreground/80">
            At Vedika Vista, our vision is to be the most trusted and innovative financial partner for businesses across India. Our mission is to simplify accounting and compliance through technology and expert guidance, enabling entrepreneurs to focus on what they do best.
          </p>
        </div>
      </SectionWrapper>

      {/* Our Services */}
      <SectionWrapper className="bg-secondary/30">
        <div className="text-center mb-12 animate-fade-in animation-delay-300">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Our Core Services</h2>
          <p className="text-md md:text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to meet all your accounting and compliance needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0,6).map((service, index) => ( // Display up to 6 services on homepage
            <div key={service.id} className={`animate-slide-in-up animation-delay-${400 + index * 100}`}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                link={`/services#${service.id}`}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-1000">
          <CallToActionButton href="/services" variant="outline" size="lg">
            Explore All Services
          </CallToActionButton>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="bg-background">
        <div className="text-center mb-12 animate-fade-in animation-delay-600">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Why Choose Vedika Vista?</h2>
          <p className="text-md md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Experience the Vedika Vista difference with our client-centric approach and commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_DATA.map((usp, index) => (
            <Card key={usp.title} className={`text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg animate-slide-in-up animation-delay-${700 + index * 100}`}>
              <CardHeader className="items-center pt-6">
                <div className="p-3 bg-accent/10 rounded-full mb-3 inline-block">
                  <usp.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-headline text-lg text-primary-foreground">{usp.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm text-foreground/70">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Client Testimonials (Placeholder) */}
      <SectionWrapper className="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Loved by Our Clients</h2>
           <p className="text-md md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience with Vedika Vista.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <Card key={i} className="shadow-lg rounded-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image src={`https://placehold.co/50x50.png`} alt={`Client ${i}`} width={50} height={50} className="rounded-full" data-ai-hint="person avatar"/>
                  <div className="ml-4">
                    <p className="font-semibold text-primary-foreground">Client Name {i}</p>
                    <p className="text-xs text-muted-foreground">Company Title</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 italic">"Vedika Vista has been instrumental in managing our finances. Highly recommended!"</p>
                 <div className="flex mt-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <CheckCircle key={starIndex} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>


      {/* Call to Action Again */}
      <SectionWrapper className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto animate-fade-in animation-delay-800">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-6">Ready to Streamline Your Finances?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Let our experts handle your accounting and compliance, so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <CallToActionButton href="/contact" size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Talk to Our Experts
            </CallToActionButton>
            <CallToActionButton href="/quote" size="lg" variant="outline" className="text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Book Free Audit Call
            </CallToActionButton>
          </div>
           <div className="mt-8">
             <CallToActionButton href="/refer" variant="link" className="text-accent-foreground hover:text-accent-foreground/80">
                Refer and Earn ₹2,000
             </CallToActionButton>
           </div>
        </div>
      </SectionWrapper>
       <style jsx global>{`
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }

        .animate-fade-in {
          animation-name: fadeIn;
          animation-duration: 0.8s;
          animation-fill-mode: both;
        }
        .animate-slide-in-up {
          animation-name: slideInUp;
          animation-duration: 0.7s;
          animation-fill-mode: both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
