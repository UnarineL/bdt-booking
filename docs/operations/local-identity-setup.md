# Local Identity Setup

```bash
cd ~/projects/bdt-booking/apps/web
cp ../../.env.example .env.local
openssl rand -base64 32
```

Replace the `BETTER_AUTH_SECRET` placeholder in `.env.local`. Never commit `.env.local`.

Then:

```bash
cd ~/projects/bdt-booking
pnpm --filter @bdt/booking-web db:setup
pnpm verify
pnpm dev
```

Functional review: create account → onboarding → create business → dashboard → sign out → sign back in → confirm workspace returns.
