import { createZodDto } from "nestjs-zod/dto";

import { resumeSchema } from "./resume";

export const updateResumeSchema = resumeSchema.partial().omit({
  templateId: true, // ✅ Users cannot change template
  template: true,   // ✅ Template is read-only for users
});

export class UpdateResumeDto extends createZodDto(updateResumeSchema) {}
