"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth/auth-client";
import { getLastSignInEmail, rememberSignInEmail } from "@/lib/auth/client-storage";
import { Button } from "@bdt/ui";

type SignInFormProps = {
  redirectTo?: string;
};

export function SignInForm({ redirectTo = "/dashboard" }: SignInFormProps) {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string>();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const rememberedEmail = getLastSignInEmail();

    if (emailInputRef.current && rememberedEmail) {
      emailInputRef.current.value = rememberedEmail;
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(undefined);
    setPending(true);

    const formData = new FormData(event.currentTarget);

    const email = String(formData.get("email") ?? "").trim();

    const password = String(formData.get("password") ?? "");

    const result = await authClient.signIn.email({
      email,
      password,
    });

    setPending(false);

    if (result.error) {
      setError("The email or password is incorrect.");
      return;
    }

    rememberSignInEmail(email);

    router.push(redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-app-text">Email</span>

        <input
          ref={emailInputRef}
          name="email"
          type="email"
          autoComplete="email"
          required
          className="focus-ring mt-2 h-11 w-full rounded-lg border border-line bg-app px-3 text-sm text-app-text"
        />

        <span className="mt-1.5 block text-xs text-muted">
          Use another account by replacing the email above.
        </span>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-app-text">Password</span>

        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="focus-ring mt-2 h-11 w-full rounded-lg border border-line bg-app px-3 text-sm text-app-text"
        />
      </label>

      {error ? (
        <p
          className="rounded-lg border border-danger/25 bg-danger/5 px-3 py-2 text-sm text-danger"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
}
