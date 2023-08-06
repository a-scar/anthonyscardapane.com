import { z, defineCollection } from "astro:content";
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    snippet: z.string().optional(),
    id: z.number(),
    isDraft: z.boolean().optional(),
  }),
});
export const collections = {
  blog: blogCollection,
};
