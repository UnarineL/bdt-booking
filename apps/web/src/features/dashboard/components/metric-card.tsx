import { Card } from "@bdt/ui";

type MetricCardProps = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "neutral";
};

export function MetricCard({ label, value, delta, tone }: MetricCardProps) {
  return (
    <Card className="p-4 sm:p-5">
      <p className="text-xs font-medium text-muted">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
        <span
          className={
            tone === "positive" ? "text-xs font-medium text-success" : "text-xs text-muted"
          }
        >
          {delta}
        </span>
      </div>
    </Card>
  );
}
