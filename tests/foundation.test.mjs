import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const workspace = readFileSync(new URL("../pnpm-workspace.yaml", import.meta.url), "utf8");
const css = readFileSync(new URL("../apps/web/src/app/globals.css", import.meta.url), "utf8");

test("root package pins the agreed pnpm major", () => {
  assert.equal(packageJson.packageManager, "pnpm@11.20.0");
});

test("workspace contains apps and packages boundaries", () => {
  assert.match(workspace, /apps\/\*/);
  assert.match(workspace, /packages\/\*/);
});

test("design system exposes semantic color tokens", () => {
  for (const token of [
    "--bdt-bg",
    "--bdt-surface",
    "--bdt-text",
    "--bdt-text-muted",
    "--bdt-border",
    "--bdt-accent",
  ]) {
    assert.match(css, new RegExp(token));
  }
});

test("dark theme is implemented through semantic token overrides", () => {
  assert.match(css, /html\.dark/);
  assert.match(css, /--bdt-bg:/);
});

test("reduced-motion users receive a safe motion fallback", () => {
  assert.match(css, /prefers-reduced-motion/);
});
