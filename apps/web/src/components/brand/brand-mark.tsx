type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <span
        className="grid size-8 shrink-0 place-items-center rounded-xl bg-accent text-sm font-bold text-white shadow-sm"
        aria-hidden="true"
      >
        B
      </span>
      {!compact && (
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-app-text">BDT Booking</p>
          <p className="truncate text-[11px] text-muted">Business workspace</p>
        </div>
      )}
    </div>
  );
}
