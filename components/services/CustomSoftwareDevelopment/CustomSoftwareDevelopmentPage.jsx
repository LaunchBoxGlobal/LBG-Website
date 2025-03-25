import React from "react";
import Hero from "./Hero";
import HomePlatforms from "@/components/Home/HomePlatforms";
import Services from "./Services";
import CreateYourMobileApp from "./CreateYourMobileApp";
import FlagsSection from "@/components/Home/FlagsSection";
import MobileAppDevFaqs from "./MobileAppDevFaqs";
import SmartPlanning from "./SmartPlanning";
import Industries from "./Industries";
import MobileAppDevContactForm from "./MobileAppDevContactForm";
import Technologies from "./Technologies";
import GenericSoftware from "./GenericSoftware";
import WhyChooseUs from "./WhyChooseUs";
import CustomDevelopmentJourney from "./CustomDevelopmentJourney";

const CustomSoftwareDevelopmentPage = () => {
  return (
    <main className="w-full h-auto relative">
      <Hero />
      <HomePlatforms />
      <Services />
      <Industries />
      <GenericSoftware />
      <WhyChooseUs />
      <CreateYourMobileApp />
      <SmartPlanning />
      <Technologies />
      <CustomDevelopmentJourney />
      <FlagsSection />
      <MobileAppDevFaqs />
      <MobileAppDevContactForm />
    </main>
  );
};

export default CustomSoftwareDevelopmentPage;
