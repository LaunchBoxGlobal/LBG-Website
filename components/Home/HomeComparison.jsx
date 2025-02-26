import Image from "next/image";
import React from "react";

const HomeComparison = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col items-start">
          <h2 className="text-[55px] font-bold">
            <strong>
              Problems You <span className="text-[#F40E00]">Face</span>
            </strong>
          </h2>
          <p className="text-[24px] font-light text-gray-400">
            Lack of transparency creates uncertainty and
            <br /> misalignment.
          </p>
          <Image
            src={"/problems-you-face.png"}
            width={400}
            height={386}
            alt="problems-you-face"
            className="mt-16"
          />
        </section>
        <section className="flex flex-col items-start">
          <h2 className="text-[55px] font-bold">
            <strong>
              Solutions We<span className="text-[#F40E00]"> Provide</span>
            </strong>
          </h2>
          <p className="text-[24px] font-light text-gray-400">
            We stay transparent, guiding you through every step and clearly
            explaining the process.
          </p>
          <Image
            src={"/solutions-we-provide.png"}
            width={509}
            height={500}
            alt="solutions we provide"
          />
        </section>
      </section>
    </section>
  );
};

export default HomeComparison;
