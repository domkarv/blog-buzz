import type { Config } from 'drizzle-kit';

export default {
  driver: 'pg',
  out: 'drizzle/migrations',
  schema: 'drizzle/schema/index.ts',
  dbCredentials: {
    connectionString: String(process.env.DATABASE_URL),
  },
  verbose: true,
  strict: true,
} satisfies Config;
