import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  const posts = await getCollection("posts");
  return rss({
    title: "チラ裏",
    description: "つぶやき拡大版",
    site: "https://gobo-kojocho-blog.netlify.app",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
