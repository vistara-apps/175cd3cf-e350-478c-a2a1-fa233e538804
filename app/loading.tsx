export default function Loading() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-md mx-auto p-4">
        <div className="h-8 bg-white/20 rounded-lg w-3/4 mx-auto"></div>
        <div className="space-y-3">
          <div className="h-4 bg-white/20 rounded w-full"></div>
          <div className="h-4 bg-white/20 rounded w-5/6"></div>
          <div className="h-4 bg-white/20 rounded w-4/6"></div>
        </div>
        <div className="h-12 bg-white/20 rounded-lg w-full"></div>
      </div>
    </div>
  );
}
