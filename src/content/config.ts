import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seriesTitle: z.string(), 
    order: z.number(),
  }),
});

export const collections = { blog };