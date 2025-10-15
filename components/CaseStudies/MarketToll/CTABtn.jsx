"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // lightweight arrow icon
import Link from "next/link";

function CTABtn() {
  return (
    <Link href={"/contact-us"} >
      {/* Arrow Icon */}
      <button className="group flex items-center gap-3 rounded-full bg-[#f40e00] pr-6 pl-1 py-1 text-white font-semibold transition-all duration-300 ">
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white transition-all duration-300 group-hover:translate-x-4">
       <svg width="12" height="27" viewBox="0 0 12 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.2486 17.0456C10.1905 15.0874 10.1905 11.9125 8.24859 9.95435L0.336096 1.97536C-0.112031 1.52347 -0.112032 0.790813 0.336094 0.338919C0.78422 -0.112972 1.51078 -0.112976 1.9589 0.338919L9.8714 8.3179C12.7095 11.1799 12.7095 15.8201 9.8714 18.6821L1.95891 26.6611C1.51078 27.113 0.784224 27.113 0.336097 26.6611C-0.11203 26.2092 -0.11203 25.4765 0.336096 25.0246L8.2486 17.0456Z" fill="#FE0000"/>
</svg>

      </span>

      {/* Text */}
      <span className=" ml-4 text-xl transition-all duration-300 ">
      Let’s Talk About Growth
      </span>
      </button>
    </Link>
  );
}

export default CTABtn;
