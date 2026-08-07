"use client";

import { useEffect } from "react";
import { Button } from "@bdt/ui";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("BDT Booking route error", {
      message: error.message,
      digest: error.digest,
    });
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-app px-6 text-app">
      <section className="max-w-md text-center">
        <p className="text-sm font-medium text-danger">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">The workspace hit a problem.</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          Your data has not been changed by this screen. Try the action again.
        </p>
        <div className="mt-6">
          <Button onClick={reset}>Try again</Button>
        </div>
      </section>
    </main>
  );
}
