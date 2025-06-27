"use client";
import { useEffect, useRef, useState } from "react";
import "./Styles.css";
import Image from "next/image";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(null);
  const galleryRef = useRef(null);

  const mockups = [
    {
      image: "/web-app-01.webp",
      alt_tag:
        "Web app development services interface displaying responsive design elements and user workflow analytic",
    },
    {
      image: "/web-app-02.webp",
      alt_tag:
        "Web app development services dashboard showing responsive interface design with live user analytics",
    },
    {
      image: "/web-app-03.webp",
      alt_tag:
        "Web app development services interface displaying responsive design elements and real-time user analytics dashboard",
    },
    {
      image: "/web-app-04.webp",
      alt_tag:
        "Web app development services dashboard showing responsive interface design with live performance analytics metrics",
    },
    {
      image: "/web-app-05.webp",
      alt_tag:
        "Web app development services dashboard displaying responsive UI components with live user interaction analytics.",
    },
  ];

  const totalItems = mockups.length;

  // Get class with exit logic
  const getItemClass = (index) => {
    const position = ((index - currentIndex + totalItems) % totalItems) + 1;
    let baseClass = `web-gallery-item web-gallery-item-${position}`;
    if (index === exitingIndex) {
      baseClass += " web-gallery-item-exit"; // Add exit class to fading item
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
    <section className="web-main-container">
      <div className="web-gallery relative">
        <Image
          src={"/macbook-mockup-min.webp"}
          className="w-[350px] midlg:w-[682px] h-[210px] md:h-[300px] md:w-[480px] midlg:h-[400px] absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          alt="web app development image"
          width={782}
          height={508}
          priority
        />
        <div className="web-gallery-container" ref={galleryRef}>
          {mockups.map((src, index) => (
            <Image
              key={index}
              src={src?.image}
              width={599}
              height={389}
              priority
              alt={src?.alt_tag}
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
