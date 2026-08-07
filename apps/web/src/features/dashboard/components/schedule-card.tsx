import { Badge, Card } from "@bdt/ui";

const appointments = [
  { time: "13:30", client: "Naledi M.", service: "Consultation", status: "Next" },
  { time: "14:30", client: "Thabo K.", service: "Standard service", status: "Confirmed" },
  { time: "16:00", client: "Mpho R.", service: "Follow-up", status: "Confirmed" },
];

export function ScheduleCard() {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold">Today</h2>
          <p className="mt-1 text-xs text-muted">3 appointments remaining</p>
        </div>
        <a
          href="#calendar"
          className="focus-ring rounded-md text-xs font-medium text-accent hover:text-accent-strong"
        >
          Open calendar
        </a>
      </div>

      <ol className="mt-5 space-y-3">
        {appointments.map((appointment) => (
          <li
            key={`${appointment.time}-${appointment.client}`}
            className="rounded-lg border border-line p-3"
          >
            <div className="flex items-start gap-3">
              <span className="w-12 shrink-0 text-xs font-semibold text-app-text">
                {appointment.time}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{appointment.client}</p>
                <p className="mt-0.5 truncate text-xs text-muted">{appointment.service}</p>
              </div>
              <Badge tone={appointment.status === "Next" ? "accent" : "neutral"}>
                {appointment.status}
              </Badge>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
