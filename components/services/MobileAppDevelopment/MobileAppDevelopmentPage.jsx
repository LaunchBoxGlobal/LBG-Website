import React from "react";
import Hero from "./Hero";
import HomePlatforms from "@/components/Home/HomePlatforms";
import About from "./About";
import Services from "./Services";
import CreateYourMobileApp from "./CreateYourMobileApp";
import HomeTech from "@/components/Home/HomeTech";
import FlagsSection from "@/components/Home/FlagsSection";
import MobileAppDevFaqs from "./MobileAppDevFaqs";
import SmartPlanning from "./SmartPlanning";
import Benefits from "./Benefits";
import Industries from "./Industries";
import MobileAppDevContactForm from "./MobileAppDevContactForm";
import MobileAppDevPortfolio from "./MobileAppDevPortfolio";

const MobileAppDevelopmentPage = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <HomePlatforms />
      <About />
      <Services />
      <MobileAppDevPortfolio />
      <Industries />
      <CreateYourMobileApp />
      <Benefits />
      <SmartPlanning />
      <HomeTech />
      <FlagsSection />
      <MobileAppDevFaqs />
      <MobileAppDevContactForm />
    </main>
  );
};

export default MobileAppDevelopmentPage;
