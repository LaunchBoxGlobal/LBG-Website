import BlogClient from "@/components/BlogPage/BlogClient";
import { BLOGS_METADATA } from "@/constants/blogs/blogsMetadata";
import he from "he";

// `params` gets passed automatically by Next.js for dynamic routes
export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=${params.slug}`,
    { cache: "no-store" }
  );

  const meta = BLOGS_METADATA[params?.slug] || {};

  const data = await res.json();
  const blog = data?.[0];

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog does not exist.",
    };
  }

  return {
    title: meta?.title,
    description: meta?.description,
  };
}

export default function BlogPage() {
  return <BlogClient />;
}
