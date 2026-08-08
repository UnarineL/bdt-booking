# Module: Identity and Session

Owns sign-up, sign-in, sign-out, and server session retrieval. Better Auth handles password credentials and sessions. Workspace roles are not part of this module. Protected server pages call `requireSession()` rather than trusting client redirects. Email verification, password-reset delivery, MFA, and device management remain Beta hardening work.
