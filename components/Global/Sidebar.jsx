import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ onclick }) => {
  return (
    <div
      className={`w-[50%] md:w-[30%] h-auto bg-white custom-shadow rounded-xl float-end mr-4`}
    >
      <ul className="flex flex-col items-start w-full justify-center gap-4 py-5 px-7">
        <li>
          <Link
            href={`/`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Home{" "}
            {/* <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300 rotate-0 text-lg mt-0.5" /> */}
          </Link>
        </li>
        <li>
          <Link
            href={`#services`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Services{" "}
          </Link>
        </li>
        <li>
          <Link
            href={`#workflow`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Work Flow{" "}
          </Link>
        </li>
        <li>
          <Link
            href={`#teckstack`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Tech Stack{" "}
          </Link>
        </li>
        <li>
          <Link
            href={`#testimonials`}
            className={`font-normal text-[16px] 2xl:text-[22px]`}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href={`#faqs`}
            className={`font-normal text-[16px] 2xl:text-[22px]`}
          >
            FAQs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
