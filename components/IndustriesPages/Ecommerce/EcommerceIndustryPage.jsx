import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import HiddenChallenges from "./HiddenChallenges";
import DevelopmentObstacles from "./DevelopmentObstacles";
import CaseStudies from "./CaseStudies";
import EcommerceServices from "./EcommerceServices";

const EcommerceIndustryPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <HiddenChallenges />
      <DevelopmentObstacles />
      <CaseStudies />
      <EcommerceServices />
    </main>
  );
};

export default EcommerceIndustryPage;
