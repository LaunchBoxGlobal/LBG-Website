"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "../Blogs/BlogCard";
import { useParams } from "next/navigation";

const OtherBlogs = ({ currentSlug }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  // console.log("slug >>>", slug);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts"
      );
      const data = await res.json();

      // Filter out current blog and take only 3
      const filtered = data.filter((blog) => blog.slug !== slug).slice(0, 3);
      setBlogs(filtered);
    } catch (error) {
      console.log("An error occurred while fetching blogs >>>>", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    console.log("useffect called");
  }, [slug]);

  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="section-heading">
          Other <span className="red-text mx-auto text-center">Blogs</span>
        </h2>
      </div>
      <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        {blogs?.map((blog, i) => (
          <BlogCard key={i} content={blog} />
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
