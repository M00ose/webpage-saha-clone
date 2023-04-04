import styles from "../../styles/Slug.module.css";
import { Nav, Footer } from "../../components";

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
    <main className="flex flex-col items-center justify-start min-h-screen w-screen font-sans overflow-hidden">
      <div className="w-full xs:w-4/5 max-w-screen xl:max-w-[1024px]">
        <Nav />
        <div className="py-12">
          <h1 className="text-5xl">{post.title}</h1>
          <h6 className="font-serif">Posted on {post.datePublished}</h6>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
      <Footer />
    </main>
  );
}
