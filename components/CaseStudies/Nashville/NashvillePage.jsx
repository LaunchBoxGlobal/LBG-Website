import React from "react";
import Hero from "./Hero";
import WorkApproach from "./WorkApproach";
import Challenges from "./Challenges";
import Research from "./Research";
import Userflow from "./Userflow";
import Wireframes from "./Wireframes";
import BrandIdentity from "./BrandIdentity";
import TechAndTools from "./TechAndTools";
import Image from "next/image";
import Outcomes from "./Outcomes";
import "./style.css";
import Banner2 from "./Banner2";
import Admin from "./Admin";

const NashvillePage = () => {
  return (
    <main className="w-full overflow-x-hidden flex flex-col gap-14 lg:gap-20 midlg:gap-28">
      <Hero />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <WorkApproach />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Challenges />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Research />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Userflow />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Wireframes />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <BrandIdentity />

      <TechAndTools />
      <Banner2 />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Admin />
      <div className="w-full padding-x">
        <div className="w-full border" />
      </div>
      <Outcomes />
    </main>
  );
};

export default NashvillePage;
