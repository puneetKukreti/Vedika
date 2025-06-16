import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { LOCATIONS_DATA, LocationData } from '@/lib/constants';
import { CallToActionButton } from '@/components/shared/CallToActionButton';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CONTACT_DETAILS } from '@/lib/constants';
import Link from 'next/link';

interface CityPageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const location = LOCATIONS_DATA.find(loc => loc.slug === params.city);
  if (!location) {
    return { title: 'Location Not Found' };
  }
  return {
    title: `Vedika Vista - ${location.city} Branch`,
    description: `Contact Vedika Vista's ${location.city} branch for accounting and compliance services. Address: ${location.address}`,
  };
}

export default function CityPage({ params }: CityPageProps) {
  const location = LOCATIONS_DATA.find(loc => loc.slug === params.city);

  if (!location) {
    return (
      <SectionWrapper className="py-20 text-center">
        <h1 className="font-headline text-3xl font-bold text-destructive mb-4">Location Not Found</h1>
        <p className="text-lg text-foreground/80">
          Sorry, we couldn't find information for this city.
        </p>
        <CallToActionButton href="/locations" variant="outline" className="mt-8">
          Back to Locations
        </CallToActionButton>
      </SectionWrapper>
    );
  }

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-2">
            Vedika Vista - {location.city}
          </h1>
          <p className="text-lg text-foreground/80">
            Your local partner for expert accounting and compliance solutions.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Map and Details */}
          <div>
            <Card className="shadow-xl rounded-xl overflow-hidden mb-8">
              <CardHeader className="bg-muted/30 p-6">
                <CardTitle className="font-headline text-2xl text-primary-foreground">Our {location.city} Office</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`https://placehold.co/600x400.png?text=${location.city}+Map`}
                    alt={`Map of Vedika Vista ${location.city} office`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={`${location.mapImageHint} city map`}
                  />
                </div>
                
                <div className="space-y-3 text-foreground/90">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent mr-3 shrink-0" />
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{location.phone}</a>
                  </div>
                   <div className="flex items-center">
                    <Mail className="w-5 h-5 text-accent mr-3 shrink-0" />
                    <a href={`mailto:${CONTACT_DETAILS.email}?subject=Inquiry%20from%20${location.city}%20Branch`} className="hover:text-primary transition-colors">{CONTACT_DETAILS.email}</a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3 shrink-0" />
                    <span>{CONTACT_DETAILS.businessHours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
             <CallToActionButton 
              href={`/contact?branch=${location.slug}`} 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              Contact {location.city} Branch
            </CallToActionButton>
          </div>

          {/* Right Column: Services and General CTA */}
          <div className="space-y-8">
            <Card className="shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary-foreground">Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Our {location.city} branch provides a full range of Vedika Vista's services, including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Bookkeeping & Accounting</li>
                  <li>GST & TDS Filing</li>
                  <li>Payroll Management</li>
                  <li>Income Tax Returns</li>
                  <li>Business Registration</li>
                  <li>And more...</li>
                </ul>
                 <Link href="/services" className="text-sm text-primary hover:underline mt-4 inline-block">
                    View all services
                  </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg bg-primary/5">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary-foreground">Why Choose Vedika Vista {location.city}?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Local expertise with national standards</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Personalized service for your business</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Tech-enabled solutions for efficiency</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0" /> Transparent and affordable pricing</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-lg text-foreground/80 mb-4">
                Ready to get started or have questions for our {location.city} team?
              </p>
              <CallToActionButton href="/quote" size="lg">
                Request a Free Quote
              </CallToActionButton>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
