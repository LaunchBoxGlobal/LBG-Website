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
  SOFTWARE_DEV_NEW_JERSEY_WHY_CHOOSE_US_1,
  SOFTWARE_DEV_NEW_JERSEY_WHY_CHOOSE_US_2,
} from "@/constants/locations/software-dev-company-new-jersey/software-development-company-new-jersey-why-choose-us";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import LocationStats from "../../LocationComponents/LocationStats";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";
import { SOFTWARE_DEV_NEW_JERSEY_FAQS } from "@/constants/locations/software-dev-company-new-jersey/software-dev-company-new-jersey-faqs";
import {
  SOFTWARE_DEV_NEW_JERSEY_AGILE_PROCESS,
  SOFTWARE_DEV_NEW_JERSEY_RECOMMENDED_PROCESS,
  SOFTWARE_DEV_NEW_JERSEY_WATERFALL_PROCESS,
} from "@/constants/locations/software-dev-company-new-jersey/software-dev-company-new-jersey-workflow";
import { SOFTWARE_DEV_COMPANY_NEW_JERSEY_CASE_STUDIES } from "@/constants/locations/software-dev-company-new-jersey/software-dev-company-new-jersey-case-studies";
import NewJerseyFaqs from "./NewJerseyFaqs";
import Industries from "./Industries";

const SoftwareDevelopmentCompanyInNewJerseyPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection />
      <Services />
      <LocationProcess
        heading={"Our Development"}
        redText={"Methodology"}
        agileDescription={`Our Agile approach is ideal for fast-paced New Jersey startups looking for iterative development and early MVPs. This methodology emphasizes collaboration and flexibility, allowing teams to respond quickly to changes and feedback. As a leading custom software development company in New Jersey, we ensure that your project evolves in alignment with your vision, maximizing the potential for success while minimizing risks.`}
        waterfallDescription={`For established enterprises in New Jersey that require a structured and sequential development process, our Waterfall methodology is the perfect fit. This approach allows for thorough planning and documentation, ensuring every phase is completed before moving on to the next. As one of the top software development companies in New Jersey, We use this approach to provide consistent and dependable results, making it ideal for projects with well-defined requirements.`}
        recommendedDescription={`Our Functionality-First methodology focuses on delivering core features that provide immediate value to your business. This approach is particularly beneficial for New Jersey companies looking to enhance their existing systems or launch new products efficiently. By prioritizing essential functionalities, we ensure your project remains aligned with your strategic goals, making us a trusted partner among custom software development companies in New Jersey.`}
        agileProcess={SOFTWARE_DEV_NEW_JERSEY_AGILE_PROCESS}
        recommendedProcess={SOFTWARE_DEV_NEW_JERSEY_RECOMMENDED_PROCESS}
        waterfallProcess={SOFTWARE_DEV_NEW_JERSEY_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CaseStudies
        heading={"Our Project "}
        redText={"Highlights"}
        description={
          "As a leading software development company in New Jersey, we deliver real results. Here’s how we’ve helped businesses like yours:"
        }
        child={
          <PortfolioParallexCards
            projects={SOFTWARE_DEV_COMPANY_NEW_JERSEY_CASE_STUDIES}
          />
        }
      />

      <Industries />
      <TeckStack
        heading={"Tech Stack Empowering New Jersey's"}
        redText={"Innovators"}
        description={
          "Launchbox Global utilizes a strong set of technologies to support businesses in New Jersey and beyond. Our expertise encompasses various technologies, ensuring we deliver top-notch solutions tailored to your needs."
        }
      />
      <LocationsWhyChooseUs
        heading={`Why Launchbox Global`}
        redText={`Stands Out`}
        description={`We deliver what we promise, stay honest through every step, and treat your goals like ours.`}
        content1={SOFTWARE_DEV_NEW_JERSEY_WHY_CHOOSE_US_1}
        content2={SOFTWARE_DEV_NEW_JERSEY_WHY_CHOOSE_US_2}
      />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Our Global`}
        redText={`Impact & Achievements`}
        description={`Launchbox Global is a trusted Software Development Company in New Jersey that delivers global results backed by experience, reach, and proven performance.`}
      />
      <NewJerseyFaqs faqs={SOFTWARE_DEV_NEW_JERSEY_FAQS} />
      <LocationContactForm
        heading={`Connect With Our Software Development Company in New Jersey`}
        description={`Share your vision with us and receive a complimentary 30-minute consultation or a tailored proposal within 24 hours. We are here to help you succeed. Contact us!`}
        buttonTitle={`Let’s Collaborate Today`}
      />
    </main>
  );
};

export default SoftwareDevelopmentCompanyInNewJerseyPage;
