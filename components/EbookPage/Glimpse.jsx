"use client";
import React from "react";
import { Megaphone, Mail, HelpCircle } from "lucide-react"; // for icons

export default function Glimpse() {
  const items = [
    {
      icon: <Megaphone size={32} className="text-white" />,
      title: "The Power of Validation Before Development",
      description:
        "60% of startup apps fail because they skip validation. Learn simple frameworks to test your concept before you write a single line of code.",
    },
    {
      icon: <Mail size={32} className="text-white" />,
      title: "MVP Doesn’t Mean Incomplete",
      description:
        "A Minimum Viable Product is about building smart, not small. Discover how to balance speed, usability, and feedback in early-stage builds.",
    },
    {
      icon: <HelpCircle size={32} className="text-white" />,
      title: "Design is Strategy, Not Decoration",
      description:
        "Great design shapes engagement and trust. See how design-thinking principles guide every successful digital product.",
    },
  ];

  return (
    <section className="w-full py-16  padding-x flex flex-col items-center text-center px-4">
      <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900">
        A Glimpse Inside the{" "}
        <br/>
        <span className="text-[#F40E00]">eBook</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center"
          >
            <div className="bg-[#F40E00] p-3 rounded-xl mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-[#F40E00] hover:bg-[#d90d00] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
        Download The Ebook
      </button>
    </section>
  );
}
