import React from "react";
import AnimatedText from "../StaffAugmentation/AnimatedText";

const OffShoreDevelopment = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <AnimatedText>
          <h2 className="text-[#F40E00] font-semibold text-[25px] lg:w-[90%] mx-auto">
            What Is Offshore Software Development?
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-2xl lg:text-[43px] text-gray-500 lg:w-[90%] mx-auto leading-[1.2]">
            Offshore software development company refers to working in
            collaboration with an expert tech team in a different country to
            develop your application. It is having your own offshore development
            centre and enjoying the talent, lower costs, faster project
            completion, and ability to scale your team as and when you want.
          </p>
        </AnimatedText>
      </section>
    </section>
  );
};

export default OffShoreDevelopment;
