"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import AboutSection from "../../LocationComponents/AboutSection";
import Services from "./Services";
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
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import {
  FLORIDA_WHY_CHOOSE_US_1,
  FLORIDA_WHY_CHOOSE_US_2,
} from "@/constants/locations/mobile-app-developer/florida-why-choose-us";
import Technologies from "../MobileAppDeveloper/Technologies";
import {
  MOBILE_APP_DEVS_HOUSTON_WHY_CHOOSE_US_1,
  MOBILE_APP_DEVS_HOUSTON_WHY_CHOOSE_US_2,
} from "@/constants/locations/mobile-app-devs-in-houston/mobile-app-devs-in-houston-why-choose-us";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import LocationStats from "../../LocationComponents/LocationStats";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import { FLORIDA_FAQS } from "@/constants/locations/mobile-app-developer/florida-faqs";
import { MOBILE_APP_DEVS_HOUSTON_FAQS } from "@/constants/locations/mobile-app-devs-in-houston/mobile-app-devs-in-houston-faqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";

const MobileAppDevelopmentCompanyInHoustonPage = () => {
  const [activeTab, setActiveTab] = useState("agile");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection
        heading={`About LaunchBox Global – Your Houston Mobile App Development Partner`}
        description={`LaunchBox Global is a full-service mobile app development company in Houston, specializing in custom web and eCommerce solutions. We help Texas businesses turn ideas into revenue-generating apps with agile development and scalable technology. From startups to enterprises, our Houston-based team delivers user-friendly digital products designed for local market needs combining technical expertise with genuine understanding of what works in our community.`}
      />
      <Services />
      <LocationProcess
        heading={"Agile, Waterfall & Functionality-First — Built for"}
        redText={"Houston Businesses"}
        agileDescription={
          "Perfect for Houston's fast-moving startups, our Agile process delivers working features every 2-3 weeks. We've helped local tech companies and healthcare providers launch MVPs 40% faster while incorporating real user feedback. See how our Agile approach works."
        }
        recommendedDescription={`We help Houston SMBs launch core features quickly, then scale. This cost-effective method has helped local restaurants, retailers, and service businesses establish their digital presence without unnecessary features.`}
        waterfallDescription={`For Houston enterprises with fixed requirements (like financial or government projects), our structured Waterfall approach ensures thorough planning and predictable results. This method works especially well for complex systems needing strict compliance with Texas regulations.`}
        agileProcess={FLORDIA_AGILE_PROCESS}
        recommendedProcess={FLORDIA_RECOMMENDED_PROCESS}
        waterfallProcess={FLORDIA_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CaseStudies
        heading={"Houston App Development Success"}
        redText={"Stories"}
        description={
          "As trusted Mobile App Developers in Houston, we've helped local businesses achieve real results. Here are some projects we're proud of:"
        }
        child={<PortfolioParallexCards projects={projects} />}
      />
      <TechAndTools
        heading={`Tech Stack Trusted by Houston's Top Mobile App`}
        redText={`Developers`}
        description={`We use industry-leading technologies to build powerful apps for Houston businesses. As a mobile app development company in Houston, we combine global tech expertise with local market knowledge to deliver exceptional results.`}
        child={<Technologies />}
      />
      <LocationsWhyChooseUs
        heading={`Why Houston Businesses Choose Our Mobile App Developers in`}
        redText={`Houston`}
        description={`We're not just another development team. Here's what makes us the preferred mobile app development company in Houston:`}
        content1={MOBILE_APP_DEVS_HOUSTON_WHY_CHOOSE_US_1}
        content2={MOBILE_APP_DEVS_HOUSTON_WHY_CHOOSE_US_2}
      />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Why Houston Chooses Us as Their Mobile App Developers in`}
        redText={`Houston`}
        description={`As a leading mobile app development company in Houston, our results speak for themselves:`}
      />
      <LocationFaqs faqs={MOBILE_APP_DEVS_HOUSTON_FAQS} />
      <LocationContactForm
        heading={`Work With Houston's Top Mobile App Developers`}
        description={`Turn your app idea into reality with a trusted local partner. Get free 30-minute consultation`}
        buttonTitle={`Get Started Today`}
      />
    </main>
  );
};

export default MobileAppDevelopmentCompanyInHoustonPage;
