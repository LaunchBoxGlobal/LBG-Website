"use client";
import {
  SITTNER_TRUCKING_PROBLEMS,
  SITTNER_TRUCKING_SOLUTIONS,
} from "@/constants/case-studies/sittner-trucking-content/sittner-trucking-problems-and-solutions";
import Image from "next/image";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const ProblemsAndSolutions = () => {
  const [value, setValue] = useState(0);
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading text-center">Roadblocks We Faced</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        JB Sittner Trucking faced delayed dispatches and unreliable
        communication. Traditional methods like calls and emails led to missed
        updates. Employees needed instant access to messages, while dispatchers
        required tracking and scheduling tools. The system also had to work
        offline for field teams with poor connectivity. Security and scalability
        were additional concerns. Our web app development services addressed
        these by building and adjusting solutions with role-based access,
        real-time notifications, and offline functionality.
      </p>

      <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="bg-black rounded-[23px] p-5 lg:p-7 xl:p-10 text-white">
            <div className="w-full flex items-center gap-2">
              <img
                src={"/case-studies/sittner-trucking/problems-icon.png"}
                alt="problems-icon"
                width={63}
                height={63}
                className=""
              />
              <h3 className="text-[40px] font-bold leading-none">Problems</h3>
            </div>

            <div className="w-full mt-5">
              <ul className="w-full space-y-1">
                {SITTNER_TRUCKING_PROBLEMS?.map((problem, index) => {
                  return (
                    <li
                      key={index}
                      onMouseEnter={() => setValue(index)}
                      className={`text-xl font-medium leading-[1.2] flex items-start gap-1 relative py-5 rounded-t-2xl ${
                        index === value
                          ? "border-t-2 border-[#02EA4C]"
                          : "border-t-2 border-black"
                      }`}
                    >
                      <GoDotFill className="sittner-primary-text min-w-6 min-h-6" />
                      {problem}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#EBF3EA] rounded-[23px] p-5 lg:p-7 xl:p-10">
            <div className="w-full flex items-center gap-2">
              <img
                src={"/case-studies/sittner-trucking/solutions-icon.png"}
                alt="solutions icon"
                width={63}
                height={63}
                className=""
              />
              <h3 className="text-[40px] font-bold leading-none text-[#118B10]">
                Solutions
              </h3>
            </div>

            <div className="w-full mt-5">
              <ul className="w-full space-y-1">
                {SITTNER_TRUCKING_SOLUTIONS?.map((solution, index) => {
                  return (
                    <li
                      key={index}
                      onMouseEnter={() => setValue(index)}
                      className={`text-xl font-medium leading-[1.2] flex items-start gap-1 relative py-5 text-[#212121] rounded-t-2xl ${
                        index === value
                          ? "border-t-2 border-[#118B10]"
                          : "border-t-2 border-[#EBF3EA]"
                      }`}
                    >
                      <GoDotFill className="text-[#118B10] min-w-6 min-h-6" />
                      {solution}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
