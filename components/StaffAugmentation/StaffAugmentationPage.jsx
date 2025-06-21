"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import Platforms from "../Common/Platforms";
import HowItWorks from "./HowItWorks";
import MarketShifts from "./MarketShifts";
import HiringHassels from "./HiringHassels";
import BuildYourTechTeam from "./BuildYourTechTeam";
import CTA from "./CTA";
import "./style.css";
import TechNeed from "./TechNeed";
import TechAndTools from "./TechAndTools";
import WhyChooseUs from "./WhyChooseUs";
import Benefits from "./Benefits";
import FooterCta from "./FooterCta";
import WhyStaffAugmentation from "./WhyStaffAugmentation";
import AugmentationProcess from "./AugmentationProcess";
import StaffAugmentationFaqs from "./StaffAugmentationFaqs";
import Lenis from "@studio-freight/lenis";

const StaffAugmentationPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full relative">
      <Hero />
      <div className="w-full mt-10">
        <Platforms />
      </div>
      <HowItWorks />
      <MarketShifts />
      <HiringHassels />
      <BuildYourTechTeam />
      <TechNeed />
      <AugmentationProcess />
      <TechAndTools />
      <WhyStaffAugmentation />
      <CTA />
      <WhyChooseUs />
      <Benefits />
      <FooterCta />
      <StaffAugmentationFaqs />
    </main>
  );
};

export default StaffAugmentationPage;
