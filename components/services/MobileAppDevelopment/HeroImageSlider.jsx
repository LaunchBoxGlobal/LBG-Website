"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroImageSlider = () => {
  const images = [
    "/mobile-mockup-01.png",
    "/mobile-mockup-02.png",
    "/mobile-mockup-03.png",
    "/mobile-mockup-04.png",
    "/mobile-mockup-05.png",
    "/mobile-mockup-06.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full h-[423px] flex items-center justify-center relative">
      {/* iPhone Mockup */}
      <Image
        src="/iphone-mockup.png"
        alt="iphone mockup"
        className="w-[213px] h-[423px] absolute left-1/2 -translate-x-1/2 z-10"
        width={253}
        height={523}
      />
      {/* Image Carousel */}
      {/* <div
        className="carousel-container w-[156px] h-[296px] flex absolute left-1/2 -translate-x-1/2"
        style={{ transform: `translateX(-${currentImageIndex * 156}px)` }}
      >
        {images.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            width={156}
            height={296}
            className="w-[156px] h-[296px]"
          />
        ))}
      </div> */}
    </section>
  );
};

export default HeroImageSlider;
