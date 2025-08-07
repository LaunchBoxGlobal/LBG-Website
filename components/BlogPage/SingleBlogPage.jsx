"use client";
import "./style.css";
import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import BlogAuthorDetails from "./BlogAuthorDetails";

const SingleBlogPage = ({ blog, author, date }) => {
  const [readTime, setReadTime] = useState(null);
  const [numericReadTime, setNumericReadTime] = useState(null);

  useEffect(() => {
    getReadTime();
    getNumericReadTime();
  }, []);

  function getReadTime(wordsPerMinute = 125) {
    const plainText = blog?.content?.rendered.replace(/<[^>]+>/g, " ");
    const wordCount = plainText?.trim()?.split(/\s+/)?.length;
    const time = Math.ceil(wordCount / wordsPerMinute);
    setReadTime(time);
    return `${time} min read`;
  }

  function getNumericReadTime(wordsPerMinute = 125) {
    const plainText = blog?.content?.rendered.replace(/<[^>]+>/g, " ");
    const wordCount = plainText?.trim()?.split(/\s+/)?.length || 0;

    const totalSeconds = Math.ceil((wordCount / wordsPerMinute) * 60);

    const minutes = Math.ceil(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    setNumericReadTime(formattedTime);
    return formattedTime;
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
              numericReadTime={numericReadTime}
              blog={blog}
              plainText={blog?.content?.rendered.replace(/<[^>]+>/g, " ")}
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
