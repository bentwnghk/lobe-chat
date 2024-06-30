import * as dotenv from 'dotenv';
// import * as migrator from 'drizzle-orm/neon-serverless/migrator';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { join } from 'node:path';

// import { serverDB } from '../../src/database/server/core/db';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

// Read the `.env` file if it exists, or a file specified by the
// dotenv_config_path parameter that's passed to Node.js
dotenv.config();
const sql = neon(process.env.DATABASE_URL!);
const serverDB = drizzle(sql);

const runMigrations = async () => {
  // await migrator.migrate(serverDB, {
  await migrate (serverDB, {
    migrationsFolder: join(__dirname, '../../src/database/server/migrations'),
  });
  console.log('✅ database migration pass.');
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(0);
};

let connectionString = process.env.DATABASE_URL;

// only migrate database if the connection string is available
if (connectionString) {
  // eslint-disable-next-line unicorn/prefer-top-level-await
  runMigrations().catch((err) => {
    console.error('❌ Database migrate failed:', err);
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  });
} else {
  console.log('🟢 not find database env, migration skipped');
}
