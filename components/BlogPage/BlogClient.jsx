"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import BlogsContactForm from "@/components/Common/BlogsContactForm";
import SingleBlogPage from "@/components/BlogPage/SingleBlogPage";
import RecentBlogList from "@/components/BlogPage/RecentBlogList";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/Common/Loader";
import TableOfContent from "./TableOfContent";
import Link from "next/link";
import CategoryList from "./CategoryList";
import SubscribeNewLetterForm from "./SubscribeNewLetterForm";
import OtherBlogs from "./OtherBlogs";
import { MdKeyboardArrowRight } from "react-icons/md";

const BlogClient = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [blog, setBlog] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [categories, setCategories] = useState(null);
  const [author, setAuthor] = useState(null);
  const [blogDate, setBlogDate] = useState(null);

  const fetchBlog = async () => {
    try {
      setLoading(true);

      if (!params?.slug) {
        router.push("/blogs");
        return;
      }

      const res = await fetch(
        `https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts?slug=${params.slug}&_embed=author`,
        {
          cache: "no-store",
          headers: {
            Authorization: `Bearer DWK4UhkW*^@OACYDrZTCGF%nwYs!zk*Im3z0h1jVTllrTWh%92PHXq6OCCIKeJy2`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch blog");
      }

      const data = await res.json();

      if (data && data.length > 0) {
        const blogData = data[0];
        setBlog(blogData);
        console.log("blog date >>>>", data);
        setAuthor(data[0]?._embedded?.author[0]);
        setBlogDate(data[0]?.date);

        // Extract headings from HTML content
        const htmlString = blogData.content?.rendered || "";
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");

        const h1s = Array.from(doc.querySelectorAll("h1")).map((el) =>
          el.textContent.trim()
        );
        const h2s = Array.from(doc.querySelectorAll("h2")).map((el) =>
          el.textContent.trim()
        );

        setHeadings([...h1s, ...h2s]);
      } else {
        router.push("/blog");
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    setLoadingBlogs(true);
    try {
      const res = await fetch(
        "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/posts"
      );
      const blogs = await res.json();
      setBlogs(blogs);
    } catch (error) {
      console.log("an error occurre while fetching blogs >>>>", error);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const fetchCategories = async () => {
    // setLoading(true);
    try {
      const res = await fetch(
        "https://public-api.wordpress.com/wp/v2/sites/blogs0864.wordpress.com/categories"
      );
      const blogs = await res.json();
      setCategories(blogs);
      // console.log("categories >>>>", blogs);
    } catch (error) {
      console.log("error while fetching categories >>>>", error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
    fetchBlogs();
    fetchCategories();
  }, [params?.slug, router]);

  const matchedCategories = blog?.categories?.map((catId) =>
    categories?.find((category) => category?.id === catId)
  );

  if (loading && loadingBlogs) {
    return <Loader />;
  }

  return (
    <main className="w-full bg-white relative py-36 2xl:pt-52 padding-x">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10">
        <div className="w-full col-span-2 blog-page">
          <div className="w-full flex items-center justify-start gap-1 flex-wrap mb-5">
            <Link href="/blogs" className="text-[#434343] text-sm lg:text-base">
              Blogs
            </Link>
            <MdKeyboardArrowRight className="text-lg" />
            {matchedCategories && (
              <div className="flex items-center gap-1">
                <Link
                  href={`/blogs/${matchedCategories[0]?.id}`}
                  className="text-[#434343] text-sm lg:text-base"
                >
                  {matchedCategories[0]?.name}
                </Link>
                <MdKeyboardArrowRight className="text-lg" />
              </div>
            )}
            <Link
              href={`/blog/${params?.slug}`}
              className="font-medium text-[#434343] text-sm lg:text-base"
            >
              {headings[0]}
            </Link>
          </div>
          <SingleBlogPage
            blog={blog}
            headings={headings}
            author={author}
            date={blogDate}
          />
        </div>
        <div className="w-full col-span-1 relative pt-6">
          <div className="w-full sticky top-20 flex flex-col items-start gap-5 ">
            {/* <RecentBlogList blogs={blogs} blog={blog} /> */}
            <SubscribeNewLetterForm />
            <TableOfContent headings={headings} />
            <CategoryList headings={headings} categories={categories} />
          </div>
        </div>
      </div>

      <div className="w-full border my-10 lg:my-20" />

      <OtherBlogs />
    </main>
  );
};

export default BlogClient;
