import { CUSTOM_SOFTWARE_FOR_EVERY_BUSINESS } from "@/constants/custom-software-development/custom-software-for-every-business";
import { WEB_APPS_FOR_BUSINESS } from "@/constants/web-app-dvelopment/web-apps-for-business";
import React from "react";

const SoftwareSolution = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20 relative overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading w-full">
          Custom Software For <span className="red-text">Every Business</span>
        </h2>
        <p className="section-paragraph lg:w-[85%]">
          Running a startup, small business, or even a big enterprise? You don’t
          have to do it all alone. Our custom software development services help
          you build custom software that grows with you. Need smooth
          integrations? We’ve got you covered with powerful custom programming
          services.
        </p>
      </section>

      <section className="w-full mt-10">
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-[317px] bg-[#F6F6F6] rounded-[17px] flex justify-center items-center h-[98px]">
            <img
              src="/launchbox-global-logo.svg"
              alt="launchbox-global-logo"
              width={216}
              height={45}
              className="object-contain"
            />
          </div>
          <img
            src="/web-app-business-lines.png"
            alt="web-app-business-lines"
            width={836}
            height={151}
            className="mx-auto"
          />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOM_SOFTWARE_FOR_EVERY_BUSINESS?.map((b, i) => {
              return (
                <div
                  className="w-full bg-[#F6F6F6] space-y-3 p-7 rounded-[16px] space-y-2 relative group hover:bg-[#F40E00] hover:text-white transition-all duration-300"
                  key={i}
                >
                  <h3 className="text-[20px] font-semibold leading-none">
                    {b?.title}
                  </h3>
                  <p className="lg:text-lg leading-[1]">{b?.description}</p>
                  <img
                    src={b?.icon}
                    alt={`${b?.title} icon`}
                    width={45}
                    height={45}
                    className="absolute bottom-[-5%] left-[-5%]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SoftwareSolution;
