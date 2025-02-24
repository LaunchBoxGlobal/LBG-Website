import { HOME_TEAM } from "@/constants/HomeTeam";
import Image from "next/image";
import React from "react";

const HomeTeamSection = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-20">
      <section className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="section-heading">
          Meet Our <span className="red-text">Team</span>
        </h2>
        <p className="text-base font-medium w-full lg:w-2/3 text-center leading-[19.2px] text-gray-500">
          Meet the creative minds behind the Launchbox Global! Our team of Brand
          Strategist, UI/UX Designers, Content Writers and Developers uses
          modern technology and expert execution to bring your app to life.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {HOME_TEAM?.map((team, index) => (
          <div className="" key={index}>
            <div
              className={`w-[298.82px] h-[471.48px] mx-auto border ${
                index === 0 || index === 2 ? "border-[#F40E00]" : "border-black"
              } rounded-[149.41px] relative overflow-hidden`}
            >
              <Image
                src={team?.image}
                width={298.82}
                height={433.08}
                className={`w-[${team?.img_width}] h-[${team?.img_height}] object-cover absolute bottom-0 grayscale hover:grayscale-0 transition-all duration-300`}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mt-2">
              <h3 className="font-bold red-text">{team?.name}</h3>
              <p className="text-sm font-medium text-gray-500">
                {team?.designation}
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default HomeTeamSection;
