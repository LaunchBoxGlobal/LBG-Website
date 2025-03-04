import Image from "next/image";
import React from "react";

const HomeComparison = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col items-center lg:items-start text-center lg:text-start">
          <h2 className="text-2xl lg:text-[35px] xl:text-[45px] 2xl:text-[60px] font-bold mb-6">
            <strong>
              Problems You <span className="text-[#F40E00]">Face</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[22px] font-light text-gray-400 mb-5 lg:mb-0">
            Lack of transparency and poor methods lead <br /> to glitches,
            delays, and ultimate failures.
          </p>
          <Image
            src={"/problems-image.png"}
            width={400}
            height={386}
            alt="problems-image"
            className="xl:mt-9 w-[85%] xl:h-[465px] mx-auto lg:ml-0"
          />
        </section>
        <section className="flex flex-col items-center lg:items-start text-center lg:text-start">
          <h2 className="text-2xl lg:text-[35px] xl:text-[45px] 2xl:text-[60px] font-bold mb-6">
            <strong>
              Solutions We<span className="text-[#F40E00]"> Provide</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[22px] font-light text-gray-400 mb-5 lg:mb-1">
            You will be informed at every step, using Agile <br /> methods to
            keep your project on track and up to date.
          </p>
          <Image
            src={"/comparison-image.png"}
            width={509}
            height={500}
            alt="solutions we provide"
            className="w-[95%] custom-red-shadow opacity-90"
          />
        </section>
      </section>
    </section>
  );
};

export default HomeComparison;
