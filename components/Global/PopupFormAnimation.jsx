import React from "react";
import "./PopupForm.css";

const PopupFormAnimation = () => {
  return (
    <div className="p-16 flex flex-col items-center justify-between relative overflow-hidden w-full h-full">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-bold text-[54px] tracking-tight leading-[1]">
          Before You <span className="red-text">Leave</span>
        </h2>
        <p className="text-[27px] font-normal leading-[1]">
          Sign up now for a free quote
        </p>
        <p className="uppercase red-bg text-white w-[266px] h-[58px] flex items-center justify-center rounded-[13px] text-[22px] font-bold">
          UPTO 25% free
        </p>
      </div>

      <div className="w-full relative h-full z-10">
        <div className="bg-white custom-shadow lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] rounded-xl bulb-inner-shadow absolute -left-1 bottom-[-5%] z-10 flex items-center justify-center">
          <img
            src="/yellow-bulb.png"
            alt="yellow-bulb"
            width={51}
            height={66}
            className="object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bulb-on"
          />
          <img
            src="/white-bulb.png"
            alt="white-bulb"
            width={45}
            height={60}
            className="object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bulb-off"
          />
        </div>
        {/* <img
          src="/popup-form-yellow-bulb-image.png"
          alt="popup-form-yellow-bulb-image"
          width={121}
          height={122}
          className="absolute -left-1 bottom-[-5%] z-10"
        /> */}
        <img
          src="/popup-form-lines.png"
          alt="popup-form-lines"
          width={399}
          height={214}
          className="absolute left-1/2 -translate-x-1/2 bottom-[-25%]"
        />
        <img
          src="/popup-form-rocket-image.png"
          alt="popup-form-rocket-image"
          width={191}
          height={221}
          className="absolute right-[-14%] bottom-[25%] -rotate-3"
        />
        {/* popup-form-magnifire */}
        <img
          src="/popup-form-magnifire.png"
          alt="popup-form-magnifire"
          width={134}
          height={135}
          className="absolute bottom-0 left-[19%] z-10 zigzag-image"
        />
      </div>

      <img
        src="/popup-form-dots-image.png"
        alt="popup-form-dots-image"
        className="absolute -bottom-[20%] -left-[30%] z-0 scale-50"
      />
    </div>
  );
};

export default PopupFormAnimation;
