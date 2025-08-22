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

  if (!id || !category) {
    notFound();
  }

  return <CategoryBlogs category={category} id={id} />;
};

export default Page;
