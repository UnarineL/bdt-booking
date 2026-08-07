# BDT Booking

BDT Booking is a production-oriented booking and business operations platform for service businesses. The product is being built incrementally, with each construction milestone required to leave the repository stable, understandable, testable, and ready for the next capability.

## Milestone status

**Milestone 001 — Production Foundation**

This milestone establishes:

- a pnpm workspace monorepo;
- a Next.js 16 Active LTS web application;
- React 19.2 and strict TypeScript;
- Tailwind CSS 4 design tokens;
- light and dark theme foundations;
- a responsive application shell;
- a shared `@bdt/ui` package;
- error, loading, and not-found boundaries;
- repository quality scripts;
- GitHub Actions CI;
- architecture and engineering documentation.

No booking business logic is intentionally included yet.

## Repository map

```text
apps/
  web/              Customer and business web application.
packages/
  ui/               Shared BDT interface primitives.
docs/
  adr/              Architecture Decision Records.
  architecture/     System and repository architecture.
  modules/          Tree-level module documentation.
  operations/       Development and operational procedures.
  standards/        Coding and engineering standards.
  testing/          Test strategy.
  milestones/       Milestone implementation records.
tests/              Repository-level foundation checks.
```

## Requirements

- Node.js 24 LTS
- pnpm 11.x
- Git

The root `package.json` declares the supported runtime range.

## First run

```bash
corepack enable
corepack prepare pnpm@11.20.0 --activate
pnpm install
pnpm verify
pnpm dev
```

Open `http://localhost:3000`.

The first `pnpm install` creates `pnpm-lock.yaml`. Commit that generated lockfile before opening the first production pull request.

## Phone workflow

The supported Android workflow is:

1. Keep the repository in native Termux storage: `~/projects/bdt-booking`.
2. Use Roxum over SSH for visual editing.
3. Use Termux for Git, pnpm, Node.js, tests, and builds.
4. Use the phone browser for local product review.
5. Use GitHub Actions as the clean-room verification environment.

See [`docs/operations/mobile-development.md`](docs/operations/mobile-development.md).

## Quality gate

```bash
pnpm verify
```

The command runs formatting, linting, type checking, repository tests, and the production build.

## Engineering principle

A milestone is not complete because code exists. It is complete when the capability is understandable, reviewed, tested, documented, and safe to build upon.
