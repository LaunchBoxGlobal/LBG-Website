"use client";
import { useEffect, useRef, useState } from "react";
import "./Styles.css";
import Image from "next/image";

const MobileImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(null);
  const galleryRef = useRef(null);

  const images = [
    "/mobile-mockup01.webp",
    "/mobile-mockup02.webp",
    "/mobile-mockup03.webp",
    "/mobile-mockup04.webp",
    "/mobile-mockup05.webp",
    // "/mobile-mockup06.webp",
    // "/mobile-mockup07.webp",
  ];

  const totalItems = images.length;

  const getItemClass = (index) => {
    const position = ((index - currentIndex + totalItems) % totalItems) + 1;
    let baseClass = `mobile-gallery-item mobile-gallery-item-${position}`;
    if (index === exitingIndex) {
      baseClass += " mobile-gallery-item-exit";
    }
    return baseClass;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const exitIndex = currentIndex;
      setExitingIndex(exitIndex);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        setExitingIndex(null);
      }, 100);
    }, 4000);

    const gallery = galleryRef.current;

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      clearInterval(interval);
      setTimeout(() => {
        const exitIndex = currentIndex;
        setExitingIndex(exitIndex);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
          setExitingIndex(null);
        }, 100);
      }, 4000);
    };

    gallery.addEventListener("mouseenter", handleMouseEnter);
    gallery.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      gallery.removeEventListener("mouseenter", handleMouseEnter);
      gallery.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [currentIndex, totalItems]);

  return (
    <section className="mobile-main-container">
      <div className="mobile-gallery relative">
        <Image
          src={"/iphone-mockup.png"}
          className="w-[10.3rem] lg:w-[13.3rem] h-[325px] lg:h-[425px] z-20 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt=""
          width={782}
          height={508}
        />
        <div className="mobile-gallery-container" ref={galleryRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`mobile-Gallery ${index + 1}`}
              className={getItemClass(index)}
              data-index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileImageSlider;
