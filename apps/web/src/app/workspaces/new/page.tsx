import { BrandMark } from "@/components/brand/brand-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { WorkspaceOnboardingForm } from "@/features/workspaces/components/workspace-onboarding-form";
import { requireSession } from "@/lib/auth/session";

export default async function NewWorkspacePage() {
  await requireSession();

  return (
    <main className="min-h-screen bg-app text-app">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <BrandMark />
        <ThemeToggle />
      </header>

      <section className="mx-auto grid max-w-5xl items-start gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_460px] lg:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            New workspace
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
            Create another business.
          </h1>

          <p className="mt-4 text-base leading-7 text-muted">
            Each workspace keeps its customers, services, staff, schedules, and operations isolated
            from your other businesses.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 shadow-[var(--bdt-shadow)] sm:p-7">
          <WorkspaceOnboardingForm />
        </div>
      </section>
    </main>
  );
}
