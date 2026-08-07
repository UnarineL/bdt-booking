# Repository Structure

## `apps/web`

The deployable Next.js application. It contains routing, application composition, product features, and web-specific infrastructure.

## `packages/ui`

Shared BDT UI primitives. Components in this package must remain business-agnostic.

## `docs`

Durable engineering knowledge:

- `adr`: decisions and rationale;
- `architecture`: system-level structure;
- `modules`: tree-level implementation guides;
- `operations`: how to run and support the system;
- `standards`: coding rules;
- `testing`: validation strategy;
- `milestones`: what each construction milestone delivered.

## `tests`

Repository-level checks that are independent of framework transpilation. Feature tests live close to their capabilities once those capabilities exist.

## Growth rule

Do not create a new top-level directory because a single file feels inconvenient. A new boundary must represent a stable responsibility.
