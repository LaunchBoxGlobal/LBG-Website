import React from "react";
import Hero from "./Hero";
import SpecializedTalent from "./SpecializedTalent";
import Platforms from "../Common/Platforms";
import AugmentYourTeam from "./AugmentYourTeam";
import TalentAugmentation from "./TalentAugmentation";
import OffShoreAugmentation from "./OffShoreAugmentation";
import OnDemandProcess from "./OnDemandProcess";
import OnDemandBenefits from "./OnDemandBenefits";
import WhyChooseUs from "./WhyChooseUs";
import OnDemandHassles from "./OnDemandHassles";
import CTA from "./CTA";
import OnDemandFaqs from "./OnDemandFaqs";
import "./style.css";

const OnDemandTalentPage = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <Platforms />
      <SpecializedTalent />
      <AugmentYourTeam />
      <TalentAugmentation />
      <OffShoreAugmentation />
      <OnDemandProcess />
      <OnDemandBenefits />
      <OnDemandHassles />
      <WhyChooseUs />
      <CTA />
      <OnDemandFaqs />
    </main>
  );
};

export default OnDemandTalentPage;
