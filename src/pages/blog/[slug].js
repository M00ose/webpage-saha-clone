import { getPost, getSlugList } from "@/services";

export async function getStaticPaths() {
  const { posts } = await getSlugList();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug);
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <main>
      <div>
        <h1>{post.title}</h1>
        <h6>{post.datePublished}</h6>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </main>
  );
}
