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
import WhyChooseUs from "./WhyChooseUs";
import Awards from "./Awards";
import WebAppsForBusiness from "./WebAppsForBusiness";
import TechTrends from "./TechTrends";
import SecuritySolutions from "./SecuritySolutions";

const WebAppDevelopmentPage = () => {
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
      <WhyChooseUs />
      <Benefits />
      <SmartPlanning />
      <Awards />
      <WebAppsForBusiness />
      <SecuritySolutions />
      <TechTrends />
      <TechStack
        heading={"Tools We Use for"}
        redText={"Web Apps"}
        description={
          "You get carefully selected tools, whether it’s front-end or backend. We ensure your web apps run smoothly, stay secure, and deliver top performance for your business."
        }
      />
      <FlagsAnimation />
      <MobileAppDevFaqs />
      <MobileAppDevContactForm />
    </main>
  );
};

export default WebAppDevelopmentPage;
