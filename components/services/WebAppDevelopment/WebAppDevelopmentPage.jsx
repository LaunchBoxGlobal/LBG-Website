import React from "react";
import Hero from "./Hero";
import HomePlatforms from "@/components/Home/HomePlatforms";
import About from "./About";
import Services from "./Services";
import CreateYourMobileApp from "./CreateYourMobileApp";
import FlagsSection from "@/components/Home/FlagsSection";
import MobileAppDevFaqs from "./MobileAppDevFaqs";
import SmartPlanning from "./SmartPlanning";
import Benefits from "./Benefits";
import Industries from "./Industries";
import MobileAppDevContactForm from "./MobileAppDevContactForm";
import CardsParallex from "./CardsParallex";
import Technologies from "./Technologies";
import GenericSoftware from "./GenericSoftware";

const WebAppDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <HomePlatforms />
      <About />
      <Services />
      <CardsParallex />
      <Industries />
      <GenericSoftware />
      <CreateYourMobileApp />
      <Benefits />
      <SmartPlanning />
      <Technologies />
      <FlagsSection />
      <MobileAppDevFaqs />
      <MobileAppDevContactForm />
    </main>
  );
};

export default WebAppDevelopmentPage;
