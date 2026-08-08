import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";

declare global {
  var __bdtSqliteDatabase: DatabaseSync | undefined;
}

function resolveDatabasePath() {
  return resolve(process.cwd(), process.env.SQLITE_DATABASE_PATH ?? "./data/bdt-booking.sqlite");
}

export function getSqliteDatabase() {
  if (globalThis.__bdtSqliteDatabase) return globalThis.__bdtSqliteDatabase;
  const databasePath = resolveDatabasePath();
  mkdirSync(dirname(databasePath), { recursive: true });
  const database = new DatabaseSync(databasePath);
  database.exec("PRAGMA foreign_keys = ON;");
  database.exec("PRAGMA journal_mode = WAL;");
  database.exec("PRAGMA busy_timeout = 5000;");
  globalThis.__bdtSqliteDatabase = database;
  return database;
}
