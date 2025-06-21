import Image from "next/image";
import Link from "next/link";
import React from "react";

const content = [
  {
    title: "Introduction",
    id: "introduction",
  },
  {
    title: "What are Offline Games?",
    id: "whatareofflinegames",
  },
  {
    title: "Best Offline Mobile games for endless fun",
    id: "bestofflinemobilegames",
  },
  {
    title: "Top picks for best offline Phone Games",
    id: "bestofflinephonegames",
  },
  {
    title: "Conclusion",
    id: "conslusion",
  },
  {
    title: "FAQs",
    id: "faqs",
  },
];

const TableOfContent = () => {
  return (
    <section className="w-full relative">
      <div className="w-full relative h-auto lg:h-[435px] mx-auto bg-gray-100 rounded-[40px] p-5 overflow-hidden">
        <Image
          src="/table-of-content-background-image.webp"
          alt="table-of-content-background-image"
          width={1271}
          height={435}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="w-full bg-black text-center rounded-[15px] py-3 relative z-10">
          <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[44px] text-white">
            Table Of Content
          </h2>
        </div>
        <div className="w-full flex items-start flex-wrap gap-3 mt-6 relative z-10">
          {content?.map((c, i) => (
            <Link
              href={`#${c?.id}`}
              key={i}
              className="flex flex-col items-start gap-1 bg-white p-4 rounded-xl w-full md:w-[281px] min-h-[81.15px]"
            >
              <p className="text-[18px] font-bold text-black">0{i + 1}</p>
              <p className="text-[18px] text-[#212121] leading-5">{c?.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContent;
