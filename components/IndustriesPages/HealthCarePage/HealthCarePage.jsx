import React from "react";
import Hero from "./Hero";
import DigitalTransformation from "./DigitalTransformation";
import Platforms from "@/components/Common/Platforms";
import Challenges from "./Challenges";
import SolutionPhilosophy from "./SolutionPhilosophy";
import SecurityAndCompliance from "./SecurityAndCompliance";
import Services from "./Services";
import HealthcareDevelopmentProcess from "./HealthcareDevelopmentProcess";
import HealthcareTechTrends from "./HealthcareTechTrends";
import HealthcareWhyChooseUs from "./HealthcareWhyChooseUs";
import CTA from "./CTA";
import TechStackAndStandards from "./TechStackAndStandards";
import Features from "./Features";
import "./style.css";

const HealthCarePage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <DigitalTransformation />
      <Challenges />
      <SolutionPhilosophy />
      <Features />
      <TechStackAndStandards />
      <SecurityAndCompliance />
      <Services />
      <HealthcareDevelopmentProcess />
      <HealthcareTechTrends />
      <HealthcareWhyChooseUs />
      <CTA />
    </main>
  );
};

export default HealthCarePage;
