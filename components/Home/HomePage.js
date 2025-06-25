import React from "react";
import HomeHero from "./HomeHero";
import HomeCustomerReviews from "./HomeCustomerReviews";
import HomeValueProposition from "./HomeValueProposition";
import HomeFaqs from "./HomeFaqs";
import HomeComparison from "./HomeComparison";
import Process from "./Process";
import HomeStats from "./HomeStats";
import Platforms from "../Common/Platforms";
import { HOME_SERVICES } from "@/constants/HomeServices";
import TeckStack from "../Common/TechStack";
import FlagsAnimation from "../Common/FlagsAnimation";
import Services from "./Services";

const HomePage = () => {
  return (
    <main className={`bg-transparent relative`}>
      <HomeHero />
      <Platforms />
      <Services
        heading={"What We"}
        redText={"Do?"}
        description={
          "We help you grow with clear software solutions created by skilled experts around the world."
        }
        services={HOME_SERVICES}
        descriptionWidth={"lg:w-1/2"}
      />
      <HomeComparison />
      <HomeValueProposition />
      <Process />
      <TeckStack
        heading={"Smart Technology for Better"}
        redText={"Solution"}
        description={
          "You get the best tools and technologies to build fast, secure, and reliable software that fits your business perfectly."
        }
      />
      <HomeStats />
      <HomeCustomerReviews />
      <FlagsAnimation />
      <HomeFaqs />
    </main>
  );
};

export default HomePage;
