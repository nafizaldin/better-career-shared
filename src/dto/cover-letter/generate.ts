import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const generateCoverLetterSchema = z.object({
  jobMatchingId: z.string().min(1),
  resumeId: z.string().min(1),
});

export class GenerateCoverLetterDto extends createZodDto(generateCoverLetterSchema) {}
