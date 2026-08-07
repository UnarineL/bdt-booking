# Testing Strategy

Testing follows the risk of the capability.

## Milestone 001

The repository uses Node's built-in test runner for zero-dependency structural checks. These tests confirm foundational invariants such as workspace boundaries, package-manager pinning, design tokens, dark mode, and reduced-motion support.

## Future layers

As behavior grows:

1. unit tests for deterministic domain logic;
2. integration tests for database and service boundaries;
3. browser tests for critical customer journeys;
4. accessibility checks for interactive workflows;
5. load tests for booking concurrency and availability hot paths.

## Review rule

Tests should prove behavior and invariants, not implementation trivia. A refactor that preserves behavior should not require rewriting unrelated tests.
