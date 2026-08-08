import type { ReactNode } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
type Props = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  alternate: { prompt: string; label: string; href: string };
};
export function AuthShell({ eyebrow, title, description, children, alternate }: Props) {
  return (
    <main className="min-h-screen bg-app text-app">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="focus-ring rounded-lg">
          <BrandMark />
        </Link>
        <ThemeToggle />
      </header>
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_460px]">
        <div className="hidden max-w-xl lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-app-text">{title}</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted">{description}</p>
        </div>
        <div>
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-[var(--bdt-shadow)] sm:p-7">
            <div className="lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h1>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </div>
            <div className="mt-6 lg:mt-0">{children}</div>
          </div>
          <p className="mt-5 text-center text-sm text-muted">
            {alternate.prompt}{" "}
            <Link
              className="focus-ring rounded font-medium text-accent hover:text-accent-strong"
              href={alternate.href}
            >
              {alternate.label}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
