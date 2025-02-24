import Image from "next/image";
import React from "react";

const CustomerReviewCard = ({ text }) => {
  return (
    <div className="p-5 lg:px-7 h-[250px] flex flex-col items-start justify-center gap-5 bg-[#F9F9F9]">
      <p className="leading-[21.76px] text-gray-600">{text}</p>
      <div className="w-full flex items-center gap-2">
        <Image
          src={"/custom-image.png"}
          width={60}
          height={60}
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold">Steve H.</h3>
          <p className="text-[#777777]">Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
