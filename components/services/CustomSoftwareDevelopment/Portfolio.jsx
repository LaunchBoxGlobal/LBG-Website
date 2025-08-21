import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { CUSTOM_SOFTWARE_CASE_STUDIES } from "@/constants/custom-software-development/CaseStudies";

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading lg:w-[80%]">
          Custom Software Development Solutions
          <span className="red-text"> We’ve Built</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Every startup faces unique challenges. So we designed our custom
          software development services to tackle those challenges for you. We
          work closely with you and create solutions that simplify your
          workflows and boost productivity while giving your business the tools
          it needs.
        </p>
      </section>
      <PortfolioParallexCards projects={CUSTOM_SOFTWARE_CASE_STUDIES} />
    </>
  );
}
