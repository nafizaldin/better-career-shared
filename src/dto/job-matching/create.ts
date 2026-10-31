import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const createJobMatchingSchema = z.object({
  title: z.string().min(1),
  company: z.string().min(1),
  jobDescription: z.string().min(1),
  resumeId: z.string().min(1),
  jobType: z.string().nullable().optional(),
  averageSalary: z.string().nullable().optional(),
  matchScore: z.number().min(0).max(100).nullable().optional(),
  keywords: z.array(z.string()).optional(),
});

export class CreateJobMatchingDto extends createZodDto(createJobMatchingSchema) {}
