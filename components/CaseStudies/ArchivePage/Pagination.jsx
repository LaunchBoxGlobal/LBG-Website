import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="w-full pt-20 flex items-center justify-between gap-5">
      <div className="">
        <button
          type="button"
          className="border pl-5 pr-7 py-3 rounded-[13px] text-gray-400 flex items-center justify-center gap-1 h-[61px] w-[144px]"
        >
          <MdKeyboardArrowLeft className="text-xl" /> Previous
        </button>
      </div>
      <div className="flex items-center justify-center gap-1">
        <button
          type="button"
          className="border border-[#F40E00] text-gray-500 text-xl rounded-[13px] h-[61px] w-[54px] flex items-center justify-center"
        >
          1
        </button>
        <button
          type="button"
          className="border border-[#fff] text-gray-500 text-xl rounded-[13px] h-[61px] w-[54px] flex items-center justify-center"
        >
          2
        </button>
        <button
          type="button"
          className="border border-[#fff] text-gray-500 text-xl rounded-[13px] h-[61px] w-[54px] flex items-center justify-center"
        >
          3
        </button>
      </div>
      <div className="">
        <button
          type="button"
          className="bg-black text-white pr-5 pl-7 py-3 rounded-[13px] flex items-center justify-center gap-1 h-[61px] w-[108px]"
        >
          Next
          <MdKeyboardArrowRight className="text-xl leading-none p-0 m-0" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
