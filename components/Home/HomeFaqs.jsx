"use client";
import { FAQS } from "@/constants/Faqs";
import React, { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";

const HomeFaqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="w-full py-10 lg:pt-20 lg:pb-32 padding-x flex flex-col items-center">
      <h2 className="section-heading text-center">
        Got Questions? <br /> We've Got You{" "}
        <span className="red-text">Covered!</span>
      </h2>
      <section
        id="faqs"
        className="w-full mt-10 lg:mt-24 flex flex-col items-start gap-4 lg:w-[90%]"
      >
        {FAQS?.map((faq, index) => (
          <div className="w-full border-b border-black pt-4 pb-10" key={index}>
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-start flex items-center justify-between outline-none"
            >
              <h5 className="font-medium text-xl md:text-3xl lg:text-[35px] 2xl:text-[40px] w-[95%]">
                {faq?.question}
              </h5>

              <PiStarFourFill
                className={`text-2xl ${
                  openFaq === index
                    ? "rotate-180 text-[#F40E00]"
                    : "rotate-0 text-gray-700"
                } transition-all duration-500`}
              />
            </button>
            {openFaq === index && (
              <div className="w-full text-start mt-3 lg:mt-4">
                <p className="text-[20px] font-normal text-gray-400 lg:w-[95%]">
                  {faq?.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
    </section>
  );
};

export default HomeFaqs;
