import type { ComponentProps } from "react";
import { cn } from "../lib/cn";

type BadgeProps = ComponentProps<"span"> & {
  tone?: "neutral" | "accent";
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium",
        tone === "accent" ? "bg-accent-soft text-accent" : "bg-surface-subtle text-muted",
        className,
      )}
      {...props}
    />
  );
}
