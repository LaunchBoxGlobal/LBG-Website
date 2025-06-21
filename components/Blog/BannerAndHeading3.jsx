import Image from "next/image";
import React from "react";

const list = [
  {
    title: "Monument Valley 2",
    description:
      "This is a puzzle game with mind-bending levels and beautiful art. It is great for when you want something calming yet quite challenging. ",
  },
  {
    title: "Soul Knight",
    description:
      "It's a dungeon crawler with straightforward controls and lots of weaponry. It is pretty easy to pick up and hard to put down.",
  },
  {
    title: "Plague Inc.",
    description:
      "It shows that the virus has been created and that it took over the world in the game. It is pretty addictive and works well when played offline.",
  },
];

const BannerAndImage3 = () => {
  return (
    <section id="bestofflinephonegames" className="w-full relative">
      <section className="relative">
        <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold text-center leading-none tracking-tight">
          Top Picks for the best{" "}
          <span className="red-text">Offline Phone Games</span>
        </h2>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7 text-start my-5">
          Below are some of the topic picks for one of the best offline games:
        </p>
        {list?.map((c, i) => {
          return (
            <div
              key={i}
              className="w-full flex flex-col items-start gap-3 lg:gap-5 mb-3 lg:mb-5"
            >
              <h3 className="red-text text-[18px] lg:text-[22px] font-semibold">
                {i + 1}
                {")"} {c?.title}:
              </h3>
              <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6 lg:leading-7">
                {c?.description}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default BannerAndImage3;
