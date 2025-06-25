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

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

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
      className={`py-3 md:py-7 flex items-center justify-between fixed top-0 z-50 w-full padding-x bg-white lg:bg-transparent shadow-md lg:shadow-none`}
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

      <ul className="hidden lg:flex items-center justify-center gap-5 xl:gap-x-10 bg-[#fff] px-8 rounded-[17px] border border-[#CECEEA] h-[50px] 2xl:h-[62px]">
        <li>
          <Link
            href={`/`}
            className={`font-normal text-sm xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
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
            className="font-normal text-sm xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group"
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
              // onMouseLeave={() => setIsHovered(false)}
              onMouseEnter={() => toggleDropdown()}
              onMouseLeave={() => toggleDropdown()}
              className="bg-transparent absolute inset-x-0 mt-0 z-40 top-16 padding-x"
            >
              <NavbarDropdown closeDropdown={closeDropdown} />
              {/* <div className="bg-white border border-[#CECEEA] mx-auto rounded-[17px] p-6 mt-1 w-[280px] max-w-[300px]">
                <ul className="space-y-2 2xl:space-y-4">
                  <li>
                    <Link
                      href="/services/mobile-app-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/web-app-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Web App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/custom-software-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Custom Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/ecommerce-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Ecommerce Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/digital-marketing"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/branding-and-design"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Branding and Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/flutter-app-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Flutter App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/react-native-app-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      React Native App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/swift-app-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Swift App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/kotlin-app-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Kotlin App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/ionic-app-development"
                      onClick={() => toggleDropdown()}
                      className="font-normal text-xs xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group hover:text-[#F40E00]"
                    >
                      Ionic App Development
                    </Link>
                  </li>
                </ul>
              </div> */}
            </motion.div>
          )}
        </li>

        <li>
          <Link
            href={`/case-studies`}
            className={`font-normal text-sm xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Case Studies{" "}
          </Link>
        </li>
        <li>
          <Link
            href={`/blogs`}
            className={`font-normal text-sm xl:text-[16px] 2xl:text-[22px] flex items-center justify-start gap-1 group`}
          >
            Blogs{" "}
          </Link>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("testimonials")}
            className={`font-normal text-sm xl:text-[16px] 2xl:text-[22px]`}
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("faqs")}
            className={`font-normal text-sm xl:text-[16px] 2xl:text-[22px]`}
          >
            FAQs
          </button>
        </li>
      </ul>

      <div className="hidden lg:flex items-center justify-center gap-4">
        <Link
          href={`/contact-us`}
          className="red-bg px-6 h-[48px] 2xl:h-[60px] rounded-[17px] text-white hover:bg-black hover:text-white transition-all duration-300 hidden lg:flex items-center justify-end gap-3 outline-none font-medium text-sm xl:text-[17px] 2xl:text-[18px]"
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
