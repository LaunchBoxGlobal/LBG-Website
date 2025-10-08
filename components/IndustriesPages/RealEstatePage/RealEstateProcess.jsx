import HealthcareProcess from "../HealthCarePage/HealthcareProcess";
import {
  REAL_ESTATE_AGILE_PROCESS,
  REAL_ESTATE_RECOMMENDED_PROCESS,
  REAL_ESTATE_WATERFALL_PROCESS,
} from "@/constants/industries/real-estate-content/real-estate-process";

const RealEstateProcess = () => {
  return (
    <section className="w-full padding-x py-12 lg:py-28" id="workflow">
      <section
        className="w-full flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading text-center">
          Our Development Process for{" "}
          <span className="red-text">Real Estate</span>
        </h2>
        <p className="section-paragraph text-center w-full md:w-2/3">
          We take your real estate idea from concept to launch, step by step.
          Planning, designing, building, testing, and deploying, all done
          smoothly so your platform works perfectly from day one.
        </p>
      </section>

      <HealthcareProcess
        agileProcess={REAL_ESTATE_AGILE_PROCESS}
        recommendedProcess={REAL_ESTATE_RECOMMENDED_PROCESS}
        waterfallProcess={REAL_ESTATE_WATERFALL_PROCESS}
      />
    </section>
  );
};

export default RealEstateProcess;
