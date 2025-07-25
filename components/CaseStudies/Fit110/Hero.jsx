import Image from "next/image";
import React from "react";
import Timeline from "./Timeline";
import Mockup from "./Mockup";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full">
      <section className="w-full bg-white relative pt-36 2xl:pt-52 flex flex-col items-center justify-start gap-5 padding-x">
        <Image
          src={"/case-studies/fit110/fit110-logo.svg"}
          width={116}
          height={116}
          alt="fit110 logo"
        />
        <h1 className="font-bold text-[40px] lg:text-[80px] leading-[1.1] text-center tracking-tight">
          Fit <span className="fit110-red-text">110</span>
        </h1>
        <h2 className="text-[22px] font-medium">Overview</h2>
        <p className="text-xl text-center lg:w-[90%]">
          DEKO came to us with a clear goal. A website that showcases their
          high-quality products and targets homeowners. So, we built a website
          that does everything at once. DEKO manufactures reliable tools &
          equipment, and they needed a website that felt just as solid. We built
          Fit 110 with expert tips for great fitness marketing because smart web
          design and digital marketing make all the difference.
        </p>
        <p className="text-xl text-center lg:w-[90%]">
          The final site? Useful and high performing.
        </p>

        <div className="w-full flex justify-center mt-5">
          <Link
            href={`https://fit110.com/`}
            target="_blank"
            className="fit110-black-btn"
          >
            Visit Now
          </Link>
        </div>
      </section>
      <Timeline />
      <Mockup
        imageSrc={`/case-studies/fit110/fit110-pc-mockup.png`}
        imgAltTag={`fit110 pc mockup`}
        width={1270}
        height={848}
      />
    </section>
  );
};

export default Hero;
