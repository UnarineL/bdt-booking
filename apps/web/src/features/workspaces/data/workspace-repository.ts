import { randomUUID } from "node:crypto";

import {
  slugifyWorkspaceName,
  type CreateWorkspaceInput,
  type Workspace,
  type WorkspaceCategory,
} from "@/features/workspaces/domain/workspace";
import { getSqliteDatabase } from "@/lib/db/sqlite";

type WorkspaceRow = {
  id: string;
  name: string;
  slug: string;
  category: string;
  timezone: string;
  currency: string;
  owner_user_id: string;
  created_at: string;
};

function mapWorkspace(row: WorkspaceRow): Workspace {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category as WorkspaceCategory,
    timezone: row.timezone,
    currency: row.currency,
    ownerUserId: row.owner_user_id,
    createdAt: row.created_at,
  };
}

function nextAvailableSlug(name: string) {
  const database = getSqliteDatabase();
  const base = slugifyWorkspaceName(name) || "workspace";

  const exists = database.prepare("SELECT 1 FROM workspaces WHERE slug = ? LIMIT 1");

  if (!exists.get(base)) {
    return base;
  }

  for (let suffix = 2; suffix < 10000; suffix += 1) {
    const candidate = `${base}-${suffix}`;

    if (!exists.get(candidate)) {
      return candidate;
    }
  }

  throw new Error("Unable to generate a unique workspace slug.");
}

export function findPrimaryWorkspaceForUser(userId: string) {
  const row = getSqliteDatabase()
    .prepare(
      `SELECT
        w.id,
        w.name,
        w.slug,
        w.category,
        w.timezone,
        w.currency,
        w.owner_user_id,
        w.created_at
      FROM workspaces w
      INNER JOIN workspace_members m
        ON m.workspace_id = w.id
      WHERE m.user_id = ?
      ORDER BY w.created_at ASC
      LIMIT 1`,
    )
    .get(userId) as WorkspaceRow | undefined;

  return row ? mapWorkspace(row) : null;
}

export function findWorkspaceForUserBySlug(userId: string, slug: string) {
  const row = getSqliteDatabase()
    .prepare(
      `SELECT
        w.id,
        w.name,
        w.slug,
        w.category,
        w.timezone,
        w.currency,
        w.owner_user_id,
        w.created_at
      FROM workspaces w
      INNER JOIN workspace_members m
        ON m.workspace_id = w.id
      WHERE m.user_id = ?
        AND w.slug = ?
      LIMIT 1`,
    )
    .get(userId, slug) as WorkspaceRow | undefined;

  return row ? mapWorkspace(row) : null;
}

export function createWorkspaceForOwner(userId: string, input: CreateWorkspaceInput) {
  const database = getSqliteDatabase();
  const id = randomUUID();
  const slug = nextAvailableSlug(input.name);
  const now = new Date().toISOString();

  database.exec("BEGIN IMMEDIATE;");

  try {
    database
      .prepare(
        `INSERT INTO workspaces (
          id,
          owner_user_id,
          name,
          slug,
          category,
          timezone,
          currency,
          created_at,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(id, userId, input.name, slug, input.category, input.timezone, input.currency, now, now);

    database
      .prepare(
        `INSERT INTO workspace_members (
          id,
          workspace_id,
          user_id,
          role,
          created_at
        ) VALUES (?, ?, ?, 'owner', ?)`,
      )
      .run(randomUUID(), id, userId, now);

    database.exec("COMMIT;");
  } catch (error) {
    database.exec("ROLLBACK;");
    throw error;
  }

  return {
    id,
    name: input.name,
    slug,
    category: input.category,
    timezone: input.timezone,
    currency: input.currency,
    ownerUserId: userId,
    createdAt: now,
  } satisfies Workspace;
}
