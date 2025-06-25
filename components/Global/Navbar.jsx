"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import NavbarDropdown from "./NavbarDropdown";

const augmentationLinks = [
  {
    title: "Off-Shore Software Development",
    pageUrl: "off-shore-software-development",
  },
  {
    title: "On-Demand Talent",
    pageUrl: "on-demand-talent",
  },
];

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [augmentationDropdown, setAugmentationDropdown] = useState(false);

  const toggleAugmentationDropdown = () => {
    setAugmentationDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsHovered((prev) => !prev);
  };

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <nav
      className={`py-3 md:py-7 flex items-center justify-between gap-4 fixed top-0 z-50 w-full padding-x bg-white lg:bg-transparent shadow-md lg:shadow-none`}
    >
      <Link
        href={"/"}
        className="rounded-[17px] bg-white lg:border border-[#CECEEA] h-[50px] 2xl:h-[60px] flex items-center justify-center gap-3 lg:px-2.5 xl:px-3.5"
      >
        <Image
          src={`/logo02.png`}
          width={180}
          height={45.73}
          alt="launchbox global logo"
          className="w-[188px] lg:w-[152px] lg:h-auto xl:w-[182px] 2xl:w-[220px] h-[35px] 2xl:h-[40px] block"
        />

        <div className="border border-[#CECEEA] w-[0.5px] h-[27px] opacity-50 hidden lg:block" />
        <span className="text-xs font-light leading-none xl:leading-[14px] hidden lg:block">
          <strong>
            Trusted Talent, <br /> Anywhere, Anytime.
          </strong>
        </span>
      </Link>

      <ul className="hidden lg:flex items-center justify-center gap-5 xl:gap-x-7 mac:gap-x-8 bg-[#fff] px-8 rounded-[17px] border border-[#CECEEA] h-[50px] 2xl:h-[62px]">
        <li>
          <Link
            href={`/`}
            className={`font-normal text-sm xl:text-[18px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Home{" "}
          </Link>
        </li>

        {/* services dropdown */}
        <li
          className="z-50 h-full flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            type="button"
            name="services menu button"
            className="font-normal text-sm xl:text-[18px] 2xl:text-[22px] flex items-center justify-start gap-1 group"
          >
            Services{" "}
            <IoIosArrowDown
              className={`transition-transform duration-300 relative top-0.5 ${
                isHovered ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => toggleDropdown()}
              onMouseLeave={() => toggleDropdown()}
              className="bg-transparent absolute inset-x-0 mt-0 z-40 top-16 2xl:top-20 padding-x"
            >
              <NavbarDropdown closeDropdown={closeDropdown} />
            </motion.div>
          )}
        </li>

        <li>
          <Link
            href={`/case-studies`}
            className={`font-normal text-sm xl:text-[18px] 2xl:text-[22px] flex items-center justify-start gap-1 group whitespace-nowrap`}
          >
            Case Studies{" "}
          </Link>
        </li>
        {/* <li
          className="z-50 h-full flex items-center"
          onMouseEnter={() => toggleAugmentationDropdown()}
          onMouseLeave={() => toggleAugmentationDropdown()}
        >
          <Link
            href={"/staff-augmentation"}
            className={`font-normal text-sm xl:text-[14px] 2xl:text-[20px] whitespace-nowrap`}
          >
            Team Augmentation
          </Link>
          {augmentationDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => toggleDropdown()}
              onMouseLeave={() => toggleDropdown()}
              className="bg-transparent absolute right-[13%] mt-0 z-40 top-16 2xl:top-20 padding-x"
            >
              <div className="bg-white min-w-[300px] max-w-[350px] mx-auto mt-6 flex items-start justify-center gap-10 rounded-[17px] border border-[#CECEEA] p-6">
                <div className="w-full flex flex-col items-start gap-2">
                  {augmentationLinks?.map((p, i) => {
                    return (
                      <Link
                        href={`/${p?.pageUrl}`}
                        key={i}
                        onClick={() => closeDropdown()}
                        className="text-lg underline text-gray-600 hover:text-black"
                      >
                        {p?.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </li> */}
        <li>
          <Link
            href={`/blogs`}
            className={`font-normal text-sm xl:text-[18px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Blogs{" "}
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("testimonials")}
            className={`font-normal text-sm xl:text-[18px] 2xl:text-[22px]`}
          >
            Testimonials
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavClick("faqs")}
            className={`font-normal text-sm xl:text-[18px] 2xl:text-[22px]`}
          >
            FAQs
          </button>
        </li>
      </ul>

      <div className="hidden lg:flex items-center justify-center gap-4">
        <Link
          href={`/contact-us`}
          className="red-bg px-6 h-[48px] 2xl:h-[60px] rounded-[17px] whitespace-nowrap text-white hover:bg-black hover:text-white transition-all duration-300 hidden lg:flex items-center justify-end gap-3 outline-none font-medium text-sm xl:text-[16px] 2xl:text-[20px]"
        >
          <span>Contact Sales</span>
        </Link>
      </div>

      <button
        type="button"
        name="sidebar menu button"
        onClick={toggleSidebar}
        className="lg:hidden mr-1"
      >
        <TbMenu2 className="text-2xl text-[#F40E00]" />
      </button>
      <div
        className={`w-full h-screen bg-transparent z-50 fixed inset-0 ${
          openSidebar ? "-translate-x-0" : "translate-x-full"
        } transition-all duration-700 pt-3 bg-transparent`}
      >
        <Sidebar onclose={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Navbar;
