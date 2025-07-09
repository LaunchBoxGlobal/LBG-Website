import React from "react";
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

const StaffAugmentationPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <div className="w-full mt-10">
        <Platforms />
      </div>
      <HowItWorks />
      <MarketShifts />
      <HiringHassels />
      {/* <BuildYourTechTeam /> */}
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
