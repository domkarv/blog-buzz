import pg from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema/index';
import fs from 'fs';

if (
  !process.env.DB_HOST ||
  !process.env.DB_USER ||
  !process.env.DB_PASS ||
  !process.env.DB_INITIAL_NAME ||
  !process.env.DB_PORT
) {
  throw new Error('🥲 Database credentials missing!');
}

type DBType = NodePgDatabase<typeof schema>;

declare global {
  var db: DBType | undefined;
}

let db: DBType;

const { Pool } = pg; // why the fuck i have to do this
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

if (process.env.NODE_ENV === 'production') {
  db = drizzle(pool, { schema });
} else {
  if (!global.db) {
    global.db = drizzle(pool, { schema });
  }
  db = global.db;
}

export { db };
