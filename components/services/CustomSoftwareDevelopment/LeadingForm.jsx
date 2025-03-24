import React from "react";

const LeadingForm = () => {
  return (
    <form className="w-full bg-white rounded-2xl p-5 lg:p-10 text-black">
      <h2 className="text-[30px] lg:text-[40px] leading-8 lg:leading-[44px]">
        Less stress. More success. <span className="red-text">Let’s go!</span>
      </h2>

      <div className="w-full mt-7 flex flex-col items-start gap-3 lg:gap-5">
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#212121]"
          >
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#212121]"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-[#212121]"
          >
            Number*
          </label>
          <input
            type="number"
            id="number"
            className="pb-2 pt-1 block w-full border-b border-gray-800 lg:text-lg outline-none"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-[#212121] text-white w-full rounded-full h-[45px] text-sm lg:text-lg font-semibold hover:bg-[#F40E00] transition-all duration-300"
          >
            Let’s Build Your Perfect Software!
          </button>
        </div>
      </div>
    </form>
  );
};

export default LeadingForm;
