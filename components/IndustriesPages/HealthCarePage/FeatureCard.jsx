import Image from "next/image";
import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="w-full group border border-[#D3D3D8] rounded-[11px] bg-white relative p-6 min-h-[170px] hover:border-[#F40E00] hover:shadow-[0_10px_15px_1px_#fa928c] transition-all duration-300">
      <div className="w-full flex items-center gap-3">
        <Image
          src={feature?.icon}
          width={feature?.width}
          height={feature?.height}
          alt={feature?.alt_tag}
          className="grayscale group-hover:[filter:brightness(0)_saturate(100%)_invert(18%)_sepia(94%)_saturate(5591%)_hue-rotate(3deg)_brightness(99%)_contrast(118%)] transition-all duration-300"
        />
        <h3 className="font-bold leading-none group-hover:text-[#F40E00] transition-all duration-300">
          {feature?.title}
        </h3>
      </div>
      <p className="text-sm leading-[1.2] mt-3">{feature?.description}</p>
    </div>
  );
};

export default FeatureCard;
