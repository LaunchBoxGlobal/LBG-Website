"use client";

import { sidebarlinks } from "@/constants/sidebar/sidebar-links";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const HeroSearchInput = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLink) {
      router.push(selectedLink.url);
    }
  };

  // Click outside closes dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center justify-center gap-4 mt-3 mb-8 z-10 relative"
    >
      <div
        ref={wrapperRef}
        className="w-full max-w-[1002px] bg-white custom-shadow p-1.5 rounded-[7px]"
      >
        <div className="w-full flex items-center justify-between h-[68px] border rounded-[7px] bg-gray-50 relative">
          <div
            className="w-full h-full flex items-center gap-3 pl-3 bg-transparent relative cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <IoSearchOutline className="text-3xl text-gray-500 hidden lg:block" />
            <div className="w-full h-full flex items-center text-lg text-gray-600">
              {selectedLink ? selectedLink.title : "Select a service..."}
            </div>
          </div>

          <button
            type="submit"
            className={`h-full lg:min-w-[212px] text-white ${
              selectedLink ? "red-bg" : "red-bg cursor-not-allowed"
            } rounded-[7px] px-5 flex items-center justify-center text-center text-lg font-bold`}
            disabled={!selectedLink}
          >
            <IoSearchOutline className="text-3xl text-gray-100 lg:hidden block" />
            <span className="lg:block hidden">Get Started Now</span>
          </button>
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <ul className="absolute w-full max-w-[1002px] max-h-[150px] left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-b-md mt-[6px] shadow-lg z-20 overflow-y-scroll">
            {sidebarlinks.map((link) => (
              <li
                key={link.url}
                onClick={() => {
                  setSelectedLink(link);
                  setDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                {link.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
};

export default HeroSearchInput;
