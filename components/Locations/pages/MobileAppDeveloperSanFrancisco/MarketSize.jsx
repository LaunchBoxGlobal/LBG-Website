"use client";
import React from "react";
import Link from "next/link";

function MarketSize() {
  const stats = [
    {
      title: "Projected Revenue",
      value: "$480.58B by 2030",
      sub: "",
    },
    {
      title: "CAGR",
      value: "14.56% Growth Rate",
      sub: "",
    },
    {
      title: "Users",
      value: "34.8% North America",
      sub: "",
    },
  ];

  return (
    <section className="w-full py-20 midlg:py-32 bg-white">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Mobile App Market 2025:{" "}
          <span className="red-text">$243.6B Expansion</span>
        </h2>

        <p className="section-paragraph lg:w-[85%] mx-auto">
          In 2024, North America captured{" "}
          <strong>34.8%</strong> of the mobile application development platform
          market. By 2025, the market grew to{" "}
          <strong>USD 243.55 billion</strong>, with projections reaching{" "}
          <strong>USD 480.58 billion by 2030</strong> at a{" "}
          <strong>14.56% CAGR</strong>. The top 10 mobile app development
          companies in San Francisco are well-positioned to leverage this global
          growth.{" "}
          <span className="text-gray-500">
            (Source:{" "}
            <a
              className="underline text-[#f40e00]"
              href="https://www.mordorintelligence.com"
            >
              Mordor Intelligence
            </a>
            )
          </span>
        </p>

        <section className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col hover:border hover:border-[#f40e00] justify-center items-center p-6 bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 text-center"
            >
              <p className="text-sm text-gray-600 mb-2 font-medium uppercase">
                {item.title}
              </p>
              <p className="text-2xl font-bold text-[#F40E00] mb-1">
                {item.value}
              </p>
              <p className="text-sm text-gray-700">{item.sub}</p>
            </div>
          ))}
        </section>

        <div className="mt-4 flex flex-col items-center justify-center">
          <Link
            href="/contact-us"
            className="group relative text-center w-full md:w-auto font-semibold px-8 py-3 rounded-full overflow-hidden bg-[#F40E00] before:absolute before:bg-[#ffffff] before:top-1/2 before:left-1/2 before:h-8 before:w-28 before:border before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
          >
            <span className="relative z-0 text-white group-hover:text-black transition ease-in-out duration-500">
              Don’t Miss the Mobile Revolution
            </span>
          </Link>

          <p className="mt-3 text-[#F40E00] text-sm w-full text-center">
            Act now to capture massive growth, reach wider audiences, and gain a
            competitive advantage in this rapidly expanding industry.
          </p>
        </div>
      </section>
    </section>
  );
}

export default MarketSize;
