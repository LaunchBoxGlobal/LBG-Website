"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HomePageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // Fetch blogs
  const fetchBlogs = async (count = 6, categoryId) => {
    setLoading(true);
    try {
      const url =
        categoryId && categoryId !== "all"
          ? `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?_embed=author&categories=${categoryId}&per_page=${count}`
          : `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?_embed=author&per_page=${count}`;

      const res = await fetch(url, {
        cache: "no-store",
        headers: {
          Authorization:
            "Bearer DWK4UhkW*^@OACYDrZTCGF%nwYs!zk*Im3z0h1jVTllrTWh%92PHXq6OCCIKeJy2",
        },
      });

      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories — only show chosen ones
  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/categories?per_page=100"
      );
      const data = await res.json();
      const allowedCategories = [
        "App &amp; Software Development",
       "Ecommerce &amp; Digital Business",
        "Custom Software Development",
      ];

      const filtered = data.filter((cat) =>
    
        allowedCategories.includes(cat.name)
      
      );

      const ordered = filtered.sort(
        (a, b) =>
          allowedCategories.indexOf(decodeHTML(a.name)) -
          allowedCategories.indexOf(decodeHTML(b.name))
      );

      setCategories(ordered);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      fetchBlogs();
    } else {
      fetchBlogs(6, categoryId);
    }
  };

  const decodeHTML = (str) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  return (
    <section className="w-full py-16 lg:py-28 bg-white padding-x">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center gap-4 px-4">
        <h2 className="section-heading lg:w-[70%] text-center">
          Insights That Drive <br />
          <span className="text-red-600">Innovation</span>
        </h2>
        <p className="section-paragraph text-center w-full md:w-2/3">
          Stay ahead with our blog, featuring industry insights, practical tips,
          and stories that spark growth. From tech trends to proven strategies,
          we share the knowledge you need to turn bold ideas into real results.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <button
          onClick={() => handleCategoryClick("all")}
          className={`px-4 py-2 rounded-full border transition ${
            activeCategory === "all"
              ? "bg-red-600 text-white border-red-600"
              : "bg-transparent text-gray-700 border-gray-300 hover:border-red-600"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-4 py-2 rounded-full border transition ${
              activeCategory === cat.id
                ? "bg-red-600 text-white border-red-600"
                : "bg-transparent text-gray-700 border-gray-300 hover:border-red-600"
            }`}
          >
            {decodeHTML(cat.name)}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Loading blogs...
          </p>
        ) : blogs.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No blogs found.
          </p>
        ) : (
          blogs.map((blog) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <Image
                src={
                  blog.jetpack_featured_media_url ||
                  "https://via.placeholder.com/400x250?text=No+Image"
                }
                width={100}
                height={52}
                alt={blog.title?.rendered}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-gray-400 uppercase mb-1">
                  Category
                </span>
                <h3
                  className="font-semibold text-lg line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
                />
                <p
                  className="text-sm text-gray-500 mt-2 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.excerpt?.rendered }}
                />
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default HomePageBlogs;
