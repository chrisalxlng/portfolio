import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: ({ image }) => z.object({
      priority: z.enum(["high", "medium", "low"]),
      title: z.string().min(1),
      subtitle: z.string().min(1),
      tags: z.array(z.string()).min(1).max(10),
      url: z.string().url(),
      screenshots: z.array(image()).min(1).max(2),
    }),
  }),
};
