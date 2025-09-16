import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StudySpark AI - Ignite your learning with AI-powered study tools',
  description: 'An AI study assistant that generates practice questions and concise summaries from course materials for students.',
  openGraph: {
    title: 'StudySpark AI',
    description: 'Ignite your learning with AI-powered study tools',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudySpark AI',
    description: 'Ignite your learning with AI-powered study tools',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
