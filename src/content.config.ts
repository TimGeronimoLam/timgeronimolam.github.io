// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const blogSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content" }),
  schema: blogSchema
});

// Create a TypeScript type from the Zod schema
export type Frontmatter = z.infer<typeof blogSchema>;

// Export a single `collections` object to register your collection(s)
export const collections = { blog };
