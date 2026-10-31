import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const createResumeAnalysisSchema = z.object({
  resumeId: z.string().min(1),
  overallScore: z.number().min(0).max(100),
  status: z.enum(["processing", "completed", "failed"]).default("processing"),
  version: z.number().int().positive().default(1),
  results: z.record(z.any()), // JSON object with analysis results
  jobMatchingId: z.string().nullable().optional(),
  coverLetterId: z.string().nullable().optional(),
});

export class CreateResumeAnalysisDto extends createZodDto(createResumeAnalysisSchema) {}
