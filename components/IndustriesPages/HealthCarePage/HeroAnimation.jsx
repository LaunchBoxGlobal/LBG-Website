import Image from "next/image";
import React from "react";

const HeroAnimation = () => {
  return (
    <div className="w-full h-[250px] md:h-[350px] xl:h-[619px] relative flex flex-col items-center justify-center">
      <Image
        src={"/industries/healthcare/hero-section-border-lines.png"}
        alt="hero-section-border-lines"
        width={1043}
        height={619}
        className="absolute left-1/2 -translate-x-1/2 top-0 lg:-top-10 z-0"
      />
      <Image
        src="/industries/healthcare/heart-image.png"
        alt="heart-image"
        width={714}
        height={474}
        className="z-10 md:w-[500px] lg:w-[550px] midlg:w-[700px]"
      />
      {/* table-design.png */}
      <Image
        src={"/industries/healthcare/table-design.png"}
        alt="table-design"
        width={406}
        height={188}
        className="absolute bottom-[8%] left-0 z-10 hidden lg:block lg:w-[260px] midlg:w-auto"
      />
      {/* appointment-icon */}
      <Image
        src={"/industries/healthcare/appointment-icon.png"}
        alt="appointment icon"
        width={141}
        height={50}
        className="absolute right-0 lg:right-[8%] top-0 lg:top-[20%] z-10 max-w-[100px]"
      />
    </div>
  );
};

export default HeroAnimation;
