import { betterAuth } from "better-auth";
import { multiSession } from "better-auth/plugins";

import { getSqliteDatabase } from "@/lib/db/sqlite";

function getAuthSecret() {
  const secret = process.env.BETTER_AUTH_SECRET;

  if (!secret) {
    throw new Error(
      "BETTER_AUTH_SECRET is required. Copy .env.example to .env.local and generate a development secret.",
    );
  }

  return secret;
}

export const auth = betterAuth({
  appName: "BDT Booking",
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  secret: getAuthSecret(),
  database: getSqliteDatabase(),

  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 10,
    maxPasswordLength: 128,
    revokeSessionsOnPasswordReset: true,
  },

  plugins: [
    multiSession({
      maximumSessions: 5,
    }),
  ],

  advanced: {
    database: {
      generateId: "uuid",
    },
  },
});
