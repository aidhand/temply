import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

const client = createClient({
  url: "libsql://temply-aidhand.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ5MzM5NjQsInAiOnsicnciOnsibnMiOlsiYjYyZTE4NjYtMTE0MC00NzRhLWEyN2QtODdiMTVhNzhjYTUxIl19fX0.OteGtLck9U42ejM1E2CRHC0RKLDyvZdgaHrT0P8dVvNoTNWNPMUuhM3afOj3kQryhhklw7G52ly2XAIo_2HOAw",
});

export const db = drizzle(client, { schema });
export * as schema from "./schema";
