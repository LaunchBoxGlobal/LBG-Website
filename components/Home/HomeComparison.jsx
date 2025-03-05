import Image from "next/image";
import React from "react";

const HomeComparison = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]">
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col items-center lg:items-center justify-start text-center lg:px-5">
          <h2 className="text-2xl lg:text-[35px] xl:text-[40px] 2xl:text-[60px] font-bold mb-6">
            <strong>
              Problems You <span className="text-[#F40E00]">Face</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[18px] font-light leading-6 text-gray-400 mb-5 lg:mb-0">
            Poor communication and outdated methods <br /> cause delays,
            glitches, and project failures.
          </p>
          <Image
            src={"/problems-image.png"}
            width={400}
            height={386}
            alt="problems-image"
            className="xl:mt-12 w-[80%] mx-auto"
          />
        </section>
        <section className="flex flex-col items-center lg:items-center text-center lg:pr-[5%]">
          <h2 className="text-2xl lg:text-[35px] xl:text-[40px] 2xl:text-[60px] font-bold mb-6">
            <strong>
              Solutions We<span className="text-[#F40E00]"> Provide</span>
            </strong>
          </h2>
          <p className="text-xl xl:text-[18px] font-light  leading-6 text-gray-400 mb-5 lg:mb-5">
            Stay informed at every step with Agile methods, <br /> ensuring a
            smooth and on-track project.
          </p>
          <Image
            src={"/puzzle-animation-gray.png"}
            width={509}
            height={500}
            alt="solutions we provide"
            className="w-[80%] mx-auto opacity-90"
          />
        </section>
      </section>
    </section>
  );
};

export default HomeComparison;
