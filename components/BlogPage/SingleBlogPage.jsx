"use client";
import "./style.css";
import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";
import BlogAuthorDetails from "./BlogAuthorDetails";
import TableOfContent from "./TableOfContent"; 

const SingleBlogPage = ({ blog, author, date, headings }) => {
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
  }

  
  let tocInserted = false;

  const modifiedContent = parse(blog?.content?.rendered || "", {
    replace: (domNode) => {
     
      if (domNode.name === "h1") {
        return (
          <>
            <div className="blog-html">
              <h1 className="blocContentTitle">{domToReact(domNode.children)}</h1>
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
      if (domNode.name === "img" && !tocInserted) {
        tocInserted = true;
        return (
          <>
            <img
              {...domNode.attribs}
              className={`w-full rounded-xl my-5 ${
                domNode.attribs?.class || ""
              }`}
              alt={domNode.attribs?.alt || ""}
            />
            <div className="my-8">
              <TableOfContent headings={headings} />
            </div>
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
