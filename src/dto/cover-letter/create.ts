import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const createCoverLetterSchema = z.object({
  jobMatchingId: z.string().min(1),
  resumeId: z.string().min(1),
  content: z.string().min(1),
  tone: z.string().nullable().optional(),
});

export class CreateCoverLetterDto extends createZodDto(createCoverLetterSchema) {}
