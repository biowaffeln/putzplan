import * as betterSqlite3 from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';

const betterSqlite = new Database('putzplan.db');
const db = betterSqlite3.drizzle(betterSqlite);

console.log('Applying migrations...');
migrate(db, { migrationsFolder: 'drizzle' });
console.log('Done!');
