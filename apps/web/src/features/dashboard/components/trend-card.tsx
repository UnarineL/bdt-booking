import { Card } from "@bdt/ui";

const points = [38, 44, 42, 56, 50, 61, 72, 67, 76, 82, 79, 88];

export function TrendCard() {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold">Booking trend</h2>
          <p className="mt-1 text-xs text-muted">Last 12 weeks</p>
        </div>
        <div className="rounded-lg border border-line bg-surface-subtle px-3 py-2 text-xs text-muted">
          Weekly <span aria-hidden="true">⌄</span>
        </div>
      </div>

      <div
        className="mt-8 flex h-48 items-end gap-2 sm:gap-3"
        aria-label="Illustrative booking trend chart"
      >
        {points.map((height, index) => (
          <div key={`${height}-${index}`} className="flex min-w-0 flex-1 items-end">
            <div
              className="w-full rounded-t-md bg-accent/80 transition hover:bg-accent"
              style={{ height: `${height}%` }}
              title={`Week ${index + 1}: ${height}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted">
        <span>12 weeks ago</span>
        <span>Current week</span>
      </div>
    </Card>
  );
}
