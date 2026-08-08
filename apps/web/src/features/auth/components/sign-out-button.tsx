"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";
import { Button } from "@bdt/ui";
export function SignOutButton() {
  const router = useRouter();
  async function signOut() {
    await authClient.signOut();
    router.push("/sign-in");
    router.refresh();
  }
  return (
    <Button variant="secondary" onClick={signOut}>
      Sign out
    </Button>
  );
}
