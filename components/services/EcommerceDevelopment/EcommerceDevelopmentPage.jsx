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
import AboutSection from "./AboutSection";
import GlobalReach from "./GlobalReach";
import FlexibleDevelopmentServices from "./FlexibleDevelopmentServices";
import ShowcasingExpertise from "./ShowcasingExpertise";
import EcommerceDevelopmentForBusinesses from "./EcommerceDevelopmentForBusinesses";
import SecuritySolutions from "./SecuritySolutions";
import EcommerceTechTrends from "./EcommerceTechTrends";
import EcommerceTechStack from "./EcommerceTechStack";

const EcommerceDevelopmentPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <section className="w-full">
        <Platforms />
      </section>
      <AboutSection />
      <Services />
      <Portfolio />
      <ReasonsSection />
      <TeckStack
        heading={"Our Technology"}
        redText={"Stack"}
        description={
          "As a trusted ecommerce development company, we utilize a carefully selected tech stack that ensures performance, security, and scalability. Our ecommerce development services are powered by modern tools that meet global standards, enabling us to deliver enterprise-grade solutions as a leading ecommerce web development company."
        }
        headingWidth={""}
      />
      {/* <EcommerceTechStack /> */}
      <GlobalReach />
      <EcommerceIndustries />
      <HomeStats />
      <CtaSection />
      <Workflow />
      <ShowcasingExpertise />
      <EcommerceDevelopmentForBusinesses />
      <SecuritySolutions />
      <EcommerceTechTrends />
      <WhyChooseUs />
      <FlexibleDevelopmentServices />
      <EcommerceFaqs />

      <ContactForm />
    </main>
  );
};

export default EcommerceDevelopmentPage;
