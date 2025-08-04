import Image from "next/image";
import React from "react";

const CustomerReviewCard = ({ text }) => {
  return (
    <div
      className={`customer-review-card p-5 lg:px-7 flex flex-col items-start justify-center gap-5 bg-[#F9F9F9] w-[90%] lg:w-[383px] mx-auto lg:ml-auto`}
    >
      <p className="leading-[21.76px] text-gray-600">{text?.text}</p>
      <div className="w-full flex items-center gap-2">
        <Image
          src={text?.image ? text?.image : "/custom-image.png"}
          width={60}
          height={60}
          loading="lazy"
          priority={false}
          alt={text?.author}
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold">{text?.author}</h3>
          <p className="text-[#777777]">{text?.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
