import Link from 'next/link';
import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { LOCATIONS_DATA } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LocationsPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">Our Locations</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Vedika Vista proudly serves businesses across India's major metropolitan areas. Find our office nearest to you or contact us for nationwide remote services.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS_DATA.map((location) => (
            <Card key={location.slug} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col">
              <div className="relative h-56 w-full">
                 <Image 
                    src={`https://placehold.co/400x300.png?text=${location.city}`}
                    alt={`${location.city} office location`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={location.mapImageHint}
                  />
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-7 h-7 text-primary mr-3" />
                  <CardTitle className="font-headline text-2xl text-primary-foreground">{location.city}</CardTitle>
                </div>
                <CardDescription className="text-sm text-foreground/70 h-12 overflow-hidden">
                  {location.address.substring(0,100)}{location.address.length > 100 ? '...' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-sm text-foreground/80"><strong>Phone:</strong> {location.phone}</p>
              </CardContent>
              <CardFooter className="p-6 border-t mt-auto">
                <Button asChild variant="outline" className="w-full group">
                  <Link href={`/locations/${location.slug}`}>
                    View {location.city} Branch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/30">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold text-primary mb-4">Can't Find a Location Near You?</h2>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            We offer comprehensive remote accounting and compliance services across India. Distance is not a barrier to quality financial support.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us for Remote Services</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
