import React from "react";
import "./style.css";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import IonicServices from "./IonicServices";
import IonicBenefits from "./IonicBenefits";
import IonicWhyChooseUs from "./IonicWhyChooseUs";
import IonicIndustries from "./IonicIndustries";
import IonicTechStack from "./IonicTechStack";
import IonicWorkflow from "./IonicWorkflow";
import IonicFaqs from "./IonicFaqs";
import ContactForm from "./ContactForm";
import IonicCta from "./IonicCta";

const IonicAppDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <IonicServices />
      <IonicBenefits />
      <IonicWhyChooseUs />
      <IonicCta />
      <IonicIndustries />
      <IonicTechStack />
      <IonicWorkflow />
      <IonicFaqs />
      <ContactForm />
    </main>
  );
};

export default IonicAppDevelopmentPage;
