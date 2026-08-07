# Contributing to BDT Booking

BDT Booking follows milestone-driven development.

## Before changing code

1. Understand the domain/module being changed.
2. Read the relevant architecture documentation and ADRs.
3. Keep the change inside the smallest responsible module.
4. Avoid introducing dependencies unless the problem earns them.

## Required before review

```bash
pnpm verify
```

A change is not review-ready until verification passes.

## Commit style

Use Conventional Commit-style subjects:

- `feat:` user-visible capability
- `fix:` defect correction
- `refactor:` behavior-preserving structure improvement
- `test:` test-only work
- `docs:` documentation-only work
- `chore:` repository/tooling maintenance

Keep commits meaningful. Do not use subjects such as `update`, `changes`, or `fix stuff`.

## Documentation

If a change alters architecture, public behavior, operational procedure, security assumptions, or a module's responsibilities, update the relevant documentation in the same milestone.
