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

const DigitalMarketingPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Platforms />
      <Services />
      <CTA />
      <Industries />
      <Reasons />
      <WhyChooseUs />
      <Workflow />
      <DigitalMarketingFaqs />
      <DigitalMarketingContactForm />
    </main>
  );
};

export default DigitalMarketingPage;
