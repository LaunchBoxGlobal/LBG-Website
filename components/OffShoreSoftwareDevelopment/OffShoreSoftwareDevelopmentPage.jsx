import React from "react";
import Hero from "./Hero";
import Platforms from "../Common/Platforms";
import "./style.css";
import OffShoreDevelopment from "./OffShoreDevelopment";
import DevelopmentModel from "./DevelopmentModel";
import WhenToChooseOffshore from "./WhenToChooseOffshore";
import OffshoreDevelopmentCenter from "./OffshoreDevelopmentCenter";
import Process from "./Process";
import OffShoreBenefits from "./OffShoreBenefits";
import GlobalReach from "./GlobalReach";
import CTA from "./CTA";
import WhyChooseUs from "./WhyChooseUs";
import Stats from "./Stats";
import OffShoreFaqs from "./OffShoreFaqs";
import FooterCta from "./FooterCta";

const OffShoreSoftwareDevelopmentPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <section className="w-full">
        <Platforms />
      </section>
      <OffShoreDevelopment />
      <DevelopmentModel />
      <WhenToChooseOffshore />
      <OffshoreDevelopmentCenter />
      <Process />
      <OffShoreBenefits />
      <GlobalReach />
      <CTA />
      <WhyChooseUs />
      <Stats />
      <OffShoreFaqs />
      <FooterCta />
    </main>
  );
};

export default OffShoreSoftwareDevelopmentPage;
