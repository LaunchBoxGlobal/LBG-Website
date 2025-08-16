import Image from "next/image";
import React from "react";

const mockups = [
  "/case-studies/sittner-trucking/prototyping-mockup-1.png",
  "/case-studies/sittner-trucking/prototyping-mockup-2.png",
  "/case-studies/sittner-trucking/prototyping-mockup-3.png",
  "/case-studies/sittner-trucking/prototyping-mockup-4.png",
  "/case-studies/sittner-trucking/prototyping-mockup-5.png",
  "/case-studies/sittner-trucking/prototyping-mockup-6.png",
  "/case-studies/sittner-trucking/prototyping-mockup-7.png",
  "/case-studies/sittner-trucking/prototyping-mockup-8.png",
  "/case-studies/sittner-trucking/prototyping-mockup-9.png",
];

const MockupsSlider = () => {
  return (
    <div className="mt-10 overflow-hidden relative w-full">
      <div className="flex animate-slide-sittner-mockups py-10">
        {[...mockups, ...mockups].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] lg:w-[600px] mx-4">
            <img
              src={src}
              alt={`mockup-${i}`}
              width={805}
              height={503}
              className="rounded-xl shadow-lg w-[300px] lg:w-[600px] object-contain custom-shadow"
            />
          </div>
        ))}
      </div>
      <div className="flex animate-slide-sittner-mockups-reverse py-10">
        {[...mockups, ...mockups].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] lg:w-[600px] mx-4">
            <img
              src={src}
              alt={`mockup-${i}`}
              width={805}
              height={503}
              className="rounded-xl shadow-lg w-[300px] lg:w-[600px] custom-shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockupsSlider;
