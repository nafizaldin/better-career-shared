import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const resumeAnalysisSchema = z.object({
  id: z.string(),
  overallScore: z.number(),
  status: z.enum(["processing", "completed", "failed"]),
  version: z.number().int().positive(),
  trackerIndex: z.number().int().positive(),
  active: z.boolean(),
  results: z.record(z.any()), // JSON object with analysis results
  createdAt: z.date(),
  updatedAt: z.date(),
  resumeId: z.string(),
  userId: z.string(),
  jobMatchingId: z.string().nullable(),
  coverLetterId: z.string().nullable(),
});

export class ResumeAnalysisDto extends createZodDto(resumeAnalysisSchema) {}
