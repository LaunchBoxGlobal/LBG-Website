"use client";
import React from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import {
  FaHome,
  FaEnvelope,
  FaCog,
  FaShoppingCart,
  FaTruck,
  FaCheckSquare,
  FaStore,
  FaUser,
  FaPalette,
} from "react-icons/fa";
import Link from "next/link";

const icons = [
  { icon: FaHome },
  { icon: FaUser },
  { icon: FaEnvelope },
  { icon: FaTruck },
  { icon: FaUser },
  { icon: FaTruck },
  { icon: FaCog },
  { icon: FaShoppingCart },
  { icon: FaTruck },
  { icon: FaPalette },
  { icon: FaCheckSquare },
  { icon: FaPalette },
  { icon: FaUser },
  { icon: FaPalette },
];

function MidpageCTA() {
  return (
    <section className=" padding-x ">
      <div className=" flex items-center justify-center">
        <section className="relative  overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B0B0B] to-[#1C1C1C] text-white shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-[60%] relative z-50 px-10 md:px-16 py-16 space-y-6">
              <h2 className="text-4xl font-extrabold leading-snug ">
                Every Hour You Wait Costs Sales.
                <br />
                <span className="text-white">Build Your Store Today</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Every moment you delay launching your online store, you risk
                losing customers and revenue. Our team specializes in building
                high-performing ecommerce stores and apps quickly and
                efficiently. With our expertise, you can start selling faster,
                capture your audience, and stay ahead of competitors without
                wasting another day.
              </p>

              <Link
                href="/contact-us"
                className="group relative inline-block z-50 [transform:translateZ(0)] font-semibold px-6 py-3 rounded-lg overflow-hidden bg-[#F40E00] 
  before:absolute before:bg-[#ffffff] before:top-1/2 before:left-1/2 before:h-8 before:w-12 before:-translate-y-1/2 before:-translate-x-1/2 
  before:rounded-full before:scale-[0] before:opacity-0 
  hover:before:scale-[6] hover:before:opacity-100 
  before:transition before:ease-in-out before:duration-500"
              >
                <span className="relative z-0 text-white group-hover:text-black transition ease-in-out duration-500">
                  Get Your Store Built Today
                </span>
              </Link>
            </div>

            {/* Right 3D Marquee */}
            <div className="hidden md:absolute z-40 scale-150 lg:block md:w-[170%] h-[400px] relative -right-0 bottom-16">
              <ThreeDMarquee images={icons} />
            </div>
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-transparent via-[#F40E00]/5 to-transparent pointer-events-none opacity-50" />
        </section>
      </div>
    </section>
  );
}

export default MidpageCTA;
