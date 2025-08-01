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
import Contact from "../services/BrandingAndDesign/Contact";
import ProjectRecovery from "./ProjectRecovery";
import ProjectRecoverySection from "./ProjectRecoverySection";

const NewPage = () => {
  return (
    <main className="w-full overflow-hidden relative">
      <Hero />
      <Platforms />
      <WhyFoundersNeedProjectDiscovery />
      <ProjectRecoveryServices />
      <BlackCta />
      <RescueServices />
      <FlagsAnimation />
      <ProjectRescue />
      <Process />
      {/* <ProjectRecovery /> */}
      <ProjectRecoverySection />
      <WhyChooseUs />
      <GrayCta />
      <EngagementModels />
      <FAQs faqs={AI_BASED_PROJECT_FAQS} />
      <Contact />
    </main>
  );
};

export default NewPage;
