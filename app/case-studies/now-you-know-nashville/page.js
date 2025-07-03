import NashvillePage from "@/components/CaseStudies/Nashville/NashvillePage";
import React from "react";

export const metadata = {
  title: "Now You Know Nashville Case Study | Launchbox Global",
  description:
    "Now You Know Nashville provides authentic guides to Nashville's music venues, local businesses, and cultural hotspots, offering in-depth neighborhood insights.",
  alternates: {
    canonical:
      "https://launchboxglobal.com/case-studies/now-you-know-nashville",
  },
};

const page = () => {
  return <NashvillePage />;
};

export default page;
