import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import About from "./About";
import Services from "./Services";
import Process from "./Process";
import LocationsWhyChooseUs from "../../LocationComponents/LocationsWhyChooseUs";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import {
  CHEYENNE_WHY_CHOOSE_US_1,
  CHEYENNE_WHY_CHOOSE_US_2,
} from "@/constants/locations/cheyenne-company/cheyenne-why-choose-us";
import LocationStats from "../../LocationComponents/LocationStats";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import { WYOMING_DIGITAL_MARKETING_FAQS } from "@/constants/locations/wyoming-digital-marketing/wyoming-digital-marketing-faqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";
import { CHEYENNE_COMPANY_FAQS } from "@/constants/locations/cheyenne-company/cheyenne-company-faqs";

const CheyenneCompanyPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <About />
      <Services />
      <Process />
      <LocationsWhyChooseUs
        heading={`Why Cheyenne Businesses Choose Our`}
        redText={`SEO Company`}
        description={`Businesses trust our Cheyenne SEO company for personalized strategies that strengthens their online presence.`}
        content1={CHEYENNE_WHY_CHOOSE_US_1}
        content2={CHEYENNE_WHY_CHOOSE_US_2}
      />
      {/*  */}
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Cheyenne SEO Company by the`}
        redText={`Numbers`}
        description={`These numbers reflect the work we’ve done with businesses in Cheyenne.`}
      />
      <LocationFaqs faqs={CHEYENNE_COMPANY_FAQS} />
      <LocationContactForm
        heading={`Ready to Boost Your Cheyenne Business Online?`}
        description={`Get a free 30-minute SEO consultation or a custom proposal within 24 hours. Let’s get you ranking higher and growing faster.`}
        buttonTitle={`Get Started Now`}
      />
    </main>
  );
};

export default CheyenneCompanyPage;
