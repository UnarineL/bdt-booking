import { MetricCard } from "@/features/dashboard/components/metric-card";

const metrics = [
  { label: "Bookings today", value: "18", delta: "+12%", tone: "positive" as const },
  { label: "Returning clients", value: "64%", delta: "+4.2%", tone: "positive" as const },
  { label: "Utilization", value: "78%", delta: "Stable", tone: "neutral" as const },
  { label: "No-shows", value: "3.1%", delta: "-1.4%", tone: "positive" as const },
];

export function MetricsGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}
