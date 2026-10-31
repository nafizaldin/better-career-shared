import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const resetPasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string().min(6),
  confirmPassword: z.string().min(6),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export class ResetPasswordDto extends createZodDto(resetPasswordSchema) {}
