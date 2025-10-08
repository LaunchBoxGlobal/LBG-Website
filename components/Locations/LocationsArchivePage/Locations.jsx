import { LOCATIONS_ARCHIVE } from "@/constants/locations/locations";
import Link from "next/link";
import React from "react";

const Locations = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          United State Of <span className="red-text">America</span>
        </h2>
        {/* <p className="section-paragraph lg:w-[60%] mx-auto">
          Select between offshore, nearshore, or onshore based on your budget,
          timeline, and collaboration preferences.
        </p> */}
      </section>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 lg:mt-16">
        {LOCATIONS_ARCHIVE?.map((location, index) => {
          return (
            <div
              className="w-full bg-[#F4F4F4] rounded-[18px] p-7 xl:p-10 flex flex-col items-start gap-3"
              key={index}
            >
              <h3 className="font-bold text-[25px] lg:text-[30px]">
                {location?.title}
              </h3>
              <ul className="w-full list-disc pl-5">
                {location?.pages?.map((page, i) => {
                  return (
                    <li key={i} className="w-full">
                      <Link
                        href={page.url}
                        className="lg:text-[21px] underline"
                      >
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Locations;
