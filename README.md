# Blog with Astro

https://gobo-kojocho-blog.netlify.app

## Adding new tags

For adding new tags to posts you need to add the new tag in the array to the post located in `src/pages/blog`. For example `tags: ["general", "tech", "nature", "new-tag"]`.

After adding this new tag you need to add this tag into the `[tag].astro` file that the dynamic route is created and when building the site. Here you need to add the new tag as a param in the `getStaticPaths` method.

```javascript
export function getStaticPaths() {
  return [
    { params: { tag: "general" } },
    { params: { tag: "tech" } },
    { params: { tag: "food" } },
    { params: { tag: "nature" } },
    { params: { tag: "astro" } },
    // added this new-tag
    { params: { tag: "new-tag" } },
  ];
}
```

The tags will be read out of all posts dynamically using the `findTags` method in `src/utils/post.utils`.