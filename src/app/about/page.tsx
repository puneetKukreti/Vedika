import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { TEAM_MEMBERS, LOCATIONS_DATA } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary/10 via-background to-background pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">About Vedika Vista</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Learn more about our journey, values, and the dedicated team behind Vedika Vista.
          </p>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary-foreground mb-4">Our Vision</h2>
            <p className="text-foreground/80 mb-6 text-lg">
              To be India’s most trusted and innovative financial partner, empowering businesses of all sizes to achieve sustainable growth and compliance excellence through cutting-edge technology and personalized expert guidance.
            </p>
            <Image src="https://placehold.co/500x300.png" alt="Vision" width={500} height={300} className="rounded-lg shadow-md" data-ai-hint="business vision" />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary-foreground mb-4">Our Mission</h2>
            <p className="text-foreground/80 mb-6 text-lg">
              Our mission is to simplify complex accounting and compliance processes for Indian businesses. We achieve this by leveraging technology, providing expert insights, and fostering a culture of transparency and client success, enabling entrepreneurs to focus on their core operations.
            </p>
             <Image src="https://placehold.co/500x300.png" alt="Mission" width={500} height={300} className="rounded-lg shadow-md" data-ai-hint="team mission" />
          </div>
        </div>
      </SectionWrapper>

      {/* Founder's Message */}
      <SectionWrapper className="bg-secondary/30">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <Image 
              src="https://placehold.co/400x500.png" 
              alt="Founder of Vedika Vista" 
              width={400} 
              height={500} 
              className="rounded-lg shadow-xl mx-auto object-cover"
              data-ai-hint="founder portrait" 
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl font-semibold text-primary mb-4">A Message From Our Founder</h2>
            <p className="text-foreground/80 mb-4 italic text-lg">
              "Welcome to Vedika Vista! When I started this journey, my goal was simple: to make high-quality financial expertise accessible to every business in India. We believe that strong financial foundations are key to success, and we are passionate about partnering with you to build yours. Our commitment is to provide transparent, reliable, and tech-forward solutions that adapt to your evolving needs. Thank you for trusting us."
            </p>
            <p className="font-semibold text-primary-foreground">Priya Sharma, Founder & CEO</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Team */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Meet Our Experts</h2>
          <p className="text-md md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Our team of seasoned professionals is dedicated to providing you with the best financial advice and services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image 
                  src={member.imageUrl} 
                  alt={member.name} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={member.imageHint}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-headline text-xl font-semibold text-primary-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                {member.bio && <p className="text-sm text-foreground/70">{member.bio.substring(0,100)}...</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Locations & Expansion Plan */}
      <SectionWrapper className="bg-primary/5">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Our Reach & Future</h2>
          <p className="text-md md:text-lg text-foreground/80 max-w-2xl mx-auto">
            We are proud to serve clients across India's major metro cities and are continuously expanding our presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-headline text-2xl font-semibold text-primary-foreground mb-4">Current Locations</h3>
            <ul className="space-y-3">
              {LOCATIONS_DATA.map((location) => (
                <li key={location.slug} className="flex items-center text-foreground/80">
                  <MapPin className="h-5 w-5 text-accent mr-3 shrink-0" />
                  <span>{location.city}</span>
                </li>
              ))}
            </ul>
             <div className="mt-6 relative h-64 md:h-80">
                <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Hyderabad Office" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg shadow-md"
                    data-ai-hint="office building"
                />
                <p className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Hyderabad Office (Representation)</p>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold text-primary-foreground mb-4">Expansion Plans</h3>
            <p className="text-foreground/80 mb-4">
              Vedika Vista is committed to growth and accessibility. Our strategic expansion plan includes:
            </p>
            <ul className="space-y-3">
              {[
                "Establishing new branches in Tier-II cities.",
                "Enhancing our digital platform for remote client servicing.",
                "Partnering with local business communities.",
                "Investing in training for regional compliance specializations."
              ].map((plan, index) => (
                <li key={index} className="flex items-center text-foreground/80">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
             <div className="mt-6 relative h-64 md:h-80">
                <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="India map with pins" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg shadow-md"
                    data-ai-hint="India map logistics"
                />
                 <p className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Nationwide Expansion Focus</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
