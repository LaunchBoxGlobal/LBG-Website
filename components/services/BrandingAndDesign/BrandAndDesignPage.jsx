import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import Portfolio from "./Portfolio";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Industries from "./Industries";
import CTA from "./CTA";
import Workflow from "./Workflow";
import Contact from "./Contact";
import BrandingAndDesignFaqs from "./BrandingAndDesignFaqs";
import About from "./About";
import Benefits from "./Benefits";
import FlexibleBrandingAndDesign from "./FlexibleBrandingAndDesign";
import ShowcasingExpertise from "../EcommerceDevelopment/ShowcasingExpertise";
import BrandingAndDesignForBusinesses from "./BrandingAndDesignForEveryBusiness";
import SecureBrandingAndDesign from "./SecureBrandingAndDesign";

const BrandAndDesignPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <About />
      <Portfolio />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Benefits />
      <CTA />
      <Workflow />
      <ShowcasingExpertise />
      <BrandingAndDesignForBusinesses />
      <SecureBrandingAndDesign />
      <FlexibleBrandingAndDesign />
      <BrandingAndDesignFaqs />
      <Contact />
    </main>
  );
};

export default BrandAndDesignPage;
