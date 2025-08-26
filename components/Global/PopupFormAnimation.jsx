import React from "react";
import "./PopupForm.css";

const PopupFormAnimation = () => {
  return (
    <div className="lg:p-10 midlg:p-16 flex flex-col items-center justify-between relative overflow-hidden w-full h-full">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-bold text-[28px] tracking-tight leading-[1]">
          This could be the moment where your idea takes shape.{" "}
          <span className="red-text">Will you close it?</span>
        </h2>
        <p className="text-[20px] font-normal leading-[1]">
          Take the first step today with
        </p>
        <p className="uppercase red-bg text-white px-7 lg:h-[48px] xl:h-[58px] flex items-center justify-center rounded-[13px] text-[18px] font-bold">
          UPTO 25% off
        </p>
      </div>

      <div className="lg:w-[90%] midlg:w-full relative h-full z-10">
        <div className="bg-white custom-shadow lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] rounded-xl bulb-inner-shadow absolute left-3 xl:left-1 bottom-[-5%] z-10 flex items-center justify-center">
          <img
            src="/yellow-bulb-image.png"
            alt="yellow-bulb-image"
            width={51}
            height={66}
            className="object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          />
          {/* <img
            src="/white-bulb-image.png"
            alt="white bulb image"
            width={34}
            height={44}
            className="object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bulb-off"
          /> */}
        </div>
        {/* <img
          src="/popup-form-yellow-bulb-image.png"
          alt="popup-form-yellow-bulb-image"
          width={121}
          height={122}
          className="absolute -left-1 bottom-[-5%] z-10"
        /> */}
        <div className="w-full absolute left-1/2 -translate-x-1/2 lg:-bottom-[15%] xl:bottom-[-15%] h-full">
          <img
            src="/popup-form-lines.png"
            alt="popup-form-lines"
            width={399}
            height={214}
            className="absolute left-1/2 -translate-x-1/2 top-0"
          />
          <img
            src="/popup-form-magnifire.png"
            alt="popup-form-magnifire"
            width={134}
            height={135}
            className="absolute lg:bottom-[25%] lg:left-[18%] xl:bottom-[30%] xl:left-[22%] z-10 lg:w-[100px] zigzag-image"
          />
          <img
            src="/popup-form-rocket-image.png"
            alt="popup-form-rocket-image"
            width={191}
            height={221}
            className="absolute lg:right-[-21.5%] xl:right-[-14%] top-[-28%] -rotate-6"
          />
        </div>
        {/* <img
          src="/popup-form-rocket-image.png"
          alt="popup-form-rocket-image"
          width={191}
          height={221}
          className="absolute right-[-14%] bottom-[25%] -rotate-3"
        /> */}
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
