import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const contactFormSchema = z.object({
  firstName: z.string().min(1).max(255),
  lastName: z.string().min(1).max(255),
  phone: z.string().min(1).max(20),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
  privacyAgreed: z.boolean().default(false),
});

export class ContactFormDto extends createZodDto(contactFormSchema) {}
