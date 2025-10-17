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
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";

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
  const [isOpen, setIsOpen] = useState(false);
  const matchedCategories = blog?.categories?.map((catId) =>
    categories?.find((category) => category?.id === catId)
  );

  return (
    <main className="w-full bg-white  py-36 2xl:pt-52 padding-x">
      <div className="fixed bottom-0 left-[3%] z-[9999]">
        {isOpen ? (
          <div className="bg-white border border-gray-200 shadow-2xl rounded-t-xl w-[300px] p-5 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-gray-900">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <MdKeyboardArrowDown size={20} />
              </button>
            </div>

            {/* Body */}
            <input
              className="border w-full my-2 p-2 rounded-md "
              placeholder="Email"
            />
            <p className="text-sm text-gray-600 mb-4">
              Get the latest updates, blogs, and news delivered to your inbox.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("newsletter-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full bg-[#F40E00] text-white font-semibold py-2 rounded-lg hover:bg-[#d90c00] transition"
            >
              Subscribe Now
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-between w-[300px] bg-white border border-gray-300 
                 shadow-md px-4 py-3 rounded-t-lg font-semibold text-sm text-gray-900 hover:bg-gray-50"
          >
            SUBSCRIBE TO OUR NEWSLETTER
            <MdKeyboardArrowUp size={20} className="text-gray-700" />
          </button>
        )}
      </div>

      {/* 🌐 Floating Share Button */}
      <div className="relative">
        <div className="sticky top-1/3 w-[10%]  z-50 hidden md:flex flex-col ">
          <div className="relative">
            {/* Main circular button */}
            <button
              onClick={() => setShowShare((prev) => !prev)}
              className={cn(
                `flex flex-col items-center justify-center bg-white border border-red-400 
            shadow-[0_0_10px_rgba(255,0,0,0.3)] text-[#F40E00] rounded-full h-16 w-16 
            hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all`,
                showShare == true ? "bg-[#F40E00] text-white" : ""
              )}
            >
              <FaShareAlt className="text-lg" size={18} />
              <span className="text-[15px] font-medium mt-1">Share</span>
            </button>

            {/* Dropdown social icons */}
            <AnimatePresence>
              {showShare && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -left-4 top-14  translate-x-1/2  
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
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black border p-3 rounded-full hover:border hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]  transition"
                  >
                    <FaXTwitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 border p-3 rounded-full hover:border hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 border p-3 rounded-full hover:border hover:border-red-400 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-x-5 gap-y-10">
          <div className="mx-auto w-full md:w-[60%] blog-page">
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
            <div className="bg-white border mx-auto md:hidden block border-gray-200 shadow-2xl rounded-t-xl w-[300px] p-5 relative">
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-bold text-gray-900">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h3>
              </div>

              {/* Body */}
              <input
                className="border w-full my-2 p-2 rounded-md "
                placeholder="Email"
              />
              <p className="text-sm text-gray-600 mb-4">
                Get the latest updates, blogs, and news delivered to your inbox.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("newsletter-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full bg-[#F40E00] text-white font-semibold py-2 rounded-lg hover:bg-[#d90c00] transition"
              >
                Subscribe Now
              </button>
            </div>
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
