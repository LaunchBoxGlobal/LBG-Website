import React from "react";
import HomeHero from "./HomeHero";
import HomePlatforms from "./HomePlatforms";
import HomeServices from "./HomeServices";
import HomePortfolio from "./HomePortfolio";
import HomeTech from "./HomeTech";
import HomeIdeaToLaunch from "./HomeIdeaToLaunch";
import HomeCustomerReviews from "./HomeCustomerReviews";
import HomeTeamSection from "./HomeTeamSection";
import HomeValueProposition from "./HomeValueProposition";
import HomeFaqs from "./HomeFaqs";
import HomeComparison from "./HomeComparison";
import FlagsSection from "./FlagsSection";
import Process from "./Process";
import HomeStats from "./HomeStats";
import CountryAnimation from "./CountryAnimation";

const HomePage = () => {
  return (
    <main className={`bg-transparent relative`}>
      <HomeHero />
      <HomePlatforms />
      <HomeServices />
      <HomeComparison />
      <HomeValueProposition />
      <Process />
      {/* <HomePortfolio /> */}
      <HomeTech />
      {/* <HomeStats /> */}
      <HomeCustomerReviews />
      <div className="hidden lg:block w-full">
        <FlagsSection />
        {/* <CountryAnimation /> */}
      </div>
      <HomeFaqs />
    </main>
  );
};

export default HomePage;
