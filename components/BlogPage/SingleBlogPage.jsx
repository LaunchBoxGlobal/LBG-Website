"use client";
import Image from "next/image";
import "./style.css";
import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import BlogAuthorDetails from "./BlogAuthorDetails";

const SingleBlogPage = ({ blog, author, date }) => {
  const [readTime, setReadTime] = useState(null);

  useEffect(() => {
    getReadTime();
  }, []);

  function getReadTime(wordsPerMinute = 200) {
    const plainText = blog?.content?.rendered.replace(/<[^>]+>/g, " ");
    const wordCount = plainText?.trim()?.split(/\s+/)?.length;
    const time = Math.ceil(wordCount / wordsPerMinute);
    setReadTime(time);
    return `${time} min read`;
  }

  const modifiedContent = parse(blog?.content?.rendered || "", {
    replace: (domNode) => {
      if (domNode.name === "h1") {
        return (
          <>
            <div className="blog-html">
              <h1 className="blocContentTitle">
                {domToReact(domNode.children)}
              </h1>
            </div>
            <BlogAuthorDetails
              author={author}
              date={date}
              readTime={readTime}
            />
          </>
        );
      }
    },
  });

  return (
    <div className="w-full">
      <div className="w-full blog-page">
        <div className="w-full blogContent">{modifiedContent}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
