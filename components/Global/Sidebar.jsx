import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ onclose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigate = (url) => {
    navigate.push(url);
    toggleDropdown();
    onclose();
  };

  const navigator = (path) => {
    navigate.push(path);
    onclose();
  };

  const handleScrollToServices = (id) => {
    console.log("clicked");
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    onclose();
  };

  return (
    <div className={`w-full h-full bg-white px-6`}>
      <div className="w-full flex items-start justify-center">
        <Link
          href={"/"}
          className="rounded-[17px] bg-white block mt-1 w-full border-[#CECEEA] h-[50px] 2xl:h-[60px]"
        >
          <Image
            src={`/logo02.png`}
            width={180}
            height={45.73}
            alt="launchbox global logo"
            className="w-[188px] h-[35px] block"
          />
        </Link>
        <button
          type="button"
          onClick={() => onclose()}
          className="w-8 h-8 bg-gray-200 rounded-lg p-1 mt-1.5"
        >
          <IoClose className="w-full h-full red-text" />
        </button>
      </div>
      <ul className="flex border-t flex-col items-start w-full justify-center gap-4 py-5">
        <li>
          <button
            type="button"
            onClick={() => navigator("/")}
            // href={`/`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Home{" "}
          </button>
        </li>
        <li className="w-full relative">
          <button
            type={`button`}
            onClick={toggleDropdown}
            className={`font-normal w-full text-[16px] 2xl:text-[22px] flex items-center justify-between gap-1 group ${
              isOpen && "red-text"
            }`}
          >
            Services{" "}
            <IoIosArrowDown
              className={`transition-all duration-300 text-lg mt-0.5 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isOpen && (
            <div className="bg-white px-2 from-blue-50 mt-4 z-50">
              <ul className="space-y-2">
                <li className="">
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate(
                        "/services/mobile-app-development-services"
                      )
                    }
                    // href={`/services/mobile-app-development-services`}
                    className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Mobile App Development
                  </button>
                </li>
                <li className="">
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate("/services/web-app-development-services")
                    }
                    // href={`/services/web-app-development-services`}
                    className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Web App Development
                  </button>
                </li>
                <li className="">
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate(
                        "/services/custom-software-development-services"
                      )
                    }
                    // href={`/services/custom-software-development-services`}
                    className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
                  >
                    Software Development
                  </button>
                </li>
                <li className=""> </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleScrollToServices("workflow")}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Work Flow{" "}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleScrollToServices("teckstack")}
            // href={`#teckstack`}
            className={`font-normal text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Tech Stack{" "}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleScrollToServices("testimonials")}
            // href={`#testimonials`}
            className={`font-normal text-[16px] 2xl:text-[22px]`}
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => handleScrollToServices("faqs")}
            // href={`#faqs`}
            className={`font-normal text-[16px] 2xl:text-[22px]`}
          >
            FAQs
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
