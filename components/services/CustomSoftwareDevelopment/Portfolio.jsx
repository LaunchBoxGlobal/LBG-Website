import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { CUSTOM_SOFTWARE_CASE_STUDIES } from "@/constants/custom-software-development/CaseStudies";

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading lg:w-[80%]">
          Custom Software That
          <span className="red-text"> Delivers</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          See how our custom software development for startups solves real
          business challenges with smart tech.
        </p>
      </section>
      <PortfolioParallexCards projects={CUSTOM_SOFTWARE_CASE_STUDIES} />
    </>
  );
}
