import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";

// One-time code handed to the web app after a social login (see the backend
// OAuthLoginService). Base64url of 32 random bytes = 43 chars.
export const oauthExchangeSchema = z.object({
  code: z.string().min(20).max(128),
});

export class OAuthExchangeDto extends createZodDto(oauthExchangeSchema) {}
