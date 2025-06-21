import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import EcommerceIndustries from "./EcommerceIndustries";
import EcommerceFaqs from "./EcommerceFaqs";
import HomeStats from "@/components/Home/HomeStats";
import ReasonsSection from "./ReasonsSection";
import CtaSection from "./CtaSection";
import WhyChooseUs from "./WhyChooseUs";
import ContactForm from "./ContactForm";
import TeckStack from "@/components/Common/TechStack";
import Workflow from "./Workflow";
import Platforms from "@/components/Common/Platforms";
import Portfolio from "./Portfolio";

const EcommerceDevelopmentPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <section className="w-full">
        <Platforms />
      </section>
      <Services />
      <Portfolio />
      <ReasonsSection />
      <TeckStack
        heading={"Platforms and Technologies We Use for"}
        redText={"Ecommerce Development"}
        description={
          "As a top ecommerce development company, we use the best platforms and technologies to build secure, scalable, and high-performance online stores. Our ecommerce development services cover everything from web to mobile, ensuring a seamless shopping experience."
        }
        headingWidth={""}
      />
      <EcommerceIndustries />
      <HomeStats />
      <CtaSection />
      <Workflow />
      <WhyChooseUs />
      <EcommerceFaqs />
      <ContactForm />
    </main>
  );
};

export default EcommerceDevelopmentPage;
