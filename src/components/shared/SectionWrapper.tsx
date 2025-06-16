import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  as: Component = 'section',
  ...props
}: SectionWrapperProps) {
  return (
    <Component className={cn('py-12 md:py-20', className)} {...props}>
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </Component>
  );
}
