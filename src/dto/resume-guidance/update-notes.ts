import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const updateNotesSchema = z.object({
  notes: z.string().nullable(),
});

export class UpdateNotesDto extends createZodDto(updateNotesSchema) {}
