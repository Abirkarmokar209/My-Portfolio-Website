import type { Config } from "drizzle-kit";

/**
 * Drizzle Kit configuration for schema migrations.
 * Run: npm run db:push  to sync schema to your database.
 * /* CHANGE_HERE: DATABASE_URL must be set in .env.local
 */
export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
