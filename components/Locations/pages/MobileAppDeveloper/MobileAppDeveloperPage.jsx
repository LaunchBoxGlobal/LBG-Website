"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import AboutSection from "../../LocationComponents/AboutSection";
import LocationServices from "../../LocationComponents/LocationServices";
import { MOBILEa_APP_FLORIDA_SERVICES } from "@/constants/locations/mobile-app-developer/mobile-app-developer-florida-services";
import LocationProcess from "../../LocationComponents/LocationProcess";
import {
  FLORDIA_AGILE_PROCESS,
  FLORDIA_RECOMMENDED_PROCESS,
  FLORDIA_WATERFALL_PROCESS,
} from "@/constants/locations/mobile-app-developer/agile-process-florida";
import CaseStudies from "./CaseStudies";
import TechAndTools from "../../LocationComponents/TechAndTools";
import Technologies from "./Technologies";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import {
  FLORIDA_WHY_CHOOSE_US_1,
  FLORIDA_WHY_CHOOSE_US_2,
} from "@/constants/locations/mobile-app-developer/florida-why-choose-us";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import LocationStats from "../../LocationComponents/LocationStats";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import { FLORIDA_FAQS } from "@/constants/locations/mobile-app-developer/florida-faqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";
import { projects } from "@/constants/mobile-app-development/Projects";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";

const MobileAppDeveloperPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection
        heading={`Your Trusted Mobile App Development Partner in Florida`}
        description={`LaunchBox Global is a Florida-based mobile app development company that helps businesses build high-performing digital products. We specialize in creating custom mobile solutions, eCommerce platforms, and web applications tailored to your specific needs. Our team combines local market understanding with technical expertise to deliver apps that drive real results for Florida businesses. From concept to launch, we're your end-to-end development partner.`}
      />
      <LocationServices
        heading={`Trusted Mobile App Developer in`}
        redText={`Florida`}
        services={MOBILEa_APP_FLORIDA_SERVICES}
        description={`Leading mobile app development  agency in Florida creating custom solutions for businesses across industries. Local expertise, global standards.`}
      />
      <LocationProcess
        heading={"Agile, Waterfall & Functionality-First  Built for"}
        redText={"Florida"}
        agileDescription={
          "Perfect for Florida's fast-moving tech startups, our Agile methodology delivers working software in 2-4 week sprints. We prioritize flexibility, regular client feedback, and continuous improvement - ideal for mobile app development companies adapting to market changes. Weekly demos ensure you see progress and guide direction."
        }
        recommendedDescription={`We build core features that solve real problems for Florida users first. This practical approach gets your product to market faster while reducing unnecessary costs - a smart choice for mobile app development agencies focused on ROI.`}
        waterfallDescription={`For Florida businesses with fixed requirements, our structured Waterfall method provides clear milestones and documentation. This linear approach works well for regulatory projects, enterprise systems, and applications needing rigorous testing phases before launch.`}
        agileProcess={FLORDIA_AGILE_PROCESS}
        recommendedProcess={FLORDIA_RECOMMENDED_PROCESS}
        waterfallProcess={FLORDIA_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CaseStudies
        heading={"Work We're"}
        redText={"Proud Of"}
        description={
          "Here are some of our successful projects showcasing our expertise as a leading mobile app development agency in Florida:"
        }
        child={<PortfolioParallexCards projects={projects} />}
      />
      <TechAndTools
        heading={`Tech Stack Trusted by Florida-Based`}
        redText={`Teams`}
        description={`We use industry-leading technologies to build high-performance solutions for Florida businesses. As a top mobile app development agency in Florida, we select tools that ensure reliability, scalability, and security for every project.`}
        child={<Technologies />}
      />
      <LocationsWhyChooseUs
        heading={`Why Florida Businesses Choose`}
        redText={`LaunchBox Global`}
        description={`We’re not just another mobile app developer in Florida we blend global expertise with local understanding. Here’s how we stand out:`}
        content1={FLORIDA_WHY_CHOOSE_US_1}
        content2={FLORIDA_WHY_CHOOSE_US_2}
      />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Why Trust Our Mobile App Developer in`}
        redText={`Florida?`}
        description={`As a leading mobile app developer in Florida, we measure success by the impact we create. Here’s what sets us apart:`}
      />
      <LocationFaqs faqs={FLORIDA_FAQS} />
      <LocationContactForm
        heading={`Get Your App Built by a Trusted Florida Partner`}
        description={`Turn your vision into reality with a mobile app developer in Florida that delivers results. Share your idea today and get:`}
        buttonTitle={`Free 30-minute consultation`}
      />
    </main>
  );
};

export default MobileAppDeveloperPage;
