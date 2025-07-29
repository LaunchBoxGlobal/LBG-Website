"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import About from "./About";
import LocationServices from "../../LocationComponents/LocationServices";
import { MOBILE_APP_DEV_COMPANY_TEXAS_SERVICES } from "@/constants/locations/mobile-app-dev-company-texas/mobile-app-dev-company-texas-services";
import LocationProcess from "../../LocationComponents/LocationProcess";
import {
  FLORDIA_AGILE_PROCESS,
  FLORDIA_RECOMMENDED_PROCESS,
  FLORDIA_WATERFALL_PROCESS,
} from "@/constants/locations/mobile-app-developer/agile-process-florida";
import CaseStudies from "../MobileAppDeveloper/CaseStudies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { projects } from "@/constants/mobile-app-development/Projects";
import TechAndTools from "../../LocationComponents/TechAndTools";
import Technologies from "../MobileAppDeveloper/Technologies";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import {
  TEXAS_WHY_CHOOSE_US_1,
  TEXAS_WHY_CHOOSE_US_2,
} from "@/constants/locations/mobile-app-dev-company-texas/texas-why-choose-us";
import LocationStats from "../../LocationComponents/LocationStats";
import TexasFaqs from "./TexasFaqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";

const MobileAppDevCompanyTexasPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <About />
      <LocationServices
        heading={`App Development Services for Businesses in`}
        redText={`Texas`}
        services={MOBILE_APP_DEV_COMPANY_TEXAS_SERVICES}
        description={`At LaunchBox Global, we specialize in mobile app development in Texas, including Dallas mobile development, to help your business succeed in the digital landscape.`}
      />
      <LocationProcess
        heading={"Project Development"}
        redText={"Process"}
        agileDescription={
          "Our Agile approach is ideal for fast-paced startups in Texas seeking iterative development and early MVPs. This methodology allows teams to react swiftly to market changes, making it particularly suitable for mobile app development in Texas. Regular feedback loops and sprints ensure the product evolves based on real user input, fostering collaboration and innovation. By prioritizing flexibility, we empower businesses in Dallas to accomplish their objectives while maintaining a competitive edge."
        }
        recommendedDescription={`Our Functionality-First methodology is designed for businesses in Texas that prioritize delivering core features before expanding functionality. This approach focuses on identifying and implementing the most critical aspects of a product, ensuring that essential user needs are met first. By concentrating on functionality, we assist organizations in streamlining their development process, reducing time-to-market, and enhancing user satisfaction. This method is particularly effective for Dallas mobile development, allowing companies to establish a robust foundation before scaling their offerings.`}
        waterfallDescription={`Our Waterfall methodology is the optimal choice for established enterprises in Texas that require a structured and sequential development process. This approach emphasizes comprehensive planning and documentation, ensuring that each phase is completed before progressing to the next. It is especially beneficial for projects with well-defined requirements, such as large-scale software implementations. By providing a clear roadmap, Waterfall enables organizations in Dallas to maintain control over complex projects, ensuring timely delivery and commitment to budget constraints.`}
        agileProcess={FLORDIA_AGILE_PROCESS}
        recommendedProcess={FLORDIA_RECOMMENDED_PROCESS}
        waterfallProcess={FLORDIA_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CaseStudies
        heading={"Project Highlight and Success"}
        redText={"Stories"}
        description={
          "Explore real-world examples of our work. Each story shows how we helped clients overcome problems and achieve their goals."
        }
        child={<PortfolioParallexCards projects={projects} />}
      />
      <TechAndTools
        heading={`Our Development`}
        redText={`Tools`}
        description={`We lead innovation by using a strong technology stack that supports businesses in Texas and beyond. Our focus on top-tier technologies ensures high-quality solutions tailored for mobile app development Texas and Dallas mobile development.`}
        child={<Technologies />}
      />
      <LocationsWhyChooseUs
        heading={`Why Businesses in Texas`}
        redText={`Prefer Us`}
        description={`Businesses in Texas prefer us for our reliable, innovative solutions as a leading Mobile App Development Company in Texas, ensuring quality and customer satisfaction every time.`}
        content1={TEXAS_WHY_CHOOSE_US_1}
        content2={TEXAS_WHY_CHOOSE_US_2}
      />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Our Global Impact &`}
        redText={`Achievements`}
        description={`Our Mobile App Development Company in Texas has positively influenced businesses around the world, creating user-friendly apps that help companies grow and connect with their customers effectively.`}
      />
      <TexasFaqs />
      <LocationContactForm
        heading={`Collaborate with a Leading Texas Expert`}
        description={`Share your vision with us and receive a complimentary 30-minute consultation or a custom proposal. As a trusted mobile app development company in Texas, we are here to help.`}
        buttonTitle={`Let'sDiscuss Your Idea`}
      />
    </main>
  );
};

export default MobileAppDevCompanyTexasPage;
