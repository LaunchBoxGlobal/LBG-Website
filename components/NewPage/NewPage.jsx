import React from "react";
import "./style.css";
import Hero from "./Hero";
import Platforms from "../Common/Platforms";
import WhyFoundersNeedProjectDiscovery from "./WhyFoundersNeedProjectDiscovery";
import ProjectRecoveryServices from "./ProjectRecoveryServices";
import GrayCta from "./GrayCta";
import BlackCta from "./BlackCta";
import RescueServices from "./RescueServices";
import FlagsAnimation from "../Common/FlagsAnimation";
import ProjectRescue from "./ProjectRescue";
import Process from "./Process";
import WhyChooseUs from "./WhyChooseUs";
import EngagementModels from "./EngagementModels";
import FAQs from "./FAQs";
import { AI_BASED_PROJECT_FAQS } from "@/constants/ai-based-projects-content/ai-based-project-faqs";

const NewPage = () => {
  return (
    <main className="w-full relative overflow-hidden">
      <Hero />
      <Platforms />
      <WhyFoundersNeedProjectDiscovery />
      <ProjectRecoveryServices />
      <BlackCta />
      <RescueServices />
      <FlagsAnimation />
      <ProjectRescue />
      <Process />
      <WhyChooseUs />
      <GrayCta />
      <EngagementModels />
      <FAQs faqs={AI_BASED_PROJECT_FAQS} />
    </main>
  );
};

export default NewPage;
