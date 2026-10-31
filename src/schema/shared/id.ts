import { createId } from "@paralleldrive/cuid2";
import { z } from "zod";

export const idSchema = z
  .string()
  .min(1)
  .default(createId())
  .describe("Unique identifier for the item");
