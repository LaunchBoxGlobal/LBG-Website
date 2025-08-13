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
      <TechStack
        heading={"Tools We Use for"}
        redText={"Web Apps"}
        description={
          "From front-end frameworks to back-end solutions and databases, our carefully selected tech stack ensures seamless functionality, security, and efficiency for your business."
        }
      />
      <FlagsAnimation />
      <MobileAppDevFaqs />
      <MobileAppDevContactForm />
    </main>
  );
};

export default WebAppDevelopmentPage;
