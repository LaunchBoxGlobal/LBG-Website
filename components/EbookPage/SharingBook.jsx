"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

export default function SharingBook() {
  return (
    <section className="w-full  py-20  flex padding-x justify-center items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Why We’re Sharing This eBook{" "}
            <span className="text-[#F40E00]">for Free</span>
          </h2>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed max-w-lg">
            We believe access to the right knowledge can change how startups grow.
            This eBook is part of our mission to empower founders, teams, and
            innovators with the tools they need — without barriers. By giving
            our insights away for free, we build real relationships and help you
            make smarter product decisions.
          </p>

       
          <div className="mt-10 bg-white rounded-2xl shadow-md flex items-center gap-4 p-4 max-w-md hover:shadow-lg transition-all duration-300">
            <div className=" p-3 rounded-xl text-[#F40E00] flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <p className="text-gray-700 text-sm sm:text-base flex-1">
              If this guide helps you grow, we’ve already achieved our goal.
            </p>
            <ArrowRight className="text-[#F40E00] bg-[#C700001A] p-3 rounded-full" size={50} />
          </div>
        </div>


        <div className="flex justify-center relative">
          <div className="relative -rotate-6 drop-shadow-2xl">
            <Image
              src="/images/free-ebook-preview.png"
              alt="eBook Preview"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
