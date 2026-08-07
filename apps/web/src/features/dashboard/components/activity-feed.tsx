import { Card } from "@bdt/ui";

const items = [
  ["New booking", "A customer booked for Friday at 10:00.", "4 min"],
  ["Profile viewed", "Your public profile received 12 new visits.", "18 min"],
  ["Reminder delivered", "Tomorrow's 09:00 reminder was delivered.", "42 min"],
];

export function ActivityFeed() {
  return (
    <Card className="p-5">
      <div>
        <h2 className="text-sm font-semibold">Activity</h2>
        <p className="mt-1 text-xs text-muted">Recent workspace events</p>
      </div>
      <ol className="mt-5 divide-y divide-line">
        {items.map(([title, description, time]) => (
          <li key={`${title}-${time}`} className="flex gap-3 py-3 first:pt-0 last:pb-0">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium">{title}</p>
                <time className="shrink-0 text-[11px] text-muted">{time}</time>
              </div>
              <p className="mt-1 text-xs leading-5 text-muted">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
