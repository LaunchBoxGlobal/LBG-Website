import Image from "next/image";
import Link from "next/link";
import React from "react";

const OTHER_CASE_STUDIES = [
  {
    image: "/case-studies/my-garage-outlet-image.png",
    title: "My Garage Outlet",
    url: "Visit Company Profile",
  },
  {
    image: "/case-studies/usubz-image.png",
    title: "U Subz",
    url: "Visit Company Profile",
  },
  {
    image: "/case-studies/fitness-by-faith-image.png",
    title: "Fitness by faith",
    url: "Visit Company Profile",
  },
];

const OtherCaseStudies = () => {
  return (
    <section className="w-full padding-x flex flex-wrap pb-40">
      <h2 className="section-heading text-center mb-10 mx-auto">
        Wanna See More?
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {OTHER_CASE_STUDIES?.map((c, i) => {
          return (
            <div
              key={i}
              className={`w-full flex flex-col items-start relative ${
                i === 0
                  ? "w-full h-auto "
                  : i === 1
                  ? "w-full h-auto "
                  : i === 2
                  ? "w-full h-auto "
                  : ""
              }`}
            >
              <Image
                src={c?.image}
                alt={c?.title}
                width={302}
                height={301}
                className="w-full object-contain"
              />
              <h3 className="text-[22px] mt-3">{c?.title}</h3>
              <Link href={"/"} className="text-lg text-gray-600">
                {c?.url}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OtherCaseStudies;
