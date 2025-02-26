import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./ServiceCard.css";
import Image from "next/image";

const ServiceCard = ({ service, index, setModal }) => {
  return (
    <div
      className="w-full rounded-xl pt-5 px-6 pb-[50px] flex items-start justify-between gap-4 group hover:bg-[#000] transition-all duration-300 h-auto bg-transparent relative overflow-y-visible"
      key={index}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <Image
        src={service?.image}
        width={270}
        height={200}
        alt={service?.title}
        className="-rotate-[22deg] invisible group-hover:visible transition-all duration-300 absolute left-[8%] -top-[46%]"
      />
      <span className="text-[20px] font-medium text-gray-400 group-hover:text-white transition-all duration-300">{`(0${
        index + 1
      })`}</span>
      <div className="flex items-start justify-between w-[80%] lg:w-[750px]">
        <h3 className="text-lg md:text-[34px] lg:text-[40px] 2xl:text-[55px] leading-[45px] tracking-tight font-light text-gray-400 group-hover:text-white group-hover:font-normal transition-all duration-300">
          {service?.title}
        </h3>
        <Link href={"/"}>
          <MdOutlineArrowOutward className="w-[21px] h-[21px] text-[#F40E00] opacity-65 group-hover:opacity-100 transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
