# Architecture Overview

## Purpose

Milestone 001 establishes a modular monorepo boundary without pretending that BDT Booking already needs distributed systems.

## Current shape

```text
Browser
   |
   v
apps/web (Next.js)
   |
   +--> features/*       Product capabilities
   +--> components/*     Application composition
   |
   +--> @bdt/ui          Shared presentation primitives
```

The web application owns product composition. `@bdt/ui` owns reusable interface primitives and must not import business features.

## Dependency direction

Allowed:

```text
app -> feature -> shared UI
app -> shared UI
```

Not allowed:

```text
shared UI -> app
shared UI -> booking/customer/business feature
feature A -> feature B internal implementation
```

Future domains should communicate through explicit contracts or shared domain services rather than importing each other's internals.

## Why not microservices

Milestone 001 has no operational evidence requiring distributed services. A modular monorepo gives clear boundaries while keeping local development and deployment simple.

## Quality attributes

The foundation prioritizes:

1. maintainability;
2. security by default;
3. responsive mobile and desktop UX;
4. observability-ready boundaries;
5. predictable deployment;
6. low accidental complexity.
