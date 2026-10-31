import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const updateNoteSchema = z.object({
  note: z.string().optional(),
});

export class UpdateNoteDto extends createZodDto(updateNoteSchema) {}
