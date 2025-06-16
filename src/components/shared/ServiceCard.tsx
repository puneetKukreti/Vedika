import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, link, className }: ServiceCardProps) {
  return (
    <Card className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden ${className}`}>
      <CardHeader className="items-center text-center p-6 bg-muted/30">
        <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6 text-center">
        <CardDescription className="text-foreground/80 mb-6">{description}</CardDescription>
        <Button variant="outline" asChild className="mt-auto group">
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
