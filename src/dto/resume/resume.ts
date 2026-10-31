import { defaultResumeData, idSchema, resumeDataSchema } from "../../schema";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

import { userSchema } from "../user";
import { templateSchema } from "../template";

export const resumeSchema = z.object({
  id: idSchema,
  title: z.string(),
  slug: z.string(),
  templateId: idSchema, // ✅ NEW
  template: templateSchema.optional(), // ✅ NEW: Include template in response
  data: resumeDataSchema.default(defaultResumeData),
  visibility: z.enum(["private", "public"]).default("private"),
  locked: z.boolean().default(false),
  organization: z.string().nullable().optional(),
  userId: idSchema,
  user: userSchema.optional(),
  createdAt: z.date().or(z.dateString()),
  updatedAt: z.date().or(z.dateString()),
});

export class ResumeDto extends createZodDto(resumeSchema) {}
