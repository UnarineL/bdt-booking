export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-app text-app">
      <div className="flex items-center gap-3 text-sm text-muted" role="status" aria-live="polite">
        <span className="size-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
        Preparing your workspace…
      </div>
    </main>
  );
}
