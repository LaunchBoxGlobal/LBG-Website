// components/Gallery.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import "./Styles.css"; // Or use module CSS if preferred
import Image from "next/image";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const images = [
    "/web-app-01.png",
    "/web-app-02.png",
    "/web-app-03.png",
    "/web-app-04.png",
    "/web-app-05.png",
  ];

  const totalItems = images.length;

  // Update classes for positioning
  const getItemClass = (index) => {
    const position = ((index - currentIndex + totalItems) % totalItems) + 1;
    return `gallery-item gallery-item-${position}`;
  };

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 4000); // Change interval if needed

    const gallery = galleryRef.current;

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      clearInterval(interval);
      // Restart autoplay on mouse leave
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
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
