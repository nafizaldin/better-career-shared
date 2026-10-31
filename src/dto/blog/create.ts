import { createZodDto } from 'nestjs-zod/dto';
import { z } from 'nestjs-zod/z';

export const createBlogSchema = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(10),
  summary: z.string().min(10).max(500).optional().nullable(),
  featuredImage: z.string().optional().nullable(), // data URL (base64) or URL; max 5MB enforced server-side
  tags: z.array(z.string()).optional().default([]),
  categories: z.array(z.string()).optional().default([]),
  status: z.enum(['draft', 'published']).optional().default('draft'),
  publishedAt: z.coerce.date().optional().nullable(),
  authorName: z.string().optional().nullable(),
  authorBio: z.string().optional().nullable(),
  authorImage: z.string().url().optional().nullable(),
  metaTitle: z.string().max(60).optional().nullable(),
  metaDescription: z.string().max(160).optional().nullable(),
});

export class CreateBlogDto extends createZodDto(createBlogSchema) {}
