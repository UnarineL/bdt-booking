# BDT Booking

## Current milestone

**Milestone 002 — Identity & Workspace**

The application now supports a real local vertical slice: account creation, sign-in, persisted session, first-business onboarding, protected dashboard, sign-out, and return to the existing workspace.

## Stack

- Next.js 16.2.12
- React 19.2
- TypeScript 6
- pnpm 11
- Tailwind CSS 4
- Better Auth 1.6.25
- Node 24 built-in SQLite for local development
- PostgreSQL target before Beta

## First local run

```bash
pnpm install
cd apps/web
cp ../../.env.example .env.local
# replace BETTER_AUTH_SECRET using: openssl rand -base64 32
cd ../..
pnpm --filter @bdt/booking-web db:setup
pnpm verify
pnpm dev
```

Open `http://localhost:3000`.
