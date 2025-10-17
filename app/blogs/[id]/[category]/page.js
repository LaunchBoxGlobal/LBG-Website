import CategoryBlogs from "@/components/Blogs/CategoryBlogs/CategoryBlogs";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Explore Our Blog Archive | Latest Stories & Creative Ideas",
  description:
    "Browse our blog archive for practical advice, inspiring stories, and tips to grow your skills. Fresh content updated weekly!",
};

const Page = async ({ params }) => {
  const { id, category } = params;

  // Optional: validate the ID or check if it exists
  // If invalid: notFound()
  const categoriesRes = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/categories?per_page=100"
  );

    const data = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?_embed=author&per_page=100`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer DWK4UhkW*^@OACYDrZTCGF%nwYs!zk*Im3z0h1jVTllrTWh%92PHXq6OCCIKeJy2`,
      },
    }
  )
     const blogs = await data.json();
  const categories = await categoriesRes.json();

  if (!id || !category) {
    notFound();
  }

  return <CategoryBlogs category={category} blogs={blogs} categories={categories} id={String(id)} />;
};

export default Page;
