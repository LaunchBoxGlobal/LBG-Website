"use client";
import Image from "next/image";
import React from "react";

const RecentBlogList = ({ blogs, blog }) => {
  return (
    <div className="w-full px-4">
      <div className="w-full relative rounded-2xl flex flex-col items-start gap-6">
        <h3 className="text-2xl font-semibold">Recent Blogs</h3>
        {[1, 2, 3]?.map((_, i) => {
          return (
            <div
              key={i}
              className="w-full flex items-center gap-3 cursor-pointer border-b pb-5"
            >
              <div className="min-w-[100px]">
                <Image
                  src={"/case-studies/bloom-banner-03.png"}
                  alt="blog feature image"
                  width={200}
                  height={250}
                  className="h-[70px] w-[100px] rounded-xl"
                />
              </div>
              <div className="w-full">
                <h3 className="text-[19px] font-normal leading-6">
                  Top 6 Apps Like TikTok You Should Try in 2025
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentBlogList;
