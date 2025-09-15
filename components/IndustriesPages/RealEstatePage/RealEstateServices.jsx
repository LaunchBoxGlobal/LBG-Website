import { REAL_ESTATE_DEVELOPMENT_SERVICES } from "@/constants/industries/real-estate-content/real-estate-services";
import Link from "next/link";
import React from "react";

const RealEstateServices = () => {
  return (
    <section className="w-full py-20 midlg:py-32 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Top Real Estate App{" "}
          <span className="red-text">Development Services</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We offer customized real estate software development services that are
          fast, reliable, and designed to simplify your workflows while helping
          you grow smarter in the market.
        </p>
      </section>

      <div className="w-full flex items-center justify-center flex-wrap gap-5 mt-16">
        {REAL_ESTATE_DEVELOPMENT_SERVICES?.map((t, i) => {
          return (
            <div
              className="w-full md:w-[45%] lg:w-[30%] midlg:w-[23%] min-h-[450px] bg-[#F6F6F6] rounded-[21px] p-7 flex flex-col items-start text-start gap-3 relative group hover:bg-[#F40E00] hover:text-white transition-all duration-300"
              key={i}
            >
              <div className="w-full">
                <img
                  src={t?.icon}
                  alt={t?.alt_tag}
                  width={t?.width}
                  height={t?.height}
                  className="object-contain transition duration-300 group-hover:invert group-hover:brightness-0"
                />
              </div>
              <h3 className="font-semibold text-[22px] leading-none mt-5">
                {t?.title}
              </h3>
              <p className="text-lg leading-[1.2]">{t?.description}</p>
            </div>
          );
        })}
        <div className="w-full md:w-[45%] lg:w-[30%] midlg:w-[23%] min-h-[450px] bg-[#F6F6F6] rounded-[21px] p-7 flex flex-col items-start text-start gap-3 relative group hover:bg-[#F40E00] hover:text-white transition-all duration-300">
          <div className="w-full">
            <img
              src="/industries/healthcare/ongoing-optimization-icon.png"
              width={53}
              height={53}
              alt="web portals for agencts and agencies icon"
              className="object-contain transition duration-300 group-hover:invert group-hover:brightness-0"
            />
          </div>
          <h3 className="font-semibold text-[22px] leading-none mt-5">
            Web Portals For Agents & Agencies
          </h3>
          <p className="text-lg leading-[1.2]">
            Empower your agents and agencies with portals designed to simplify
            daily operations. Through{" "}
            <Link href={`/services/web-app-development`}>
              web app development
            </Link>{" "}
            and mobile app solutions, manage listings, track leads, and
            communicate smoothly, all in one interactive platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateServices;
