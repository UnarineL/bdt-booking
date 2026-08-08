# ADR 0002: Next.js Stable Release and Android Bundler Policy

- Status: Accepted
- Date: 2026-08-07

Use Next.js 16.2.12. Termux development and builds use Webpack because Turbopack native bindings are unavailable on Android/arm64. The workspace overrides `sharp` to 0.35.3 and pnpm lifecycle scripts are explicitly governed.
