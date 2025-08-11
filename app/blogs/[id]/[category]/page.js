import CategoryBlogs from "@/components/Blogs/CategoryBlogs/CategoryBlogs";
import React from "react";

export const metadata = {
  title: "Explore Our Blog Archive | Latest Stories & Creative Ideas",
  description:
    "Browse our blog archive for practical advice, inspiring stories, and tips to grow your skills. Fresh content updated weekly!",
};

const page = ({ params }) => {
  const { id, category } = params;
  console.log("category >>>", category);
  return <CategoryBlogs category={category} id={id} />;
};

export default page;
