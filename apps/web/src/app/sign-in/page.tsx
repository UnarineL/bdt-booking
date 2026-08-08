import { AuthShell } from "@/features/auth/components/auth-shell";
import { SignInForm } from "@/features/auth/components/sign-in-form";

type SignInPageProps = {
  searchParams: Promise<{
    add?: string;
  }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const params = await searchParams;
  const addingAccount = params.add === "1";

  return (
    <AuthShell
      eyebrow={addingAccount ? "Add account" : "Welcome back"}
      title={addingAccount ? "Sign in to another account." : "Sign in to BDT Booking."}
      description={
        addingAccount
          ? "Enter the account you want to add to this device."
          : "We may remember your previously used email, but you always choose which account to sign into."
      }
      alternate={{
        prompt: "Need a new account?",
        label: "Create one",
        href: addingAccount ? "/sign-up?add=1" : "/sign-up",
      }}
    >
      <SignInForm redirectTo={addingAccount ? "/account" : "/dashboard"} />
    </AuthShell>
  );
}
