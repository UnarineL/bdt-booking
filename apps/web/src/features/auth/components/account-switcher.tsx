"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth/auth-client";

type DeviceSession = {
  session: {
    id: string;
    token: string;
  };
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function AccountSwitcher() {
  const router = useRouter();
  const { data: currentSession } = authClient.useSession();

  const [deviceSessions, setDeviceSessions] = useState<DeviceSession[]>([]);
  const [pendingToken, setPendingToken] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function loadSessions() {
      const result = await authClient.multiSession.listDeviceSessions();

      if (result.error) {
        setError("Unable to load accounts on this device.");
        return;
      }

      setDeviceSessions((result.data ?? []) as DeviceSession[]);
    }

    void loadSessions();
  }, []);

  async function activateAccount(sessionToken: string) {
    setPendingToken(sessionToken);
    setError(undefined);

    const result = await authClient.multiSession.setActive({
      sessionToken,
    });

    setPendingToken(undefined);

    if (result.error) {
      setError("Unable to switch accounts. Please try again.");
      return;
    }

    router.refresh();
  }

  async function signOut() {
    await authClient.signOut();
    router.push("/sign-in");
    router.refresh();
  }

  return (
    <div>
      <div className="space-y-2">
        {deviceSessions.map((entry) => {
          const active = entry.user.id === currentSession?.user.id;
          const switching = pendingToken === entry.session.token;

          return (
            <button
              key={entry.session.id}
              type="button"
              disabled={switching}
              onClick={() => activateAccount(entry.session.token)}
              className={`focus-ring group flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition ${
                active
                  ? "border-accent/40 bg-accent-soft"
                  : "border-line bg-surface hover:bg-surface-subtle"
              }`}
            >
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                  active ? "bg-accent text-white" : "bg-surface-subtle text-app-text"
                }`}
                aria-hidden="true"
              >
                {initials(entry.user.name || entry.user.email)}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-app-text">
                  {entry.user.name || "BDT Booking account"}
                </span>

                <span className="mt-0.5 block truncate text-xs text-muted">{entry.user.email}</span>
              </span>

              <span className="flex shrink-0 items-center gap-2">
                {switching ? (
                  <span className="text-xs text-muted">Switching…</span>
                ) : active ? (
                  <>
                    <span className="hidden text-[11px] font-medium text-accent sm:inline">
                      Active
                    </span>

                    <span
                      className="grid size-5 place-items-center rounded-full bg-accent text-[10px] text-white"
                      aria-label="Current account"
                    >
                      ✓
                    </span>
                  </>
                ) : (
                  <span className="text-xs text-muted opacity-0 transition group-hover:opacity-100">
                    Switch
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {error ? (
        <p role="alert" className="mt-3 text-sm text-danger">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-muted">
        <Link
          href="/dashboard"
          className="focus-ring rounded-sm font-medium text-app-text hover:text-accent"
        >
          Continue to dashboard
        </Link>

        <span aria-hidden="true">·</span>

        <Link href="/sign-in?add=1" className="focus-ring rounded-sm hover:text-app-text">
          Add account
        </Link>

        <span aria-hidden="true">·</span>

        <Link href="/sign-up?add=1" className="focus-ring rounded-sm hover:text-app-text">
          Create account
        </Link>

        <span aria-hidden="true">·</span>

        <button type="button" onClick={signOut} className="focus-ring rounded-sm hover:text-danger">
          Sign out
        </button>
      </div>
    </div>
  );
}
