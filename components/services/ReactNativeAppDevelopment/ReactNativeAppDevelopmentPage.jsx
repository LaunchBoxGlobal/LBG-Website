import "./style.css";
import Platforms from "@/components/Common/Platforms";
import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import GenericSolution from "./GenericSolution";
import WhyChooseUs from "./WhyChoose";
import CTA from "./CTA";
import Industries from "./Industries";
import TechStack from "./TechStack";
import SmartPlanning from "./SmartPlanning";
import FAQS from "./FAQS";
import ContactForm from "./ContactForm";
import CaseStudies from "./CaseStudies";

const ReactNativeAppDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <Services />
      {/* <CaseStudies /> */}
      <GenericSolution />
      <WhyChooseUs />
      <CTA />
      <Industries />
      <TechStack />
      <SmartPlanning />
      <FAQS />
      <ContactForm />
    </main>
  );
};

export default ReactNativeAppDevelopmentPage;
