import BlogsPage from "@/components/Blogs/BlogsPage";
import { BLOGS_METADATA } from "@/constants/blogs/blogsMetadata";
import React from "react";

export const metadata = {
  title: "Explore Our Blog Archive | Latest Stories & Creative Ideas",
  description:
    "Browse our blog archive for practical advice, inspiring stories, and tips to grow your skills. Fresh content updated weekly!",
  alternates: {
    canonical: "https://launchboxglobal.com/blogs",
  },
};

export default async function page() {
  const count = Object.keys(BLOGS_METADATA)?.length || 100;
  const data = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?_embed=author&per_page=${count}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer DWK4UhkW*^@OACYDrZTCGF%nwYs!zk*Im3z0h1jVTllrTWh%92PHXq6OCCIKeJy2`,
      },
    }
  );

  const blogs = await data.json();

  return <BlogsPage blogs={blogs} />;
}
