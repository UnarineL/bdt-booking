import { redirect } from "next/navigation";

import { DashboardPreview } from "@/features/dashboard/dashboard-preview";
import {
  findPrimaryWorkspaceForUser,
  findWorkspaceForUserBySlug,
} from "@/features/workspaces/data/workspace-repository";
import { requireSession } from "@/lib/auth/session";

type DashboardPageProps = {
  searchParams: Promise<{
    workspace?: string;
  }>;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const session = await requireSession();
  const params = await searchParams;

  const requestedWorkspace = params.workspace;

  const workspace = requestedWorkspace
    ? findWorkspaceForUserBySlug(session.user.id, requestedWorkspace)
    : findPrimaryWorkspaceForUser(session.user.id);

  if (!workspace) {
    redirect("/workspaces/new");
  }

  return (
    <DashboardPreview
      workspaceName={workspace.name}
      userInitials={initials(session.user.name || session.user.email)}
    />
  );
}
