import React from "react";
import "./PopupForm.css";

const PopupFormAnimation = () => {
  return (
    <div className="lg:py-10 midlg:py-16 flex flex-col items-center relative overflow-hidden w-full h-full">
      <div className="lg:w-[95%] midlg:w-[400px] flex flex-col items-center gap-4 text-center">
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

      <div className="lg:w-[80%] lg:mt-10 midlg:mt-5 midlg:w-[400px] relative h-full z-10">
        <div className="bg-white custom-shadow w-[80px] h-[80px] rounded-xl bulb-inner-shadow absolute lg:-left-5 lg:bottom-20 midlg:-left-[8%] midlg:bottom-[-2%] z-20 flex items-center justify-center">
          <img
            src="/yellow-bulb-image.png"
            alt="yellow-bulb-image"
            width={51}
            height={66}
            className="object-contain absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          />
        </div>

        <div className="w-full absolute left-1/2 -translate-x-1/2 h-[300px]">
          <img
            src="/strategizing-box.png"
            alt="strategizing-box"
            width={141}
            height={180}
            className="absolute left-[-6.7%] top-[8%] image-anim1"
          />
          {/* building-box */}
          <img
            src="/building-box.png"
            alt="building-box"
            width={141}
            height={121}
            className="absolute top-[17%] right-[13%] image-anim2"
          />
          {/* transforming-box */}
          <img
            src="/transforming-box.png"
            alt="transforming-box"
            width={195}
            height={187}
            className="absolute bottom-[-12%] left-[27.2%] image-anim"
          />
          <img
            src="/red-zigzag-line.png"
            alt="popup-form-lines"
            width={399}
            height={214}
            className="absolute left-1/2 -translate-x-1/2 bottom-[20%]"
          />
          <img
            src="/popup-form-magnifire.png"
            alt="popup-form-magnifire"
            width={134}
            height={135}
            className="absolute bottom-[23%] left-[8%] z-10 lg:w-[100px] zigzag-image"
          />
          <img
            src="/popup-form-rocket-image.png"
            alt="popup-form-rocket-image"
            width={191}
            height={221}
            className="absolute top-[-20%] right-[-21%] -rotate-6"
          />
        </div>
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
