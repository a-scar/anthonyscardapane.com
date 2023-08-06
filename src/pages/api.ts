// export async function getAllPosts(): Promise<any[]> {
//   let allPosts = await Astro.glob("../../data/blog-posts/*.md");
//   allPosts = allPosts
//     .filter((post) => !post.frontmatter.draft)
//     .sort(
//       (a, b) =>
//         new Date(b.frontmatter.publishDate).valueOf() -
//         new Date(a.frontmatter.publishDate).valueOf()
//     );
//   return allPosts;
// }

export async function get() {
  return {
    body: JSON.stringify({ message: `This is my endpoint` }),
  };
}
