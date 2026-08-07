import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Badge, IconButton } from "@bdt/ui";

const navItems = ["Overview", "Calendar", "Customers", "Services", "Team", "Analytics"];

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-app text-app">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-line bg-surface p-4 lg:block">
        <BrandMark />
        <div className="mt-8 rounded-xl border border-line bg-surface-subtle p-3">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-app-text">Fresh Cuts Studio</p>
              <p className="mt-0.5 text-[11px] text-muted">Johannesburg</p>
            </div>
            <span className="text-xs text-muted" aria-hidden="true">
              ⌄
            </span>
          </div>
        </div>

        <nav className="mt-5" aria-label="Workspace navigation">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  href={index === 0 ? "#overview" : `#${item.toLowerCase()}`}
                  className={`focus-ring flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                    index === 0
                      ? "bg-accent-soft font-medium text-app-text"
                      : "text-muted hover:bg-surface-subtle hover:text-app-text"
                  }`}
                >
                  <span
                    className="size-1.5 rounded-full bg-current opacity-60"
                    aria-hidden="true"
                  />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute inset-x-4 bottom-4">
          <div className="rounded-xl border border-line p-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-muted">Free workspace</span>
              <Badge>Active</Badge>
            </div>
            <p className="mt-2 text-xs leading-5 text-muted">
              Core booking tools stay useful before your business needs to upgrade.
            </p>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-line bg-app/90 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="lg:hidden">
              <BrandMark compact />
            </div>
            <div className="hidden min-w-0 lg:block">
              <p className="text-sm font-medium text-app-text">Good afternoon</p>
              <p className="text-xs text-muted">Here is what is happening in your business.</p>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                className="focus-ring hidden min-w-48 rounded-lg border border-line bg-surface px-3 py-2 text-left text-xs text-muted transition hover:border-accent/50 sm:block"
              >
                Search workspace <span className="float-right opacity-60">⌘ K</span>
              </button>
              <IconButton aria-label="Open notifications" title="Notifications">
                <span aria-hidden="true">●</span>
              </IconButton>
              <ThemeToggle />
              <span
                className="grid size-9 place-items-center rounded-full border border-line bg-surface-subtle text-xs font-semibold text-app-text"
                aria-label="User profile"
              >
                UL
              </span>
            </div>
          </div>
        </header>

        <main
          id="overview"
          className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
        >
          {children}
        </main>

        <nav
          className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface/95 px-3 py-2 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid grid-cols-4 gap-1">
            {["Overview", "Calendar", "Customers", "More"].map((item, index) => (
              <li key={item}>
                <a
                  href={index === 0 ? "#overview" : `#${item.toLowerCase()}`}
                  className={`focus-ring block rounded-lg px-2 py-2 text-center text-[11px] ${
                    index === 0 ? "bg-accent-soft font-medium text-app-text" : "text-muted"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
