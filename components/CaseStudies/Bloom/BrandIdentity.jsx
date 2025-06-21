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

const BrandIdentity = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Brand Identity</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        For Bloom, we chose warm sunrise colors and soft shapes that felt
        welcoming - like walking into your favorite chapel. The mobile app
        development kept this friendly feel while handling serious church
        business, with icons anyone from teens to grandparents could understand
        at a glance.
      </p>

      <div className="w-full mt-10 lg:mt-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className="col-span-1">
            <div className="w-full md:h-[240px] lg:h-[320px] midlg:h-[430px] p-8 bg-[#F2F2F2] rounded-[40px] flex items-center justify-center relative">
              <Image
                src={"/case-studies/bloom-logo-transparent.svg"}
                alt="wireframes-mockup"
                width={272}
                height={247}
                className="w-[100%] z-10"
              />
              <Image
                src={"/case-studies/borders.png"}
                alt="borders"
                width={645}
                height={645}
                className="w-full h-full absolute inset-0 z-0"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Image
              src={"/case-studies/bloom-fonts-mockup.png"}
              alt="wireframes-mockup"
              width={1271}
              height={771}
              className="object-cover rounded-[40px] w-full md:h-[240px] lg:h-[320px] midlg:h-[430px]"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className="col-span-1 md:col-span-2">
            <Image
              src={"/case-studies/bloom-color-pallete.png"}
              alt="wireframes-mockup"
              width={1271}
              height={771}
              className="rounded-[40px] w-full md:h-[260px] lg:h-[360px] midlg:h-[510px]"
            />
          </div>
          <div className="col-span-1">
            <Image
              src={"/case-studies/bloom-icons-mockup.png"}
              alt="wireframes-mockup"
              width={377}
              height={771}
              className="rounded-[40px] w-full md:h-[260px] lg:h-[360px] midlg:h-[510px]"
            />
          </div>
        </div>
        <div className="w-full bg-[#F2F2F2] rounded-[39px] p-10">
          <h3 className="text-[20px] text-[#6E4074] font-bold mx-auto text-center">
            Design & Tech Tools
          </h3>
          <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col items-center justify-center text-center gap-5">
              <p className="text-2xl font-medium text-center">Product Design</p>
              <div className="mt-5 flex items-start gap-5 md:gap-10">
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
            <div className="flex flex-col items-center justify-center text-center gap-5">
              <p className="text-2xl font-medium">Programming</p>
              <div className="mt-5 flex items-start gap-5 md:gap-10">
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
      </div>
    </section>
  );
};

export default BrandIdentity;
