"use client";
import React, { useEffect } from "react";
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
import FAQs from "../Common/FAQs";
import OffShoreFaqs from "./OffShoreFaqs";
import FooterCta from "./FooterCta";
import Lenis from "lenis";

const OffShoreSoftwareDevelopmentPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
