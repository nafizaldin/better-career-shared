import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const verifyOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(4),
});

export class VerifyOtpDto extends createZodDto(verifyOtpSchema) {}
