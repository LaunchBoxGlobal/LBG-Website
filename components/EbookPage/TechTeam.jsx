"use client";
import React from "react";
import Image from "next/image";

const logos = [
  { src: "/logos/google.svg", alt: "Google" },
  { src: "/logos/facebook.svg", alt: "Facebook" },
  { src: "/logos/youtube.svg", alt: "YouTube" },
  { src: "/logos/pinterest.svg", alt: "Pinterest" },
  { src: "/logos/twitch.svg", alt: "Twitch" },
];

export default function TechTeam() {
  return (
    <section className="w-full py-10 lg:py-16  flex flex-col items-center justify-center">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
        Trusted by innovative startups and tech teams{" "}
        <span className="text-[#F40E00]">worldwide</span>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 mt-8">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={40}
              className="object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
