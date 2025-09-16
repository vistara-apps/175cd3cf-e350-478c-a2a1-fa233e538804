import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'rounded-lg shadow-card bg-card text-card-foreground',
      className
    )}>
      {children}
    </div>
  );
}
