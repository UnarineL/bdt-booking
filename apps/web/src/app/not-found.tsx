import Link from "next/link";
import { Button } from "@bdt/ui";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-app px-6 text-app">
      <section className="max-w-md text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page is not here.</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          The address may have changed, or the page may not exist yet.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/">Return to dashboard</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
