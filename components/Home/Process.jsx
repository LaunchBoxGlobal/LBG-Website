import "./ProcessAnimations.css";
import HomeNewProcess from "./HomeNewProcess";
import {
  HOME_PAGE_AGILE_PROCESS,
  HOME_PAGE_RECOMMENDED_PROCESS,
  HOME_PAGE_WATERFALL_PROCESS,
} from "@/constants/home-page-process";

const Process = () => {
  return (
    <section
      className="w-full padding-x py-12 lg:py-28 bg-[#F9F9F9]"
      id="workflow"
    >
      <section
        className="w-full flex flex-col items-center justify-center gap-5"
        id="services"
      >
        <h2 className="section-heading">
          From Start To <span className="red-text">Finish</span>
        </h2>
        <p className="section-paragraph text-center w-full md:w-2/3">
          We follow a structured and client focused development process to{" "}
          ensure the successful delivery of high quality software solutions.{" "}
        </p>
      </section>

      <HomeNewProcess
        agileProcess={HOME_PAGE_AGILE_PROCESS}
        recommendedProcess={HOME_PAGE_RECOMMENDED_PROCESS}
        waterfallProcess={HOME_PAGE_WATERFALL_PROCESS}
      />
    </section>
  );
};

export default Process;
