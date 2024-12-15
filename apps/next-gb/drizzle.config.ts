require('dotenv').config({ path: 'apps/next-app/.env' })
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'turso',
  out: './apps/next-auth/src/drizzle/migration',
  schema: './apps/next-auth/src/drizzle/schema.ts',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL ?? '',
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
})
