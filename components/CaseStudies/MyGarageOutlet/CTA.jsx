import Image from "next/image";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full padding-x">
      <div className="w-full bg-black rounded-[34px] text-center flex flex-col items-center justify-center gap-5 px-5 py-10 md:py-20 lg:py-28 relative overflow-hidden">
        <h2 className="text-[36px] md:text-[56px] lg:text-[80px] font-bold text-white leading-[1.3] z-10">
          Idea Into Apps
        </h2>
        <p className="text-base md:text-lg lg:text-[22px] text-neutral-100 z-10 w-[90%] md:max-w-[80%] text-center">
          We turn your vision into a polished mobile product that users will
          love.
        </p>
        <Link
          href={"/contact-us"}
          className="w-[56px] lg:w-[96px] h-[56px] lg:h-[96px] rounded-full bg-[#847B6F] flex items-center justify-center lg:absolute right-10 z-10 bottom-10"
        >
          <Image
            src={"/case-studies/my-garage-outlet/cta-button-icon.png"}
            alt="cta-button-icon"
            width={16}
            height={35}
            className="object-contain w-[16px]"
          />
        </Link>

        <Image
          src={"/case-studies/my-garage-outlet/cta-glow.png"}
          alt="cta glow"
          width={400}
          height={400}
          className="z-0 w-[736px] h-[736px] absolute right-0 -bottom-20"
        />
      </div>
    </section>
  );
};

export default CTA;
