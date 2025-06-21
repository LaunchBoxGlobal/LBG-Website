import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import Portfolio from "./Portfolio";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Industries from "./Industries";
import FAQs from "@/components/Common/FAQs";
import CTA from "./CTA";
import Workflow from "./Workflow";
import Contact from "./Contact";
import { BRANDING_AND_DESIGN_FAQS } from "@/constants/branding-and-design/branding-and-design-faqs";
import BrandingAndDesignFaqs from "./BrandingAndDesignFaqs";

const BrandAndDesignPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <Portfolio />
      <Services />
      <WhyChooseUs />
      <Industries />
      <CTA />
      <Workflow />
      <BrandingAndDesignFaqs />
      <Contact />
    </main>
  );
};

export default BrandAndDesignPage;
