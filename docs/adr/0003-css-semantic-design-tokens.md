# ADR 0003: CSS-First Semantic Design Tokens

- Status: Accepted
- Date: 2026-08-07

## Context

BDT Booking requires premium light/dark experiences and a design language reusable across future products.

## Decision

Define semantic design tokens as CSS custom properties and map them into Tailwind 4 theme utilities.

Examples:

- `--bdt-bg`
- `--bdt-surface`
- `--bdt-text`
- `--bdt-border`
- `--bdt-accent`

Components consume semantic roles rather than hard-coded palette values.

## Consequence

Rebranding or accessibility tuning changes tokens rather than hundreds of components. Product features must not introduce arbitrary one-off colors when a semantic token exists.
