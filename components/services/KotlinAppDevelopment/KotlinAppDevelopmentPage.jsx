import React from "react";
import "./style.css";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import KotlinServices from "./KotlinServices";
import KotlinBenefits from "./KotlinBenefits";
import KotlinWhyChooseUs from "./KotlinWhyChooseUs";
import KotlinIndustries from "./KotlinIndustries";
import KotlinCta from "./KotlinCta";
import TechStack from "./TechStack";
import Workflow from "./Workflow";
import KotlinFaqs from "./KotlinFaqs";
import ContactForm from "./ContactForm";

const KotlinAppDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <KotlinServices />
      <KotlinBenefits />
      <KotlinWhyChooseUs />
      <KotlinCta />
      <KotlinIndustries />
      <TechStack />
      <Workflow />
      <KotlinFaqs />
      <ContactForm />
    </main>
  );
};

export default KotlinAppDevelopmentPage;
