import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

export const signupSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6),
  shortName: z.string().optional(),
  thumb: z.string().optional(),
  number: z.string().optional(),
  go_crazy121211: z.boolean().optional(),
  role: z.enum(['super-admin', 'admin', 'user']).optional().default('user'),
});

export class SignupDto extends createZodDto(signupSchema) {}
