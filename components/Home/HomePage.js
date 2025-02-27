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

const HomePage = () => {
  return (
    <main className={`bg-transparent`}>
      <HomeHero />
      <HomePlatforms />
      <HomeServices />
      <HomeComparison />
      <HomeValueProposition />
      <Process />
      <HomePortfolio />
      <HomeTech />
      <HomeCustomerReviews />
      <div className="hidden lg:block w-full">
        <FlagsSection />
      </div>
      <HomeFaqs />
    </main>
  );
};

export default HomePage;
