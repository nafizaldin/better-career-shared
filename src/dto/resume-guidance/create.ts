import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const createResumeGuidanceSchema = z.object({
  resumeAnalysisId: z.string().min(1),
  resumeId: z.string().min(1),
  guidanceItems: z.array(z.object({
    category: z.string(),
    suggestion: z.string(),
    approach: z.array(z.string()), // Array of step-by-step instructions
    notes: z.string().optional(),
    priority: z.enum(["critical", "major", "minor"]),
  })),
  notes: z.string().nullable().optional(), // User-editable notes
});

export class CreateResumeGuidanceDto extends createZodDto(createResumeGuidanceSchema) {}
