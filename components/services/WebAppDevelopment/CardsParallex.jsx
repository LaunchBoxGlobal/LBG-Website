"use client";
import { WEB_APP_PROJECTS } from "@/constants/web-app-dvelopment/WebAppProjects";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";

export default function CardsParallex() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20 xl:pb-0 padding-x">
        <h2 className="section-heading">
          Successful Web Applications We've{" "}
          <span className="red-text">Developed</span>
        </h2>
        <p className="section-paragraph md:w-2/3 lg:w-[60%] text-center">
          Explore real-world examples where focused web strategies improved
          processes, increased engagement, and produced excellent results that
          keep businesses moving forward with confidence.
        </p>
      </section>
      <PortfolioParallexCards projects={WEB_APP_PROJECTS} />
    </>
  );
}
