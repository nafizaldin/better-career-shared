import { createZodDto } from 'nestjs-zod/dto';
import { z } from 'nestjs-zod/z';

export const updateTrackingSettingsSchema = z.object({
  tagManagerId: z.string().optional().nullable().transform((v) => (v === '' ? null : v)),
  pixelId: z.string().optional().nullable().transform((v) => (v === '' ? null : v)),
});

export class UpdateTrackingSettingsDto extends createZodDto(
  updateTrackingSettingsSchema,
) {}
