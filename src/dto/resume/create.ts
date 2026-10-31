import { kebabCase } from "../../utils";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const createResumeSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).transform(kebabCase).optional(),
  templateId: z.string().min(1, { message: "templateId is required and must be a non-empty string" }), // ✅ NEW: Required template selection
  visibility: z.enum(["public", "private"]).default("private"),
  organization: z.string().nullable().optional(),
}); // ✅ Removed .strict() - it may interfere with field preservation

export class CreateResumeDto extends createZodDto(createResumeSchema) {}
