# ADR 0004: Better Auth for Identity

- Status: Accepted
- Date: 2026-08-07

Authentication is security-sensitive infrastructure. BDT will not invent password hashing or session-cookie mechanics. Better Auth 1.6.x owns email/password identity and sessions. BDT owns workspace membership and business authorization. Business code must not query Better Auth tables directly for permissions.
