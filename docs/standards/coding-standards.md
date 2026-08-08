# BDT Coding Standards

The codebase follows clean engineering discipline adapted to TypeScript and React.

## Structure

- One module, one clear responsibility.
- Prefer explicit interfaces over hidden coupling.
- Keep product/domain logic out of presentation primitives.
- Avoid generic `utils` dumping grounds. Name helpers by responsibility.
- Do not create abstractions before at least one concrete responsibility exists.

## TypeScript

- Strict mode is mandatory.
- Avoid `any`. If external data is unknown, keep it `unknown` until validated.
- Model impossible states so they are difficult to represent.
- Prefer immutable inputs and small focused functions.
- Public functions/components should expose understandable types.
- Do not suppress compiler errors without documented reasoning.

## React

- Prefer Server Components by default.
- Add `"use client"` only when browser state/effects/events require it.
- Keep components focused on one UI responsibility.
- Business logic belongs in feature/domain modules, not JSX event handlers.
- Accessibility semantics are part of component design.

## Naming

Names should reveal intent:

Good:

- `calculateAvailability`
- `workspaceId`
- `BookingPolicy`

Avoid:

- `data`
- `handler2`
- `helper`
- `temp`
- `thing`

## Functions

- Small enough to understand without scrolling through unrelated concerns.
- Guard invalid state early.
- Avoid deep nesting.
- Side effects should be obvious from the API.

## Comments

Use comments to explain **why**, constraints, or non-obvious trade-offs. Do not narrate code that already explains itself.

## Error handling

- Do not swallow errors.
- Do not expose internal stack traces to customers.
- Log actionable context without secrets.
- User messages should explain the next safe action.

## Definition of clean

Code is considered clean when a competent engineer can understand its responsibility, dependencies, failure behavior, and extension points without reverse engineering the entire repository.

## Persistence boundaries

UI components must not issue SQL. Raw database access stays inside feature data layers or `lib/db`. Authentication tables are Better Auth implementation details; BDT authorization uses session identity plus BDT-owned memberships.
