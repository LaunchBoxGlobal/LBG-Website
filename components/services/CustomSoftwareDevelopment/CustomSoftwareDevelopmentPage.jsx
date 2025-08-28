import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import CreateYourMobileApp from "./CreateYourMobileApp";
import SmartPlanning from "./SmartPlanning";
import Industries from "./Industries";
import MobileAppDevContactForm from "./MobileAppDevContactForm";
import GenericSoftware from "./GenericSoftware";
import WhyChooseUs from "./WhyChooseUs";
import CustomDevelopmentJourney from "./CustomDevelopmentJourney";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import TeckStack from "@/components/Common/TechStack";
import Platforms from "@/components/Common/Platforms";
import Portfolio from "./Portfolio";
import Faqs from "./Faqs";
import SoftwareSolution from "./SoftwareSolution";
import CustomSoftwareAwards from "./CustomSoftwareAwards";
import SecuritySolutions from "./SecuritySolutions";
import TechTrends from "./TechTrends";
import SoftwareDevelopmentTechStack from "./SoftwareDevelopmentTechStack";

const CustomSoftwareDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <Services />
      <Portfolio />
      <Industries />
      <GenericSoftware />
      <WhyChooseUs />
      <CreateYourMobileApp />
      <SmartPlanning />
      <CustomSoftwareAwards />
      <SoftwareSolution />
      <SecuritySolutions />
      <TechTrends />
      {/* <TeckStack
        heading={"Built With Modern"}
        redText={"Technology"}
        description={
          "We leverage proven custom software development solutions using Flutter, React Native, and Firebase to create fast, scalable applications tailored to your business needs."
        }
      /> */}
      <SoftwareDevelopmentTechStack />
      <CustomDevelopmentJourney />
      <FlagsAnimation />
      <Faqs />
      <MobileAppDevContactForm />
    </main>
  );
};

export default CustomSoftwareDevelopmentPage;
