import pg from 'pg';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import fs from 'fs';

async function main() {
  if (
    !process.env.DB_HOST ||
    !process.env.DB_USER ||
    !process.env.DB_PASS ||
    !process.env.DB_INITIAL_NAME ||
    !process.env.DB_PORT
  ) {
    throw new Error('🥲 Database credentials missing!');
  }

  const { Pool } = pg;
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_INITIAL_NAME,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false,
      ca: fs.readFileSync('key/ap-south-1-bundle.pem').toString(),
    },
  });
  const db: NodePgDatabase = drizzle(pool);

  console.log('[migrate] Running migrations...');

  await migrate(db, {
    migrationsFolder: 'drizzle/migrations',
    migrationsTable: 'drizzle_migrations',
    migrationsSchema: 'public',
  });

  console.log('[migrate] All migrations have been ran, exiting...');

  await pool.end();
}

main();
