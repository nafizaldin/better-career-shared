import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const updateCoverLetterSchema = z.object({
  content: z.string().min(1).optional(),
  tone: z.string().nullable().optional(),
});

export class UpdateCoverLetterDto extends createZodDto(updateCoverLetterSchema) {}
