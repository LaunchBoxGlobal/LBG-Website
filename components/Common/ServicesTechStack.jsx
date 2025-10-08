import { MOBILE_APP_DEVELOPMENT_TECH_STACK } from "@/constants/mobile-app-development/mobile-app-development-tech-stack";
import Link from "next/link";
import React from "react";

const ServicesTechStack = ({ techStack }) => {
  return (
    // <section
    //   className="w-full py-10 lg:py-20 bg-[#ffff] padding-x"
    //   id="teckstack"
    // >
    //   <section className="w-full flex flex-col items-center justify-center gap-5 mb-12">
    //     <h2 className={`section-heading text-center lg:w-[100%]`}>
    //       Smart Technology for Better <span className="red-text">Solution</span>
    //     </h2>
    //     <p className="section-paragraph text-center lg:w-[75%] w-full">
    //       Great apps need the right tools. As a mobile app development company,
    //       the best technologies are used to build apps that run fast, work
    //       smoothly, and last long.
    //     </p>
    //   </section>

    <section className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1274px] mx-auto">
      {techStack?.map((tech, index) =>
        tech?.link ? (
          <Link key={index} href={tech?.link}>
            <div className="w-full bg-[#f9f9f9] p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center justify-start gap-4">
                <img
                  src={tech?.image}
                  alt=""
                  width={tech?.width}
                  height={tech?.height}
                />
                <p className="text-xl lg:text-[25px] font-medium">
                  {tech?.title}
                </p>
              </div>
              <img
                src="/tech-stack-card-arrow-icon.png"
                alt="tech-stack-card-arrow-icon"
                width={16}
                height={16}
              />
            </div>
          </Link>
        ) : (
          <div
            key={index}
            className="w-full bg-[#f9f9f9] p-6 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center justify-start gap-4">
              <img
                src={tech?.image}
                alt=""
                width={tech?.width}
                height={tech?.height}
              />
              <p className="text-xl lg:text-[25px] font-medium">
                {tech?.title}
              </p>
            </div>
            <img
              src="/tech-stack-card-arrow-icon.png"
              alt="tech-stack-card-arrow-icon"
              width={16}
              height={16}
            />
          </div>
        )
      )}
    </section>
    // </section>
  );
};

export default ServicesTechStack;
