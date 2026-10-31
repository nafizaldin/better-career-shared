import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const resumeGuidanceSchema = z.object({
  id: z.string(),
  guidanceItems: z.array(z.object({
    category: z.string(),
    suggestion: z.string(),
    approach: z.array(z.string()),
    notes: z.string().optional(),
    priority: z.enum(["critical", "major", "minor"]),
  })),
  notes: z.string().nullable(),
  trackerIndex: z.number().int().positive(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  resumeAnalysisId: z.string(),
  resumeId: z.string(),
  userId: z.string(),
});

export class ResumeGuidanceDto extends createZodDto(resumeGuidanceSchema) {}
