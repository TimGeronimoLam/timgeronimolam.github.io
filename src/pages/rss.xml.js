import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Tim's Blog",
    description: 'My collection of posts all about the web.',
    site: context.site,
    items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/${post.data.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}