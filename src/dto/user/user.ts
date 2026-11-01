import { idSchema } from "../../schema";
import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

import { secretsSchema } from "../secrets";

export const usernameSchema = z
  .string()
  .min(3)
  .max(255)
  .regex(/^[\d._a-z-]+$/, {
    message:
      "Usernames can only contain lowercase letters, numbers, periods, hyphens, and underscores.",
  });

export const userSchema = z.object({
  id: idSchema,
  name: z.string().min(1).max(255),
  picture: z.literal("").or(z.null()).or(z.string().url()),
  username: usernameSchema,
  email: z.string().email(),
  locale: z.string().default("en-US"),
  emailVerified: z.boolean().default(false),
  twoFactorEnabled: z.boolean().default(false),
  provider: z.enum(["email", "github", "google", "facebook", "linkedin"]).default("email"),
  // New fields
  shortName: z.string().optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("INACTIVE"),
  verificationToken: z.string().optional(),
  verificationExpires: z.date().or(z.dateString()).optional(),
  tempData: z.any().optional(),
  thumb: z.string().optional(),
  role: z.enum(["USER", "ADMIN", "ACCOUNT_DEPARTMENT", "PUBLISHER_DEPARTMENT"]).default("USER"),
  number: z.string().optional(),
  createdAt: z.date().or(z.dateString()),
  updatedAt: z.date().or(z.dateString()),
});

export class UserDto extends createZodDto(userSchema) {}

export const userWithSecretsSchema = userSchema.merge(z.object({ secrets: secretsSchema }));

export class UserWithSecrets extends createZodDto(userWithSecretsSchema) {}
