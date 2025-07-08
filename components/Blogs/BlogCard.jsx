"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./style.css";
import Cursor from "./Cursor";
import DOMPurify from "isomorphic-dompurify";
import he from "he";

const BlogCard = ({ content }) => {
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  const { title, excerpt, slug, featured_media, date } = content;

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const imageUrl = content?.jetpack_featured_media_url;

  const stripHtml = (html) => {
    const clean = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
    return clean;
  };

  const getFirstParagraph = (html) => {
    if (!html) return "";
    const match = html.match(/<p>(.*?)<\/p>/);
    return match && match[1] ? match[1] : "";
  };

  const rawContent = content?.content?.rendered || "";
  const firstParagraph = getFirstParagraph(rawContent);
  const cleanParagraph = stripHtml(firstParagraph);
  const shortExcerpt = cleanParagraph.substring(0, 120) + "...";

  const getH1Text = (html) => {
    if (!html) return "";

    const match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (match && match[1]) {
      const rawH1 = match[1];
      const cleanH1 = DOMPurify.sanitize(rawH1, { ALLOWED_TAGS: [] });
      return he.decode(cleanH1);
    }

    return "";
  };
  const blogTitle = getH1Text(rawContent);
  return (
    <Link href={`/blog/${slug}`}>
      <div className="w-full relative flex flex-col items-start gap-3 border-b lg:border-none pb-10 blog-card">
        {imageUrl && (
          <div
            className="w-full relative blog-card-image"
            onMouseEnter={() => setIsCursorHovering((prev) => !prev)}
            onMouseLeave={() => setIsCursorHovering((prev) => !prev)}
          >
            <Image
              src={imageUrl}
              alt="blog image"
              width={416}
              height={286}
              className="w-full blog-card-img rounded-[12px]"
            />
            <div className="w-full absolute flex items-center gap-2 bottom-4 inset-x-0 px-4">
              {content?.date && (
                <div className="w-[145px] bg-white h-[36px] rounded-[20px] flex items-center justify-center gap-2 px-1">
                  <Image
                    src={"/blog-card-calendar-icon.png"}
                    width={18}
                    height={18}
                    alt="blog-card-calendar-icon"
                  />
                  <span className="text-base lg:text-lg font-semibold">
                    {formatDate(content?.date)}
                  </span>
                </div>
              )}
              {/* <div className="w-[95px] bg-white h-[36px] rounded-[20px] flex items-center justify-center gap-2 px-1">
                <Image
                  src={"/blog-card-blog-icon.png"}
                  width={15}
                  height={18}
                  alt="blog-card-blog-icon"
                />
                <span className="text-base lg:text-lg font-semibold">Blog</span>
              </div> */}
            </div>
          </div>
        )}
        {blogTitle && (
          <h1
            className="font-semibold text-[24px] leading-none"
            dangerouslySetInnerHTML={{ __html: title?.rendered }}
          ></h1>
        )}
        {cleanParagraph && <p>{cleanParagraph?.slice(0, 100)}...</p>}
        {/* <p className="text-lg leading-5 lg:leading-6">
          {firstParagraph?.innerText}
        </p> */}
        <p className="red-text underline text-lg">Read More</p>
      </div>
      <Cursor isHovering={isCursorHovering} />
    </Link>
  );
};

export default BlogCard;
