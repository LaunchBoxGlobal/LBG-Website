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
import { MOBILE_APP_DEVELOPMENT_AUSTIN_CASE_STUDIES } from "@/constants/locations/mobile-app-development-austin/mobile-app-development-austin-case-studies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import Tech from "./Tech";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import {
  MOBILE_APP_DEV_AUSTIN_WHY_CHOOSE_US_1,
  MOBILE_APP_DEV_AUSTIN_WHY_CHOOSE_US_2,
} from "@/constants/locations/mobile-app-development-austin/mobile-app-dev-austin-why-choose-us";
import AtlantaFaqs from "./AtlantaFaqs";
import Industries from "./Industries";
import { MOBILE_APP_DEV_ATLANTA_BENEFITS } from "@/constants/locations/mobile-app-development-atlanta/mobile-app-dev-atlanta-benefits";
import { MOBILE_APP_DEVELOPMENT_ATLANTA_AGILE_PROCESS, MOBILE_APP_DEVELOPMENT_ATLANTA_RECOMMENDED_PROCESS, MOBILE_APP_DEVELOPMENT_ATLANTA_WATERFALL_PROCESS } from "@/constants/locations/mobile-app-development-atlanta/mobile-app-development-atlanta-workflow";
import { MOBILE_APP_DEVELOPMENT_ATLANTA_CASE_STUDIES } from "@/constants/locations/mobile-app-development-atlanta/mobile-app-development-atlanta-case-studies";
import { MOBILE_APP_DEV_ATLANTA_WHY_CHOOSE_US_1, MOBILE_APP_DEV_ATLANTA_WHY_CHOOSE_US_2 } from "@/constants/locations/mobile-app-development-atlanta/mobile-app-dev-atlanta-why-choose-us";
import CTA from "./CTA";
import MarketSize from "./MarketSize";
import Testimonials from "@/components/Common/Testimonials";

const MobileAppDeveloperAtlantaPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection
        heading={`About LaunchBox Global`}
        description={`At our core, we are passionate about creating digital products that truly make a difference. With a strong focus on mobile development Atlanta, we’ve helped startups and growing businesses turn visions into mobile experiences people love using. Our approach is simple: mix creativity, strategy, and reliable execution to create apps that succeed in today’s market. Whether you’re kicking off your first project or expanding your reach, our team makes sure every detail counts. From concept to launch and beyond, we stay with you every step of the way. That’s why businesses trust us for mobile development Atlanta. We develop apps that are functional and help you grow, compete, and stand out.`}
      />
      <Services />
      <Industries />
      <Benefits
        heading={`Key Benefits of Mobile Apps for `}
        colorfulText={`Atlanta Businesses`}
        color={`#F40E00`}
        description={`With mobile application development Atlanta, your business can reach customers more effectively and increase revenue. We build apps that simplify workflows, engage users, and keep you ahead in today’s fast-paced digital world. Smart, simple, and growth-focused.`}
        benefits={MOBILE_APP_DEV_ATLANTA_BENEFITS}
      />
      <MarketSize/>
      <EngagementModel />
<Testimonials
  desc={`Our client testimonials highlight the real impact of our solutions. Whether it’s growing businesses or large organizations, these stories reflect our commitment to delivering reliable results and building lasting partnerships through expert mobile app development customized to business needs.`}
  testimonials={[
    {
      quote:
        "Working with LaunchBox was the turning point for us. Their mobile app expertise helped us hit 10,000 active users within just three months, while keeping the app stable and user-friendly.",
      name: "Sarah Mitchell",
      role: "CTO at BrightPay",
      image: "/testimonials/e1.png",
      bg: "bg-[#F5F5F5]",
      text: "text-black",
    },
    {
      quote:
        "We struggled with customer retention before LaunchBox stepped in. The app they built doubled our repeat purchases within six months, proving the value of a custom mobile solution.",
      name: "James Carter",
      role: "Founder at MoveWell",
      image: "/testimonials/e2.png",
      bg: "bg-[#F5F5F5]",
      text: "text-black",
    },
    {
      quote:
        "Working with LaunchBox meant faster releases without sacrificing quality. Our healthcare app went from concept to launch in 14 weeks and now supports over 5,000 daily users.",
      name: "Emily Rodriguez",
      role: "Product Manager at HealthSync",
      image: "/testimonials/e3.png",
      bg: "bg-[#F5F5F5]",
      text: "text-black",
    },
    {
      quote:
        "LaunchBox gave us the flexibility we needed. Their development team worked smoothly with ours, reducing our backlog by 40% and helping us deliver features our customers had been waiting for.",
      name: "David Lee",
      role: "Head of Technology at ShopEase",
      image: "/testimonials/e4.png",
      bg: "bg-[#F5F5F5]",
      text: "text-black",
    },
  ]}
  btn={`Join Our Success Stories`}
/>

      <LocationProcess
        heading={"Agile, Waterfall & Functionality-First Built for"}
        redText={"Atlanta"}
        agileDescription={
          "We offer three proven workflows: Agile, Recommended, and Waterfall. Designed to match different project needs. Whether you prefer rapid development cycles, a balanced approach, or structured execution, our process adapts to your goals, ensuring clarity, efficiency, and high-quality outcomes at every stage of mobile development Atlanta."
        }
        recommendedDescription={`We offer three proven workflows: Agile, Recommended, and Waterfall. Designed to match different project needs. Whether you prefer rapid development cycles, a balanced approach, or structured execution, our process adapts to your goals, ensuring clarity, efficiency, and high-quality outcomes at every stage of mobile development Atlanta.`}
        waterfallDescription={`We offer three proven workflows: Agile, Recommended, and Waterfall. Designed to match different project needs. Whether you prefer rapid development cycles, a balanced approach, or structured execution, our process adapts to your goals, ensuring clarity, efficiency, and high-quality outcomes at every stage of mobile development Atlanta.`}
        agileProcess={MOBILE_APP_DEVELOPMENT_ATLANTA_AGILE_PROCESS}
        recommendedProcess={MOBILE_APP_DEVELOPMENT_ATLANTA_RECOMMENDED_PROCESS}
        waterfallProcess={MOBILE_APP_DEVELOPMENT_ATLANTA_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CaseStudies
        heading={`Atlanta’s Leading App Development Success`}
        redText={`Stories`}
        description={`Explore the apps we’ve built for startups, small businesses, and enterprises. We go beyond development, creating digital experiences that add real value to businesses.`}
        child={
          <PortfolioParallexCards
            projects={MOBILE_APP_DEVELOPMENT_ATLANTA_CASE_STUDIES}
          />
        }
      />
      <Tech />
      <LocationsWhyChooseUs
        heading={`Why Atlanta Businesses Choose`}
        redText={`LaunchBox Global`}
        description={`Atlanta is home to some of the fastest-growing businesses in the country, and they trust LaunchBox Global. We combine creativity, technical expertise, and a strong understanding of local market needs to create solutions that truly stand out. As one of the most reliable app development companies in Atlanta, our mission is simple: build apps that engage users, support growth, and provide measurable business impact.`}
        content1={MOBILE_APP_DEV_ATLANTA_WHY_CHOOSE_US_1}
        content2={MOBILE_APP_DEV_ATLANTA_WHY_CHOOSE_US_2}
      />
      <CTA/>
      <AtlantaFaqs />
    </main>
  );
};

export default MobileAppDeveloperAtlantaPage;
