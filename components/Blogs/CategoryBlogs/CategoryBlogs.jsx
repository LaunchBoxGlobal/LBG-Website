import React from "react";
import BlogCard from "../BlogCard";
import BlogsContactForm from "@/components/Common/BlogsContactForm";

const CategoryBlogs = async ({ id, category }) => {
  let blogs = [];

  try {
    const res = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?categories=${id}`,
      { cache: "no-store" } // or "force-cache" if you're okay with caching
    );

    if (res.ok) {
      blogs = await res.json();
    }
  } catch (error) {
    console.error("Error fetching category blogs:", error);
  }

  return (
    <section className="w-full relative padding-x">
      {blogs?.length > 0 ? (
        <>
          <div className="w-full relative pt-36 2xl:pt-52 padding-x flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
            <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-10 md:leading-[54px] lg:leading-[84px] xl:leading-[104px] 2xl:leading-[104px] w-full">
              Our Exclusive <span className="red-text">Blogs</span>
            </h1>
          </div>

          <div className="w-full my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
            {blogs.map((blog, i) => (
              <BlogCard key={i} content={blog} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full pt-40 pb-20 text-center">
          <p className="text-4xl font-bold red-text">Blogs not found.</p>
        </div>
      )}

      <div className="w-full border hidden lg:block" />

      <div className="w-full py-10 lg:py-28">
        <BlogsContactForm />
      </div>
    </section>
  );
};

export default CategoryBlogs;
