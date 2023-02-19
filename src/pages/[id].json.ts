import type { APIRoute } from "astro";
import getPostData from "../utils/getPostData";

export const get: APIRoute = ({ params }) => {
  const id = params.id;
  console.log("id", id);
  return {
    body: JSON.stringify({
      name: "test",
    }),
  };
};

// export function getStaticPaths() {
//   return [
//     { params: { id: "0" } },
//     { params: { id: "1" } },
//     { params: { id: "2" } },
//   ];
// }

// export async function getStaticPaths() {
//     const posts = await Astro.glob('../../data/blog-posts/*.md');
//     return posts.map(p => ({
//       params: { slug: p.file.split('/').pop().split('.').shift() },
//       props: { post: p },
//     }));
//   }
