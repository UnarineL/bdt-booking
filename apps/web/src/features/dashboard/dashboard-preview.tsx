import { AppShell } from "@/components/layout/app-shell";
import { ActivityFeed } from "@/features/dashboard/components/activity-feed";
import { MetricsGrid } from "@/features/dashboard/components/metrics-grid";
import { ScheduleCard } from "@/features/dashboard/components/schedule-card";
import { TrendCard } from "@/features/dashboard/components/trend-card";
import { Button } from "@bdt/ui";

export function DashboardPreview() {
  return (
    <AppShell>
      <section className="pb-24 lg:pb-6" aria-labelledby="dashboard-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">Overview</p>
            <h1
              id="dashboard-heading"
              className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Your business at a glance
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              A calm operational view designed to show the signal first and let details stay one
              click away.
            </p>
          </div>
          <Button>New booking</Button>
        </div>

        <div className="mt-6">
          <MetricsGrid />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
          <TrendCard />
          <ScheduleCard />
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ActivityFeed />
          <section className="rounded-xl border border-line bg-surface p-5 shadow-[var(--bdt-shadow)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-sm font-semibold">Business health</h2>
                <p className="mt-1 text-xs text-muted">
                  Foundation preview, not production analytics.
                </p>
              </div>
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                84%
              </span>
            </div>
            <div
              className="mt-5 h-2 overflow-hidden rounded-full bg-surface-subtle"
              aria-label="Business health 84%"
            >
              <div className="h-full w-[84%] rounded-full bg-accent" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Profile", "Complete"],
                ["Hours", "Configured"],
                ["Gallery", "Add 3 photos"],
                ["Reminders", "Not configured"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-line bg-surface-subtle p-3">
                  <p className="text-xs text-muted">{label}</p>
                  <p className="mt-1 text-sm font-medium text-app-text">{value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </AppShell>
  );
}
