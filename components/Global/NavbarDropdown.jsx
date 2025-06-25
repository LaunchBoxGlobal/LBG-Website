import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const tabs = [
  {
    icon: "/navbar-services-icon.png",
    title: "Services",
  },
  {
    icon: "/navbar-technology-icon.png",
    title: "Technology",
  },
  {
    icon: "/navbar-industry-icon.png",
    title: "Industry",
  },
  {
    icon: "/navbar-location-icon.png",
    title: "Location",
  },
];

const NavbarDropdown = ({ closeDropdown }) => {
  const [selectedTab, setSelectedTab] = useState("Services");
  return (
    <div className="bg-white w-[80%] mx-auto min-h-[420px] mt-6 flex items-start justify-center gap-10 rounded-[17px] border border-[#CECEEA] p-6">
      {/* <div className="min-w-[231px] flex flex-col items-start gap-2">
        {tabs?.map((tab, i) => {
          return (
            <button
              type="button"
              key={i}
              onClick={() => setSelectedTab(tab?.title)}
              className={`w-full flex items-center justify-between p-3 rounded-[7px] ${
                tab?.title === selectedTab ? "bg-[#F9F1F1]" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={tab?.icon}
                  alt="navbar-services-icon"
                  width={20}
                  height={20}
                  className="w-[18px] object-contain"
                />
                <span className="text-lg font-medium">{tab?.title}</span>
              </div>
              <Image
                src={"/navbar-dropdown-right-arrow-icon.png"}
                alt="navbar-dropdown-right-arrow-icon"
                width={14}
                height={4}
                className="w-[8px] object-contain"
              />
            </button>
          );
        })}
      </div> */}
      {/* {selectedTab === "Services" ? (
        <Services closeDropdown={closeDropdown} selectedTab={selectedTab} />
      ) : (
        <Technology closeDropdown={closeDropdown} selectedTab={selectedTab} />
      )} */}
      <Services closeDropdown={closeDropdown} selectedTab={selectedTab} />
      <Technology closeDropdown={closeDropdown} selectedTab={selectedTab} />
      <Location closeDropdown={closeDropdown} selectedTab={selectedTab} />
    </div>
  );
};

export default NavbarDropdown;

const Services = ({ closeDropdown }) => {
  const pages = [
    {
      title: "Mobile App Development",
      pageUrl: "mobile-app-development",
    },
    {
      title: "Web App Development",
      pageUrl: "web-app-development",
    },
    {
      title: "Custom Software Development",
      pageUrl: "custom-software-development",
    },
    {
      title: "E-commerce Development",
      pageUrl: "ecommerce-development",
    },
    {
      title: "Digital Marketing",
      pageUrl: "digital-marketing",
    },
    {
      title: "Branding & Design",
      pageUrl: "branding-and-design",
    },
  ];
  return (
    <div className="w-full flex items-start">
      <div className="">
        <p className="text-lg font-medium">Services</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {pages?.map((p, i) => {
            return (
              <Link
                href={`/services/${p?.pageUrl}`}
                key={i}
                onClick={() => closeDropdown()}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

const Technology = ({ closeDropdown, selectedTab }) => {
  const pages = [
    {
      title: "Native App Development",
      pageUrl: "/development-technologies/react-native-app-development",
    },
    {
      title: "Flutter App Development",
      pageUrl: "/development-technologies/flutter-app-development",
    },
    {
      title: "Swift App Development",
      pageUrl: "/development-technologies/swift-app-development",
    },
    {
      title: "Kotlin App Development",
      pageUrl: "/development-technologies/kotlin-app-development",
    },
    {
      title: "Ionic App Development",
      pageUrl: "/development-technologies/ionic-app-development",
    },
  ];
  return (
    <div className="w-full flex items-start justify-between">
      <div
        className={`${
          selectedTab === "Technology"
            ? "bg-[#E6E6E673] border"
            : "bg-white border border-white"
        } rounded-[7px] mr-4 w-full`}
      >
        <p className="text-lg font-medium">Technology</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {pages?.map((p, i) => {
            return (
              <Link
                href={`${p?.pageUrl}`}
                key={i}
                onClick={closeDropdown}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>
      {/* <div className="border-r border-l px-4 w-[33%]">
        <Industry selectedTab={selectedTab} />
      </div>
      <div className="w-[33%] px-4">
        <Location selectedTab={selectedTab} />
      </div> */}
    </div>
  );
};

const Industry = ({ selectedTab }) => {
  const industries = [
    {
      title: "E-Commerce",
    },
    {
      title: "Health & Wellness",
    },
    {
      title: "Remote Work & Probablity",
    },
    {
      title: "Online Education & E-Learning",
    },
    {
      title: "Financial Services & Fintech",
    },
    {
      title: "Content Creation & Influencer Marketing",
    },
    {
      title: "Travel & Experiences",
    },
  ];
  return (
    <div className="w-full flex items-start">
      <div
        className={`${
          selectedTab === "Industry"
            ? "bg-[#E6E6E673] border"
            : "bg-white border border-white"
        } p-5 rounded-[7px] w-full`}
      >
        <p className="text-lg font-medium">Industry</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {industries?.map((p, i) => {
            return (
              <p
                key={i}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </p>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

const Location = ({ selectedTab, closeDropdown }) => {
  const locations = [
    {
      title: "Mobile App Development in Florida",
      pageUrl: "/mobile-app-developer-in-florida",
    },
    {
      title: "Software Development Company in Florida",
      pageUrl: "/software-development-company-in-florida",
    },
    {
      title: "Software Development Company in New Jersey",
      pageUrl: "/software-development-company-in-new-jersey",
    },
    {
      title: "Web Development Company in New Jersey",
      pageUrl: "/web-development-company-in-new-jersey",
    },
    {
      title: "Mobile App Development in Houston",
      pageUrl: "/mobile-app-developers-in-houston",
    },
    {
      title: "Custom Software Development Company in Houston",
      pageUrl: "/custom-software-development-company-in-houston",
    },
    {
      title: "Mobile App Development Company in Texas",
      pageUrl: "/mobile-app-development-company-in-texas",
    },
    {
      title: "Digital Marketing Company in wyoming",
      pageUrl: "/wyoming-digital-company",
    },
    {
      title: "Seo Company in Cheyenne",
      pageUrl: "/cheyenne-seo-company",
    },
  ];
  return (
    <div className="w-full flex items-start">
      <div
        className={`${
          selectedTab === "Location"
            ? "bg-[#E6E6E673] border"
            : "bg-white border border-white"
        } rounded-[7px] w-full`}
      >
        <p className="text-lg font-medium">Location</p>
        <ul className="space-y-1 mt-3 flex flex-col items-start">
          {locations?.map((p, i) => {
            return (
              <Link
                href={`${p?.pageUrl}`}
                key={i}
                onClick={closeDropdown}
                className="text-lg underline text-gray-600 hover:text-black"
              >
                {p?.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};
