import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import CreateYourMobileApp from "./CreateYourMobileApp";
import MobileAppDevFaqs from "./MobileAppDevFaqs";
import SmartPlanning from "./SmartPlanning";
import Industries from "./Industries";
import MobileAppDevContactForm from "./MobileAppDevContactForm";
import GenericSoftware from "./GenericSoftware";
import WhyChooseUs from "./WhyChooseUs";
import CustomDevelopmentJourney from "./CustomDevelopmentJourney";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import TeckStack from "@/components/Common/TechStack";
import Platforms from "@/components/Common/Platforms";

const CustomSoftwareDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <Services />
      <Industries />
      <GenericSoftware />
      <WhyChooseUs />
      <CreateYourMobileApp />
      <SmartPlanning />
      <TeckStack
        heading={"Built with the Best"}
        redText={"Technologies"}
        description={
          "We leverage a modern tech stack to create scalable, secure, and high-performance custom software. From intuitive front-end frameworks to powerful back-end systems, our technologies ensure seamless functionality and future-ready solutions."
        }
      />
      <CustomDevelopmentJourney />
      <FlagsAnimation />
      <MobileAppDevFaqs />
      <MobileAppDevContactForm />
    </main>
  );
};

export default CustomSoftwareDevelopmentPage;
