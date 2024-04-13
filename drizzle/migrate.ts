import pg from 'pg';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('🥲 Database credentials missing!');
  }

  const { Pool } = pg;
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
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
