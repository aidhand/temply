import { z } from "zod";

import { db, schema } from "@repo/db";

const userCreateSchema = z.object({
  name: z.string(),
});

export default defineEventHandler(async (event) => {
  const validator = await readValidatedBody(event, (body) =>
    userCreateSchema.safeParse(body)
  );

  if (!validator.success) throw validator.error.issues;

  const data = validator.data;
  const result = await db
    .insert(schema.users)
    .values({
      name: data.name,
    })
    .returning();

  return result;
});
