import "./style.css";
import React from "react";

const SingleBlogPage = ({ blog }) => {
  return (
    <div className="w-full blog-page">
      <div
        className="w-full flex flex-col items-start mt-6 gap-0 blogContent"
        dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }}
      />
    </div>
  );
};

export default SingleBlogPage;
