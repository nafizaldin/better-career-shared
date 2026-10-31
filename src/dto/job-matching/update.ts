import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const updateJobMatchingSchema = z.object({
  title: z.string().min(1).optional(),
  company: z.string().min(1).optional(),
  jobDescription: z.string().min(1).optional(),
  jobType: z.string().nullable().optional(),
  averageSalary: z.string().nullable().optional(),
  matchScore: z.number().min(0).max(100).nullable().optional(),
  note: z.string().nullable().optional(),
  keywords: z.array(z.string()).optional(),
});

export class UpdateJobMatchingDto extends createZodDto(updateJobMatchingSchema) {}
