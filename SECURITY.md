# Security Policy

Security is part of the definition of done.

## Reporting

Do not publish suspected vulnerabilities in public issues. Use the private security reporting channel configured for the repository once the GitHub project is created.

## Foundation rules

- Never commit credentials or real `.env` files.
- Treat all external input as untrusted.
- Authorization must be contextual to a workspace/tenant when identity is introduced.
- Logs must not contain secrets, session tokens, raw payment data, or unnecessary personal data.
- Security-sensitive changes require explicit review notes.
- Dependencies must remain on supported release lines.

Milestone 001 intentionally contains no authentication, payments, or customer data handling.
