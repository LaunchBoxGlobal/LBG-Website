import Image from "next/image";
import React from "react";

const colors = [
  {
    color: "#02EA4C",
    code: "02EA4C",
  },
  {
    color: "#0A8A33",
    code: "0A8A33",
  },
  {
    color: "#181818",
    code: "181818",
  },
  {
    color: "#CFCFCF",
    code: "CFCFCF",
  },
  {
    color: "#DFDFDF",
    code: "DFDFDF",
  },
  {
    color: "#F7F7F7",
    code: "F7F7F7",
  },
];

const Branding = () => {
  return (
    <section className="w-full padding-x flex flex-col items-center">
      <h2 className="section-heading">Crafting the Voice</h2>
      <p className="text-center lg:w-[90%] text-base lg:text-xl mt-7">
        The app’s UI reflected JB Sittner Trucking’s branding with bold colors,
        simple layouts, and intuitive icons. Consistency across platforms
        reinforced trust and ease of adoption for employees and admins.
      </p>

      <div className="w-full mt-20">
        <img
          src={`/case-studies/sittner-trucking/branding-fonts-mockup.png`}
          alt="branding-fonts-mockup"
          width={733}
          height={332}
          className="mx-auto object-contain"
        />
      </div>

      <div className="w-full mt-20 lg:mt-40 flex items-center justify-center">
        {colors?.map((c, i) => {
          return (
            <div
              key={i}
              style={{
                background: c?.color,

                zIndex: colors.length + i,
              }}
              className={`w-[70px] h-[70px] md:w-[130px] md:h-[130px] midlg:w-[260px] midlg:h-[260px] rounded-full border-[5px] border-white relative ${
                i === 0 ? "ml-0" : "ml-[-20px] lg:ml:[-60px]"
              }`}
            >
              <div className="w-[45px] md:w-[93px] h-[20px] md:h-[38px] bg-black border-2 border-white absolute rounded-lg left-[-2%] bottom-[18%] flex items-center justify-center">
                <p className="text-white text-[9px] lg:text-lg">{c?.code}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Branding;
