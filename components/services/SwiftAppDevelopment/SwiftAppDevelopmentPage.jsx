import "./style.css";
import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import TechnologyServices from "@/components/Common/case-studies-common-components/TechnologyServices";
import { SWIFT_APP_DEVELOPMENT_SERVICES } from "@/constants/swift-app-development-content/swift-app-development-services";
import BenefitsSection from "@/components/Common/BenefitsSection";
import { SWIFT_APP_BENEFITS } from "@/constants/swift-app-development-content/swift-benefits";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import {
  SWIFT_APP_WHY_CHOOSE_US_1,
  SWIFT_APP_WHY_CHOOSE_US_2,
} from "@/constants/swift-app-development-content/swift-why-choose-us";
import SwiftIndustries from "./SwiftIndustries";
import SmartPlanning from "./SmartPlanning";
import TechFaqs from "@/components/Common/case-studies-common-components/TechFaqs";
import { SWIFT_FAQS } from "@/constants/swift-app-development-content/swift-faqs";
import SwiftCta from "./SwiftCta";
import ContactForm from "./ContactForm";
import SwiftTechStack from "./SwiftTechStack";
import SwiftCaseStudies from "./SwiftCaseStudies";

const SwiftAppDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <TechnologyServices
        heading={`Top Swift App Development Services for`}
        color={`#FF5034`}
        colorfulText={`Your Business`}
        description={`We build fast, clean iPhone apps that work exactly how you need.`}
        services={SWIFT_APP_DEVELOPMENT_SERVICES}
        hoverBg={`#FF5034`}
      />
      {/* <SwiftCaseStudies /> */}
      <BenefitsSection
        heading={`Why Choose Swift iOS `}
        colorfulText={`Development?`}
        subheading={``}
        description={`Swift app development services deliver optimized performance, enhanced stability, and deep device integration. Professional development ensures proper security implementation and long-term maintenance. These apps adapt efficiently to iOS updates while preserving functionality across IOS, providing lasting value for business applications.`}
        color={`#ff5034`}
        benefits={SWIFT_APP_BENEFITS}
      />
      <WhyChooseUs
        heading={`Why Partner With Our iOS Development `}
        subheading={``}
        color={`#FF5034`}
        colorfulText={`Team?`}
        description={`Our Swift application development company creates iOS apps that launch properly and keep working. We focus on understandable code, meeting deadlines, and building apps that feel natural to use on IOS every day.`}
        content1={SWIFT_APP_WHY_CHOOSE_US_1}
        content2={SWIFT_APP_WHY_CHOOSE_US_2}
      />
      <SwiftCta />
      <SwiftIndustries />
      <SwiftTechStack />
      <SmartPlanning />
      <TechFaqs
        faqs={SWIFT_FAQS}
        heading={`Got Questions? We've got You`}
        color={`#FF5034`}
        colorfulText={`Covered!`}
      />
      <ContactForm />
    </main>
  );
};

export default SwiftAppDevelopmentPage;
