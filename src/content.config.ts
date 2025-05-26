import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
  slug: z.string(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content" }),
  schema: blogSchema
});

export type Frontmatter = z.infer<typeof blogSchema>;
export const collections = { blog };
