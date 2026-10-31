import { z } from "zod";

export const customFieldSchema = z.object({
  id: z.string().min(1),
  icon: z.string(),
  name: z.string(),
  value: z.string(),
});

export type CustomField = z.infer<typeof customFieldSchema>;
