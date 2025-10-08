import React from "react";
import List from "./List";
import Loader from "../Common/Loader";
import BlogCard from "./BlogCard";
import BlogsContactForm from "../Common/BlogsContactForm";

const BlogsPage = ({ blogs }) => {
  return (
    <section className="w-full relative pt-36 2xl:pt-52 padding-x">
      <div className="w-full relative pt-10 flex flex-col items-center justify-start gap-5 lg:gap-3 bg-white">
        <h1 className="font-bold text-[8.5vw] md:text-[5.5vw] text-center tracking-normal leading-[1] w-full">
          Our Exclusive <span className="red-text">Blogs</span>
        </h1>
      </div>

      <div className="w-full my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {blogs?.map((blog, i) => {
          return <BlogCard key={i} content={blog} />;
        })}
      </div>

      <div className="w-full border hidden lg:block" />

      <div className="w-full py-10 lg:py-28">
        <BlogsContactForm />
      </div>
    </section>
  );
};

export default BlogsPage;
