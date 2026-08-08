import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseWorkspaceInput,
  slugifyWorkspaceName,
} from "../apps/web/src/features/workspaces/domain/workspace";
test("workspace names become stable URL slugs", () => {
  assert.equal(slugifyWorkspaceName("  Fresh Cuts Studio  "), "fresh-cuts-studio");
  assert.equal(slugifyWorkspaceName("BDT & Co."), "bdt-co");
});
test("workspace input normalizes currency", () => {
  const input = parseWorkspaceInput({
    name: "Fresh Cuts",
    category: "beauty",
    timezone: "Africa/Johannesburg",
    currency: "zar",
  });
  assert.equal(input.currency, "ZAR");
});
test("workspace input rejects invalid categories", () => {
  assert.throws(
    () =>
      parseWorkspaceInput({
        name: "Fresh Cuts",
        category: "made-up",
        timezone: "Africa/Johannesburg",
        currency: "ZAR",
      }),
    /valid business category/,
  );
});
test("workspace input rejects malformed currencies", () => {
  assert.throws(
    () =>
      parseWorkspaceInput({
        name: "Fresh Cuts",
        category: "beauty",
        timezone: "Africa/Johannesburg",
        currency: "R",
      }),
    /three-letter ISO code/,
  );
});
