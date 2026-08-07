# ADR 0001: pnpm Workspace Monorepo

- Status: Accepted
- Date: 2026-08-07

## Context

BDT Booking will grow product capabilities while also producing reusable BDT platform assets. We need separation without forcing network boundaries or duplicate repositories.

## Decision

Use a pnpm workspace with `apps/*` and `packages/*`.

No task orchestrator is introduced in Milestone 001.

## Why

- pnpm is already validated in the mobile Termux environment.
- Workspaces provide dependency boundaries and local package linking.
- The repository remains easy to understand.
- A build orchestrator can be introduced later if measurements show a real need.

## Consequence

All packages must expose clear responsibilities. Cross-package imports should happen through package exports, not relative filesystem traversal.
