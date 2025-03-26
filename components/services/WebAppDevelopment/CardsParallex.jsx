"use client";
import { WEB_APP_PROJECTS } from "@/constants/web-app-dvelopment/WebAppProjects";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";

export default function CardsParallex() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading">
          See How We’ve Built Web <br className="lg:block hidden" /> Apps That{" "}
          <span className="red-text">Work</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Explore real examples of web apps we’ve built fast, reliable and
          designed to solve problems. See how our web app development services
          deliver results that matter.
        </p>
      </section>
      <PortfolioParallexCards projects={WEB_APP_PROJECTS} />
    </>
  );
}
