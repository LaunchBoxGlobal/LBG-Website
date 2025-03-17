"use client";
import { useEffect, useRef, useState } from "react";
import "./Styles.css";
import Image from "next/image";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(null); // Track image that's leaving
  const galleryRef = useRef(null);

  const images = [
    "/web-app-01.png",
    "/web-app-02.png",
    "/web-app-03.png",
    "/web-app-04.png",
    "/web-app-05.png",
  ];

  const totalItems = images.length;

  // Get class with exit logic
  const getItemClass = (index) => {
    const position = ((index - currentIndex + totalItems) % totalItems) + 1;
    let baseClass = `gallery-item gallery-item-${position}`;
    if (index === exitingIndex) {
      baseClass += " gallery-item-exit"; // Add exit class to fading item
    }
    return baseClass;
  };

  // Autoplay logic with exit tracking
  useEffect(() => {
    const interval = setInterval(() => {
      const exitIndex = currentIndex; // Current center will become left-most
      setExitingIndex(exitIndex);

      // Allow CSS animation to apply before index changes
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        setExitingIndex(null); // Reset after fade out
      }, 100); // Small delay for transition
    }, 4000);

    const gallery = galleryRef.current;

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      clearInterval(interval);
      // Restart autoplay on mouse leave
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
    <section className="main-container">
      <div className="gallery relative">
        <Image
          src={"/macbook-mockup.png"}
          className="w-[682px] h-[210px] lg:h-[400px] absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt=""
          width={782}
          height={508}
        />
        <div className="gallery-container" ref={galleryRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className={getItemClass(index)}
              data-index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
