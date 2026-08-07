# Module: Web Application Shell

## Responsibility

The application shell provides persistent workspace chrome:

- desktop sidebar;
- mobile navigation;
- top navigation;
- workspace identity;
- theme access;
- content container.

It does not own booking, customer, staff, or analytics domain logic.

## Key files

- `apps/web/src/components/layout/app-shell.tsx`
- `apps/web/src/components/brand/brand-mark.tsx`
- `apps/web/src/components/theme/*`

## Responsive behavior

Desktop (`lg` and above) uses a persistent sidebar. Smaller layouts use a compact header plus fixed bottom navigation.

The mobile interface is not a compressed desktop sidebar.

## Failure behavior

The shell contains no remote data in Milestone 001, so its runtime failure surface is intentionally small. Route-level failures are handled by `app/error.tsx`.

## Future extension

Authenticated workspace and navigation state can be injected later without moving product logic into the shell.
