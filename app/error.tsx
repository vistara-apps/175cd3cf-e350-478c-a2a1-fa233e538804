'use client';

import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="text-center text-white max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          Something went wrong!
        </h2>
        <p className="text-white/80 mb-6">
          We encountered an error while loading StudySpark AI. Please try again.
        </p>
        <Button
          onClick={reset}
          variant="secondary"
          className="bg-white text-blue-900 hover:bg-white/90"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
