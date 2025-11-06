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
            Here’s Why We’re Not Charging a <br/> {" "}
            <span className="text-[#F40E00]">Dollar for This eBook</span>
          </h2>

          <p className="text-gray-600 mt-6 text-sm sm:text-base leading-relaxed max-w-lg">
            Simply put, our goal isn’t to earn money from this eBook. It was created by one of the best app developers for startups because, even if you never work with us, we want you to build better and avoid mistakes. This eBook exists to share what we’ve learned. You’ll know what to look for when you hire mobile app developers or when you start the mobile app development process. We believe knowledge should be shared freely without limits. 
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
          <div className="relative ">
            <Image
              src="/e-book/f1.png"
              alt="eBook Preview"
              width={700}
              height={800}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
