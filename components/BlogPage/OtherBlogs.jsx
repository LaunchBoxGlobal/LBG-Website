"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../Blogs/BlogCard";

const OtherBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts"
      );
      const blogs = await res.json();
      setBlogs(blogs);
    } catch (error) {
      console.log("an error occurre while fetching blogs >>>>", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="section-heading">
          Other <span className="red-text mx-auto text-center">Blogs</span>
        </h2>
      </div>
      <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {blogs?.map((blog, i) => {
          return <BlogCard key={i} content={blog} />;
        })}
      </div>
    </div>
  );
};

export default OtherBlogs;
