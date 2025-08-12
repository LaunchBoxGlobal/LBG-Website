import BlogClient from "@/components/BlogPage/BlogClient";
import { BLOGS_METADATA } from "@/constants/blogs/blogsMetadata";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=${params.slug}`,
    { cache: "no-store" }
  );

  const meta = BLOGS_METADATA[params?.slug] || {};

  const data = await res?.json();
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
    alternates: {
      canonical: meta?.canonical,
    },
  };
}

export default function BlogPage({ params }) {
  const meta = BLOGS_METADATA[params?.slug] || {};
  return (
    <>
      {meta.schemas?.map((schema, i) => (
        // <script
        //   key={i}
        //   type="application/ld+json"
        //   dangerouslySetInnerHTML={{
        //     __html: JSON.stringify(schema),
        //   }}
        // />
        <Script
          key={i}
          id={`schema-${i}`}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <BlogClient />
    </>
  );
}
