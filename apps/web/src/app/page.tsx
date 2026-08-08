import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { getCurrentSession } from "@/lib/auth/session";
import { Button } from "@bdt/ui";

export default async function HomePage() {
  const session = await getCurrentSession();

  const createWorkspaceHref = session ? "/workspaces/new" : "/sign-up";
  const accountHref = session ? "/account" : "/sign-in";

  return (
    <main className="min-h-screen bg-app text-app">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <BrandMark />

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button asChild variant="secondary">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Business operations, without the clutter
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Booking should feel calm for you and your customers.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            BDT Booking brings appointments, business operations, customers, and insights into one
            focused workspace built to grow with your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={createWorkspaceHref}>
                {session ? "Create another business" : "Create your workspace"}
              </Link>
            </Button>

            <Button asChild variant="secondary">
              <Link href={accountHref}>
                {session ? "Manage account" : "I already have an account"}
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 shadow-[var(--bdt-shadow)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">Today</p>
              <p className="mt-1 text-2xl font-semibold">18 bookings</p>
            </div>

            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
              +12%
            </span>
          </div>

          <div className="mt-8 grid grid-cols-7 items-end gap-2">
            {[32, 46, 38, 58, 70, 63, 86].map((height, index) => (
              <div
                key={`${height}-${index}`}
                className="flex h-36 items-end rounded-md bg-surface-subtle p-1"
              >
                <div className="w-full rounded-sm bg-accent" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-muted">
            A quiet dashboard that surfaces what matters without turning your business into a wall
            of text.
          </p>
        </div>
      </section>
    </main>
  );
}
