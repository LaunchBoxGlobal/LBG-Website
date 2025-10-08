import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import HiddenChallenges from "./HiddenChallenges";
import DevelopmentObstacles from "./DevelopmentObstacles";
import CaseStudies from "./CaseStudies";
import EcommerceServices from "./EcommerceServices";
import HeroAnimation from "./HeroAnimation";
import DevelopmentSuccess from "./DevelopementSuccess";
import TechStack from "./TechStack";
import BussinessTrust from "./BussinessTrust";
import MidpageCTA from "./MidpageCTA";
import Workflow from "./Workflow";
import GlobalEcommerceMarket from "./GlobalEcommerceMarket";
import FinalCTA from "./FinalCTA";
import EcommerceFAQs from "./EcommerceFAQs";

const EcommerceIndustryPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <HeroAnimation/>
      <Platforms />
      <HiddenChallenges />
      <DevelopmentObstacles />
      <CaseStudies />
      <DevelopmentSuccess/>
      <EcommerceServices />
      <TechStack/>
      <BussinessTrust/>
      <Workflow/> 
      <MidpageCTA/>
      <GlobalEcommerceMarket/>
      <FinalCTA/>
      <EcommerceFAQs/>
    </main>
  );
};

export default EcommerceIndustryPage;
