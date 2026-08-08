export const workspaceCategories = [
  "beauty",
  "health",
  "professional-services",
  "education",
  "fitness",
  "home-services",
  "automotive",
  "other",
] as const;
export type WorkspaceCategory = (typeof workspaceCategories)[number];
export type CreateWorkspaceInput = {
  name: string;
  category: WorkspaceCategory;
  timezone: string;
  currency: string;
};
export type Workspace = {
  id: string;
  name: string;
  slug: string;
  category: WorkspaceCategory;
  timezone: string;
  currency: string;
  ownerUserId: string;
  createdAt: string;
};
const slugPartPattern = /[^a-z0-9]+/g;
export function slugifyWorkspaceName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(slugPartPattern, "-")
    .replace(/^-+|-+$/g, "");
}
export function parseWorkspaceInput(input: Record<string, unknown>): CreateWorkspaceInput {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const category = typeof input.category === "string" ? input.category : "";
  const timezone = typeof input.timezone === "string" ? input.timezone.trim() : "";
  const currency = typeof input.currency === "string" ? input.currency.trim().toUpperCase() : "";
  if (name.length < 2 || name.length > 80)
    throw new Error("Business name must be between 2 and 80 characters.");
  if (!workspaceCategories.includes(category as WorkspaceCategory))
    throw new Error("Choose a valid business category.");
  if (timezone.length < 3 || timezone.length > 80) throw new Error("Choose a valid timezone.");
  if (!/^[A-Z]{3}$/.test(currency)) throw new Error("Currency must be a three-letter ISO code.");
  return { name, category: category as WorkspaceCategory, timezone, currency };
}
