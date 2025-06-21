import Image from "next/image";
import React from "react";

const list = [
  {
    title: "Adventure Quest",
    description:
      "Everyone has a different taste in games, but Adventure Quest takes first place as one of the best offline games. The players go on a memorable journey through a game which is filled with plenty of surprises, quests, monsters, and treasures. It is appealing to people of all ages. It has a simple yet captivating storyline. Even younger players can enjoy the adventures here without feeling overwhelmed or left out. ",
  },
  {
    title: "Brain Teasers Pro",
    description:
      "It is one of the best free online games. It will keep your brain sharp and entertained with mind-blowing puzzles. It has a variety of difficult levels. This game offers cognitive skills. It can be used by all age groups, but mainly adults and teenagers. ",
  },
  {
    title: "Ting Wings 2",
    description:
      "It is one of the best games that has captured the hearts of many of the players, mainly children and teenagers. It follows the adventures of cute birds that try to fly across beautiful landscapes. It is quite straightforward to control and has quite colorful graphics.",
  },
  {
    title: "Dead Cells",
    description:
      "Suppose you are looking for a fast-paced action game with catchy, colorful graphics that keep you hooked with its intense combat and ever-changing levels.",
  },
  {
    title: "Alto’s Odyssey",
    description:
      "It is a relaxing running game with sharp and stunning graphics. You can slide down the dunes and jump over the cliffs, and all of these don’t need Wi-Fi.",
  },
];

const BannerAndImage2 = () => {
  return (
    <section id="bestofflinemobilegames" className="w-full relative">
      <section className="w-full z-0 relative">
        <Image
          src={"/blog-image-3.webp"}
          alt="blog-image-3"
          width={1270}
          height={593}
          className="w-full rounded-[40px] cover-image"
        />
        <Image
          src={"/blog-cover-image-shadow.webp"}
          alt="blog-cover-image"
          width={1611.68}
          height={164.64}
          className="w-[1611px] h-[14rem] rounded-[40px] cover-image absolute bottom-[-15%] inset-x-0 hidden lg:block"
        />
      </section>
      <section className="relative mt-5 lg:mt-0 lg:-top-[54px] xl:-top-[70px]">
        <h2 className="text-[8.6vw] md:text-[5.5vw] lg:text-[60px] font-bold text-center leading-none tracking-tight">
          Best Offline Mobile Games for{" "}
          <span className="red-text">Endless Fun</span>
        </h2>
        <p className="text-[18px] lg:text-[22px] text-[#212121] leading-7 text-start my-5">
          Below are some of the best offline games:
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
              <p className="text-[18px] lg:text-[22px] text-[#212121] leading-6">
                {c?.description}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default BannerAndImage2;
