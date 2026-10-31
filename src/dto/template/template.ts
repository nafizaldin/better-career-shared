import { createZodDto } from "nestjs-zod/dto";
import { z } from "nestjs-zod/z";
import { idSchema } from "../../schema";

// Metadata schema for template
const metadataSchema = z.object({
  template: z.string(),
  layout: z.array(z.array(z.array(z.string()))),
  theme: z.object({
    background: z.string(),
    text: z.string(),
    primary: z.string(),
  }),
  typography: z.object({
    font: z.object({
      family: z.string(),
      size: z.number(),
      variants: z.array(z.string()),
      subset: z.string(),
    }),
    lineHeight: z.number(),
    hideIcons: z.boolean(),
    underlineLinks: z.boolean(),
  }),
  css: z.object({
    value: z.string(),
    visible: z.boolean(),
  }),
  page: z.object({
    margin: z.number(),
    format: z.string(),
    options: z.object({
      breakLine: z.boolean(),
      pageNumbers: z.boolean(),
    }),
  }),
  notes: z.string(),
});

export const createTemplateSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  preview: z.string().url().optional(),
  metadata: metadataSchema, // Admin sets all template metadata
  isActive: z.boolean().default(true),
  isPremium: z.boolean().default(false),
});

export const updateTemplateSchema = createTemplateSchema.partial();

export const templateSchema = z.object({
  id: idSchema,
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  preview: z.string().nullable(),
  metadata: metadataSchema,
  createdBy: idSchema,
  isActive: z.boolean(),
  isPremium: z.boolean(),
  version: z.number(),
  createdAt: z.date().or(z.dateString()),
  updatedAt: z.date().or(z.dateString()),
});

export class CreateTemplateDto extends createZodDto(createTemplateSchema) {}
export class UpdateTemplateDto extends createZodDto(updateTemplateSchema) {}
export class TemplateDto extends createZodDto(templateSchema) {}
