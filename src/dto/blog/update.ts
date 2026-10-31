import { createZodDto } from 'nestjs-zod/dto';
import { z } from 'nestjs-zod/z';

export const updateBlogSchema = z.object({
  title: z.string().min(3).max(255).optional(),
  content: z.string().min(10).optional(),
  summary: z.string().min(10).max(500).optional().nullable(),
  featuredImage: z.string().optional().nullable(), // data URL (base64) or URL; max 5MB enforced server-side
  tags: z.array(z.string()).optional(),
  categories: z.array(z.string()).optional(),
  status: z.enum(['draft', 'published']).optional(),
  publishedAt: z.coerce.date().optional().nullable(),
  authorName: z.string().optional().nullable(),
  authorBio: z.string().optional().nullable(),
  authorImage: z.string().url().optional().nullable(),
  metaTitle: z.string().max(60).optional().nullable(),
  metaDescription: z.string().max(160).optional().nullable(),
});

export class UpdateBlogDto extends createZodDto(updateBlogSchema) {}
