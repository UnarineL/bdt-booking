import type { ComponentProps } from "react";
import { cn } from "../lib/cn";

export function IconButton({ className, type = "button", ...props }: ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(
        "focus-ring grid size-9 place-items-center rounded-lg border border-line bg-surface text-sm text-muted transition hover:bg-surface-subtle hover:text-app-text",
        className,
      )}
      {...props}
    />
  );
}
