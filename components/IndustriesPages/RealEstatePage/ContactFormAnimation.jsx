import Image from "next/image";
import React from "react";

export const mockups = [
  "/industries/real-estate/contact-form-mobile-screen-mockup-1.png",
  "/industries/real-estate/contact-form-mobile-screen-mockup-2.png",
  "/industries/real-estate/contact-form-mobile-screen-mockup-3.png",
  "/industries/real-estate/contact-form-mobile-screen-mockup-4.png",
  "/industries/real-estate/contact-form-mobile-screen-mockup-5.png",
  "/industries/real-estate/contact-form-mobile-screen-mockup-6.png",
];

const ContactFormAnimation = () => {
  return (
    <div className="w-full relative overflow-hidden lg:h-[130vh] midlg:h-[130vh] grid grid-cols-2 gap-0 pr-7">
      {/* Left column */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="animate-marquee-vertical flex flex-col">
          {mockups.map((mock, index) => (
            <Image src={mock} key={index} width={253} height={514} alt="" />
          ))}
          {/* Duplicate list for infinite loop */}
          {mockups.map((mock, index) => (
            <Image
              src={mock}
              key={`dup-${index}`}
              width={253}
              height={514}
              alt=""
            />
          ))}
        </div>
      </div>

      {/* Right column (opposite direction) */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="animate-marquee-vertical-reverse flex flex-col">
          {mockups.map((mock, index) => (
            <Image src={mock} key={index} width={253} height={514} alt="" />
          ))}
          {mockups.map((mock, index) => (
            <Image
              src={mock}
              key={`dup-r-${index}`}
              width={253}
              height={514}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFormAnimation;
