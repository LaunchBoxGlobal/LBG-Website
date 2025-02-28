import Image from "next/image";
import React from "react";

const HomeComparison = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col items-start">
          <h2 className="lg:text-[35px] xl:text-[45px] 2xl:text-[60px] font-bold">
            <strong>
              Problems You <span className="text-[#F40E00]">Face</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[24px] font-light text-gray-400">
            Lack of transparency creates uncertainty and
            <br /> misalignment.
          </p>
          <Image
            src={"/problems-you-face.png"}
            width={400}
            height={386}
            alt="problems-you-face"
            className="lg:mt-14 xl:mt-20 w-[300px] xl:w-[400px]"
          />
        </section>
        <section className="flex flex-col items-start">
          <h2 className="lg:text-[35px] xl:text-[45px] 2xl:text-[60px] font-bold">
            <strong>
              Solutions We<span className="text-[#F40E00]"> Provide</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[24px] font-light text-gray-400">
            We stay transparent, guiding you through every step and clearly
            explaining the process.
          </p>
          <Image
            src={"/comparison-image.png"}
            width={509}
            height={500}
            alt="solutions we provide"
            className="w-[350px] xl:w-[450px] mt-6 custom-red-shadow opacity-90"
          />
        </section>
      </section>
    </section>
  );
};

export default HomeComparison;
