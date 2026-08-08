# ADR 0005: Local SQLite Adapter, Production PostgreSQL Target

- Status: Accepted with migration requirement
- Date: 2026-08-07

Milestone 002 uses Node 24 built-in SQLite for local Termux development. This keeps the phone-first workflow real without Docker, cloud credentials, or native SQLite packages. It is not approved as the public production database. PostgreSQL is required before Beta. SQLite-specific access stays behind `lib/db` and feature repositories so the application domain can migrate cleanly.
