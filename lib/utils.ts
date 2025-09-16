import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCredits(credits: number): string {
  return credits.toFixed(2);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function estimateCredits(text: string, type: 'questions' | 'summary'): number {
  const wordCount = text.split(' ').length;
  const baseCredits = type === 'questions' ? 0.5 : 0.1;
  const multiplier = Math.ceil(wordCount / 100);
  return baseCredits * multiplier;
}
