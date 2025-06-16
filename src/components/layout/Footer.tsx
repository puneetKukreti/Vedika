import Link from 'next/link';
import { Sprout } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_DETAILS, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Vedika Vista Home">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">Vedika Vista</span>
            </Link>
            <p className="text-sm">
              India’s Trusted Accounting & Compliance Partner. We provide expert financial services to help your business thrive.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="text-secondary-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-headline font-semibold text-primary tracking-wider uppercase">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => ( // Show first 5 main nav links
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
             <h3 className="text-md font-headline font-semibold text-primary tracking-wider uppercase">Contact Us</h3>
             <address className="mt-4 space-y-2 text-sm not-italic">
                <p>{CONTACT_DETAILS.address}</p>
                <p>Email: <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary">{CONTACT_DETAILS.email}</a></p>
                <p>Phone: <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`} className="hover:text-primary">{CONTACT_DETAILS.phone}</a></p>
                <p>{CONTACT_DETAILS.businessHours}</p>
             </address>
          </div>

          {/* Newsletter Signup (Example) */}
          <div>
            <h3 className="text-md font-headline font-semibold text-primary tracking-wider uppercase">Stay Updated</h3>
            <p className="mt-4 text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <Input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-border bg-background px-3 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:ml-3 sm:mt-0 sm:flex-shrink-0">
                <Button type="submit" className="flex w-full items-center justify-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/80">
            &copy; {currentYear} Vedika Vista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
