import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
 

  // Markdownのスキーマを定義
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    created: z.string(),
    updated: z.string().optional(),
  }),
});

export const collections = { blog };