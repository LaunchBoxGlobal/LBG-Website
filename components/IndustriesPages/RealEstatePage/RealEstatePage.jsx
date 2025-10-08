import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import RealEstateChallenges from "./RealEstateChallenges";
import RealEstateAppDevelopmentStrategy from "./RealEstateAppDevelopmentStrategy";
import MidPageCta from "./MidPageCta";
import RealEstateFeatures from "./RealEstateFeatures";
import RealEstateTech from "./RealEstateTech";
import RealEstateSecurityAndCompliance from "./RealEstateSecurityAndCompliance";
import RealEstateServices from "./RealEstateServices";
import CTA from "./CTA";
import RealEstateProcess from "./RealEstateProcess";
import RealEstateTechTrends from "./RealEstateTechTrends";
import WhyChooseUs from "./WhyChooseUs";
import RealEstateFaqs from "./RealEstateFaqs";
import RealEstateContact from "./RealEstateContact";

const RealEstatePage = () => {
  return (
    <main className="w-full h-auto relative overflow-hidden">
      <Hero />
      <Platforms />
      <RealEstateChallenges />
      <RealEstateAppDevelopmentStrategy />
      <MidPageCta />
      <RealEstateFeatures />
      <RealEstateTech />
      <RealEstateSecurityAndCompliance />
      <RealEstateServices />
      <CTA />
      <RealEstateProcess />
      <RealEstateTechTrends />
      <WhyChooseUs />
      <RealEstateContact />
      <RealEstateFaqs />
    </main>
  );
};

export default RealEstatePage;
