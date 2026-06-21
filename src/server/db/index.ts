import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

/**
 * PostgreSQL connection pool via Drizzle ORM.
 * Never use raw SQL string concatenation — always use Drizzle's query builder.
 *
 * /* CHANGE_HERE: Set DATABASE_URL in your .env.local file:
 *    DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
 */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  /* Connection pool tuning — adjust for your Postgres hosting tier */
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 2_000,
});

export const db = drizzle(pool, { schema });
