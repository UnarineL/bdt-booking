"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth/auth-client";
import { rememberSignInEmail } from "@/lib/auth/client-storage";
import { Button } from "@bdt/ui";

export function SignUpForm() {
  const router = useRouter();
  const [error, setError] = useState<string>();
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(undefined);
    setPending(true);

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();

    const email = String(formData.get("email") ?? "").trim();

    const password = String(formData.get("password") ?? "");

    const result = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setPending(false);

    if (result.error) {
      setError(result.error.message ?? "Unable to create your account.");
      return;
    }

    rememberSignInEmail(email);

    router.push("/onboarding");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Your name" name="name" type="text" autoComplete="name" required />

      <Field label="Email" name="email" type="email" autoComplete="email" required />

      <Field
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        minLength={10}
        required
        hint="At least 10 characters."
      />

      {error ? (
        <p
          className="rounded-lg border border-danger/25 bg-danger/5 px-3 py-2 text-sm text-danger"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating account…" : "Create account"}
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Field({ label, hint, ...props }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-app-text">{label}</span>

      <input
        {...props}
        className="focus-ring mt-2 h-11 w-full rounded-lg border border-line bg-app px-3 text-sm text-app-text placeholder:text-muted/70"
      />

      {hint ? <span className="mt-1.5 block text-xs text-muted">{hint}</span> : null}
    </label>
  );
}
