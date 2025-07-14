import Image from "next/image";
import "./style.css";
import React, { useEffect, useState } from "react";
import parse, { domToReact } from "html-react-parser";

const SingleBlogPage = ({ blog, author, date }) => {
  const [readTime, setReadTime] = useState(null);

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

  function getReadTime(wordsPerMinute = 200) {
    // Remove all HTML tags
    const plainText = blog?.content?.rendered.replace(/<[^>]+>/g, " ");

    // Trim & split by whitespace to count words
    const wordCount = plainText?.trim()?.split(/\s+/)?.length;

    // Calculate time in minutes
    const time = Math.ceil(wordCount / wordsPerMinute);
    setReadTime(time);

    return `${time} min read`;
  }

  useEffect(() => {
    getReadTime();
  }, []);

  return (
    <div className="w-full">
      {/* <BlogAuthorDetails author={author} date={date} readTime={readTime} /> */}
      <div className="w-full blog-page">
        <div
          className="w-full flex flex-col items-start mt-6 gap-0 blogContent"
          dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}
        />
      </div>
      {/* <div className="blogContent">{modifiedContent}</div> */}
    </div>
  );
};

{
  /* <BlogAuthorDetails author={author} date={date} readTime={readTime} />
      <div className="w-full blog-page">
        <div
          className="w-full flex flex-col items-start mt-6 gap-0 blogContent"
          dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}
        />
      </div> */
}

export default SingleBlogPage;

export const BlogAuthorDetails = ({ author, date, readTime }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
      {author?.name && (
        <div className="flex items-center gap-2">
          <Image
            src={author?.avatar_urls?.[96] || "/author-profile.jpg"}
            width={54}
            height={54}
            alt="author profile picture"
            className="rounded-full object-contain author-image"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">By:</p>
            <p className="text-base font-bold text-gray-900">{author?.name}</p>
          </div>
        </div>
      )}
      {date && (
        <div className="flex items-center gap-2">
          <Image
            src={"/blog-calendar-image.png"}
            alt="blog-calendar-image"
            width={54}
            height={54}
            className="rounded-full author-image"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Published Date:</p>
            <p className="text-base font-bold text-gray-900">
              {formatDate(date)}
            </p>
          </div>
        </div>
      )}
      {readTime && (
        <div className="flex items-center gap-2">
          <Image
            src={"/blog-estimated-read-time-image.png"}
            alt="blog testimated read time image"
            width={54}
            height={54}
            className="rounded-full author-image"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">Estimated Read Time:</p>
            <p className="text-base font-bold text-gray-900">{readTime} min</p>
          </div>
        </div>
      )}
    </div>
  );
};
