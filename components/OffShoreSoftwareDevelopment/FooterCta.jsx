import Link from "next/link";
import React from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";
import Image from "next/image";

const FooterCta = () => {
  return (
    <section className="w-full py-10 lg:py-32 xl:py-40 padding-x overflow-hidden">
      <AnimatedText direction="right">
        <div className="w-full relative bg-[#000] text-white rounded-[17px] flex items-start">
          <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-5 p-10 midlg:p-20">
            <h2 className="text-[25px] md:text-[35px] lg:text-[50px] font-bold leading-[1.1]">
              Claim Your Free Offshore Software Development Strategy Call (Worth
              $1000)
            </h2>
            <p className="text-lg font-normal leading-[1.2]">
              Scale your development with our global talent pool and
              cost-effective offshore software development solutions ideal for
              projects of any size.
            </p>
            <div className="mt-5">
              <Link
                href={"/contact-us"}
                className="text-base lg:text-lg font-bold text-white red-bg px-10 py-3.5 rounded-[7px]"
              >
                Book Your Session
              </Link>
            </div>
          </div>
          <div className="w-[40%] h-full pt-10 pr-20 hidden lg:flex items-center justify-center">
            <Image
              src={"/off-shore/offshore-cta-image.png"}
              width={391}
              height={458}
              alt="offshore-cta-image"
            />
          </div>
        </div>
      </AnimatedText>
    </section>
  );
};

export default FooterCta;
