"use client";
import React from "react";
import Link from "next/link";

function MarketSize() {
  const stats = [
    {
      title: "Projected Revenue (2025)",
      value: "US$742.58bn",
      sub: "(Enterprise Software: US$316.69bn)",
    },
    {
      title: "CAGR (2025–2030)",
      value: "3.98%",
      sub: "Projected market size: US$902.74bn by 2030",
    },
    {
      title: "Leading Market (2025)",
      value: "United States",
      sub: "Revenue: US$379.29bn",
    },
  ];

  return (
    <section className="w-full py-20 midlg:py-32 bg-white">
      <section className="w-full flex flex-col items-center justify-center gap-6 padding-x text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          2025 Market Size: <span className="red-text">Custom Software at $146B</span>
        </h2>

        <p className="section-paragraph lg:w-[85%] mx-auto">
          The software market is set for major growth, reaching{" "}
          <strong>US$742.58bn in 2025</strong> and climbing to{" "}
          <strong>US$902.74bn by 2030</strong> with a <strong>3.98% CAGR</strong>.
          Enterprise software will dominate at <strong>US$316.69bn</strong>, while the{" "}
          <strong>U.S. leads globally with US$379.29bn</strong>, highlighting massive
          opportunities for innovation and expansion.{" "}
          <span className="text-gray-500">(Source: <a href="https://www.statista.com/outlook/tmo/software/worldwide" >Statista</a>)</span>
        </p>

        <section className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-6 bg-white rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 text-center"
            >
              <p className="text-sm text-gray-600 mb-2 font-medium uppercase">
                {item.title}
              </p>
              <p className="text-2xl font-bold text-[#F40E00] mb-1">{item.value}</p>
              <p className="text-sm text-gray-700">{item.sub}</p>
            </div>
          ))}
        </section>

        <div className="mt-12 flex flex-col items-center justify-center">
          <Link
            href="/contact-us"
            className="group relative text-center w-full md:w-auto font-semibold px-8 py-3 rounded-full overflow-hidden bg-[#F40E00] before:absolute before:bg-[#ffffff] before:top-1/2 before:left-1/2 before:h-8 before:w-28 before:border before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
          >
            <span className="relative z-0 text-white group-hover:text-black transition ease-in-out duration-500">
              Own The Future
            </span>
          </Link>

          <p className="mt-3 text-[#F40E00] text-sm w-full text-center">
            Act now, secure your edge, and position your business for tomorrow’s growth today.
          </p>
        </div>
      </section>
    </section>
  );
}

export default MarketSize;
