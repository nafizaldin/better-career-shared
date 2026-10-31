import { idSchema, resumeDataSchema } from "../../schema";
import { kebabCase } from "../../utils";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const importResumeSchema = z.object({
  title: z.string().optional(),
  slug: z.string().min(1).transform(kebabCase).optional(),
  visibility: z.enum(["public", "private"]).default("private").optional(),
  templateId: idSchema.optional(), // ✅ Optional templateId for imports
  data: resumeDataSchema,
});

export class ImportResumeDto extends createZodDto(importResumeSchema) {}
