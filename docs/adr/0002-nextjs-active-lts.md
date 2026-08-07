# ADR 0002: Next.js Active LTS

- Status: Accepted
- Date: 2026-08-07

## Decision

Use Next.js `16.2.11`, the patched Active LTS line selected for Milestone 001.

## Rationale

Production software should prefer supported release lines over experimental/canary releases. The selected patch includes the July 2026 security fixes while preserving the current Next.js 16 LTS architecture.

## Consequence

Framework upgrades are deliberate dependency-maintenance work. Security releases can override normal milestone cadence when necessary.
