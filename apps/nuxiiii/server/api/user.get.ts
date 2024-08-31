import { db, schema } from "@repo/db";

export default defineEventHandler(async (event) => {
  const result = await db.select().from(schema.users);

  return result;
});
