import Image from "next/image";
import React from "react";
import { BsBuilding } from "react-icons/bs";

const HomeStats = () => {
  return (
    <section className="w-full padding-x py-10 lg:py-28 bg-[#F9F9F9] flex flex-col items-center gap-6">
      <h2 className="lg:text-[35px] xl:text-[45px] 2xl:text-[60px] font-bold">
        Backed by <span className="text-[#F40E00]">Experience</span>
      </h2>
      <section className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-10 mt-8">
        <section className="w-full flex flex-col items-center justify-center gap-0">
          <div className="w-14 h-14 bg-white flex items-center justify-center rounded-xl p-3">
            <Image
              src={"/global-talent-icon-stats.png"}
              width={37}
              height={45}
              alt="global talent icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2 mt-1">
            <h2 className="lg:text-[35px] xl:text-[60px] 2xl:text-[60px] font-bold text-[#F40E00]">
              100+
            </h2>
            <p className="text-xl font-light text-gray-400 transition-all duration-300 relative -mt-3">
              Global Talents
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-0">
          <div className="w-14 h-14 bg-white flex items-center justify-center rounded-xl p-3">
            <Image
              src={"/projects-icon-stats.png"}
              width={37}
              height={45}
              alt="projects icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2 mt-1">
            <h2 className="lg:text-[35px] xl:text-[60px] 2xl:text-[60px] font-bold text-[#F40E00]">
              50+
            </h2>
            <p className="text-xl font-light text-gray-400 transition-all duration-300 relative -mt-3">
              Projects Delivered
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-0">
          <div className="w-14 h-14 bg-white flex items-center justify-center rounded-xl p-3">
            <Image
              src={"/happy-clients-stats.png"}
              width={37}
              height={45}
              alt="happy clients icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2 mt-1">
            <h2 className="lg:text-[35px] xl:text-[60px] 2xl:text-[60px] font-bold text-[#F40E00]">
              40+
            </h2>
            <p className="text-xl font-light text-gray-400 transition-all duration-300 relative -mt-3">
              Happy Clients
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-0">
          <div className="w-14 h-14 bg-white flex items-center justify-center rounded-xl p-3.5">
            <Image
              src={"/location-icon-stats.png"}
              width={37}
              height={45}
              alt="location icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-2 mt-1">
            <h2 className="lg:text-[35px] xl:text-[60px] 2xl:text-[60px] font-bold text-[#F40E00]">
              7+
            </h2>
            <p className="text-xl font-light text-gray-400 transition-all duration-300 relative -mt-3">
              Global Presence
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HomeStats;
