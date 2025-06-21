"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import SpecializedTalent from "./SpecializedTalent";
import Platforms from "../Common/Platforms";
import AugmentYourTeam from "./AugmentYourTeam";
import TalentAugmentation from "./TalentAugmentation";
import OffShoreAugmentation from "./OffShoreAugmentation";
import OnDemandProcess from "./OnDemandProcess";
import OnDemandBenefits from "./OnDemandBenefits";
import WhyChooseUs from "./WhyChooseUs";
import OnDemandHassles from "./OnDemandHassles";
import CTA from "./CTA";
import OnDemandFaqs from "./OnDemandFaqs";
import "./style.css";
import Lenis from "lenis";

const OnDemandTalentPage = () => {
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
      <Platforms />
      <SpecializedTalent />
      <AugmentYourTeam />
      <TalentAugmentation />
      <OffShoreAugmentation />
      <OnDemandProcess />
      <OnDemandBenefits />
      <OnDemandHassles />
      <WhyChooseUs />
      <CTA />
      <OnDemandFaqs />
    </main>
  );
};

export default OnDemandTalentPage;
