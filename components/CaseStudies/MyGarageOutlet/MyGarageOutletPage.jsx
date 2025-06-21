import React from "react";
import Hero from "./Hero";
import "./style.css";
import WorkApproach from "./WorkApproach";
import ChallengesAndSolutions from "./ChallengesAndSolutions";
import Research from "./Research";
import BrandIdentity from "./BrandIdentity";
import Image from "next/image";
import FinalOutcome from "./FinalOutcome";
import CTA from "./CTA";
import Banner2 from "./Banner2";

const MyGarageOutletPage = () => {
  return (
    <main className="w-full overflow-x-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-28">
      <Hero />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
      <WorkApproach />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
      <ChallengesAndSolutions />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
      <Research />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
      <BrandIdentity />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
      <Banner2 />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
      <FinalOutcome />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
      <CTA />
      <div className="w-full padding-x">
        <div className="border w-full" />
      </div>
    </main>
  );
};

export default MyGarageOutletPage;
