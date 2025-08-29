import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import About from "./About";
import Services from "./Services";
import Process from "./Process";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import WhyChooseUs from "./WhyChooseUs";
import LocationStats from "../../LocationComponents/LocationStats";
import LocationFaqs from "../../LocationComponents/LocationFaqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";
import { WYOMING_DIGITAL_MARKETING_FAQS } from "@/constants/locations/wyoming-digital-marketing/wyoming-digital-marketing-faqs";
import DigitalMarketingFaqs from "./DigitalMarketingFaqs";

const DigitalMarketingWyomingPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Wyoming Digital Marketing by the`}
        redText={`Numbers`}
        description={`We measure success by the results we deliver for local businesses. Here’s what sets us apart:`}
      />
      <DigitalMarketingFaqs faqs={WYOMING_DIGITAL_MARKETING_FAQS} />
      <LocationContactForm
        heading={`Ready to Grow Your Wyoming Business Online?`}
        description={`Get started today with a free 30-minute consultation or receive a custom Wyoming digital marketing proposal within 24 hours. Let’s turn your goals into results.`}
        buttonTitle={`Get Started Now`}
      />
    </main>
  );
};

export default DigitalMarketingWyomingPage;
