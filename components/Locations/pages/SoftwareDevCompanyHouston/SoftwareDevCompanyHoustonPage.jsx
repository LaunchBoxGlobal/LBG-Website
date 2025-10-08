import React from "react";
import Hero from "./Hero";
import Platforms from "@/components/Common/Platforms";
import About from "./About";
import Services from "./Services";
import Process from "./Process";
import CaseStudies from "../MobileAppDeveloper/CaseStudies";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { CUSTOM_SOFTWARE_CASE_STUDIES } from "@/constants/custom-software-development/CaseStudies";
import TeckStack from "@/components/Common/TechStack";
import FlagsAnimation from "@/components/Common/FlagsAnimation";
import WhyChooseUs from "./WhyChooseUs";
import LocationStats from "../../LocationComponents/LocationStats";
import Faqs from "./Faqs";
import LocationContactForm from "../../LocationComponents/LocationContactForm";

const SoftwareDevCompanyHoustonPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <About />
      <Services />
      <Process />
      <CaseStudies
        heading={"Houston Software Success"}
        redText={"Stories"}
        description={
          "As a leading Custom Software Development Company in Houston, we've helped local businesses solve real challenges. Here are some projects we're proud of:"
        }
        child={
          <PortfolioParallexCards projects={CUSTOM_SOFTWARE_CASE_STUDIES} />
        }
      />
      <TeckStack
        heading={"Tech Stack Trusted by Software Companies in"}
        redText={"Houston"}
        description={
          "From frontend frameworks to cloud infrastructure, we use reliable technologies trusted by businesses worldwide  including those in Houston. Our tools power fast, secure, and scalable custom software development in Houston."
        }
      />
      <WhyChooseUs />
      <section className="w-full my-10">
        <FlagsAnimation />
      </section>
      <LocationStats
        heading={`Proven Results from a Leading Custom Software Development Company in`}
        redText={`Houston`}
        description={`At LaunchBox Global, we combine global reach with local trust. Our experience, speed, and scale make us a go-to custom software development company in Houston for businesses ready to grow smarter.`}
      />
      <Faqs />
      <LocationContactForm
        heading={` Get Your App Built by a Trusted U.S Partner`}
        description={`Share your idea with a leading custom software development company in Houston. Get a free 30-minute consultation or a tailored proposal within 24 hours—no obligations.`}
        buttonTitle={`Book Free Consultation`}
      />
    </main>
  );
};

export default SoftwareDevCompanyHoustonPage;
