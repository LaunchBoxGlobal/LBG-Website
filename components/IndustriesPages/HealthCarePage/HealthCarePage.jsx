import React from "react";
import Hero from "./Hero";
import DigitalTransformation from "./DigitalTransformation";
import Platforms from "@/components/Common/Platforms";
import Challenges from "./Challenges";
import SolutionPhilosophy from "./SolutionPhilosophy";

const HealthCarePage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <DigitalTransformation />
      <Challenges />
      <SolutionPhilosophy />
    </main>
  );
};

export default HealthCarePage;
