'use client';

import { ReactNode } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="relative z-10 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">StudySpark AI</h1>
              <p className="text-sm text-white/80">Ignite your learning</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">Study Assistant</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-white/5 rounded-full blur-md"></div>
      </div>
    </div>
  );
}
