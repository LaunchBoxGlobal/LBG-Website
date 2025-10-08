import {
  HEALTHCARE_AGILE_PROCESS,
  HEALTHCARE_RECOMMENDED_PROCESS,
  HEALTHCARE_WATERFALL_PROCESS,
} from "@/constants/industries/healthcare-page-content/healthcare-development-process";
import HealthcareProcess from "./HealthcareProcess";

const HealthcareDevelopmentProcess = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28" id="workflow">
      <section
        className="w-full flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading text-center">
          Our Step-by-Step Healthcare{" "}
          <span className="red-text">Development Process</span>
        </h2>
        {/* <p className="section-paragraph text-center w-full md:w-2/3">
          We follow a structured and client focused development process to{" "}
          ensure the successful delivery of high quality software solutions.{" "}
        </p> */}
      </section>

      <HealthcareProcess
        agileProcess={HEALTHCARE_AGILE_PROCESS}
        recommendedProcess={HEALTHCARE_RECOMMENDED_PROCESS}
        waterfallProcess={HEALTHCARE_WATERFALL_PROCESS}
      />
    </section>
  );
};

export default HealthcareDevelopmentProcess;
