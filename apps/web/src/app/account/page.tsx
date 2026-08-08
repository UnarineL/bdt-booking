import { BrandMark } from "@/components/brand/brand-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { AccountSwitcher } from "@/features/auth/components/account-switcher";
import { requireSession } from "@/lib/auth/session";

export default async function AccountPage() {
  await requireSession();

  return (
    <main className="min-h-screen bg-app text-app">
      <header className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:px-8">
        <BrandMark />
        <ThemeToggle />
      </header>

      <section className="mx-auto max-w-xl px-5 py-12 sm:px-8 sm:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Account</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-app-text">
            Choose an account
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            Switch between accounts signed in on this device without mixing their businesses or
            workspace access.
          </p>
        </div>

        <div className="mt-8">
          <AccountSwitcher />
        </div>
      </section>
    </main>
  );
}
