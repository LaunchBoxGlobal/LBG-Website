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

const HomePage = () => {
  return (
    <main className={`bg-transparent`}>
      <HomeHero />
      <HomePlatforms />
      <HomeServices />
      <HomeValueProposition />
      <HomePortfolio />
      <HomeTech />
      {/* <HomeIdeaToLaunch /> */}
      <HomeCustomerReviews />
      <HomeFaqs />
      {/* <HomeTeamSection /> */}
    </main>
  );
};

export default HomePage;
