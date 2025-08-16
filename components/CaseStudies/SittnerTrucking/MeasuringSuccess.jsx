import AnimatedText from "@/components/StaffAugmentation/AnimatedText";
import { MEASURING_SUCCESS_CONTENT } from "@/constants/case-studies/sittner-trucking-content/measuring-success";
import Image from "next/image";
import React from "react";

const MeasuringSuccess = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Measuring Success</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        The new system transformed JB Sittner Trucking’s internal communication.
        Dispatchers now send updates instantly, with 90% fewer missed messages.
        Employees receive real-time alerts, even offline. The admin dashboard
        provides complete control over users and messaging. Key results:
      </p>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEASURING_SUCCESS_CONTENT?.map((c, i) => {
          return (
            <AnimatedText key={i}>
              <div className="bg-black text-white flex  items-start gap-3 rounded-xl p-5">
                <div className="">
                  <img
                    src={c?.icon}
                    width={c?.width}
                    height={c?.height}
                    alt={`${c?.title} icon`}
                    className="min-w-[42px] min-h-[42px]"
                  />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-[18px] font-semibold leading-none">
                    {c?.title}
                  </h3>
                  <p className="text-base leading-[1]">{c?.description}</p>
                </div>
              </div>
            </AnimatedText>
          );
        })}
      </div>

      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-10">
        This custom web application development project proved that tailored
        solutions outperform generic tools. JB Sittner Trucking now operates
        with greater efficiency, transparency, and teamwork, all powered by a
        system built for their exact needs.
      </p>
    </section>
  );
};

export default MeasuringSuccess;
