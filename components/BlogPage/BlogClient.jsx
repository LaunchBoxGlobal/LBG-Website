"use client";

import React, { useState } from "react";
import "./style.css";
import BlogsContactForm from "@/components/Common/BlogsContactForm";
import SingleBlogPage from "@/components/BlogPage/SingleBlogPage";
import RecentBlogList from "@/components/BlogPage/RecentBlogList";
import Loader from "@/components/Common/Loader";
import TableOfContent from "./TableOfContent";
import Link from "next/link";
import CategoryList from "./CategoryList";
import SubscribeNewLetterForm from "./SubscribeNewLetterForm";
import OtherBlogs from "./OtherBlogs";
import { MdKeyboardArrowRight } from "react-icons/md";

// 👇 icons for share
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";

const BlogClient = ({
  blog,
  blogs,
  headings,
  categories,
  author,
  blogDate,
  slug,
}) => {
  const [showShare, setShowShare] = useState(false);

  const matchedCategories = blog?.categories?.map((catId) =>
    categories?.find((category) => category?.id === catId)
  );

  return (
    <main className="w-full bg-white  py-36 2xl:pt-52 padding-x">
      {/* 🌐 Floating Share Button */}
      <div className="relative">
        <div className="sticky top-1/3 w-[10%]  z-50 hidden md:flex flex-col ">
          <div className="relative">
            {/* Main circular button */}
            <button
              onClick={() => setShowShare((prev) => !prev)}
              className={cn(`flex flex-col items-center justify-center bg-white border border-red-400 
            shadow-[0_0_10px_rgba(255,0,0,0.3)] text-[#F40E00] rounded-full h-16 w-16 
            hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all` , showShare == true ? "bg-[#F40E00] text-white":"")}
            >
              <FaShareAlt className="text-lg" size={24} />
              <span className="text-[10px] font-medium mt-1">Share</span>
            </button>

            {/* Dropdown social icons */}
            <AnimatePresence>
              {showShare && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -left-5 top-14  translate-x-1/2  
                rounded-xl  flex flex-col gap-3 p-6"
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 border p-3 rounded-full hover:border hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]  transition"
                  >
                    <FaFacebookF size={35} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black border p-3 rounded-full hover:border hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]  transition"
                  >
                    <FaXTwitter  size={35} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 border p-3 rounded-full hover:border hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition"
                  >
                    <FaLinkedinIn size={35} />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 border p-3 rounded-full hover:border hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition"
                  >
                    <FaWhatsapp size={35} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>


        <div className="w-full grid grid-cols-1 gap-x-5 gap-y-10">
          <div className="mx-auto w-full md:w-[70%] blog-page">
      
            <div className="w-full flex items-center justify-start gap-1 flex-wrap mb-5">
              <Link
                href="/blog"
                className="text-[#434343] text-sm lg:text-base"
              >
                Blog
              </Link>
              <MdKeyboardArrowRight className="text-lg" />

              {matchedCategories && matchedCategories[0] && (
                <div className="flex items-center gap-1">
                  <Link
                    href={`/blogs/${matchedCategories[0]?.id}/${matchedCategories[0]?.name}`}
                    className="text-[#434343] text-sm lg:text-base"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: matchedCategories[0]?.name || "",
                      }}
                    />
                  </Link>
                  <MdKeyboardArrowRight className="text-lg" />
                </div>
              )}

              <Link
                href={`/blog/${slug}`}
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

          {/* Optional Sidebar */}
          {/* 
        <div className="w-full col-span-1 relative pt-6">
          <div className="w-full sticky top-20 flex flex-col items-start gap-5 ">
            <SubscribeNewLetterForm />
            <TableOfContent headings={headings} />
            <CategoryList headings={headings} categories={categories} />
          </div>
        </div> 
        */}
        </div>
      </div>
      <div className="w-full border my-10 lg:my-20" />

      <OtherBlogs />
    </main>
  );
};

export default BlogClient;
