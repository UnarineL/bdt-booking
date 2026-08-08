# Founder Review — Milestone 002

```bash
cd ~/projects/bdt-booking
pnpm install
cd apps/web
cp ../../.env.example .env.local
openssl rand -base64 32
# paste generated value into BETTER_AUTH_SECRET
cd ../..
pnpm --filter @bdt/booking-web db:setup
pnpm verify
pnpm dev
```

Review: landing → sign up → onboarding → create business → dashboard → theme → sign out → sign in → same workspace restored.

Suggested commit after approval: `feat: implement identity and workspace foundation`
