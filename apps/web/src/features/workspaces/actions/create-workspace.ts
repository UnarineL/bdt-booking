"use server";

import { redirect } from "next/navigation";

import { requireSession } from "@/lib/auth/session";
import { createWorkspaceForOwner } from "@/features/workspaces/data/workspace-repository";
import { parseWorkspaceInput } from "@/features/workspaces/domain/workspace";

export type CreateWorkspaceState = {
  error?: string;
};

export async function createWorkspaceAction(
  _state: CreateWorkspaceState,
  formData: FormData,
): Promise<CreateWorkspaceState> {
  const session = await requireSession();

  let workspaceSlug: string;

  try {
    const input = parseWorkspaceInput({
      name: formData.get("name"),
      category: formData.get("category"),
      timezone: formData.get("timezone"),
      currency: formData.get("currency"),
    });

    const workspace = createWorkspaceForOwner(session.user.id, input);
    workspaceSlug = workspace.slug;
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unable to create your workspace.",
    };
  }

  redirect(`/dashboard?workspace=${encodeURIComponent(workspaceSlug)}`);
}
