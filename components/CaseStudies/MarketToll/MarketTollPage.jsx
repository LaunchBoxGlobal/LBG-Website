import React from "react";
import Hero from "./Hero";
import Timeline from "./Timeline";
import Built from "./Built";
import ResearchJourney from "./ResearchJourney";
import ProblemSolution from "./ProblemSolution";
import Wireframes from "./Wireframes";
import FinalOutcome from "./FinalOutcome";
import CTA from "./CTA";
import OtherCaseStudies from "./OtherCaseStudies";
// import "./style.css";
// import Timeline from "./Timeline";
// import Process from "./Process";
// import Research from "./Research";
// import Challenges from "./Challenges";
// import Branding from "./Branding";
// import Tech from "./Tech";
// import MarketingSection from "./MarketingSection";
// import Fit100InAction from "./Fit110InAction";
// import CTA from "./CTA";
// import OtherCaseStudies from "../Bloom/OtherCaseStudies";

const MarketTollPage = () => {
  return (
    <main className="w-full overflow-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-36">
      <Hero />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Built />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <ResearchJourney />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <ProblemSolution />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Wireframes/>
  <FinalOutcome/>
  <CTA/>
  <OtherCaseStudies/>
      {/* <Timeline/> */}
      {/* <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Process />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Research />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Challenges />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Branding />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Tech />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <MarketingSection />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Fit100InAction />
      <CTA />
      <OtherCaseStudies /> */}
    </main>
  );
};

export default MarketTollPage;

// marketing-section-lines
