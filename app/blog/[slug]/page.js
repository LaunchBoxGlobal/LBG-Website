import BlogClient from "@/components/BlogPage/BlogClient";
import { BLOGS_METADATA } from "@/constants/blogs/blogsMetadata";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=${params?.slug}`,
    { cache: "no-store" }
  );

  const meta = BLOGS_METADATA[params?.slug] || {};
  // console.log("meta >> ", meta);
  // console.log("params >> ", params);

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

export default async function BlogPage({ params }) {
  const slug = params.slug;

  const blogRes = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=${slug}&_embed=author`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer DWK4UhkW*^@OACYDrZTCGF%nwYs!zk*Im3z0h1jVTllrTWh%92PHXq6OCCIKeJy2`,
      },
    }
  );
  const blogData = await blogRes.json();
  const blog = blogData?.[0];

  if (!blog) {
    notFound();
  }

  const author = blog?._embedded?.author?.[0] || null;
  const blogDate = blog?.date;

  const htmlString = blog.content?.rendered || "";
  const headings = extractHeadingsFromHTML(htmlString);

  const allBlogsRes = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts"
  );
  const allBlogs = await allBlogsRes.json();

  const categoriesRes = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/categories"
  );
  const categories = await categoriesRes.json();

  const meta = BLOGS_METADATA[slug] || {};

  return (
    <>
      {meta.schemas?.map((schema, i) => (
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
      <BlogClient
        blog={blog}
        blogs={allBlogs}
        headings={headings}
        categories={categories}
        author={author}
        blogDate={blogDate}
        slug={slug}
      />
    </>
  );
}

// Utility: extract <h1> and <h2> from HTML
function extractHeadingsFromHTML(html) {
  const headings = [];

  // Naive regex for demo – for production use a parser or DOMPurify + JSDOM
  const h1Matches = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gi)];
  const h2Matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];

  h1Matches.forEach((match) => headings.push(stripTags(match[1])));
  h2Matches.forEach((match) => headings.push(stripTags(match[1])));

  return headings;
}

function stripTags(str) {
  return str.replace(/<[^>]*>?/gm, "").trim();
}
