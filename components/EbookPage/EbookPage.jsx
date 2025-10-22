import React from 'react'
import Hero from './Hero'
import Platforms from "@/components/Common/Platforms";
import Ideas from './Ideas';
import TechTeam from './TechTeam';
import Glimpse from './Glimpse';
import ReinforceDepth from './ReinforceDepth';
import SharingBook from './SharingBook';
import CTA from './CTA';
function EbookPage() {
  return (
    <div>
      <Hero/>
      <Platforms/>
      <Ideas/>
      <TechTeam/>
      <Glimpse/>
      <ReinforceDepth/>
      <SharingBook/>
      <CTA/>
    </div>
  )
}

export default EbookPage
