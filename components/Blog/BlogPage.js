import "./style.css";
import React from "react";
import CoverImage from "./CoverImage";
import TableOfContent from "./TableOfContent";
import Introduction from "./Introduction";
import BannerAndImage from "./BannerAndHeading";
import BannerAndImage2 from "./BannerAndHeading2";
import BannerAndImage3 from "./BannerAndHeading3";
import Conslusion from "./Conslusion";
import Faqs from "./Faqs";
import BlogsContactForm from "../Common/BlogsContactForm";

const BlogPage = () => {
  return (
    <main className="w-full bg-white relative py-36 2xl:pt-52 padding-x flex flex-col gap-y-16 md:gap-y-20 xl:gap-y-28">
      <CoverImage />
      <TableOfContent />
      <Introduction />
      <BannerAndImage />
      <div className="w-full border" />
      <BannerAndImage2 />
      <div className="w-full border" />
      <BannerAndImage3 />
      <div className="w-full border" />
      <Conslusion />
      <div className="w-full border" />
      <Faqs />
      <div className="w-full border" />
      <div className="w-full">
        <BlogsContactForm />
      </div>
    </main>
  );
};

export default BlogPage;
