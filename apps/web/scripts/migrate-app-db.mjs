import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
const databasePath = resolve(
  process.cwd(),
  process.env.SQLITE_DATABASE_PATH ?? "./data/bdt-booking.sqlite",
);
mkdirSync(dirname(databasePath), { recursive: true });
const database = new DatabaseSync(databasePath);
database.exec("PRAGMA foreign_keys = ON;");
database.exec(`
CREATE TABLE IF NOT EXISTS workspaces (id TEXT PRIMARY KEY,owner_user_id TEXT NOT NULL,name TEXT NOT NULL,slug TEXT NOT NULL UNIQUE,category TEXT NOT NULL,timezone TEXT NOT NULL,currency TEXT NOT NULL,created_at TEXT NOT NULL,updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS workspace_members (id TEXT PRIMARY KEY,workspace_id TEXT NOT NULL,user_id TEXT NOT NULL,role TEXT NOT NULL CHECK(role IN ('owner','admin','staff')),created_at TEXT NOT NULL,FOREIGN KEY(workspace_id) REFERENCES workspaces(id) ON DELETE CASCADE,UNIQUE(workspace_id,user_id));
CREATE INDEX IF NOT EXISTS idx_workspace_members_user_id ON workspace_members(user_id);
CREATE INDEX IF NOT EXISTS idx_workspace_members_workspace_id ON workspace_members(workspace_id);
`);
database.close();
console.warn(`BDT application schema is ready at ${databasePath}`);
