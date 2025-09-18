"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import "./style.css";
import Platforms from "@/components/Common/Platforms";
import AboutSection from "../../LocationComponents/AboutSection";
import Services from "./Services";
import { MOBILE_APP_DEV_AUSTIN_BENEFITS } from "@/constants/locations/mobile-app-development-austin/mobile-app-dev-austin-benefits";
import Benefits from "./Benefits";
import EngagementModel from "./EngagementModel";
import LocationProcess from "../../LocationComponents/LocationProcess";
import {
  MOBILE_APP_DEVELOPMENT_AUSTIN_AGILE_PROCESS,
  MOBILE_APP_DEVELOPMENT_AUSTIN_RECOMMENDED_PROCESS,
  MOBILE_APP_DEVELOPMENT_AUSTIN_WATERFALL_PROCESS,
} from "@/constants/locations/mobile-app-development-austin/mobile-app-development-austin-workflow";
import CaseStudies from "../MobileAppDeveloper/CaseStudies";
import { projects } from "@/constants/mobile-app-development/Projects";
import { MOBILE_APP_DEVELOPMENT_AUSTIN_CASE_STUDIES } from "@/constants/locations/mobile-app-development-austin/mobile-app-development-austin-case-studies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import Tech from "./Tech";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import {
  MOBILE_APP_DEV_AUSTIN_WHY_CHOOSE_US_1,
  MOBILE_APP_DEV_AUSTIN_WHY_CHOOSE_US_2,
} from "@/constants/locations/mobile-app-development-austin/mobile-app-dev-austin-why-choose-us";
import AustinFaqs from "./AustinFaqs";
import Industries from "./Industries";

const MobileAppDeveloperAustinPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection
        heading={`About LaunchBox Global`}
        description={`We’re a leading mobile app development company in Austin, built on the belief that great apps come from a mix of creativity, strategy, and community connection. Our team of designers, Austin mobile developers, and strategists is dedicated to shaping ideas into apps that feel easy to use, reliable, and ready to grow. Being part of Austin’s dynamic tech hub keeps us inspired and grounded. We understand the local business landscape, the people, and the culture that drive progress here. That’s why businesses across Austin trust us not just as developers, but as partners who care about long-term success. For us, every project is more than code; it’s about creating meaningful digital experiences that reflect Austin’s spirit of forward thinking.`}
      />
      <Services />
      <Industries />
      <Benefits
        heading={`Key Benefits of Mobile Apps for `}
        colorfulText={`Austin Businesses`}
        color={`#F40E00`}
        description={`Discover how Mobile App Development in Austin can enhance your business. By connecting better with customers and increasing revenue while simplifying workflows, mobile apps provide an effective way to engage users and stay competitive in today’s online landscape.`}
        benefits={MOBILE_APP_DEV_AUSTIN_BENEFITS}
      />
      <EngagementModel />

      <LocationProcess
        heading={"Agile, Waterfall & Functionality-First Built for"}
        redText={"Austin, Texas"}
        agileDescription={
          "We offer three proven workflows: Agile, Recommended, and Waterfall, to suit different project needs. Depending on your preference for quick development cycles, a balanced approach, or structured execution, our process adapts to your goals, ensuring clarity, efficiency, and high-quality outcomes at every stage of mobile app development."
        }
        recommendedDescription={`We offer three proven workflows: Agile, Recommended, and Waterfall, to suit different project needs. Depending on your preference for quick development cycles, a balanced approach, or structured execution, our process adapts to your goals, ensuring clarity, efficiency, and high-quality outcomes at every stage of mobile app development.`}
        waterfallDescription={`We offer three proven workflows: Agile, Recommended, and Waterfall, to suit different project needs. Depending on your preference for quick development cycles, a balanced approach, or structured execution, our process adapts to your goals, ensuring clarity, efficiency, and high-quality outcomes at every stage of mobile app development.`}
        agileProcess={MOBILE_APP_DEVELOPMENT_AUSTIN_AGILE_PROCESS}
        recommendedProcess={MOBILE_APP_DEVELOPMENT_AUSTIN_RECOMMENDED_PROCESS}
        waterfallProcess={MOBILE_APP_DEVELOPMENT_AUSTIN_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CaseStudies
        heading={`Real Success`}
        redText={`Stories`}
        description={`Explore how our mobile app solutions have helped businesses succeed. These real success stories highlight measurable results, creative approaches, and the impact of our expertise in delivering high-quality apps across diverse industries.`}
        child={
          <PortfolioParallexCards
            projects={MOBILE_APP_DEVELOPMENT_AUSTIN_CASE_STUDIES}
          />
        }
      />
      <Tech />
      <LocationsWhyChooseUs
        heading={`Why Austin Businesses Choose`}
        redText={`LaunchBox Global`}
        description={`Austin businesses choose us because we combine creativity, technical expertise, and a deep understanding of local market needs. As a trusted mobile app development company in Austin, we deliver high-quality apps that bring engagement, growth, and real business results.`}
        content1={MOBILE_APP_DEV_AUSTIN_WHY_CHOOSE_US_1}
        content2={MOBILE_APP_DEV_AUSTIN_WHY_CHOOSE_US_2}
      />
      <AustinFaqs />
    </main>
  );
};

export default MobileAppDeveloperAustinPage;
