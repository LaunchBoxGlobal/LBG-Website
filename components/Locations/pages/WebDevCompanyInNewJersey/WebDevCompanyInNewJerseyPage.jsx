"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import AboutSection from "./AboutSection";
import Services from "./Services";
import LocationProcess from "../../LocationComponents/LocationProcess";
import {
  WEB_DEV_NEW_JERSEY_AGILE_PROCESS,
  WEB_DEV_NEW_JERSEY_RECOMMENDED_PROCESS,
  WEB_DEV_NEW_JERSEY_WATERFALL_PROCESS,
} from "@/constants/locations/web-dev-company-new-jersey/web-dev-company-new-jersey-process";
import CaseStudies from "../MobileAppDeveloper/CaseStudies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { WEB_APP_PROJECTS } from "@/constants/web-app-dvelopment/WebAppProjects";
import TeckStack from "@/components/Common/TechStack";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import LocationStats from "../../LocationComponents/LocationStats";
import {
  WEB_DEV_NEW_JERSEY_WHY_CHOOSE_US_1,
  WEB_DEV_NEW_JERSEY_WHY_CHOOSE_US_2,
} from "@/constants/locations/web-dev-company-new-jersey/web-dev-company-new-jersey-why-choose-us";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";
import { WEB_DEV_NEW_JERSEY_FAQS } from "@/constants/locations/web-dev-company-new-jersey/web-dev-company-new-jersey-faqs";

const WebDevCompanyInNewJerseyPage = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <AboutSection />
      <Services />
      <LocationProcess
        heading={"Flexible Project"}
        redText={"Management"}
        agileDescription={`Our Agile methodology is highly effective for fast-moving New Jersey startups requiring incremental development and quick MVP launches. By dividing projects into smaller phases, we empower teams to respond rapidly to varying requirements and market feedback. This adaptability enables businesses to launch products efficiently and enhance them based on authentic user insights, ensuring they meet customer expectations. Many custom web development companies in New Jersey employ this approach to encourage collaboration and improve productivity, making it a popular choice among web development companies in New Jersey.`}
        waterfallDescription={`For established businesses in New Jersey, a clear development model like Waterfall provides visibility and control at each stage. This technique assures that strict compliance needs are fulfilled. Specifically in sectors such as finance and healthcare, the Waterfall Approach focuses on detailed documentation and a straightforward, step-by-step approach. As a leading custom web development company in New Jersey, we design solutions to meet these standards, delivering dependable and compliant web systems that align with industry needs.`}
        recommendedDescription={`Our Functionality-First approach prioritizes delivering key features that provide immediate benefits to users. This strategy is particularly advantageous for businesses in New Jersey that wish to focus on essential functions before expanding their product offerings. By concentrating on what is most important, we assist clients in launching products that meet user needs and enhance engagement. Many custom web development companies in New Jersey adopt this approach, as it promotes a more focused and effective development process, ensuring that they remain competitive among web development companies in New Jersey.`}
        agileProcess={WEB_DEV_NEW_JERSEY_AGILE_PROCESS}
        recommendedProcess={WEB_DEV_NEW_JERSEY_RECOMMENDED_PROCESS}
        waterfallProcess={WEB_DEV_NEW_JERSEY_WATERFALL_PROCESS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CaseStudies
        heading={"Highlight Of"}
        redText={"Our Work"}
        description={
          "Discover our case studies showcasing how we tackle challenges and deliver successful solutions for our clients across various industries."
        }
        child={<PortfolioParallexCards projects={WEB_APP_PROJECTS} />}
      />
      <TeckStack
        heading={"Tech Stack Trusted by New Jersey-based"}
        redText={"Teams"}
        description={
          "From frontend frameworks to cloud solutions, we leverage technologies that businesses worldwide trust, including those in New Jersey. Our expertise as a custom web development company in New Jersey ensures we deliver exceptional results."
        }
      />
      <LocationsWhyChooseUs
        heading={`Why New Jersey Businesses Choose`}
        redText={`LaunchBox Global`}
        description={`We deliver what we promise, stay honest through every step, and treat your goals like ours.`}
        content1={WEB_DEV_NEW_JERSEY_WHY_CHOOSE_US_1}
        content2={WEB_DEV_NEW_JERSEY_WHY_CHOOSE_US_2}
      />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Global Presence &`}
        redText={`Stats`}
        description={`Here’s a quick look at the work we’re proud of and the people we’ve helped.`}
      />
      <LocationFaqs faqs={WEB_DEV_NEW_JERSEY_FAQS} />
      <LocationContactForm
        heading={`Connect with a Trusted Custom Web Development Company in New Jersey`}
        description={`Connect with us today to share your vision and receive a complimentary 30-minute consultation. Alternatively, you may seek a personalized proposal, and we will deliver it as quickly as possible.`}
        buttonTitle={`Sign Up for Consultation`}
      />
    </main>
  );
};

export default WebDevCompanyInNewJerseyPage;
