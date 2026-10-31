import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const jobMatchingSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  jobDescription: z.string(),
  jobType: z.string().nullable(),
  averageSalary: z.string().nullable(),
  matchScore: z.number().nullable(),
  trackerIndex: z.number(),
  note: z.string().nullable(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  resumeId: z.string(),
  userId: z.string(),
  keywords: z.array(z.string()),
});

export class JobMatchingDto extends createZodDto(jobMatchingSchema) {}
