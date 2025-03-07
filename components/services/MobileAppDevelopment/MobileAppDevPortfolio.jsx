import Image from "next/image";
import React from "react";

const MobileAppDevPortfolio = () => {
  return (
    <section className="w-full relative padding-x py-20 flex flex-col items-start gap-3">
      <div className="w-full h-[40vh] lg:h-[90vh] relative">
        <Image
          src={"/mobile-app-dev-portfolio-01.png"}
          height={655}
          width={1270}
          className="h-[80%] lg:h-[94%] w-full lg:w-[1270px] object-cover rounded-3xl"
        />
        <div className="w-full flex items-center justify-between px-0 lg:px-10 gap-4">
          <p className="text-sm lg:text-[26px] font-medium">
            Health Mobile App
          </p>
          <p className="text-sm lg:text-[26px] font-medium">
            Development, Marketing, Social media Management
          </p>
        </div>
      </div>
      <div className="w-full h-[40vh] lg:h-[90vh] relative">
        <Image
          src={"/mobile-app-dev-portfolio-02.png"}
          height={655}
          width={1270}
          className="h-[80%] lg:h-[94%] w-full lg:w-[1270px] object-cover rounded-3xl"
        />
        <div className="w-full flex items-center justify-between px-0 lg:px-10 gap-4">
          <p className="text-sm lg:text-[26px] font-medium">
            Health Mobile App
          </p>
          <p className="text-sm lg:text-[26px] font-medium">
            Development, Marketing, Social media Management
          </p>
        </div>
      </div>
      <div className="w-full h-[40vh] lg:h-[90vh] relative">
        <Image
          src={"/mobile-app-dev-portfolio-03.png"}
          height={655}
          width={1270}
          className="h-[80%] lg:h-[94%] w-full lg:w-[1270px] object-cover rounded-3xl"
        />
        <div className="w-full flex items-center justify-between px-0 lg:px-10 gap-4">
          <p className="text-sm lg:text-[26px] font-medium">
            Health Mobile App
          </p>
          <p className="text-sm lg:text-[26px] font-medium">
            Development, Marketing, Social media Management
          </p>
        </div>
      </div>
      <div className="w-full h-[40vh] lg:h-[90vh] relative">
        <Image
          src={"/mobile-app-dev-portfolio-04.png"}
          height={655}
          width={1270}
          className="h-[80%] lg:h-[94%] w-full lg:w-[1270px] object-cover rounded-3xl"
        />
        <div className="w-full flex items-center justify-between px-0 lg:px-10 gap-4">
          <p className="text-sm lg:text-[26px] font-medium">
            Health Mobile App
          </p>
          <p className="text-sm lg:text-[26px] font-medium">
            Development, Marketing, Social media Management
          </p>
        </div>
      </div>
      <div className="w-full h-[40vh] lg:h-[90vh] relative">
        <Image
          src={"/mobile-app-dev-portfolio-05.png"}
          height={655}
          width={1270}
          className="h-[80%] lg:h-[94%] w-full lg:w-[1270px] object-cover rounded-3xl"
        />
        <div className="w-full flex items-center justify-between px-0 lg:px-10 gap-4">
          <p className="text-sm lg:text-[26px] font-medium">
            Health Mobile App
          </p>
          <p className="text-sm lg:text-[26px] font-medium">
            Development, Marketing, Social media Management
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileAppDevPortfolio;
