import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionButtonProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  openInNewTab?: boolean;
}

export function CallToActionButton({
  href,
  children,
  className,
  variant = 'default',
  size = 'lg',
  openInNewTab = false,
  ...props
}: CallToActionButtonProps) {
  return (
    <Button
      asChild
      variant={variant === 'default' ? (className?.includes('bg-accent') ? 'default' : 'default') : variant}
      size={size}
      className={cn(
        '', // Base classes if any
        variant === 'default' && !className?.includes('bg-accent') && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'default' && className?.includes('bg-accent') && 'bg-accent text-accent-foreground hover:bg-accent/90',
        className
      )}
      {...props}
    >
      <Link href={href} target={openInNewTab ? '_blank' : '_self'} rel={openInNewTab ? 'noopener noreferrer' : undefined}>
        {children}
      </Link>
    </Button>
  );
}
