"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { AiOutlineBulb } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const relatedPages = [
  {
    title: "Build My Project",
    url: "/services/mobile-app-development",
    icon: "/on-demand-talent/dedicated-software-team-icon.png",
    iconWidth: 21,
    iconHeight: 19,
  },
  {
    title: "Build My Team",
    url: "/off-shore-software-development",
    icon: "/on-demand-talent/software-development-outsourcing-icon.png",
    iconWidth: 19,
    iconHeight: 19,
  },
  {
    title: "Provide Me Talents",
    url: "/contact-us",
    icon: "/on-demand-talent/related-page-icon-3.png",
    iconWidth: 21,
    iconHeight: 19,
  },
];

const HeroSearchInput = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail) {
      //   router.push(selectedLink.url);
      alert("Please enter your email address.");
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-center gap-4 mt-3 mb-8 z-10 relative"
    >
      <div className="w-full max-w-[902px] mx-auto">
        <div className="w-full bg-white custom-shadow p-1.5 rounded-[7px]">
          <div className="w-full mx-auto flex items-center justify-between h-[39px] md:h-[49px] lg:h-[60px] border rounded-[7px] bg-gray-50 relative">
            <div className="w-full h-full flex items-center gap-3 pl-3 bg-transparent relative cursor-pointer">
              <AiOutlineBulb className="text-3xl text-gray-500 hidden lg:block" />
              <input
                type="text"
                value={userEmail}
                placeholder="Drop your email address!"
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full h-full bg-transparent outline-none text-xs"
              />
            </div>

            <button
              type="submit"
              className={`h-full lg:min-w-[344px] text-white red-bg cursor-pointer rounded-[7px] px-5 hidden lg:flex items-center justify-center text-center text-lg font-bold`}
              disabled={!userEmail}
            >
              <IoSearchOutline className="text-3xl text-gray-100 lg:hidden block" />
              <span className="lg:block hidden">
                Request 30 min free consultation
              </span>
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:flex-row justify-center gap-3 mt-5 lg:mt-10">
          <button
            type="submit"
            className={`h-[36px] w-[196] text-white red-bg cursor-pointer rounded-[7px] px-5 lg:hidden flex items-center justify-center text-center text-xs font-bold mb-4`}
            disabled={!userEmail}
          >
            <span className="">Request 30 min free consultation</span>
          </button>
          {relatedPages?.map((page, index) => {
            return (
              <Link
                href={page?.url}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 custom-light-red-shadow"
                key={index}
              >
                <Image
                  src={page?.icon}
                  width={page?.iconWidth}
                  height={page?.iconHeight}
                  alt={`${page?.title}-icon`}
                />
                <p className="text-xs lg:text-base font-semibold">
                  {page?.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default HeroSearchInput;
