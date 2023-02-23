import rss, { pagesGlobToRssItems } from "@astrojs/rss";

import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get() {
  const posts = await getCollection("blog");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>ja-jp</language>`,
  });
}
