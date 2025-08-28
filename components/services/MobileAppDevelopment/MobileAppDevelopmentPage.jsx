import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import CreateYourMobileApp from "./CreateYourMobileApp";
import MobileAppDevFaqs from "./MobileAppDevFaqs";
import SmartPlanning from "./SmartPlanning";
import Benefits from "./Benefits";
import Industries from "./Industries";
import MobileAppDevContactForm from "./MobileAppDevContactForm";
import CardsParallex from "./CardsParallex";
import GenericSoftware from "./GenericSoftware";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import TechStack from "@/components/Common/TechStack";
import Platforms from "@/components/Common/Platforms";
import ServicePageForm from "@/components/Common/ServicePageForm";
import MobileAppTechStack from "./MobileAppTechStack";

const MobileAppDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <Platforms />
      <About />
      <Services />
      <CardsParallex />
      <Industries />
      <GenericSoftware />
      <CreateYourMobileApp />
      <Benefits />
      <SmartPlanning />
      <TechStack
        heading={"Smart Technology for Better"}
        redText={"Solution"}
        description={
          "Great apps need the right tools. As a mobile app development company, the best technologies are used to build apps that run fast, work smoothly, and last long."
        }
      />
      {/* <MobileAppTechStack /> */}
      <FlagsAnimation />
      <MobileAppDevFaqs />
      <MobileAppDevContactForm />
      {/* <ServicePageForm /> */}
    </main>
  );
};

export default MobileAppDevelopmentPage;
