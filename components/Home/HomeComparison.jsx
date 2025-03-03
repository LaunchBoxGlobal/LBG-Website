import Image from "next/image";
import React from "react";

const HomeComparison = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col items-start">
          <h2 className="text-2xl lg:text-[35px] xl:text-[45px] 2xl:text-[60px] font-bold mb-5">
            <strong>
              Problems You <span className="text-[#F40E00]">Face</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[24px] font-light text-gray-400">
            Lack of transparency and poor methods lead <br /> to glitches,
            delays, and ultimate failures.
          </p>
          <Image
            src={"/problems-image.png"}
            width={400}
            height={386}
            alt="problems-image"
            className="xl:mt-8 w-[300px] xl:w-[500px] xl:h-[465px] mx-auto lg:ml-0"
          />
        </section>
        <section className="flex flex-col items-start">
          <h2 className="text-2xl lg:text-[35px] xl:text-[45px] 2xl:text-[60px] font-bold mb-5">
            <strong>
              Solutions We<span className="text-[#F40E00]"> Provide</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[24px] font-light text-gray-400">
            You will be informed at every step, using Agile <br /> methods to
            keep your project on track and up to date.
          </p>
          <Image
            src={"/comparison-image.png"}
            width={509}
            height={500}
            alt="solutions we provide"
            className="w-[350px] xl:w-[550px] custom-red-shadow opacity-90"
          />
        </section>
      </section>
    </section>
  );
};

export default HomeComparison;
