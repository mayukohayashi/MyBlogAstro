export interface Post {
  frontmatter: {
    layout: string;
    title: string;
    description: string;
    pubDate: string;
    minutes?: number;
    tags?: string[];
    updatedDate: string;
  };
  url: string;
}
