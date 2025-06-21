import Image from "next/image";
import React from "react";

const SubscribeNewLetterForm = () => {
  return (
    <div className="w-full rounded-[15px] p-5 lg:p-7 h-[278px] flex flex-col items-center justify-center gap-4 subscribe-email-form">
      <Image src={"/mail-icon.png"} width={58} height={62} alt="mail-icon" />
      <h3 className="text-lg md:text-xl lg:text-[26px] font-bold text-center">
        Get Weekly Tech <br /> & Startup Insights
      </h3>

      <div className="w-full flex items-center justify-center bg-white rounded-full p-1">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full bg-white text-[#212121] placeholder:text-[#212121] rounded-full outline-none h-[40px] px-4"
        />
        <button
          type="button"
          className="px-2 whitespace-nowrap bg-[#F40E00] h-full text-white text-center rounded-full text-sm font-bold"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscribeNewLetterForm;
