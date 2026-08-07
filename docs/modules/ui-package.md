# Module: `@bdt/ui`

## Responsibility

`@bdt/ui` contains reusable, business-agnostic interface primitives.

Current primitives:

- `Button`
- `IconButton`
- `Card`
- `Badge`

## Rules

The package:

- may depend on React;
- may use BDT semantic design tokens;
- must not import application features;
- must not know about bookings, customers, staff, billing, or tenants;
- must preserve keyboard and screen-reader semantics.

## Extension rule

A component enters this package only when its responsibility is genuinely reusable. Business-specific components stay with the feature that owns them.
