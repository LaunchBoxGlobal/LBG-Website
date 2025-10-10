"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import "./style.css";
import Platforms from "@/components/Common/Platforms";
import AboutSection from "../../LocationComponents/AboutSection";
import Services from "./Services";
import { MOBILE_APP_DEV_SAN_FRANCISCO_BENEFITS } from "@/constants/locations/mobile-app-development-san-francisco/mobile-app-dev-san-francisco-benefits";
import Benefits from "./Benefits";
import EngagementModel from "./EngagementModel";
import LocationProcess from "../../LocationComponents/LocationProcess";
import {
  MOBILE_APP_DEVELOPMENT_SAN_FRANCISCO_AGILE_PROCESS,
  MOBILE_APP_DEVELOPMENT_SAN_FRANCISCO_RECOMMENDED_PROCESS,
  MOBILE_APP_DEVELOPMENT_SAN_FRANCISCO_WATERFALL_PROCESS,
} from "@/constants/locations/mobile-app-development-san-francisco/mobile-app-development-san-francisco-workflow";
import CaseStudies from "../MobileAppDeveloper/CaseStudies";
import { MOBILE_APP_DEVELOPMENT_AUSTIN_CASE_STUDIES } from "@/constants/locations/mobile-app-development-san-francisco/mobile-app-development-san-francisco-case-studies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import Tech from "./Tech";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import {
  MOBILE_APP_DEV_SAN_FRANCISCO_WHY_CHOOSE_US_1,
  MOBILE_APP_DEV_SAN_FRANCISCO_WHY_CHOOSE_US_2,
} from "@/constants/locations/mobile-app-development-san-francisco/mobile-app-dev-san-francisco-why-choose-us";

import Industries from "./Industries";
import FranciscoFaqs from "./FranciscoFaqs";
import Testimonials from "@/components/Common/Testimonials";
import MarketSize from "./MarketSize";
import CTA from "./CTA";

const MobileAppDeveloperFranciscoPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection
        heading={`About LaunchBox Global`}
        description={`We are a trusted mobile app development company in San Francisco, dedicated to helping businesses with impactful digital products. With a focus on quality and creativity, we deliver apps that balance functionality, design, and performance. Recognized among leading mobile application development companies, our expertise spans across industries, enabling us to build products that adapt to diverse business needs. Including initial discovery, design, and launch, we make mobile app development in San Francisco a clear, efficient, and results-driven process. Our goal is simple: to create mobile applications that not only stand out in competitive markets but also deliver lasting value and meaningful success for our clients.`}
      />
      <Services />
      <Industries />
      <Benefits
        heading={`Key Benefits of Mobile Apps for `}
        colorfulText={`San Francisco Businesses`}
        color={`#F40E00`}
        description={`As a leading mobile app development company San Francisco, we help businesses use mobile apps to improve customer engagement, simplify operations, increase visibility, and achieve meaningful results, providing solutions that make a real impact.`}
        benefits={MOBILE_APP_DEV_SAN_FRANCISCO_BENEFITS}
      />
      <MarketSize/>
      <EngagementModel />
      <Testimonials
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
        desc={`Client experiences matter because they show the real impact of our
          work. When people search for a software development agency near me,
          these testimonials highlight why startups and businesses trust us to
          deliver reliable, growth-focused solutions.`}
          btn={`Join Our Success Stories`}
      />
      <LocationProcess
        heading={"Agile, Waterfall & Functionality-First Built for"}
        redText={"San Francisco"}
        agileDescription={
          "We provide three proven workflows: Agile, Recommended, and Waterfall. Each is designed to suit different project requirements. Whether you need rapid iterations, a balanced framework, or structured execution, our process adapts seamlessly to your goals. With expertise in mobile app development in San Francisco, we ensure clarity, efficiency, and outstanding outcomes at every stage"
        }
        recommendedDescription={`We provide three proven workflows: Agile, Recommended, and Waterfall. Each is designed to suit different project requirements. Whether you need rapid iterations, a balanced framework, or structured execution, our process adapts seamlessly to your goals. With expertise in mobile app development in San Francisco, we ensure clarity, efficiency, and outstanding outcomes at every stage`}
        waterfallDescription={`We provide three proven workflows: Agile, Recommended, and Waterfall. Each is designed to suit different project requirements. Whether you need rapid iterations, a balanced framework, or structured execution, our process adapts seamlessly to your goals. With expertise in mobile app development in San Francisco, we ensure clarity, efficiency, and outstanding outcomes at every stage`}
        agileProcess={MOBILE_APP_DEVELOPMENT_SAN_FRANCISCO_AGILE_PROCESS}
        recommendedProcess={
          MOBILE_APP_DEVELOPMENT_SAN_FRANCISCO_RECOMMENDED_PROCESS
        }
        waterfallProcess={
          MOBILE_APP_DEVELOPMENT_SAN_FRANCISCO_WATERFALL_PROCESS
        }
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CaseStudies
        heading={`Our App Development Success `}
        redText={`Stories`}
        description={`See the mobile apps we’ve built for startups, small businesses, and enterprises. We don’t just build apps. We create experiences that help companies connect and grow.`}
        child={
          <PortfolioParallexCards
            projects={MOBILE_APP_DEVELOPMENT_AUSTIN_CASE_STUDIES}
          />
        }
      />
      <Tech />
      <LocationsWhyChooseUs
        heading={`Why San Francisco Businesses Choose`}
        redText={`LaunchBox Global`}
        description={`San Francisco is home to some of the fastest-growing businesses in the country, and they rely on LaunchBox Global. We merge creativity, technical expertise, and market insight to create solutions that truly stand out. As a trusted mobile app development company in San Francisco, our mission is simple: design apps that engage users, support growth, and deliver measurable business value.`}
        content1={MOBILE_APP_DEV_SAN_FRANCISCO_WHY_CHOOSE_US_1}
        content2={MOBILE_APP_DEV_SAN_FRANCISCO_WHY_CHOOSE_US_2}
      />
      <CTA/>
      <FranciscoFaqs />
    </main>
  );
};

export default MobileAppDeveloperFranciscoPage;
