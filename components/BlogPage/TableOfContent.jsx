import Link from "next/link";
import React from "react";

const TableOfContent = ({ headings }) => {
  return (
    <div className="w-full bg-[#fafafa] border border-[#E9E9E9] p-5 lg:p-7 rounded-[15px] hidden lg:block">
      <h3 className="font-bold text-lg border-b-2 border-[#F40E00] pb-2 w-1/2">
        Table Of Content
      </h3>
      <ul className="flex flex-col items-start gap-2 mt-5 list-disc pl-2">
        {headings?.slice(1).map((h, i) => {
          return (
            <Link
              href={`#${h}`}
              key={i}
              className="font-normal underline text-lg flex items-start gap-2 leading-[1.3]"
            >
              <div className="min-w-[14px] min-h-[14px] h-[14px] w-[14px] bg-[#F40E00] mt-1.5" />
              <span className="text-[#434343]">{h}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContent;
