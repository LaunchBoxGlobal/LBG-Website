import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterScrollingText = () => {
  return (
    <section className="w-full padding-x">
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full lg:w-[80%] py-4 lg:py-0 md:h-[95px] lg:h-[129px] xl:h-[196px] bg-[#3D3C3F] rounded-full overflow-hidden flex items-center justify-center relative">
          {/* <h2 className="text-[18px] lg:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4 lg:hidden">
                  Ready to Build Something Great?
                </h2> */}
          <div className="flex whitespace-nowrap animate-scroll-footer">
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
            <p className="text-[28px] lg:text-[42px] xl:text-[75px] font-bold leading-[36px] lg:leading-[55px] inline-block mx-4">
              Ready to Build Something Great?
            </p>
          </div>
        </div>
        <Link
          href={"/contact-us"}
          aria-label="link to contact us page"
          className="w-[109px] h-[109px] md:w-[110px] md:h-[90px] lg:w-[129px] lg:h-[129px] xl:w-[195px] xl:h-[195px] rounded-full border border-white text-xs lg:text-[25px] flex flex-col md:gap-2 uppercase items-center justify-center hover:border-[#f40e00] hover:bg-[#f40e00] transition-all duration-300 leading-5 lg:leading-8"
        >
          let's <br /> talk
          <Image
            src={"/footer-cta-icon.png"}
            width={28}
            height={24}
            loading="lazy"
            alt="footer contact us button arrow icon"
            className="w-[13px] h-[10px] lg:w-[28px] lg:h-[24px]"
          />
        </Link>
      </section>
    </section>
  );
};

export default FooterScrollingText;
