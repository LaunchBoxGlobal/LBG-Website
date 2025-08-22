"use client";

import React from "react";
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

const BlogClient = ({
  blog,
  blogs,
  headings,
  categories,
  author,
  blogDate,
  slug,
}) => {
  const matchedCategories = blog?.categories?.map((catId) =>
    categories?.find((category) => category?.id === catId)
  );

  return (
    <main className="w-full bg-white relative py-36 2xl:pt-52 padding-x">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10">
        <div className="w-full col-span-2 blog-page">
          <div className="w-full flex items-center justify-start gap-1 flex-wrap mb-5">
            <Link href="/blog" className="text-[#434343] text-sm lg:text-base">
              Blog
            </Link>
            <MdKeyboardArrowRight className="text-lg" />
            {matchedCategories && (
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
        <div className="w-full col-span-1 relative pt-6">
          <div className="w-full sticky top-20 flex flex-col items-start gap-5 ">
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
