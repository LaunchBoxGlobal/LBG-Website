"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // lightweight arrow icon
import Link from "next/link";

function CTABtn() {
  return (
    <Link href={"/contact-us"} >
      {/* Arrow Icon */}
      <button className="group flex items-center gap-3 rounded-md hover:bg-black bg-[#E9B44C] pr-6 pl-1 py-2 text-white font-semibold transition-all duration-300 ">
    

      {/* Text */}
      <span className=" ml-4 text-xl transition-all duration-300 ">
    Book a Free Consultation 
      </span>
      </button>
    </Link>
  );
}

export default CTABtn;
