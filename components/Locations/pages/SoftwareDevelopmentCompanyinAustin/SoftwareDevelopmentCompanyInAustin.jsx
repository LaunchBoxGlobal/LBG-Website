"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import Services from "./Services";
import AboutSection from "./AboutSection";
import LocationProcess from "../../LocationComponents/LocationProcess";
import CaseStudies from "../MobileAppDeveloper/CaseStudies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { CUSTOM_SOFTWARE_CASE_STUDIES } from "@/constants/custom-software-development/CaseStudies";
import TeckStack from "@/components/Common/TechStack";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import {
  SOFTWARE_DEV_AUSTIN_WHY_CHOOSE_US_1,
  SOFTWARE_DEV_AUSTIN_WHY_CHOOSE_US_2,
} from "@/constants/locations/software-dev-company-austin/software-development-company-austin-why-choose-us";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import LocationStats from "../../LocationComponents/LocationStats";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";
import { SOFTWARE_DEV_AUSTIN_FAQS } from "@/constants/locations/software-dev-company-austin/software-dev-austin-faqs";
import {
  SOFTWARE_DEV_AUSTIN_AGILE_WORKFLOW,
  SOFTWARE_DEV_AUSTIN_RECOMMENDED_WORKFLOW,
  SOFTWARE_DEV_AUSTIN_WATERFALL_WORKFLOW,
} from "@/constants/locations/software-dev-company-austin/software-development-company-austin-workflow";
import { SOFTWARE_DEV_COMPANY_AUSTIN_CASE_STUDIES } from "@/constants/locations/software-dev-company-austin/software-dev-company-austin-case-studies";
import NewJerseyFaqs from "./AustinFaqs";
import Industries from "./Industries";
import AustinFaqs from "./AustinFaqs";
import Benefits from "./Benefits";
import { SOFTWARE_DEV_AUSTIN_BENEFITS } from "@/constants/locations/software-dev-company-austin/benefits";
import EngagementModel from "./EngagementModel";

import Tech from "./Tech";
import MarketSize from "./MarketSize";
import Testimonials from "@/components/Common/Testimonials";

const SoftwareDevelopmentCompanyInAustinPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection />
      <Services />
      <Industries />
      <Benefits
        heading={`Key Benefits of Custom  `}
        colorfulText={`Software Development in Austin`}
        color={`#F40E00`}
        description={`With our custom software development services in Austin, your business gets solutions built to fit your unique needs. Custom software helps you save time, cut costs, and stay ahead with technology designed just for you through improving workflows and enhancing customer experiences.`}
        benefits={SOFTWARE_DEV_AUSTIN_BENEFITS}
      />
      <MarketSize />
      <EngagementModel />
      <Testimonials desc={`Client experiences matter because they show the real impact of our
          work. When people search for a software development agency near me,
          these testimonials highlight why startups and businesses trust us to
          deliver reliable, growth-focused solutions.`}
        testimonials={[
          {
            quote:
              "LaunchBox Global did more than just code for us. They acted like true partners. Their software development consultancy helped us prioritize features, avoid costly mistakes, and launch faster than expected. Our app hit 10k users in three months, which felt impossible before working with them.",
            name: "Megan Ross",
            role: "Product Manager at HealthTrack",
            image: "/testimonials/e1.png",
            bg: "bg-[#F5F5F5]",
            text: "text-black",
          },
          {
            quote:
              "We talked to several tech companies in Austin TX, but LaunchBox Global worked differently. They actually listened, understood our plan, and built something practical instead of overcomplicating it. Since launch, our customer retention rate has doubled, and scaling feels a lot less overwhelming now.",
            name: "Daniel Price",
            role: "CEO at TaskFlow",
            image: "/testimonials/e2.png",
            bg: "bg-[#F5F5F5]",
            text: "text-black",
          },
          {
            quote:
              "We’d worked with a couple of local software companies before, but the experience wasn’t great. LaunchBox changed that completely. Their team blended right in with ours, answered every question, and delivered on time. They made the process smoother than we imagined.",
            name: "Laura Kim",
            role: "COO at RetailEdge",
            image: "/testimonials/e3.png",
            bg: "bg-[#F5F5F5]",
            text: "text-black",
          },
        ]}

        btn={`Be Our Next Success Story`}
      />
      <LocationProcess
        heading={"Our Software Development"}
        redText={"Workflow"}
        agileDescription={`Being one of the trusted software development companies Austin TX relies on, we offer three workflow approaches to suit your project: Agile, Recommended, and Waterfall. Each approach is designed to ensure smooth collaboration, high-quality results, and timely delivery, giving you the flexibility to choose the process that best fits your business goals and needs.`}
        waterfallDescription={`Being one of the trusted software development companies Austin TX relies on, we offer three workflow approaches to suit your project: Agile, Recommended, and Waterfall. Each approach is designed to ensure smooth collaboration, high-quality results, and timely delivery, giving you the flexibility to choose the process that best fits your business goals and needs.`}
        recommendedDescription={`Being one of the trusted software development companies Austin TX relies on, we offer three workflow approaches to suit your project: Agile, Recommended, and Waterfall. Each approach is designed to ensure smooth collaboration, high-quality results, and timely delivery, giving you the flexibility to choose the process that best fits your business goals and needs.`}
        agileProcess={SOFTWARE_DEV_AUSTIN_AGILE_WORKFLOW}
        recommendedProcess={SOFTWARE_DEV_AUSTIN_RECOMMENDED_WORKFLOW}
        waterfallProcess={SOFTWARE_DEV_AUSTIN_WATERFALL_WORKFLOW}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CaseStudies
        heading={"Our Success"}
        redText={"Stories"}
        description={
          "Check out how we’ve helped startups and growing businesses turn ideas into real results. These case studies show the impact of smart custom software, practical problem-solving, and what it’s like to work with our team."
        }
        child={
          <PortfolioParallexCards
            projects={SOFTWARE_DEV_COMPANY_AUSTIN_CASE_STUDIES}
          />
        }
      />
      <Tech />
      {/* <TeckStack
        heading={"Tech Stack Empowering New Jersey's"}
        redText={"Innovators"}
        description={
          "Launchbox Global utilizes a strong set of technologies to support businesses in New Jersey and beyond. Our expertise encompasses various technologies, ensuring we deliver top-notch solutions tailored to your needs."
        }
      /> */}
      <LocationsWhyChooseUs
        heading={`Your Trusted Austin`}
        redText={`Software Partner`}
        description={`Among the top software development companies Austin TX, we help startups and growing businesses turn ideas into reliable, adaptable solutions. Our team focuses on delivering custom software that solves challenges, supports expansion, and creates meaningful results.`}
        content1={SOFTWARE_DEV_AUSTIN_WHY_CHOOSE_US_1}
        content2={SOFTWARE_DEV_AUSTIN_WHY_CHOOSE_US_2}
      />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Our Global`}
        redText={`Impact & Achievements`}
        description={`Launchbox Global is a trusted Software Development Company in New Jersey that delivers global results backed by experience, reach, and proven performance.`}
      />
      <AustinFaqs faqs={SOFTWARE_DEV_AUSTIN_FAQS} />
      <LocationContactForm
        heading={`Connect With Our Software Development Company in Austin`}
        description={`Share your vision with us and receive a complimentary 30-minute consultation or a tailored proposal within 24 hours. We are here to help you succeed. Contact us!`}
        buttonTitle={`Let’s Collaborate Today`}
      />
    </main>
  );
};

export default SoftwareDevelopmentCompanyInAustinPage;
