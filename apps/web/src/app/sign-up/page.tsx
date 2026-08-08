import { redirect } from "next/navigation";

import { AuthShell } from "@/features/auth/components/auth-shell";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { getCurrentSession } from "@/lib/auth/session";

type SignUpPageProps = {
  searchParams: Promise<{
    add?: string;
  }>;
};

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const session = await getCurrentSession();
  const params = await searchParams;

  const addingAccount = params.add === "1";

  if (session && !addingAccount) {
    redirect("/account");
  }

  return (
    <AuthShell
      eyebrow={addingAccount ? "Create another account" : "Create your account"}
      title={addingAccount ? "Add another identity." : "Start with one clean workspace."}
      description={
        addingAccount
          ? "This account remains isolated from the others already signed in on this device."
          : "Your account stays separate from your businesses, so one person can manage multiple workspaces without duplicate identities."
      }
      alternate={{
        prompt: "Already have that account?",
        label: "Sign in",
        href: addingAccount ? "/sign-in?add=1" : "/sign-in",
      }}
    >
      <SignUpForm />
    </AuthShell>
  );
}
