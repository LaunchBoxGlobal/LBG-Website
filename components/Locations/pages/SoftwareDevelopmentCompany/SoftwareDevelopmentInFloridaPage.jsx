"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import AboutSection from "../../LocationComponents/AboutSection";
import Services from "./Services";
import LocationProcess from "../../LocationComponents/LocationProcess";
import {
  SOFTWARE_DEV_FLORIDA_AGILE_PROCESS,
  SOFTWARE_DEV_FLORIDA_RECOMMENDED_PROCESS,
  SOFTWARE_DEV_FLORIDA_WATERFALL_PROCESS,
} from "@/constants/locations/software-dev-company-florida/software-dev-florida-process";
import CaseStudies from "../MobileAppDeveloper/CaseStudies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { CUSTOM_SOFTWARE_CASE_STUDIES } from "@/constants/custom-software-development/CaseStudies";
import TeckStack from "@/components/Common/TechStack";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import {
  SOFTWARE_DEV_FLORIDA_WHY_CHOOSE_US_1,
  SOFTWARE_DEV_FLORIDA_WHY_CHOOSE_US_2,
} from "@/constants/locations/software-dev-company-florida/software-dev-florida-why-choose-us";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import LocationStats from "../../LocationComponents/LocationStats";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";
import { SOFTWARE_DEV_FLORIDA_FAQS } from "@/constants/locations/software-dev-company-florida/software-dev-florida-faqs";

const SoftwareDevelopmentInFloridaPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection
        heading={`Software Development Company in Florida You Can Trust`}
        description={`LaunchBox Global is a full-service software development company in Florida, specializing in mobile, web, and eCommerce solutions. We partner with startups and enterprises across the state to transform ideas into high-performing digital products. Unlike generic software development companies in Florida, we focus on agile, scalable approaches tailored to your business goals whether it’s a customer-facing app, a productivity tool, or a revenue-driving platform. From Miami to Jacksonville, our Florida-based team delivers clarity, quality, and results at every stage.`}
      />
      <Services />
      <LocationProcess
        heading={"Agile, Waterfall & Functionality-First  Built for"}
        redText={"Florida"}
        agileDescription={`Ideal for Florida startups needing rapid iterations, our Agile process delivers working features every 2–4 weeks. We adapt to market feedback while maintaining quality perfect for apps in Miami’s competitive tech scene or Orlando’s growing startup ecosystem.`}
        waterfallDescription={`For Florida enterprises with fixed requirements (like healthcare or banking systems), our structured Waterfall approach ensures thorough planning, documentation, and predictable outcomes critical for regulated industries across the state.`}
        recommendedDescription={`We prioritize core features that drive revenue, especially for Florida SMBs with tight budgets. Launch essential functions fast, then scale proven for Tampa’s retail businesses and Jacksonville’s logistics firms.`}
        agileProcess={SOFTWARE_DEV_FLORIDA_AGILE_PROCESS}
        recommendedProcess={SOFTWARE_DEV_FLORIDA_RECOMMENDED_PROCESS}
        waterfallProcess={SOFTWARE_DEV_FLORIDA_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CaseStudies
        heading={"Florida-Tested Software"}
        redText={"Solutions"}
        description={
          "As a leading software development company in Florida, we deliver real results. Here’s how we’ve helped businesses like yours:"
        }
        child={
          <PortfolioParallexCards projects={CUSTOM_SOFTWARE_CASE_STUDIES} />
        }
      />
      <TeckStack
        heading={"Tech Stack Trusted by Florida’s"}
        redText={"Top Businesses"}
        description={
          "We use the same technologies powering global innovators—optimized for Florida’s market needs. Unlike other software development companies in Florida, we match tools to your specific goals."
        }
      />
      <LocationsWhyChooseUs
        heading={`Why Florida Businesses Trust Us Over Other Software Development`}
        redText={`Companies in Florida`}
        description={`We’re not just another tech vendor. Here’s what makes us the right partner for your project:`}
        content1={SOFTWARE_DEV_FLORIDA_WHY_CHOOSE_US_1}
        content2={SOFTWARE_DEV_FLORIDA_WHY_CHOOSE_US_2}
      />
      {/*  */}
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Why We Stand Out Among Software Development`}
        redText={`Companies in Florida`}
        description={`Local expertise, proven results – we deliver custom software solutions designed for Florida businesses, with faster turnaround and dedicated support.`}
      />
      <LocationFaqs faqs={SOFTWARE_DEV_FLORIDA_FAQS} />
      <LocationContactForm
        heading={`Work With the Top Software Development Company in Florida`}
        description={`Turn your vision into reality with a trusted local partner. Share your idea today and get:
Free 30-minute consultation,
Custom proposal within 24 hours`}
        buttonTitle={`Get Started Today`}
      />
    </main>
  );
};

export default SoftwareDevelopmentInFloridaPage;
