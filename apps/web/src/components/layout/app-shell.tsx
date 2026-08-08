import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import { SignOutButton } from "@/features/auth/components/sign-out-button";
import { Badge, IconButton } from "@bdt/ui";
const navItems = ["Overview", "Calendar", "Customers", "Services", "Team", "Analytics"];
type Props = { children: ReactNode; workspaceName: string; userInitials: string };
export function AppShell({ children, workspaceName, userInitials }: Props) {
  return (
    <div className="min-h-screen bg-app text-app">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-line bg-surface p-4 lg:block">
        <BrandMark />
        <div className="mt-8 rounded-xl border border-line bg-surface-subtle p-3">
          <p className="truncate text-xs font-medium text-app-text">{workspaceName}</p>
          <p className="mt-0.5 text-[11px] text-muted">Owner workspace</p>
        </div>
        <nav className="mt-5" aria-label="Workspace navigation">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  href={index === 0 ? "#overview" : `#${item.toLowerCase()}`}
                  className={`focus-ring flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${index === 0 ? "bg-accent-soft font-medium text-app-text" : "text-muted hover:bg-surface-subtle hover:text-app-text"}`}
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
        <div className="absolute inset-x-4 bottom-4 space-y-3">
          <div className="rounded-xl border border-line p-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-muted">Free workspace</span>
              <Badge>Active</Badge>
            </div>
          </div>
          <SignOutButton />
        </div>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-line bg-app/90 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="lg:hidden">
              <BrandMark compact />
            </div>
            <div className="hidden min-w-0 lg:block">
              <p className="text-sm font-medium text-app-text">Business overview</p>
              <p className="text-xs text-muted">Your workspace is ready for the next capability.</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <IconButton aria-label="Open notifications" title="Notifications">
                <span aria-hidden="true">●</span>
              </IconButton>
              <div className="flex items-center gap-2">
                <span
                  className="grid size-9 place-items-center rounded-full border border-line bg-surface-subtle text-xs font-semibold text-app-text"
                  aria-label="User profile"
                >
                  {userInitials}
                </span>

                <div className="lg:hidden">
                  <SignOutButton />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main
          id="overview"
          className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
