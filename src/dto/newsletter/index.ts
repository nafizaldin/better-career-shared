import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const subscribeNewsletterSchema = z.object({
  email: z.string().email(),
});

export class SubscribeNewsletterDto extends createZodDto(subscribeNewsletterSchema) {}
