import Image from "next/image";
import React from "react";

const products = [
  {
    image: "/case-studies/figma-icon.png",
    width: 29,
    height: 44,
    title: "Figma",
  },
  {
    image: "/case-studies/photoshop-icon.png",
    width: 45,
    height: 44,
    title: "Photoshop",
  },
  {
    image: "/case-studies/illustrator-logo.png",
    width: 45,
    height: 44,
    title: "Illustrator",
  },
];

const progamming = [
  {
    image: "/case-studies/flutter-logo.png",
    width: 45,
    height: 44,
    title: "Flutter",
  },
  {
    image: "/case-studies/nodejs-logo.png",
    width: 45,
    height: 44,
    title: "NodeJs",
  },
  {
    image: "/case-studies/react-logo.png",
    width: 45,
    height: 44,
    title: "react",
  },
];

const TechAndTools = () => {
  return (
    <section className="w-full padding-x pt-10 md:pt-40 flex flex-col items-center">
      <div className="w-full h-[700px] overflow-y-visible py-10 relative flex flex-col items-center justify-between">
        <div className="absolute -inset-5 z-10 blur-2xl bg-[#407BA7]/30 rounded-full w-1/2 h-1/2 opacity-50 left-1/2 -translate-x-1/2 top-0"></div>
        <Image
          src={"/case-studies/nashville/tech-lines.webp"}
          width={846}
          height={527}
          alt="tech-and-tools-image"
          className="absolute left-1/2 -translate-x-1/2 top-[-20%] z-0 w-[70%] h-[635px] hidden md:block"
        />
        <div className="w-full md:w-[419px] h-[158px] custom-shadow rounded-[17px] flex items-center justify-center mx-auto relative z-20 bg-white">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-[#407BA7]">
            Tech & Challenges
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-y-4 mt-10 md:mt-0 items-center justify-between">
          <div className="w-full lg:w-[40%] xl:w-[482px] h-auto lg:h-[209px] rounded-[17px] custom-shadow z-20 bg-white flex flex-col items-center p-8 gap-3">
            <h3 className="text-[24px] font-medium">Product Design</h3>
            <div className="mt-5 flex items-start gap-5 flex-wrap md:gap-10">
              {products?.map((p, i) => {
                return (
                  <div className="flex flex-col items-start gap-2">
                    <Image
                      src={p?.image}
                      width={p?.width}
                      height={p?.height}
                      alt={p?.title}
                    />
                    <p className="text-lg font-semibold">{p?.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-[40%] xl:w-[482px] h-auto lg:h-[209px] rounded-[17px] custom-shadow z-20 bg-white flex flex-col items-center p-8 gap-3">
            <h3 className="text-[24px] font-medium">Product Design</h3>
            <div className="mt-5 flex items-start flex-wrap gap-5 md:gap-10">
              {progamming?.map((p, i) => {
                return (
                  <div className="flex flex-col items-start gap-2">
                    <Image
                      src={p?.image}
                      width={p?.width}
                      height={p?.height}
                      alt={p?.title}
                    />
                    <p className="text-lg font-semibold">{p?.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAndTools;
