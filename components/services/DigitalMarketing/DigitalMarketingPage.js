import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import Services from "./Services";
import CTA from "./CTA";
import Industries from "./Industries";
import Reasons from "./Reasons";
import WhyChooseUs from "./WhyChooseUs";
import Workflow from "./Workflow";
import DigitalMarketingContactForm from "./DigitalMarketingContactForm";
import DigitalMarketingFaqs from "./DigitalMarketingFaqs";
import AboutSection from "./AboutSection";
import DigitalMarketingServicesForEveryBusiness from "./DigitalMarketingServicesForEveryBusiness";
import CustomSoftwareAwards from "../CustomSoftwareDevelopment/CustomSoftwareAwards";
import DigitalMarketingForEveryBusiness from "./DigitalMarketingForEveryBusiness";
import SecuritySolutions from "./SecuritySolutions";

const DigitalMarketingPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Platforms />
      <AboutSection />
      <Services />
      <CTA />
      <Industries />
      <Reasons />
      <WhyChooseUs />
      <Workflow />

      <DigitalMarketingServicesForEveryBusiness />
      <CustomSoftwareAwards />
      <DigitalMarketingForEveryBusiness />
      <SecuritySolutions />
      <DigitalMarketingFaqs />
      <DigitalMarketingContactForm />
    </main>
  );
};

export default DigitalMarketingPage;
