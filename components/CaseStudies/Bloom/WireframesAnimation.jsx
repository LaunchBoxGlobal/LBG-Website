"use client";
import Image from "next/image";
import React from "react";
import WireframeMarqueeColumn from "./WireframeMarqueeColumn";
import { BLOOM_MOCKUPS } from "@/constants/case-studies/bloom/bloom-wireframes";

const WireframesAnimation = () => {
  return (
    <div className="w-full mt-10 midlg:mt-12">
      <div className="w-full relative h-[65vh] md:h-[85vh] bg-black overflow-hidden rounded-[40px] flex items-center justify-center gap-3 md:gap-6 lg:gap-14">
        <Image
          src={"/case-studies/lines_Grid.png"}
          alt="lines_Grid"
          width={1271}
          height={771}
          className="w-full h-full absolute inset-0 object-cover"
        />
        <WireframeMarqueeColumn images={BLOOM_MOCKUPS} speed={1} />
        <WireframeMarqueeColumn
          images={BLOOM_MOCKUPS}
          reverse={true}
          speed={1}
        />
        <WireframeMarqueeColumn
          images={[...BLOOM_MOCKUPS].reverse()}
          speed={1}
        />
      </div>
    </div>
  );
};

export default WireframesAnimation;
