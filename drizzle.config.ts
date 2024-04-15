import type { Config } from 'drizzle-kit';

export default {
  driver: 'pg',
  out: 'drizzle/migrations',
  schema: 'drizzle/schema/index.ts',
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_INITIAL_NAME,
    port: process.env.DB_PORT,
    ssl: true,
  },
  verbose: true,
  strict: true,
} satisfies Config;
