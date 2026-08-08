"use client";
import { useActionState } from "react";
import {
  createWorkspaceAction,
  type CreateWorkspaceState,
} from "@/features/workspaces/actions/create-workspace";
import { Button } from "@bdt/ui";
const initialState: CreateWorkspaceState = {};
export function WorkspaceOnboardingForm() {
  const [state, action, pending] = useActionState(createWorkspaceAction, initialState);
  return (
    <form action={action} className="space-y-5">
      <label className="block">
        <span className="text-sm font-medium">Business name</span>
        <input
          name="name"
          required
          minLength={2}
          maxLength={80}
          placeholder="Fresh Cuts Studio"
          className="focus-ring mt-2 h-11 w-full rounded-lg border border-line bg-app px-3 text-sm"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Category</span>
        <select
          name="category"
          required
          defaultValue=""
          className="focus-ring mt-2 h-11 w-full rounded-lg border border-line bg-app px-3 text-sm"
        >
          <option value="" disabled>
            Choose a category
          </option>
          <option value="beauty">Beauty & grooming</option>
          <option value="health">Health & wellness</option>
          <option value="professional-services">Professional services</option>
          <option value="education">Education</option>
          <option value="fitness">Fitness</option>
          <option value="home-services">Home services</option>
          <option value="automotive">Automotive</option>
          <option value="other">Other</option>
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Timezone</span>
          <select
            name="timezone"
            defaultValue="Africa/Johannesburg"
            className="focus-ring mt-2 h-11 w-full rounded-lg border border-line bg-app px-3 text-sm"
          >
            <option value="Africa/Johannesburg">Africa/Johannesburg</option>
            <option value="Africa/Lagos">Africa/Lagos</option>
            <option value="Africa/Accra">Africa/Accra</option>
            <option value="Europe/London">Europe/London</option>
            <option value="America/New_York">America/New_York</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium">Currency</span>
          <select
            name="currency"
            defaultValue="ZAR"
            className="focus-ring mt-2 h-11 w-full rounded-lg border border-line bg-app px-3 text-sm"
          >
            <option value="ZAR">ZAR — South African rand</option>
            <option value="USD">USD — US dollar</option>
            <option value="GBP">GBP — British pound</option>
            <option value="EUR">EUR — Euro</option>
            <option value="NGN">NGN — Nigerian naira</option>
            <option value="GHS">GHS — Ghanaian cedi</option>
          </select>
        </label>
      </div>
      {state.error ? (
        <p
          className="rounded-lg border border-danger/25 bg-danger/5 px-3 py-2 text-sm text-danger"
          role="alert"
        >
          {state.error}
        </p>
      ) : null}
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Creating workspace…" : "Create business workspace"}
      </Button>
    </form>
  );
}
