"use client";
import { WHAT_IS_NOT_WORKING_CONTENT } from "@/constants/ai-based-projects-content/what-is-not-working-content";
import React, { useState } from "react";
import WhatIsNotWorkingItem from "./WhatIsNotWorkingItem";

const WhatIsNotWorking = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading mx-auto">
          What’s Not Working? <br /> Let’s{" "}
          <span className="red-text">Fix It</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          We’ve worked across the tools founders love — Cursor, Lovable,
          Bolt.new, Webflow, FlutterFlow, Firebase — and we’ve seen the same
          issues pop up again and again. From AI-generated code to no-code
          limitations to misconfigured backends, here’s what’s breaking (and how
          we fix it with real engineering).
        </p>
      </section>
      <section className="w-full mt-10 lg:mt-16">
        {WHAT_IS_NOT_WORKING_CONTENT?.map((content, index) => {
          return (
            <WhatIsNotWorkingItem
              content={content}
              key={index}
              index={index}
              openFaq={openFaq}
              setOpenFaq={setOpenFaq}
            />
          );
        })}
      </section>
    </section>
  );
};

export default WhatIsNotWorking;
