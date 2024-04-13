import pg from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema/index';

if (!process.env.DATABASE_URL) {
  throw new Error('🥲 Database credentials missing!');
}

type DBType = NodePgDatabase<typeof schema>;

declare global {
  var db: DBType | undefined;
}

let db: DBType;

const { Pool } = pg; // why the fuck i have to do this
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV === 'production') {
  db = drizzle(pool, { schema });
} else {
  if (!global.db) {
    global.db = drizzle(pool, { schema });
  }
  db = global.db;
}

export { db };
