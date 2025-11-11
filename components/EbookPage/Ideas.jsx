import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
const ideas = [
  "How to define and validate your app idea before building it.",
  "Key budgeting and timeline strategies for startups.",
  "How to choose the right development approach and tech stack. ",
];
function  Ideas() {
  return (
    <section className="padding-x py-24">
  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">

    <div className="w-full lg:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Why This Guide Is a <br/> Must-Read for{" "}
        <span className="text-[#f40e00]">Startups</span>
      </h1>

      <p className="py-4 opacity-65 text-base md:text-lg">
        If you are a startup or a founder planning to build an app but don’t know where to start, this ebook is exactly what you need. It simplifies mobile app development for startups, guiding you from idea validation to launch strategy. Here’s what you’ll learn:
      </p>

      <div className="flex flex-col gap-6 py-4">
        {ideas.map((i, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <FaCheck
              size={22}
              className="bg-[#f40e00] rounded-full p-1 text-white mt-1"
            />
            <span className="font-semibold text-base md:text-lg">{i}</span>
          </div>
        ))}
      </div>

      <div className="relative bg-white shadow-xl p-3 w-full rounded-full mt-4">
        <input
          placeholder="Enter Your Email"
          className="pl-3 pr-36 py-3 font-semibold text-base rounded-full outline-none w-full text-gray-500"
        />
        <button className="bg-[#f40e00] text-white px-6 py-2 md:py-4 rounded-full absolute right-3 top-1/2 -translate-y-1/2 text-sm md:text-base">
          Get Your Copy
        </button>
      </div>

      <p className="p-2 text-sm opacity-65 text-center">
         <span>It’s not rocket science, unless you skip this guide.</span>
      </p>
    </div>


    <div className="w-full lg:w-1/3 mx-auto">
      <div className="flex flex-col border rounded-2xl shadow-2xl overflow-hidden">
        <Image
          src="/e-book/b1.png"
          alt="image"
          width={500}
          height={500}
          className="rounded-t-2xl w-full object-cover"
        />
        <div className="px-7 py-12">
          
        
<h1 className="text-4xl">Here’s The Catch </h1>
          <p className="text-xl md:text-2xl font-semibold mt-4 text-[#490F0F]">
            Things might start feeling surprisingly achievable.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

  );
}

export default Ideas;
