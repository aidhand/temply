import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./schema.ts",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url: "libsql://temply-aidhand.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ5MzM5NjQsInAiOnsicnciOnsibnMiOlsiYjYyZTE4NjYtMTE0MC00NzRhLWEyN2QtODdiMTVhNzhjYTUxIl19fX0.OteGtLck9U42ejM1E2CRHC0RKLDyvZdgaHrT0P8dVvNoTNWNPMUuhM3afOj3kQryhhklw7G52ly2XAIo_2HOAw",
  },
});
