import { SECURITY_AND_COMPLIANCE } from "@/constants/industries/healthcare-page-content/security-and-compliance";
import React from "react";
import SecurityAndComplianceSlider from "./SecurityAndComplianceSlider";

const SecurityAndCompliance = () => {
  return (
    <section className="w-full py-20 midlg:py-20 bg-[#fff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Healthcare Data Security &{" "}
          <span className="red-text">Compliance</span>
        </h2>

        <p className="section-paragraph lg:w-[90%] mx-auto">
          Our medical software developer designs healthcare software with
          security and compliance built in from the start. Your data stays
          protected, your workflows remain efficient, and your startup earns the
          trust of patients, providers, and regulators.
        </p>
      </section>

      <SecurityAndComplianceSlider content={SECURITY_AND_COMPLIANCE} />
    </section>
  );
};

export default SecurityAndCompliance;
